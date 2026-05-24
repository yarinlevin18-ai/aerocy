# AeroCy Website — Build Workflow

Hybrid structure: top-level phases, with page-specific work nested under Design and Development. Mixed granularity — detailed breakdowns for custom/complex features, high-level for standard ones. No due dates or time estimates. Open questions live in the appendix.

---

## Phase 1 — Discovery & Decisions

High-level alignment before any design/build begins.

- [ ] Kickoff call with client (scope, roles, communication cadence)
- [ ] Confirm scope: multi-page site, English (LTR), launch contents
- [ ] Confirm copy ownership (client-supplied vs. build team)
- [ ] Confirm blog launch-with-site vs. post-launch
- [ ] Resolve all items in the **Open Questions** appendix
- [ ] Sign-off on PRD as the source of truth

---

## Phase 2 — Brand & Design System

- [ ] Receive logo files from client (PNG/SVG, transparent background)
- [ ] Define exact HEX values
  - [ ] Primary: Deep Navy
  - [ ] Primary: Slate
  - [ ] Accent: Electric Cyan
  - [ ] Warning: Alert Red
- [ ] Typography spec
  - [ ] Heading font (bold sans-serif) — choose family + weights
  - [ ] Body font (monospace or modern serif) — choose family + weights
  - [ ] Type scale (h1–h6, body, caption, monospace UI labels)
- [ ] Iconography spec — distinct technical icons per service
- [ ] Imagery direction
  - [ ] Split-theme rules (Red Threat / Blue Resilience)
  - [ ] IT/OT fusion treatment (3D aviation hardware + HUDs)
  - [ ] Aviation motif library (turbines, cockpits, ATC tower, etc.)
- [ ] Component design system (buttons, forms, cards, nav, modals, counters)
- [ ] Sign-off on design system

---

## Phase 3 — Content & Asset Collection

- [ ] Final copy per page (decision from Phase 1)
- [ ] Leadership & Advisory Board portraits (high-contrast)
- [ ] Client logos: Israel MOT, Arkia, Israir
- [ ] Aviation imagery sourced/licensed (turbines, cockpits, ATC tower, EFB, passport control, booking system)
- [ ] Custom 3D / illustration commissions (if needed for IT/OT fusion shots)
- [ ] Icon set for Services page
- [ ] Whitepaper / blog seed content (if blog launches with site)
- [ ] Legal copy: Privacy Policy, Terms, Cookie Notice

---

## Phase 4 — Design (per page)

### 4.1 Home — "The Critical Imperative"
- [ ] Wireframe full page
- [ ] Hero + CTAs (headline + sub-headline + 4 CTA buttons)
- [ ] "The Reality of Modern Aviation" framing block
- [ ] **"The Challenge by the Numbers"** — design dynamic data visualizations
  - [ ] Animated counters (e.g., 100% supply-chain exposure)
  - [ ] Threats-shooting-at-cyber-shield animation concept + storyboard
- [ ] "The AeroCy Solution" — protective envelope visual
- [ ] Regulatory Imperative section
- [ ] Sign-off

### 4.2 About Us — "Pedigree and Vision"
- [ ] Wireframe full page
- [ ] AeroCy Narrative timeline (CyRay state-level → AeroCy aviation focus)
- [ ] Tech Roots in CyRay block
- [ ] AVSEC Origins block
- [ ] Leadership & Founders portraits layout (high-contrast)
- [ ] Advisory Board layout
- [ ] Sign-off

### 4.3 Services — "Ecosystem of Defense"
- [ ] Wireframe full page
- [ ] Concept tagline treatment (Risk-based, Threat-oriented, Intelligence-driven)
- [ ] Service tiles — icon-heavy, minimal labels
  - [ ] Hybrid Threat Monitoring (IT/OT/IoT/e-Operation/Data)
  - [ ] **Vendor Shield** — glowing holographic shield over commercial aircraft (hero treatment)
  - [ ] Regulatory Compliance & Audit
  - [ ] Crisis Management & Resilience Testing (incl. EFB pen-testing)
- [ ] Service-category surface (Monitoring & Intelligence, Compliance, Regulatory Prep, Crisis Mgmt, Business Continuity, Reputation, Technological Readiness, Governance & Liability)
- [ ] Sign-off

### 4.4 Technology
- [ ] Wireframe + design (advanced detection, proprietary algorithms, Israeli gov approval, BGN Airport, 1000+ rules, SIEM/SOC, AI-driven)
- [ ] Sign-off

### 4.5 Clients
- [ ] Logo strip design (MOT, Arkia, Israir)
- [ ] Sign-off

### 4.6 Blog & Thought Leadership
- [ ] "Command Center" aesthetic — monospace, data-heavy, whitepaper feel
- [ ] Article index template
- [ ] Article detail template
- [ ] Sign-off

