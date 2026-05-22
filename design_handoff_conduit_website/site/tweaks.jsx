// Conduit Sites — tweakable controls
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FF4529",
  "pulseSize": 900,
  "pulseVisible": true,
  "emphasisStyle": "color",
  "crmFeatured": false
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#FF4529", "#2A6FDB", "#1F8A5B", "#6E45E2"];
const EMPHASIS_OPTIONS = [
  { value: "color",    label: "Color"     },
  { value: "italic",   label: "Italic"    },
  { value: "underline",label: "Underline" }
];

function hexToRgb(hex) {
  const m = hex.replace('#','').match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return '255,69,41';
  return parseInt(m[1],16)+','+parseInt(m[2],16)+','+parseInt(m[3],16);
}

function applyTweaks(t) {
  const rgb = hexToRgb(t.accent);
  let css = `
    :root { --fg-accent: ${t.accent}; --fg-accent-rgb: ${rgb}; }
    .hero__pill .d { background: ${t.accent} !important; box-shadow: 0 0 0 3px rgba(${rgb},0.18) !important; }
    .hero__pulse { display: ${t.pulseVisible ? 'grid' : 'none'} !important; place-items: center !important; }
    .hero__pulse .pulse-svg { width: ${t.pulseSize}px !important; height: ${t.pulseSize}px !important; }
    .hero__pulse::before { width: ${t.pulseSize}px !important; height: ${t.pulseSize}px !important; margin: ${-t.pulseSize/2}px 0 0 ${-t.pulseSize/2}px !important; }
  `;
  if (t.emphasisStyle === 'italic') {
    css += `.hero h1 em, .section__title em, .marquee__head h3 em, .case blockquote em { color: inherit !important; font-style: italic !important; text-decoration: none !important; }`;
  } else if (t.emphasisStyle === 'underline') {
    css += `.hero h1 em, .section__title em, .marquee__head h3 em, .case blockquote em { color: inherit !important; font-style: normal !important; text-decoration: underline !important; text-decoration-color: ${t.accent} !important; text-decoration-thickness: 4px !important; text-underline-offset: 6px !important; }`;
  }
  if (t.crmFeatured) {
    css += `
      .offerings .offer:first-child { background: var(--bg-dark) !important; color: var(--fg-on-dark) !important; border-color: rgba(255,255,255,0.08) !important; border-radius: 32px !important; }
      .offerings .offer:first-child p { color: rgba(255,255,255,0.7) !important; }
      .offerings .offer:first-child li { color: rgba(255,255,255,0.85) !important; }
      .offerings .offer:first-child .offer__icon { background: rgba(${rgb},0.18) !important; }
      .offerings .offer:first-child .meta { border-top-color: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.5) !important; }
      .offerings .offer:first-child .meta b { color: var(--fg-on-dark) !important; }
    `;
  }
  let style = document.getElementById('__conduit_tweaks');
  if (!style) {
    style = document.createElement('style');
    style.id = '__conduit_tweaks';
    document.head.appendChild(style);
  }
  style.textContent = css;
}

function ConduitTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakColor label="Accent" value={t.accent} options={ACCENT_OPTIONS}
                    onChange={(v) => setTweak('accent', v)} />
        <TweakRadio label="Headline emphasis" value={t.emphasisStyle}
                    options={EMPHASIS_OPTIONS}
                    onChange={(v) => setTweak('emphasisStyle', v)} />
      </TweakSection>

      <TweakSection title="Hero mark">
        <TweakToggle label="Show pulse mark" value={t.pulseVisible}
                     onChange={(v) => setTweak('pulseVisible', v)} />
        <TweakSlider label="Mark size" value={t.pulseSize} min={400} max={1100} step={20}
                     onChange={(v) => setTweak('pulseSize', v)} />
      </TweakSection>

      <TweakSection title="Offerings">
        <TweakToggle label="Feature Custom CRM (dark card)" value={t.crmFeatured}
                     onChange={(v) => setTweak('crmFeatured', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

// Apply defaults immediately so the page reflects the saved EDITMODE state on first paint
applyTweaks(TWEAK_DEFAULTS);

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<ConduitTweaks />);
