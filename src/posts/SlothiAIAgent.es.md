---
layout: post
title: "Perdí meses registrando mis finanzas a la fuerza. Entonces construí Slothi, mi propio agente de IA."
date: 2026-04-01
author: Carlos Chaves
tags: [ia, agentes, whatsapp, langchain, automatizacion, slothi, evolution-api, gemini, groq]
description: "Me cansé de manejar efectivo, tarjetas y pagos móviles en múltiples aplicaciones. Entonces construí un asistente de IA que entiende notas de voz, fotos de recibos y capturas de pantalla — todo por WhatsApp."
---

# Perdí meses registrando mis finanzas a la fuerza. Entonces construí Slothi, mi propio agente de IA.

![Slothi AI Agent](/images/slothi.min.png)

Una pregunta: ¿cómo sabe usted en qué gastó el mes pasado?

Si es como yo, la respuesta es *no sabe* — no del todo. Hay cosas que pago en efectivo, otras con Sinpe Móvil y el resto con tarjeta de crédito. Son tres sistemas distintos que no se comunican entre sí. Encima de eso, tengo recibos fijos (electricidad, teléfono, préstamos) y nunca podía responder con certeza una pregunta simple: **¿ya pagué eso o no?**

Probé aplicaciones de presupuesto. Probé hojas de cálculo. Probé "solo recordarlo." Ninguna solución sobrevivió el ritmo del día a día.

Entonces me hice una pregunta distinta: *¿y si pudiera simplemente decirle a alguien lo que pagué — por texto, voz o foto — y esa persona se encargara del resto?*

Ese "alguien" resultó ser un agente de IA que construí yo mismo. Lo llamo **Slothi** — en honor al perezoso, el animal icónico de Costa Rica. Parece tranquilo, pero nunca deja de trabajar.

## Por Qué WhatsApp y No una Aplicación

Consideré construir una aplicación móvil. Pero piense en lo que implica registrar un gasto en una app: abrirla, tocar "nuevo gasto", seleccionar una categoría del menú, escribir el monto, agregar una nota y guardar. Son seis pasos para una sola transacción.

Ahora piense en WhatsApp: abrir el chat, enviar "pagué electricidad ₡32.000." Listo.

Y aún mejor — a veces solo tomo una foto del recibo y la envío. O grabo una nota de voz de 5 segundos mientras manejo: *"Slothi, registrar pago del préstamo."* El agente se encarga del resto.

WhatsApp no es solo conveniente. Es la única aplicación que ya está abierta en mi teléfono todo el día, todos los días. Encontrarse con los usuarios donde ya están no es un cliché — es una decisión de arquitectura.

## La Plataforma: Open Source y (Casi) Gratuita

Quería aprender, no solo resolver el problema. Por eso elegí herramientas que no había usado antes y mantuve los costos cerca de cero.

```
WhatsApp (Evolution API)
        ↓ POST /webhook
   webhook.ts
  ├── texto  → filtro de palabras clave
  ├── voz    → Groq Whisper → transcripción
  └── imagen → Gemini Vision → texto extraído
        ↓ buffer de mensajes (debounce 10s)
   agent.ts (LangChain)
  ├── Principal: Gemini 2.5 Flash
  ├── Respaldo:  Groq Llama 3.3
  └── Último:    Claude Haiku
        ↓ herramientas LangChain
   Google Sheets
  ├── Pagos / HistorialPagos
  ├── Gastos
  ├── Ahorros / HistorialAhorros
  └── Personas
        ↓ respuesta
WhatsApp (Evolution API)
```

**Evolution API** es un puente de WhatsApp de código abierto — alojado en Docker, brinda una API REST para enviar y recibir mensajes. **LangChain** orquesta la lógica del agente. **Google Sheets** funciona como base de datos (sorprendentemente efectivo para datos a escala personal). ¿Y los modelos de IA? Todos en capa gratuita.

La decisión de diseño clave: todo tipo de entrada — texto, voz, imagen — converge en una cadena de texto antes de llegar al agente. El LLM nunca necesita saber *cómo* llegó el mensaje. Solo ve intención y datos.

## Los Detalles y Lecciones Aprendidas

Cualquiera puede dibujar un diagrama de arquitectura. La historia real está en los problemas que uno encuentra y cómo los resuelve. Aquí hay cinco que moldearon el sistema.

### No le Confíe Matemáticas a los LLMs

