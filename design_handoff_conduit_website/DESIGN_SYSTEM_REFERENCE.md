# Conduit Design System

Brand, tokens, fonts, logos, components, and motion for **Conduit Systems** — a Dallas-Fort Worth custom-software shop building CRMs, internal web apps, and AI-assisted websites for small-business owners.

## Source

This system was produced from a designer-supplied bundle (`design-system-export.zip`) which itself derived from the production codebase. Original files mirror this project root.

## Index — what's here

| Path | What it is |
|---|---|
| `README.md` | This file |
| `colors_and_type.css` | Semantic CSS vars (`--fg-1`, `--bg-page`, …) + element styles |
| `tokens/` | Source-of-truth tokens — `tokens.json` is canonical, `.css`/`.scss`/`.ts` are derived |
| `fonts/` | Self-hosted Plus Jakarta Sans + DM Sans (TTF + variable WOFF2). SIL OFL 1.1 |
| `assets/` | Logos (mark / wordmark / lockup × color/mono variants), favicons, OG, icons |
| `assets/icons/` | Stroke-1.75 24×24 SVGs: `crm.svg`, `webapp.svg`, `website.svg` |
| `colors/` | `swatches.html` (click-to-copy) + `palette.svg` |
| `typography/` | `type-scale.html` live specimen |
| `components/` | `components.html` — buttons, pills, cards, fields, tiles, nav |
| `animations/` | `animations.css` motion library + `drivers.js` JS hooks + `motion-spec.md` |
| `preview/` | Cards rendered into the Design System tab |
| `ui_kits/website/` | Recreation of the Conduit marketing site (landing + offerings) |
| `SKILL.md` | Agent-Skill manifest — drop into Claude Code or any tool |

## Drop-in for a new project

```html
<link rel="stylesheet" href="./fonts/fonts.css" />
<link rel="stylesheet" href="./colors_and_type.css" />
<link rel="stylesheet" href="./animations/animations.css" />
<script type="module" src="./animations/drivers.js"></script>
```

---

## Brand context

Conduit Systems sits between off-the-shelf SaaS (too generic) and big-agency builds (too slow, too expensive). Owner-operated. Plainspoken.

**Audience.** Owner-operated GCs and subcontractors stuck doing pipeline tracking in spreadsheets; real-estate teams shopping for a website that doesn't look like every other broker's; professional-services firms (legal, finance, consulting) that need internal tools but can't justify a full dev team.

**Sub-brands.**
- **Conduit Sites** — website-build practice. Same identity, plus a `● CONDUIT SITES` mono pill.
- **Conduit Pulse** — email-deliverability product. Distinct dark/amber palette (`#F59E0B` on `#0D1117`). Lives in product/billing surfaces only — never in umbrella marketing.

---

## Content fundamentals

**Voice.** Direct. Confident. Plainspoken. Contractor's-truck honesty: *"I've done this before, and I'll have a real answer for you in 48 hours."*

**Casing.** Sentence case for headings ("Heading two — the section header."). UPPERCASE only on mono kickers / pill badges (`● CONDUIT SITES`, `DESIGN SYSTEM · v1.0.0`).

**Person.** "We" build, "you" hire. The work is the subject — never *solutions* or *experiences*.

**Punctuation.** Em-dashes for asides — sparingly. **No exclamation points.** Numbers are specific (`30 minutes`, `36–48 hours`, `1–2 weeks to first deliverable`) — never "fast" / "soon" / "quickly".

**Measure.** Body lines stay under 62 characters. Past that, the reader's eye loses the line return.

**Emoji.** Not used in the brand. The mono dot character `●` does the work of a status emoji in pills/badges.

### Do / Don't examples

| Don't | Do |
|---|---|
| "Transformative CRM solutions" | "Your sales pipeline, automated." |
| "We leverage AI to deliver value" | "AI-fast first drafts, finished by people who care." |
| "Schedule a discovery consultation" | "Book a 30-minute call." |
| "Tailored to your unique business needs" | "Built around how your business actually works." |

---

## Visual foundations

**Color.** Five anchors, ratio 60 / 30 / 10. Background dominates (`#FBFBFE`, 60%), secondary supports (`#212121`, 30%), primary punctuates (`#FF4529`, 10%). Accent (`#B7C8D7`) is trim — under 5% of any layout. Text is `#040316` (very nearly black, with a hair of warm-blue).

**Type.** Plus Jakarta Sans 700 for display + wordmark; DM Sans 400/500 for body and UI. Monospace stack for mono labels, meta lines, mono details inside cards. Scale = perfect fourth (1.333) anchored at 16px. H1/H2 fluid with `clamp()`; H3–H5 fixed. Tracking on display: `-0.02em` (H1), `-0.015em` (H2), default elsewhere. Mono labels track `+0.18em`.

**Spacing.** 4px base unit. Sections breathe at `--section-py-desktop: 6rem`; hero pads to `--section-py-hero: 11rem`. Container max 1280px; narrow 1024px; reading measure 62ch.

