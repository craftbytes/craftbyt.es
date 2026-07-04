# Copy Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all boilerplate consulting copy with problem-led, practitioner-voice copy across the Craftbytes site.

**Architecture:** Pure content changes — no new components, no structural changes. Three files modified. ClientsSection removed from the page (component file left in place, just not imported/used).

**Tech Stack:** Astro 5.x, Tailwind CSS 4.x. Dev server: `pnpm develop` (localhost:4321).

## Global Constraints

- Brand subject is "Craftbytes" in hero/section headings; "I" voice is acceptable in service card descriptions and approach steps
- Raoul's full name must NOT appear in page metadata (employer-safety)
- ClientsSection component file (`src/components/ClientsSection.astro`) — do NOT delete, just remove its import and usage from index.astro
- All copy must match the spec exactly: `docs/superpowers/specs/2026-06-26-copy-redesign-design.md`
- Use `pnpm develop` to verify visually after each task

---

### Task 1: Update hero copy

**Files:**
- Modify: `src/pages/index.astro` (hero section, lines ~154–185)

- [ ] **Step 1: Replace H1**

In `src/pages/index.astro`, find:
```html
<h1 class="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
  Backend architecture &<br />
  <span class="text-accent">fractional CTO</span><br />
  for growing teams.
</h1>
```
Replace with:
```html
<h1 class="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
  You need someone who builds —<br />
  <span class="text-accent">not just advises.</span>
</h1>
```

- [ ] **Step 2: Replace hero subheadline**

Find:
```html
<p class="mt-6 text-xl text-neutral-600 max-w-2xl">
  Craftbytes provides hands-on engineering leadership and delivery — from Elixir and
  Ruby on Rails to Kubernetes and GitOps.
</p>
```
Replace with:
```html
<p class="mt-6 text-xl text-neutral-600 max-w-2xl">
  Craftbytes is a one-person shop. You get direct access to a senior backend engineer
  who'll write the code, design the architecture, and tell you when the shiny new tool
  is the wrong choice.
</p>
```

- [ ] **Step 3: Verify visually**

Run `pnpm develop` and open http://localhost:4321. Confirm the hero reads correctly and layout is intact.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "copy: update hero headline and subheadline"
```

---

### Task 2: Update services section intro and all four service cards

**Files:**
- Modify: `src/pages/index.astro` (services section, lines ~188–331)

- [ ] **Step 1: Replace services section intro**

Find the `<SectionIntro>` for services:
```astro
<SectionIntro
  eyebrow="Services"
  title="Technical leadership that scales with your team."
  class="mt-24 sm:mt-32 lg:mt-40"
>
  <p slot="children">
    From shaping strategy to shipping production code — every engagement is hands-on,
    no overhead.
  </p>
</SectionIntro>
```
Replace with:
```astro
<SectionIntro
  eyebrow="Services"
  title="Here's what that looks like in practice."
  class="mt-24 sm:mt-32 lg:mt-40"
>
</SectionIntro>
```

- [ ] **Step 2: Replace Fractional CTO card description and bullets**

Find:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Fractional CTO</h3>
<p class="mt-4 text-base text-neutral-600">
  Strategic technical leadership for teams that need direction without the overhead of a full-time hire.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Technical strategy &amp; roadmap
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Team mentoring &amp; hiring
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Architecture decisions &amp; reviews
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    8–20 hours/week, flexible
  </li>
</ul>
```
Replace with:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Fractional CTO</h3>
<p class="mt-4 text-base text-neutral-600">
  You're making architecture calls by committee because there's no senior engineer in the room. Or you're a technical founder who needs someone to own the technical direction — not just weigh in on it.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Turning "we need to scale" into a concrete technical plan
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Writing job specs, running technical interviews, onboarding engineers who'll stay
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Making the calls your team's been avoiding — ADRs, system design, code reviews
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    8–20 hours/week, flexible
  </li>
</ul>
```

- [ ] **Step 3: Replace Backend Architecture card description and bullets**

Find:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Backend Architecture</h3>
<p class="mt-4 text-base text-neutral-600">
  Design and build systems that scale with your product — not against it.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Elixir &amp; Phoenix applications
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    API design &amp; real-time systems
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Data pipelines &amp; event-driven architecture
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Performance optimisation
  </li>
</ul>
```
Replace with:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Backend Architecture</h3>
<p class="mt-4 text-base text-neutral-600">
  The architecture decision you make in month three determines what you can ship in year two. Get it right and the system disappears. Get it wrong and you're rebuilding instead of building.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Greenfield Elixir/Phoenix — real-time, concurrent, fault-tolerant
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    REST and GraphQL APIs, WebSocket / LiveView, pub/sub systems
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Event sourcing, message queues, background job architecture
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Query optimisation, N+1 fixes, caching — with numbers, not guesses
  </li>