Cuando preguntaba "¿qué pagos están pendientes este mes?", el agente tenía que cruzar dos hojas: pagos recurrentes e historial de pagos, filtrado por el mes actual. Groq se equivocaba constantemente — reportaba ítems ya pagados como pendientes u omitía otros por completo.

La solución fue mover esa lógica a una herramienta dedicada (`get_pending_payments`) que obtiene ambas hojas y calcula la diferencia en código. El único trabajo del LLM pasó a ser *llamar* la herramienta, no *hacer* el cálculo. Que el código haga lo que el código hace bien. Que los LLMs hagan lo que los LLMs hacen bien.

### Los Caracteres No-ASCII lo Traicionarán

Una de mis herramientas tenía un parámetro llamado `año`. Funcionaba perfectamente con Gemini y Groq. Luego agregué Claude Haiku como respaldo y todas las solicitudes empezaron a fallar con un error 400 críptico.

Resulta que la API de Anthropic impone un regex estricto en los nombres de propiedades: `^[a-zA-Z0-9_.-]{1,64}$`. La `ñ` no está permitida. La solución fue renombrarlo a `anio`. La lección: al construir sistemas multi-proveedor, diseñe sus interfaces alrededor de las restricciones del proveedor **más estricto** — no del más flexible.

### Los Circuit Breakers No Son Solo Para Microservicios

Mi lógica de respaldo original era reactiva: intentar con Gemini, recibir un 429 (límite de tasa), luego intentar con Groq. Esto significaba que cada mensaje durante una ventana de cuota desperdiciaba un viaje en una llamada destinada a fallar.

Un circuit breaker simple en memoria lo resolvió: si Gemini falla con un error de cuota, omitirlo durante la siguiente hora. El circuit se reinicia automáticamente. El fallo es información — úsela para tomar decisiones de enrutamiento más inteligentes para la *siguiente* solicitud, no solo para la actual.

### Nombres de Herramientas Similares Confunden a los Modelos

El agente tenía `get_lessons` (solo lectura) y `add_lesson` (escritura, con parámetros). Groq seguía llamando `get_lessons` pero enviándole los parámetros de `add_lesson`. Mejorar las descripciones no ayudó. El modelo hacía coincidencia de patrones por similitud de nombres e ignoraba el esquema por completo.

La solución: eliminar `add_lesson` de la lista de herramientas de Groq. Si un modelo no puede distinguir de forma confiable dos herramientas similares, no dependa de mejores prompts — haga que la ambigüedad sea imposible.

### El Texto del Usuario es Intención, la Imagen es Dato

Cuando alguien envía una foto de un recibo con un texto como "registra un pago de electricidad", tanto ese texto como el contenido extraído de la imagen llegan al agente. Al principio, el agente a veces se enfocaba demasiado en los montos y fechas de la imagen y perdía de vista lo que el usuario realmente quería.

Una oración en el prompt del sistema lo resolvió: *"Si el mensaje contiene contexto del usuario seguido de contenido extraído de una imagen, siempre trate el contexto del usuario como la intención principal."* En entradas multimodales, las palabras del ser humano siempre tienen prioridad sobre la extracción de la máquina. Haga esa jerarquía explícita.

## Lo Que Haría Diferente

Si empezara de nuevo mañana, estructuraría el esquema de Google Sheets con más cuidado desde el principio. También agregaría registros (logs) adecuados desde el primer día — depurar un agente multi-modelo a través de mensajes de WhatsApp no es divertido.

Pero siendo honesto, el enfoque de "empezar e iterar" funcionó. Slothi comenzó como un simple ciclo de texto-entrada, texto-salida. La voz vino después. Las imágenes vinieron después. La cadena de respaldo vino después. Cada funcionalidad fue aditiva, no una reescritura.

## ¿Qué Sigue?

Estoy trabajando en mejoras para el escaneo de recibos (mejor extracción de formatos de factura costarricenses) y en enrutamiento multi-modelo que seleccione el modelo más económico capaz de manejar cada solicitud específica. Para visualizar los datos, actualmente uso un dashboard en Google Sheets protegido con mi cuenta de Google — sin infraestructura adicional, y los datos se mantienen privados.

Si le interesa el detalle técnico de alguna parte — la configuración de Evolution API, las definiciones de herramientas de LangChain, el patrón de circuit breaker — con gusto lo desgloso en entradas separadas.

---

*Carlos Chaves es un Ingeniero de Software con base en Costa Rica, que trabaja en la intersección de IA, automatización y resolución de problemas cotidianos. Puede encontrarlo en [cchavesdev.github.io](https://cchavesdev.github.io).*
