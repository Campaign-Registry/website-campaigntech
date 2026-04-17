# Campaign Tech AI — Marketing Site

Marketing website for [campaigntech.ai](https://campaigntech.ai). A single-page Next.js 15 site with a luxury-fintech aesthetic, built to convert serious political and campaign-adjacent buyers.

---

## 1. Design direction

**Aesthetic.** Premium, restrained, credible — closer to Stripe Atlas or a boutique private-capital firm than to a typical political-consulting site. Generous whitespace, a single strong accent color, and a disciplined type system doing most of the heavy lifting.

**Palette.** Forest green anchors the identity. It appears only where it matters — primary CTAs, eyebrow labels, and small underlined accents — so it reads as a seal of authority rather than decoration. The canvas is a warm, paper-like bone/off-white; body copy is a near-black ink, not pure `#000`, to keep the reading experience soft.

- `forest-800` `#132A17` — primary actions, signature emphasis
- `forest-700` `#1F3D1F` — eyebrow labels, selection color
- `bone-50` `#FBF9F4` — page canvas (warm off-white)
- `bone-100` `#F5F1E8` — section tint (the products band)
- `ink` `#111310` — body copy
- `ink-muted` / `ink-subtle` — secondary copy, captions

**Typography.** The brand's signature is the interplay of two faces.

- **Inter** (sans, 300–600) — primary UI, display headings, body copy.
- **Instrument Serif** (serif, italic) — the emphasis face. Used **italicized and underlined** for the treatment on "Tech AI," "Vault," and "Registry." The italic is editorial and warm; the single-weight hairline underline keeps the mark graphic and intentional (not decorative).

Rules of use:

- "Campaign" always sets in Inter medium.
- "Tech AI," "Vault," "Registry" — and a small number of curated one-word emphases throughout the page ("modern campaign," "trusted," "building," "campaign") — render via the `.serif-emph` class: italic Instrument Serif, underlined, subtly tighter letter-spacing.
- All display headings use aggressive negative tracking and a light weight — the luxury-fintech move.
- Small UI labels ("eyebrows") are uppercase Inter with wide letter-spacing.

**Motion.** Present but quiet: one soft fade-up on the hero, an `IntersectionObserver`-driven reveal on each section, and button micro-lifts. Everything respects `prefers-reduced-motion`.

**Layout system.** A 12-column grid at `max-w-[1280px]`, 24px mobile gutters, 40px desktop gutters. Sections are separated by hairline rules rather than dividers or background swaps — a very small number of tonal background shifts (the products band) provide rhythm.

**Premium signals worked into the page.**

- Section label pairs (e.g., "Verified" / "End-to-end," "Architecture" / "Retrieval-first") mimic the meta-labeled style of high-end editorial.
- The hero's three-column meta strip replaces the usual "logo wall of trust," which a new company can't honestly produce.
- The products cards use a single elevated surface with a barely-perceptible forest-green glow on hover (desktop) — a hint of the seal, never a spotlight.
- Italic-serif stats and contact details throughout: "End-to-end," "By invitation," "Within two business days," "All inquiries held in confidence."

---

## 2. Suggested copy (as shipped)

### Hero

- **Eyebrow:** Campaign Tech AI · Political-grade infrastructure
- **H1:** Verified infrastructure for the *modern campaign*.
- **Subhead:** Campaign Tech AI builds the trusted information layer and secure workflow tools modern political organizations rely on — engineered for the era of agentic AI, designed for the pace of a live campaign.
- **Primary CTA:** Request access
- **Secondary CTA:** Explore the platform
- **Meta strip:** Verified · Secure · AI-ready

### About / Mission

- **Eyebrow:** Our mission
- **H2:** Trust, at the pace of a *campaign*.
- **Body:** Political campaigns run under extraordinary pressure — tight deadlines, high stakes, and an information landscape that is being rewritten by AI in real time. The tools most organizations rely on were not built for this moment. We build the infrastructure serious campaigns need to move fast without compromising control, security, or truth: a verified source layer for the AI era, and a secure home for the sensitive work that happens behind it. Campaign Tech AI is built by political technology veterans for teams that treat information integrity as a competitive advantage — and an obligation.
- **Stats:** End-to-end · Retrieval-first · Audit-ready · By invitation

### Products

- **Eyebrow:** The platform
- **H2:** Two products. One *trusted* stack.
- **Intro:** Our products address two sides of the same problem: making sure the information the world sees about your campaign is trustworthy — and making sure the work behind it stays controlled.

**Campaign *Registry*** — Verified political information, structured for AI.

> Search, answer engines, and agents increasingly shape how voters, journalists, and staffers find information. Campaign Registry is a verified source layer — campaign-controlled, campaign-verified content, structured for retrieval by modern AI systems. Today it powers answer engine and generative engine optimization. Tomorrow it becomes the agentic access point for trusted political information.

- AI-ready structured data
- Campaign-controlled verification
- Retrieval-optimized architecture
- Built for agentic access

**Campaign *Vault*** — Secure storage. Streamlined approvals.

> Campaign content moves fast — and usually through dozens of hands before it clears. Campaign Vault gives teams a secure, auditable home for sensitive materials and a faster path to approval, replacing inbox chaos and scattered drives with a single source of truth built for political workflows.

- Streamlined approval workflows
- Encrypted document and asset storage
- Granular, role-based access
- Audit-ready activity trails

### Contact

- **Eyebrow:** Get in touch
- **H2:** Let's talk about what you're *building*.
- **Body:** We work with campaigns, party committees, and allied organizations that take information integrity seriously. Tell us a little about your work and we'll reach out to schedule a briefing.
- **Direct:** hello@campaigntech.ai
- **Response:** Within two business days
- **Discretion:** All inquiries held in confidence

### Footer sign-off

> Built for campaigns that take information integrity seriously.

---

## 3. Implementation

### Stack

- **Next.js 15** (App Router, React 19, Server Actions)
- **TypeScript** (strict)
- **Tailwind CSS** (custom tokens in `tailwind.config.ts`, component classes in `app/globals.css`)
- **Instrument Serif + Inter** via `next/font` (self-hosted, zero CLS)
- **Resend** for transactional email (contact form)
- **Zod** for server-side validation

### Project layout

```
app/
  layout.tsx         Root layout, fonts, metadata, JSON-LD, skip link
  page.tsx           Composition of all sections
  globals.css        Tailwind layers + brand component classes
  actions.ts         submitContact() — validates, emails via Resend
  robots.ts          SEO
  sitemap.ts         SEO
components/
  Nav.tsx            Fixed blur-on-scroll nav + mobile drawer
  Hero.tsx           Above-the-fold
  About.tsx          Mission
  Products.tsx       Registry + Vault cards
  Contact.tsx        Contact section shell
  ContactForm.tsx    Client form using useActionState / useFormStatus
  Footer.tsx
  Wordmark.tsx       The signature "Campaign Tech AI" logotype
  Reveal.tsx         Intersection-observer reveal primitive
public/
  favicon.svg        Forest-green seal with italic "C"
```

### Contact form (back end)

The form is a React 19 server action (`app/actions.ts`), so there is no separate API route and no client-side secrets.

Flow:

1. Client submits `<form action={submitContact}>`.
2. Zod parses + validates. Field errors are returned to the client via `useActionState`.
3. A honeypot field (`website`) silently drops bot submissions.
4. `Resend` sends an HTML + plain-text email to `CONTACT_TO_EMAIL` (default: `hello@campaigntech.ai`) with `replyTo` set to the submitter.
5. Success / error state renders inline — no redirects.

Environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required in production) |
| `CONTACT_TO_EMAIL` | Where inquiries are routed. Defaults to `hello@campaigntech.ai` |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Campaign Tech AI <hello@campaigntech.ai>` |

In development without a Resend key, submissions log to the terminal and the success state is rendered — so the UX can be exercised end-to-end without credentials.

### Accessibility

- Skip-to-content link, visible on focus.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, labelled `<section>`s).
- All form inputs have associated `<label>`, `aria-invalid`, and `aria-describedby` for errors.
- Nav mobile drawer has `aria-expanded` / `aria-controls`.
- Focus ring is a forest-green outline with offset on all interactive surfaces.
- Reveal animations are skipped when `prefers-reduced-motion: reduce`.
- Color contrast passes AA on all body copy and UI elements.

### SEO

- Title + description + canonical + OpenGraph + Twitter card in `app/layout.tsx`.
- `metadata.robots` allows indexing; `max-image-preview: large`.
- `Organization` JSON-LD in `app/layout.tsx`.
- `robots.ts` + `sitemap.ts` generate `/robots.txt` and `/sitemap.xml` at build time.
- Semantic heading hierarchy (one `<h1>`, `<h2>` per section).

### Security headers

`next.config.ts` sets `X-Content-Type-Options`, `X-Frame-Options: DENY`, a strict `Referrer-Policy`, and a minimal `Permissions-Policy`.

---

## 4. Running locally

```bash
cp .env.example .env.local   # fill in RESEND_API_KEY for live email
npm install
npm run dev                  # http://localhost:3000
```

Additional scripts:

```bash
npm run build       # production build
npm run start       # run production build
npm run typecheck   # tsc --noEmit
```

---

## 5. Deployment

**Recommended: Vercel.** Zero config — Next.js 15 + server actions run natively.

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Point `campaigntech.ai` at the Vercel project; Vercel issues + renews TLS automatically.
4. Add environment variables in the Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional; defaults to `hello@campaigntech.ai`)
   - `CONTACT_FROM_EMAIL` — must be on a **domain verified in Resend**. For `campaigntech.ai`:
     - Add the Resend DNS records (SPF, DKIM, optional DMARC) in your DNS provider.
     - Verify the domain in the Resend dashboard.
     - Then set `CONTACT_FROM_EMAIL=Campaign Tech AI <hello@campaigntech.ai>`.
5. Deploy. Subsequent pushes to `main` auto-deploy.

**DNS.** If `campaigntech.ai` is served from the existing WordPress host, cutting over is a single A/ALIAS change + Vercel nameserver record — lower TTL 24 hours ahead of time and the cutover is near-instant.

**Domain email.** `hello@campaigntech.ai` itself (the mailbox, as opposed to the sending identity) should be provisioned with a proper mail provider — Google Workspace or Fastmail are both appropriate for a company at this stage. Resend handles *sending*; Workspace/Fastmail handle *receiving*.

---

## 6. Refinements that improve perceived premium quality

A short list of small, high-leverage additions to consider as the brand matures:

1. **Commission a custom serif cut** (e.g., from Pangram Pangram, Commercial Type, or a bespoke studio) for "Tech AI," "Vault," "Registry." Even using a licensed retail face like *Söhne Mono* for UI or *GT Super Display Italic* for the emphasis would immediately read as more distinctive than Instrument Serif.
2. **An editorial feature paragraph** below the Products section — a single long-form paragraph in serif italic, set at a generous size, articulating the thesis of the company in a voice. This is a move high-end firms use in place of testimonials.
3. **Verified-source ledger micro-widget** — a tiny, static "Last verified 00:00 UTC" line near the Registry card. Implies operational seriousness; costs nothing.
4. **Named launch partners once available.** Replace the meta strip with a single named partner when the first is public ("Launching with [Committee Name]"). Logo walls are cheap; a single partner callout is not.
5. **A private preview page** (e.g. `/preview`, unlisted, password-gated) that loads a longer, richer pitch for booked meetings. Keeps the public site restrained without starving serious buyers of depth.
6. **A small, high-quality press/brief page** at `/brief` — one page of prose intended for reporters and party committee CIOs. No nav, no CTAs; just the argument.
7. **Optical refinements:** ligatures on (already enabled via `font-feature-settings`), slightly narrower measure on body paragraphs (62ch already set), and consider number-style tabular lining figures if the site ever shows statistics.
8. **Print stylesheet.** Political staff still print one-pagers for principals. A clean print view of the page is cheap to add and disproportionately noticed.
9. **Favicon + social card upgrade.** The current favicon is a minimal forest-green seal; commission a refined monogram and a pair of bespoke OG images (1200×630) for the two product cards as `/og/registry.png` and `/og/vault.png` so shares look composed.
10. **Third-party trust signals only when real.** SOC 2 Type II, a named security officer, a public `/security.txt` — all belong on the site when true, and absolutely not before. Restraint is part of the brand.

---

## Notes on the source brief

Two minor corrections applied, preserving intent:

- "AEO/GEO infrastructure" is framed in long-form copy as "answer engine and generative engine optimization" for readers less familiar with the acronyms, while retaining the positioning.
- The Products section copy tightens "dozens of hands before it's cleared" to "dozens of hands before it clears" for rhythm. Content and meaning unchanged.