**Backgrounds.** Solid `--bg-page` is the default — *not* gradients. Three accepted background motifs:
1. **Pulse rings watermark** — the brand mark at 900px, low opacity, behind hero copy
2. **Section gradients** — `--gradient-primary-secondary` on the rare full-bleed CTA break, never as a default page background
3. **Noise grain** (`.cd-noise`) over hero or dark sections — subtle film texture

No photographic backgrounds without a solid frame. No hand-drawn illustrations. No repeating patterns.

**Animation.** One easing rules everything: `cubic-bezier(0.2, 0.7, 0.2, 1)` — out fast, settle in slow. Confidence over softness. Spring overshoot is reserved for `.cd-magnetic` only. Durations: instant 100ms (focus), fast 200ms (button states), base 240ms, card 320ms (reveal), scene 700ms (3D plane shifts). Loops measured in seconds. Every keyframe respects `prefers-reduced-motion`. **One ambient loop per section** — never stack pulse + marquee + glass-drift in one viewport.

**Hover states.** Buttons brighten the gradient top-stop and lift `transform: scale(1.02)` with a stronger glow. Cards lift 2px and shift their border to primary. Links underline-grow from left. **No darken-on-hover** — Conduit always brightens.

**Press states.** `--color-primary-pressed: #D43820` (deeper). Cards get `--color-surface-card-pressed: #ECEEF3`. No shrink — the lift just reverses to translateY(0).

**Borders.** Hairline only. Subtle borders `rgba(183, 200, 215, 0.4)` — accent at 40% alpha, never solid. Active/selected gets a 2px `--color-primary` border (with `padding` reduced by 1px to keep dimensions stable).

**Shadows.** Five-step elevation, all warm-cool blue. `--shadow-1` is the default card; `--shadow-3` is the hover lift; `--shadow-4` is the modal. Plus two **primary glow** variants (`--shadow-primary-glow`, `--shadow-primary-glow-strong`) used on CTAs and the brand mark.

**Capsules vs panels.** Pills/buttons/nav are pill-shaped (`--radius-pill`). Cards are 24px (`--radius-xl`); the prominent featured card is 32px (`--radius-2xl`). Inputs are 12px (`--radius-md`). No square corners anywhere except in mono labels.

**Transparency / blur.** Used in three places only: (a) accent borders at 40–60% alpha; (b) the marquee fade-mask edges; (c) the noise overlay at 4% opacity over a dark section. Never glassmorphism / `backdrop-filter` heroes.

**Imagery vibe.** Cool, slightly desaturated, warm-on-cool contrast. When real photos are used, they sit inside a solid frame with a 24px radius. No grain, no duotone, no full-bleed faces.

**Layout rules.** Fixed top nav (centered pill on desktop). Footer is a destination, not a moment — no motion. Hero, offerings, integrations marquee, case studies, CTA break, footer — that's the umbrella page rhythm.

---

## Iconography

**Brand icon set.** Three custom SVGs at `assets/icons/` — `crm.svg`, `webapp.svg`, `website.svg`. All 24×24, stroke-1.75, rounded caps + joins, currentColor for fill/stroke. They're literal: a node graph for CRM, a panel-with-list for web app, a panel-with-grid for website.

**Beyond the brand set.** When a design needs an icon outside this set (chevrons, search, close, etc.), use **Lucide** from CDN (`https://unpkg.com/lucide@0.475.0/dist/umd/lucide.min.js`) — same 24×24 stroke-1.75 vocabulary as the brand set. *Flagged substitution: Lucide is not in the original export; matched on stroke weight + cap/join geometry.*

**Logos as iconography.** The Conduit mark renders down to 24px (favicon size). For favicon, app icon, status-pill, and mono contexts, the mark itself functions as the brand icon — never reach for an emoji or unicode glyph for the brand.

**Emoji.** Not used. The mono `●` (U+25CF) is the only unicode glyph that appears in the brand — and only inside pills/badges as a status dot. Don't use ✓ ⭐ 🚀 etc.

**File formats.** All UI iconography is SVG (inline or `<img>` referenced). Logos use SVG too — `apple-touch-icon.png` and `og-image.png` are the only raster brand assets.

---

## Substitutions / caveats

- **Lucide icons** for non-brand UI iconography — see Iconography. Replace with your icon set if you have one.
- **`og-image.png`** is included from the export but its design-source isn't in this repo; replace before shipping new pages.
- **Wireframes** (home-desktop / home-mobile / sites-desktop / glass-stack / thank-you) referenced in the original export are *not* included in this system — they were design-time blueprints, now superseded by the live components in `components/components.html` and the UI kit in `ui_kits/website/`.
- **Conduit Pulse** sub-brand mark (`conduit-pulse-bimi.svg`) was referenced but not present in the source export. Pulse work needs that asset before kicking off — flag.
- **Color scales** (50–950 stops) are intentionally out of scope for v1. The five anchors + state variants cover everything in the production codebase.
- **Dark theme tokens** are TBD.