### 4.7 Contact — "Consultative Engagement"
- [ ] Risk Assessment form layout + fields
- [ ] POC request form layout + fields
- [ ] Corporate Inquiries block (info@aerocy.io)
- [ ] Strategic Partnerships block (Advisory Board)
- [ ] Sign-off

### 4.8 Global — Header, Nav, Footer
- [ ] Global nav design
- [ ] Footer (Product · Services · Technology · Concept · Contact)
- [ ] 404 / error states
- [ ] Sign-off

---

## Phase 5 — Development

### 5.1 Foundation
- [ ] Choose stack & repo setup
- [ ] Hosting environment provisioned
- [ ] CI/CD pipeline
- [ ] Domain configured (aerocy.io — confirm)
- [ ] SSL
- [ ] Base layout, global nav, footer, 404
- [ ] Implement design system / component library

### 5.2 Page Builds
- [ ] Home
- [ ] About Us
- [ ] Services
- [ ] Technology
- [ ] Clients
- [ ] Blog (index + detail templates + CMS if applicable)
- [ ] Contact
- [ ] Legal pages (Privacy, Terms, Cookies)

### 5.3 Custom Interactive Features
- [ ] **Threat Dashboard counters** — data source, animation library, scroll trigger, accessibility fallback
- [ ] **Threats-vs-Shield animation** — storyboard → assets → implementation → perf budget → reduced-motion fallback
- [ ] **Split-theme diagonal layout** — responsive behavior on tablet/mobile
- [ ] **IT/OT fusion 3D imagery** — asset optimization, lazy loading
- [ ] **Vendor Shield holographic icon** — animated treatment
- [ ] AeroCy Narrative timeline interaction
- [ ] Anchor-link CTAs (View Threat Dashboard, AeroCy Solution, Tender Readiness)

### 5.4 Forms & Lead Routing
- [ ] Build Risk Assessment form (fields TBD)
- [ ] Build POC form (fields TBD)
- [ ] Spam protection (reCAPTCHA / honeypot)
- [ ] Validation + error states
- [ ] Submission handler
- [ ] Thank-you page
- [ ] Automated email confirmation to submitter
- [ ] Lead routing to inbox / CRM (destination TBD)
- [ ] mailto links (Corporate Inquiries, Strategic Partnerships)

### 5.5 Integrations
- [ ] Google Analytics (confirm)
- [ ] Meta Pixel (confirm)
- [ ] CRM connector (confirm CRM)
- [ ] Email automation tool (confirm)
- [ ] Cookie consent banner

### 5.6 SEO Foundations
- [ ] Meta titles/descriptions per page
- [ ] Open Graph / Twitter cards
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Schema.org markup (Organization, Service)

---

## Phase 6 — QA

- [ ] Responsive QA (mobile, tablet, desktop, large desktop)
- [ ] Cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit (WCAG 2.1 AA — focus on animation/reduced-motion, color contrast on split-theme)
- [ ] Performance audit (Lighthouse, asset weight, animation perf)
- [ ] Copy proofread
- [ ] Link check (internal + external)
- [ ] Form end-to-end test (each form → confirmation email → lead lands in destination)
- [ ] Analytics & Pixel event verification
- [ ] 404 / error page
- [ ] Client UAT round
- [ ] Bug-fix pass

---

## Phase 7 — Launch

- [ ] DNS cutover
- [ ] SSL verification on production
- [ ] Redirects from any legacy URLs (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify analytics firing on production
- [ ] Smoke test all CTAs + forms on production
- [ ] Backup + rollback plan documented
- [ ] Launch announcement assets

---

## Phase 8 — Post-Launch

- [ ] Blog rollout (if deferred from launch)
- [ ] Monitoring & uptime alerts
- [ ] Analytics dashboard set up for client
- [ ] Lead-flow review with sales
- [ ] Iteration backlog from real traffic

---

## Appendix — Open Questions (Must Resolve Before Build)

From PRD §11, plus inferred gaps:

- [ ] Exact HEX values for Deep Navy, Slate, Electric Cyan, Alert Red
- [ ] Domain confirmation (aerocy.io?) and hosting environment
- [ ] Final form fields for Risk Assessment + POC forms
- [ ] Lead-routing destination (email only vs. CRM — which CRM?)
- [ ] Required integrations: Analytics, Pixel, CRM, email automation
- [ ] Final copy ownership — client-supplied or build team?
- [ ] Blog/Thought Leadership at launch or post-launch?
- [ ] Hebrew version needed? (source is English-only)
- [ ] What happens after CTA click — confirm: form → thank-you page → auto-email → sales inbox
- [ ] Logo files delivery date (PNG/SVG transparent)
- [ ] Video assets — needed or skip?
- [ ] CMS for blog — which platform?
