const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="text-center max-w-2xl mx-auto fade-up">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Software Engineer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight mb-6">
          Carlos Chaves
          <br />
          <span className="text-muted-foreground font-light">Zamora</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Building reliable software with full-stack development, cloud infrastructure, test automation, and AI tooling.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
