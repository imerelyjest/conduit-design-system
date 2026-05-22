# Motion Spec

How motion behaves at Conduit Systems. Six rules, one easing, hard cap on duration.

## Principles

1. **Confidence over softness.** Default easing is `cubic-bezier(0.2, 0.7, 0.2, 1)` — comes out of the gate fast, eases into the resting state. Never bouncy on UI elements; reserve `--easing-spring` for magnetic and pull-to-refresh.
2. **Motion conveys causality.** Every animated transition explains *what just happened* (a thing arrived, a thing collapsed, a thing was clicked). If a motion can't be described in one sentence of cause-and-effect, cut it.
3. **Layers move differently.** Foreground 200–320ms. Section reveals 320–480ms. Scene-level 3D shifts 700ms. Marquees and idle ambient loops measure in seconds.
4. **One ambient loop per section.** Pulse rings, glass plane drift, marquees — pick one. Stacking them turns the page into Times Square.
5. **Honor reduced-motion.** Every keyframe and transition has a `(prefers-reduced-motion: reduce)` short-circuit. Test by toggling the OS setting before shipping.
6. **Pause when invisible.** Use IntersectionObserver + `document.hidden` to pause anything looping. Battery, CPU, and the user's attention all benefit.

## Duration ladder

| Class                      | Token              | Use                                      |
| -------------------------- | ------------------ | ---------------------------------------- |
| Instant                    | `--duration-instant` 100ms | Color flips, focus rings        |
| Fast                       | `--duration-fast`    200ms | Button states, link hovers      |
| Base                       | `--duration-base`    240ms | Default transition              |
| Card                       | `--duration-card`    320ms | Card slide-in, reveal           |
| Scene                      | `--duration-scene`   700ms | 3D plane stack, page-level shifts |
| Loop / ambient             | 2.4s – 38s         | Pulse, marquee, drift           |

## Easing

- `--easing-out-expo` → `cubic-bezier(0.2, 0.7, 0.2, 1)` — house default
- `--easing-soft` → `cubic-bezier(0.45, 0, 0.15, 1)` — for ambient loops where the start/stop matters
- `--easing-spring` → `cubic-bezier(0.34, 1.56, 0.64, 1)` — gentle overshoot, magnetic only

## Vocabulary inventory

| Class                  | What it is                              | Production analogue                |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| `.cd-reveal*`          | Scroll-triggered fade/translate/blur    | (new — replaces ad-hoc reveals)    |
| `.cd-stagger`          | Sequential child reveals                | (new)                              |
| `.cd-shine`            | Card shine sweep                        | `.shine-card` in `globals.css`     |
| `.cd-magnetic`         | Cursor-following micro-translate        | (new)                              |
| `.cd-tilt`             | 3D parallax card tilt                   | (new)                              |
| `.cd-glow-pulse`       | Soft halo loop                          | (new)                              |
| `.cd-ring-echo`        | Sonar-style concentric expanding rings  | Adjacent to `pulse-rings--pulse`   |
| `.cd-marquee-x/-y`     | Continuous infinite scroll              | `.integrations-track`              |
| `.cd-text-flip`        | 2px Y rise on parent button hover       | `.text-flip` in `globals.css`      |
| `.cd-text-rise`        | Per-character entrance                  | (new)                              |
| `.cd-progress-fill`    | Auto-advance bar                        | `.glass-progress-fill`             |
| `.cd-noise`            | Subtle film grain overlay               | (new)                              |
| `.cd-loading`          | Three-dot brand-colored loader          | (new)                              |
| `.cd-underline-grow`   | Link hover underline                    | (new)                              |

## What to use where

- **Hero**: `.cd-text-rise` on the H1, watermark stays static (the canvas dot animation already handles ambient loop).
- **Integrations marquee**: keep production behavior (`integrations-track` / `integrations-mask`); `.cd-marquee-x` is the upgrade path if you ever want pause-on-hover or reverse.
- **Offerings rings**: keep `pulse-rings--pulse` for idle, `pulse-rings--attention` when one is selected. `.cd-ring-echo` is the choice if you want a louder marketing moment elsewhere.
- **Glass stack**: keep production keyframes (drift, pulse-line, particles, progress). Optionally upgrade with `.cd-noise` over the stage gradient for film texture.
- **Case studies / portfolio**: wrap each card in `.cd-reveal cd-reveal--up` and the parent grid in `.cd-stagger` for the entrance.
- **CTA break**: `.cd-shine` on the button container.
- **Process section**: `.cd-stagger` on the `<ol>`.
- **Booking form**: `.cd-loading` while the lead is submitting.
- **Footer**: avoid motion. It's a destination, not a moment.

## Anti-patterns

- Don't animate hover on touch devices. Use `@media (hover: hover)` to gate `:hover` motion.
- Don't auto-play more than one ambient loop in the viewport at a time.
- Don't use `linear` easing for UI — only marquees and progress bars.
- Don't exceed 2 reveal directions on a single page (pick up + scale, or up + blur — not all four).
- Don't chain reveals on top of each other for the same element. One trigger, one animation.
