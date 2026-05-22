/* Conduit Systems — Motion drivers (vanilla JS, ESM)
   Pair these with animations.css. Each driver is opt-in by class. */

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ── 1. Reveal on scroll  ─────────────────────────────────────
   Adds `is-visible` to every `.cd-reveal` / `.cd-stagger` element
   when ≥10% of it crosses the viewport. */
export function initRevealOnScroll(root = document) {
  if (reducedMotion()) {
    root.querySelectorAll('.cd-reveal, .cd-stagger').forEach((el) => el.classList.add('is-visible'))
    return () => {}
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
  )
  root.querySelectorAll('.cd-reveal, .cd-stagger').forEach((el) => io.observe(el))
  return () => io.disconnect()
}

/* ── 2. Magnetic hover  ───────────────────────────────────────
   Pulls the element a few px toward the cursor, snaps back on leave.
   Clamps to ±maxOffset to avoid runaway motion on big hit areas. */
export function initMagnetic(selector = '.cd-magnetic', maxOffset = 8) {
  if (reducedMotion()) return () => {}
  const handlers = []
  document.querySelectorAll(selector).forEach((el) => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = ((e.clientX - cx) / r.width) * 2
      const dy = ((e.clientY - cy) / r.height) * 2
      const tx = Math.max(-1, Math.min(1, dx)) * maxOffset
      const ty = Math.max(-1, Math.min(1, dy)) * maxOffset
      el.style.setProperty('--mx', tx.toFixed(2))
      el.style.setProperty('--my', ty.toFixed(2))
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    handlers.push(() => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  })
  return () => handlers.forEach((fn) => fn())
}

/* ── 3. Parallax tilt  ────────────────────────────────────────
   Tilts the card up to ±maxDeg toward / away from cursor. */
export function initTilt(selector = '.cd-tilt', maxDeg = 6) {
  if (reducedMotion()) return () => {}
  const handlers = []
  document.querySelectorAll(selector).forEach((el) => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2
      const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2
      el.style.setProperty('--tx', (dx * maxDeg).toFixed(2))
      el.style.setProperty('--ty', (dy * maxDeg).toFixed(2))
    }
    const onLeave = () => {
      el.style.setProperty('--tx', '0')
      el.style.setProperty('--ty', '0')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    handlers.push(() => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  })
  return () => handlers.forEach((fn) => fn())
}

/* ── 4. Character-by-character text rise  ─────────────────────
   Wraps each visible character of `.cd-text-rise` in <span>
   with --i = index, so the CSS stagger picks up automatically.
   Idempotent: ignores already-wrapped elements. */
export function initTextRise(selector = '.cd-text-rise') {
  document.querySelectorAll(selector).forEach((el) => {
    if (el.dataset.cdRiseReady) return
    const text = el.textContent ?? ''
    el.textContent = ''
    Array.from(text).forEach((ch, i) => {
      const span = document.createElement('span')
      span.textContent = ch === ' ' ? ' ' : ch
      span.style.setProperty('--i', String(i))
      el.appendChild(span)
    })
    el.dataset.cdRiseReady = 'true'
  })
}

/* ── 5. Bootstrap everything  ─────────────────────────────────
   Pulls every driver in once on DOMContentLoaded.  */
export function bootMotion() {
  const start = () => {
    initRevealOnScroll()
    initMagnetic()
    initTilt()
    initTextRise()
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true })
  } else {
    start()
  }
}

if (typeof window !== 'undefined' && window.__cd_motion_autoboot__ !== false) {
  bootMotion()
}
