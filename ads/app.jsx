// Top-level app: design canvas + tweaks panel
const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakText, TweakSelect } = window;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "style": "sketchy",
  "accent": true,
  "kicker": true,
  "cta": "Book a 30-min call",
  "p1Headline": "Your pipeline.\nOff the spreadsheet."
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  return (
    <>
      <DesignCanvas>
        <DCSection id="posts" title="Static Facebook posts" subtitle="1080×1080 · feed posts · 6 directions">
          <DCArtboard id="p1" label="01 · Before/after — GC pipeline" width={380} height={380}>
            <P1Spreadsheet tweaks={t} />
          </DCArtboard>
          <DCArtboard id="p2" label="02 · 30 min / 48 hr · brand" width={380} height={380}>
            <P2Typographic tweaks={t} />
          </DCArtboard>
          <DCArtboard id="p3" label="03 · Conduit Sites · brokers" width={380} height={380}>
            <P3Sites tweaks={t} />
          </DCArtboard>
          <DCArtboard id="p4" label="04 · 9 hrs/week · case study" width={380} height={380}>
            <P4Case tweaks={t} />
          </DCArtboard>
          <DCArtboard id="p5" label="05 · Founder quote" width={380} height={380}>
            <P5Quote tweaks={t} />
          </DCArtboard>
          <DCArtboard id="p6" label="06 · 4 tools → 1 app" width={380} height={380}>
            <P6Stack tweaks={t} />
          </DCArtboard>
        </DCSection>

        <DCSection id="reels" title="Reels storyboards" subtitle="9:16 · 0:15 · 4 frames each · 4 directions">
          <DCArtboard id="r1" label="R1 · Day in the life · GC POV" width={820} height={400}>
            <R1DayInLife tweaks={t} />
          </DCArtboard>
          <DCArtboard id="r2" label="R2 · Screen-record CRM tour" width={820} height={400}>
            <R2ScreenTour tweaks={t} />
          </DCArtboard>
          <DCArtboard id="r3" label="R3 · Kinetic typography" width={820} height={400}>
            <R3Kinetic tweaks={t} />
          </DCArtboard>
          <DCArtboard id="r4" label="R4 · Before / After · broker site" width={820} height={400}>
            <R4BeforeAfter tweaks={t} />
          </DCArtboard>
        </DCSection>

        <DCSection id="notes" title="How to read these" subtitle="Quick guide — these are wireframes, not finals">
          <DCArtboard id="legend" label="Legend" width={380} height={380}>
            <div className="wf" style={{ width: 380, height: 380, padding: 22, boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
              <div className="pill"><span className="dot"></span>WIREFRAME · LO-FI</div>
              <div className="hand" style={{ fontSize: 26, lineHeight: 1.05 }}>Pick directions, not pixels.</div>
              <div className="print" style={{ fontSize: 13, lineHeight: 1.4, color:'#333' }}>
                Each card is a layout idea — hatched boxes are real images / screen-records;
                squiggled words are the moments that should hit hardest in copy.
              </div>
              <ul className="print" style={{ fontSize: 12, lineHeight: 1.45, paddingLeft: 16, margin: 0, color:'#444' }}>
                <li>Posts run 1:1 for feed; Reels storyboards show 4 key frames.</li>
                <li>Use the Tweaks panel to flip <i>sketchy → clean</i>, kill the accent, or rewrite copy.</li>
                <li>Drag artboards to reorder; double-click titles to rename.</li>
                <li>Next step: pick 2–3, commission real photos / screen-records, hand off to motion.</li>
              </ul>
              <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="mono">● CONDUIT · DRAFT</span>
                <span className="mono">v1</span>
              </div>
            </div>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Rendering">
          <TweakRadio label="Style"
            value={t.style}
            options={[{value:'sketchy',label:'Sketchy'},{value:'clean',label:'Clean'}]}
            onChange={(v)=>setTweak('style', v)} />
          <TweakToggle label="Accent (Conduit orange)" value={t.accent} onChange={(v)=>setTweak('accent', v)} />
          <TweakToggle label="Mono kicker pills" value={t.kicker} onChange={(v)=>setTweak('kicker', v)} />
        </TweakSection>

        <TweakSection label="Copy">
          <TweakSelect label="CTA wording"
            value={t.cta}
            options={[
              'Book a 30-min call',
              'Get a 48-hr quote',
              'Free pipeline audit',
              'See work',
              'Talk to us',
            ]}
            onChange={(v)=>setTweak('cta', v)} />
          <TweakText label="P1 headline (use \\n for line break)"
            value={t.p1Headline.replace(/\n/g,'\\n')}
            onChange={(v)=>setTweak('p1Headline', v.replace(/\\n/g,'\n'))} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