</ul>
```

- [ ] **Step 4: Replace Rails Modernization card description and bullets**

Find:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Rails Modernization &amp; Upgrades</h3>
<p class="mt-4 text-base text-neutral-600">
  Escape the upgrade treadmill. Safe, incremental modernisation of existing Rails applications.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Rails version upgrades (tested, safe)
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Monolith refactoring &amp; extraction
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Performance &amp; scaling improvements
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Team mentorship included
  </li>
</ul>
```
Replace with:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Rails Modernization &amp; Upgrades</h3>
<p class="mt-4 text-base text-neutral-600">
  Escape the upgrade treadmill. That codebase everyone's afraid to touch — I've modernized ones exactly like it without breaking what's keeping the business running.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Step-by-step version upgrades — full test suite before and after
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Pulling services out without breaking production, or telling you why you shouldn't yet
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Database tuning, background job architecture, finding the actual bottleneck
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Your engineers learn while we work — it's part of how I engage
  </li>
</ul>
```

- [ ] **Step 5: Replace Platform & Infrastructure card description and bullets**

Find:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Platform &amp; Infrastructure</h3>
<p class="mt-4 text-base text-neutral-600">
  Infrastructure your team can actually ship on. Kubernetes, GitOps, and deployment pipelines.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Kubernetes architecture &amp; operations
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    GitOps workflows (ArgoCD / Flux)
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    CI/CD pipeline design
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Observability &amp; incident response
  </li>
</ul>
```
Replace with:
```html
<h3 class="font-display text-2xl font-semibold text-neutral-950">Platform &amp; Infrastructure</h3>
<p class="mt-4 text-base text-neutral-600">
  Your deployment story shouldn't be the reason features are slow to ship. I'll figure out what infrastructure your team actually needs — and build it so it gets out of their way.
</p>
<ul class="mt-8 space-y-3 text-sm text-neutral-600">
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Deployment infrastructure scaled to where you actually are — not where you might be in three years
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    GitOps workflows when you're ready for them
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    CI/CD pipelines that don't take 20 minutes or break on Fridays
  </li>
  <li class="flex gap-2">
    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
    Logs, metrics, traces, and alerts — so you know before your users do
  </li>
</ul>
```

- [ ] **Step 6: Verify visually**

Check all four service cards at http://localhost:4321/#services. Confirm descriptions and bullets are correct and layout holds.

- [ ] **Step 7: Commit**

```bash
git add src/pages/index.astro
git commit -m "copy: update services section intro and all four service cards"
```

---

### Task 3: Update Our Approach section

**Files:**
- Modify: `src/pages/index.astro` (approach section, lines ~335–380)

- [ ] **Step 1: Replace section intro**

Find:
```astro
<SectionIntro
  title="Our approach."
  class=""
>
  <p slot="children">
    Clear outcomes, direct communication, no lock-in. Every engagement is hands-on.
  </p>
</SectionIntro>
```
Replace with:
```astro
<SectionIntro
  title="How it works."
  class=""
>
</SectionIntro>
```

- [ ] **Step 2: Replace all four approach step cards**

Find:
```html
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">01</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Understand</h3>
  <p class="mt-2 text-sm text-neutral-600">
    We start by understanding where you are, where you want to be, and what's in the way.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">02</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Plan</h3>
  <p class="mt-2 text-sm text-neutral-600">
    A concrete scope, timeline, and expected outcomes — no surprises.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">03</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Deliver</h3>
  <p class="mt-2 text-sm text-neutral-600">
    Hands-on delivery. Code, architecture, or leadership — whatever's needed.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">04</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Evolve</h3>
  <p class="mt-2 text-sm text-neutral-600">
    We iterate. We stay as long as we're useful — no lock-in, no friction.
  </p>
</div>
```
Replace with:
```html
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">01</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Honest assessment</h3>
  <p class="mt-2 text-sm text-neutral-600">
    The first call is free. I'll ask about your stack, your team, and what's blocking you. If I don't think I can help, I'll say so.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">02</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Clear scope</h3>
  <p class="mt-2 text-sm text-neutral-600">
    If we're a good fit, you get a specific scope and timeline — not a discovery phase that costs money to tell you I need more time.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">03</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">Real work</h3>
  <p class="mt-2 text-sm text-neutral-600">
    You'll see commits, not just recommendations. I work in the code — or alongside your team, depending on what's needed.
  </p>
</div>
<div class="fade-in relative flex flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5" data-observe>
  <span class="font-display text-6xl font-semibold text-accent/20">04</span>
  <h3 class="mt-4 font-display text-xl font-semibold text-neutral-950">No lock-in</h3>
  <p class="mt-2 text-sm text-neutral-600">
    I'll tell you when the engagement should end. I'm not here to pad a retainer.
  </p>
</div>
```

