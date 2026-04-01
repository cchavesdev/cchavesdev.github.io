# Portfolio TODO

## Website Fixes

### Critical
- [x] **Fix contact form** — wired to Formspree. Needs FORMSPREE_ID set in ContactSection.tsx.
- [x] **Remove or replace fake blog posts** — replaced with real post (SlothiAIAgent.md), rendered at /blog/:slug.

### Minor
- [ ] **Remove fake GitHub fallback projects** — the hardcoded fallback data (cloud-deploy-toolkit,
      test-forge, api-gateway-lite, dashview) has fake star/fork counts. Replace with real repos
      or a simple "couldn't load projects" message.
- [ ] **Add education section** — degree, certifications (Azure, AWS, etc.) if applicable.
- [ ] **Add downloadable resume** — link to a PDF version of the CV.

---

## Blog Post Plan

Posts should be based on real experience — no fluff. Publish one at a time, no pressure on order.

| # | Title | Topic | Status |
|---|-------|-------|--------|
| 1 | How I Use AI to Analyze Test Failures Automatically | MCP + Report Portal integration at work | Not started |
| 2 | Migrating a Legacy .NET App to Azure: What No One Tells You | Azure migration learnings from Dirigo Valley | Not started |
| 3 | BDD Testing in .NET with ReqnRoll and Gherkin | Practical guide from real project | Not started |
| 4 | Building Agro AI: Using Gemini to Diagnose Plant Disease | Project story + technical decisions | Not started |
| 5 | Designing CI/CD Pipelines with GitHub Actions | Patterns from real pipelines | Not started |
| 6 | Infrastructure as Code: Beyond the Basics | Azure + cloud cost optimization learnings | Not started |

---

## Projects Plan

### 1. Agro AI
**What it is:** Web app using an AI LLM (Gemini or similar) to diagnose plant diseases in Costa Rica
and recommend specific agricultural products from a product list.

**Tech stack:** TBD — likely React frontend + Gemini API + product database

**Tasks:**
- [ ] Define product list data source (static JSON, Firestore, or scrape from agro suppliers)
- [ ] Build plant disease diagnosis flow with Gemini API (image upload + prompt)
- [ ] Map AI response to product recommendations from the list
- [ ] Build UI (upload photo → diagnosis → recommended products)
- [ ] Deploy and add to portfolio
- [ ] Write blog post about the build process

---

### 2. Panic Button App (Flutter)
**What it is:** Mobile app with a panic button that alerts local police and notifies people within
a 500m radius when an incident is reported.

**Tech stack:** Flutter + Firebase (Firestore + Cloud Messaging) + Geolocation

**Tasks:**
- [ ] Define alert flow (button press → who gets notified, how)
- [ ] Implement geolocation to get user coordinates
- [ ] Implement 500m radius query (Firestore geohash or GeoFlutterFire)
- [ ] Build push notification system for nearby users (FCM)
- [ ] Design the panic button UI (should be fast, accessible, minimal taps)
- [ ] Figure out police integration (WhatsApp Business API? Direct call? SMS?)
- [ ] Beta test with community members
- [ ] Publish to Play Store / App Store

---

### 3. Mi Carrera CR
**What it is:** Tool for UCR students to check if their academic average (nota de admisión)
is competitive enough to enter a specific career or major.

**Tech stack:** TBD — could be a simple React app with publicly available UCR admission data

**Tasks:**
- [ ] Research where UCR publishes admission score cutoffs (public data source)
- [ ] Scrape or manually compile historical admission scores per career
- [ ] Build input form: student enters their score + desired career
- [ ] Display comparison: your score vs. historical cutoffs (last 3-5 years)
- [ ] Add filters: campus, career area, modality
- [ ] Deploy and share with UCR community
- [ ] Consider partnering with UCR student groups for visibility
