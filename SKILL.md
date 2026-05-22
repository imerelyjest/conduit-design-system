---
name: conduit-design
description: Use this skill to generate well-branded interfaces and assets for Conduit Systems (custom software shop — CRMs, internal web apps, AI-assisted websites), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand voice** lives in `README.md` → "Content fundamentals". Plainspoken, no jargon, em-dashes sparingly, no exclamation points.
- **Tokens** in `tokens/tokens.css` (`:root` custom properties) or `colors_and_type.css` (semantic shorthand: `--fg-1`, `--bg-page`, etc).
- **Fonts** are self-hosted in `fonts/` — load `fonts/fonts.css` once. Plus Jakarta Sans 700 for display, DM Sans 400/500 for body.
- **Logos** in `assets/` — `conduit-mark.svg` is the gradient default; mono variants for stationery and dark backgrounds.
- **Components** sample in `components/components.html` and recreated as React in `ui_kits/website/`.
- **Motion** — `animations/animations.css` + `animations/drivers.js`. Default easing `cubic-bezier(0.2, 0.7, 0.2, 1)`. One ambient loop per section.

## Essential rules

- 60 / 30 / 10 color split. Background dominates, secondary supports, primary punctuates.
- Pill-shaped buttons + nav (`--radius-pill`). Cards 24px. Inputs 12px.
- No exclamation points, no enterprise jargon, no emoji.
- Hover states **brighten**, not darken. `transform: scale(1.02)` + glow on primary buttons.
- Body measure stays under 62ch.
- Reduced motion is honored on every keyframe — never bypass it.