- [ ] **Step 3: Verify visually**

Check the approach section at http://localhost:4321/#approach. Confirm four cards render correctly.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "copy: update Our Approach section"
```

---

### Task 4: Update Contact CTA and remove ClientsSection

**Files:**
- Modify: `src/pages/index.astro` (contact CTA and ClientsSection import/usage)

- [ ] **Step 1: Remove ClientsSection import**

Find at the top of the file:
```astro
import ClientsSection from '../components/ClientsSection.astro';
```
Delete that line. (The component file itself is not deleted.)

- [ ] **Step 2: Remove ClientsSection usage**

Search for any `<ClientsSection` tag in the file and delete it along with its closing tag.

- [ ] **Step 3: Replace Contact CTA title and body**

Find:
```astro
<ContactSection>
  <span slot="title">Let's build something together.</span>
```
Replace with:
```astro
<ContactSection>
  <span slot="title">Tell me what you're building.</span>
```

Then find the details slot:
```html
<div slot="details">
  <h3 class="font-display text-base font-semibold text-white/80">
    Based in Ontario, Canada
  </h3>
  <p class="mt-2 text-sm text-white/40">
    Working remotely with teams across North America and Europe.
  </p>
</div>
```
Replace with:
```html
<div slot="details">
  <p class="text-sm text-white/60 mb-4">
    Send a paragraph about where you're stuck. No intake form, no discovery call required — just a direct email.
  </p>
  <h3 class="font-display text-base font-semibold text-white/80">
    Based in Ontario, Canada
  </h3>
  <p class="mt-2 text-sm text-white/40">
    Working remotely with teams across North America and Europe.
  </p>
</div>
```

- [ ] **Step 4: Verify visually**

Confirm ClientsSection is gone and the contact CTA renders correctly at http://localhost:4321.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "copy: update contact CTA and remove ClientsSection"
```

---

### Task 5: Update Footer copy

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Replace get-in-touch blurb**

Find:
```html
<p class="mt-4 text-sm text-neutral-700">
  Have a project in mind? Let's talk about how I can help.
</p>
```
Replace with:
```html
<p class="mt-4 text-sm text-neutral-700">
  Not sure if this is the right fit? Send an email anyway. Worst case, I'll point you somewhere useful.
</p>
```

- [ ] **Step 2: Verify visually**

Check footer at http://localhost:4321. Confirm the blurb reads correctly.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "copy: update footer get-in-touch blurb"
```

---

### Task 6: Update SEO metadata

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Replace title, description, and keywords defaults**

Find:
```astro
const {
  title = 'Craftbytes — Software Consultancy & Fractional CTO',
  description = 'Software consulting and fractional technical leadership. Backend architecture, platform engineering, and hands-on technical direction from Raoul Diffouo.',
  keywords = ['Craftbytes', 'craftbyt.es', 'Software Consulting', 'Fractional CTO', 'Elixir', 'Phoenix', 'Backend Architecture', 'Platform Engineering']
} = Astro.props;
```
Replace with:
```astro
const {
  title = 'Craftbytes — Backend Engineering & Fractional CTO',
  description = 'Hands-on backend engineering and fractional technical leadership. Rails modernization, Elixir/Phoenix, platform infrastructure — direct access to a senior engineer who builds, not just advises.',
  keywords = ['Craftbytes', 'craftbyt.es', 'Fractional CTO', 'Backend Engineering', 'Rails Modernization', 'Elixir', 'Phoenix', 'Platform Infrastructure', 'GitOps']
} = Astro.props;
```

- [ ] **Step 2: Verify**

Check page source at http://localhost:4321 (View Source → search for `<title>` and `<meta name="description"`). Confirm name does not appear in meta description.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "seo: update page title, meta description, and keywords"
```
