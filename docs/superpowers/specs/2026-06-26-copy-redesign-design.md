# Copy Redesign — Craftbytes Consulting Site

**Date:** 2026-06-26
**Branch:** feature/consulting-page-2026

## Problem

The current copy reads like fill-in-the-blank consulting boilerplate. It describes what Craftbytes does (service categories, tech stacks) but says nothing about how the work is done, who it's for, or what the client actually experiences. Every phrase — "technical leadership that scales," "clear outcomes, direct communication, no lock-in" — could belong to any 200 other consultants.

## Design Direction

**B + C: Problem-led framing + practitioner's voice.**

- Each section opens with the client's situation or pain, not a description of the service
- Copy sounds like a specific person with opinions, not a template agency
- Craftbytes stays the brand subject (not "I" / Raoul's name) — employer-safe
- Kill every hollow phrase; replace with specifics and implicit promises

---

## Agreed Copy Changes

### Hero

**H1:**
> You need someone who builds —
> not just advises.

**Subheadline:**
> Craftbytes is a one-person shop. You get direct access to a senior backend engineer who'll write the code, design the architecture, and tell you when the shiny new tool is the wrong choice.

**CTAs:** unchanged ("Start a conversation →" / "View services")

---

### Services Section

**Section title:** Here's what that looks like in practice.
**Subtitle:** *(remove — cards carry the weight)*

#### Fractional CTO

**Description:**
> You're making architecture calls by committee because there's no senior engineer in the room. Or you're a technical founder who needs someone to own the technical direction — not just weigh in on it.

**Bullets:**
- Turning "we need to scale" into a concrete technical plan
- Writing job specs, running technical interviews, onboarding engineers who'll stay
- Making the calls your team's been avoiding — ADRs, system design, code reviews
- 8–20 hours/week, flexible *(keep as-is)*

#### Backend Architecture

**Description:**
> The architecture decision you make in month three determines what you can ship in year two. Get it right and the system disappears. Get it wrong and you're rebuilding instead of building.

**Bullets:**
- Greenfield Elixir/Phoenix — real-time, concurrent, fault-tolerant
- REST and GraphQL APIs, WebSocket / LiveView, pub/sub systems
- Event sourcing, message queues, background job architecture
- Query optimisation, N+1 fixes, caching — with numbers, not guesses

#### Rails Modernization & Upgrades

**Description:**
> Escape the upgrade treadmill. That codebase everyone's afraid to touch — I've modernized ones exactly like it without breaking what's keeping the business running.

**Bullets:**
- Step-by-step version upgrades — full test suite before and after
- Pulling services out without breaking production, or telling you why you shouldn't yet
- Database tuning, background job architecture, finding the actual bottleneck
- Your engineers learn while we work — it's part of how I engage

#### Platform & Infrastructure

**Description:**
> Your deployment story shouldn't be the reason features are slow to ship. I'll figure out what infrastructure your team actually needs — and build it so it gets out of their way.

**Bullets:**
- Deployment infrastructure scaled to where you actually are — not where you might be in three years
- GitOps workflows when you're ready for them
- CI/CD pipelines that don't take 20 minutes or break on Fridays
- Logs, metrics, traces, and alerts — so you know before your users do

---

### Our Approach

**Section title:** How it works.
**Subtitle:** *(remove)*

| Step | Label | Copy |
|---|---|---|
| 01 | Honest assessment | The first call is free. I'll ask about your stack, your team, and what's blocking you. If I don't think I can help, I'll say so. |
| 02 | Clear scope | If we're a good fit, you get a specific scope and timeline — not a discovery phase that costs money to tell you I need more time. |
| 03 | Real work | You'll see commits, not just recommendations. I work in the code — or alongside your team, depending on what's needed. |
| 04 | No lock-in | I'll tell you when the engagement should end. I'm not here to pad a retainer. |

---

### Contact CTA

**Title:**
> Tell me what you're building.

**Body:**
> Send a paragraph about where you're stuck. No intake form, no discovery call required — just a direct email.

**Location detail:** *(keep as-is — "Based in Ontario, Canada / Working remotely with teams across North America and Europe.")*

---

### Footer

**Get in touch blurb:**
> Not sure if this is the right fit? Send an email anyway. Worst case, I'll point you somewhere useful.

---

### ClientsSection

**Remove entirely.** Placeholder logos are a trust liability. Add back when real client logos are available.

---

### SEO / Meta (Layout.astro)

- **Page title:** `Craftbytes — Backend Engineering & Fractional CTO`
- **Meta description:** `Hands-on backend engineering and fractional technical leadership. Rails modernization, Elixir/Phoenix, platform infrastructure — direct access to a senior engineer who builds, not just advises.`
- **Remove:** Raoul's full name from meta description (employer-safety)
- **Keywords:** update to match new positioning — Rails, Elixir, Phoenix, Fractional CTO, Backend Engineering, Platform Infrastructure, GitOps

---

## Files to Change

| File | Change |
|---|---|
| `src/pages/index.astro` | Hero, Services, Approach, Contact CTA — full copy pass; remove ClientsSection import and usage |
| `src/components/Footer.astro` | Update "Get in touch" blurb |
| `src/layouts/Layout.astro` | Update default title, meta description, keywords |
| `src/components/ClientsSection.astro` | No change — just stop importing it |
