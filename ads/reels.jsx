// Reel storyboards — 4 vertical phone frames per concept.
// Each storyboard artboard is ~820×360 on canvas.

const Frame = ({ idx, time, dark = false, accent = true, kicker = true, children }) => {
  const phoneStyle = {
    background: dark ? '#212121' : '#fbfaf6',
    color: dark ? '#FBFBFE' : '#1a1a1a',
  };
  return (
    <div className="phone" style={phoneStyle}>
      <div className="notch"></div>
      <div className="timecode" style={{ color: dark ? '#9a9a9a' : '#7a7a7a' }}>{time}</div>
      <div style={{ padding: '28px 14px 22px', flex: 1, display:'flex', flexDirection:'column', justifyContent:'center' }}>
        {children}
      </div>
      <div className="frame-label" style={{ color: dark ? '#9a9a9a' : '#7a7a7a' }}>FRAME {idx}</div>
    </div>
  );
};

// Caption block used inside frames
const Caption = ({ children, size = 16, hand = true, dark = false }) => (
  <div className={hand ? 'hand':'print'} style={{ fontSize: size, lineHeight: 1.05, color: dark ? '#FBFBFE':'#1a1a1a' }}>
    {children}
  </div>
);

const Hatch = ({ label, h=70 }) => (
  <div className="box x" style={{ height: h, fontFamily:'var(--mono)' }}>
    <span className="tag">{label}</span>
  </div>
);

const ReelShell = ({ children, tweaks, title, subtitle, notes }) => {
  const cn = ['wf', tweaks.style === 'clean' ? 'clean':'', tweaks.accent ? '':'wf--no-accent'].filter(Boolean).join(' ');
  return (
    <div className={cn} style={{ width: 820, height: 400, padding: 20, boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <div className="mono" style={{ color:'#7a7a7a' }}>● REEL · 0:15</div>
          <div className="hand" style={{ fontSize: 22, lineHeight: 1.05 }}>{title}</div>
          <div className="print" style={{ fontSize: 12, color:'#555', marginTop: 4 }}>{subtitle}</div>
        </div>
        <div className="print" style={{ fontSize: 11, color:'#555', maxWidth: 280, textAlign:'right' }}>{notes}</div>
      </div>
      <div className="reel-grid" style={{ flex: 1, alignItems:'center' }}>{children}</div>
    </div>
  );
};

// ── R1 — Day in the life GC (talking head) ──────────────────────
function R1DayInLife({ tweaks }) {
  return (
    <ReelShell tweaks={tweaks}
      title="Day in the life · GC"
      subtitle="Owner POV · talking head + B-roll"
      notes="Voiceover from real owner. Captions burned in. Cut on the punch.">
      <Frame idx={1} time="0:00" accent={tweaks.accent} kicker={tweaks.kicker}>
        <Hatch label="OWNER · TRUCK CAB" h={120} />
        <Caption size={15}>
          "Spent <span className="squiggle">11 hours</span> chasing payment last week."
        </Caption>
      </Frame>
      <Frame idx={2} time="0:04">
        <div className="sketch" style={{ padding: 6, marginBottom: 8 }}>
          <div className="mono" style={{ fontSize: 8, marginBottom: 4 }}>Sheets · invoices</div>
          {Array.from({length:6}).map((_,i)=>(<div className="ss-row" key={i} />))}
        </div>
        <Caption size={13} hand={false}>Texted 6 clients. Lost track of 2.</Caption>
      </Frame>
      <Frame idx={3} time="0:09">
        <div className="sketch" style={{ padding: 6, marginBottom: 8, background:'#fff' }}>
          <div className="mono" style={{ fontSize: 8, marginBottom: 4 }}>Conduit · alerts</div>
          <div style={{ display:'flex', gap: 4, alignItems:'center', padding: 4, border:'1px solid #000', borderRadius: 6 }}>
            <div style={{ width: 8, height: 8, background: tweaks.accent?'#FF4529':'#000', borderRadius: 9999 }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 3, background:'#000', width:'80%' }}></div>
              <div style={{ height: 2, background:'#aaa', width:'60%', marginTop: 3 }}></div>
            </div>
          </div>
        </div>
        <Caption size={13} hand={false}>Now I get pinged at 30 days.</Caption>
      </Frame>
      <Frame idx={4} time="0:14" dark>
        <div style={{ textAlign:'center' }}>
          <Caption size={20} dark>Book a 30-min call.</Caption>
          <div className="mono" style={{ marginTop: 12, color: tweaks.accent?'#FF4529':'#FBFBFE' }}>● CONDUIT</div>
          <div style={{ marginTop: 14 }}><CTA accent={tweaks.accent}>{tweaks.cta}</CTA></div>
        </div>
      </Frame>
    </ReelShell>
  );
}

// ── R2 — Screen-record CRM walkthrough ──────────────────────────
function R2ScreenTour({ tweaks }) {
  return (
    <ReelShell tweaks={tweaks}
      title="What a custom CRM looks like"
      subtitle="Screen-recording walkthrough"
      notes="Mouse traces over UI. Voiceover narrates 3 features. No music drop, just clicks.">
      <Frame idx={1} time="0:00" dark>
        <Caption size={22} dark>What a custom CRM <span className="squiggle">actually</span> looks like.</Caption>
        <div className="mono" style={{ marginTop: 18, color:'#9a9a9a' }}>● CONDUIT · CRM TOUR</div>
      </Frame>
      <Frame idx={2} time="0:03">
        <div className="mono" style={{ fontSize: 8 }}>Pipeline · 1 of 3</div>
        <div style={{ display:'flex', gap: 3, marginTop: 6 }}>
          {['LEAD','BID','WON'].map((c,ci)=>(
            <div key={c} style={{ flex:1, border:'1px solid #000', padding: 3, borderRadius: 4 }}>
              <div className="mono" style={{ fontSize: 7 }}>{c}</div>
              {Array.from({length: ci===2?1:3}).map((_,i)=>(
                <div key={i} style={{ height: 14, marginTop: 3, border:'1px solid #000', borderRadius: 2, background: ci===1 && i===0 && tweaks.accent ? '#FF4529' : '#fff' }}></div>
              ))}
            </div>
          ))}
        </div>
        <Caption size={11} hand={false}>Drag jobs across stages.</Caption>
      </Frame>
      <Frame idx={3} time="0:08">
        <div className="mono" style={{ fontSize: 8 }}>Job · 2 of 3</div>
        <div className="sketch" style={{ padding: 6, marginTop: 6 }}>
          <div style={{ height: 4, background:'#000', width:'70%' }}></div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, marginTop: 6 }}>
            {Array.from({length:4}).map((_,i)=>(
              <div key={i} style={{ height: 12, border:'1px solid #aaa', borderRadius: 3 }}></div>
            ))}
          </div>
          <div style={{ marginTop: 6, height: 8, background: tweaks.accent ? '#FF4529':'#000', width: '40%' }}></div>
        </div>
        <Caption size={11} hand={false}>Every field built for your shop.</Caption>
      </Frame>
      <Frame idx={4} time="0:13" dark>
        <Caption size={18} dark>Want one like this?</Caption>
        <div className="print" style={{ fontSize: 11, color:'#9a9a9a', marginTop: 6 }}>30 min on the phone. 48 hr quote.</div>
        <div style={{ marginTop: 14 }}><CTA accent={tweaks.accent}>{tweaks.cta}</CTA></div>
      </Frame>
    </ReelShell>
  );
}

// ── R3 — Kinetic typography ─────────────────────────────────────
function R3Kinetic({ tweaks }) {
  return (
    <ReelShell tweaks={tweaks}
      title="Kinetic typography"
      subtitle="Bold type-only · loud captions"
      notes="No imagery — pure type. Each word fills the frame. Cut on the beat, ~3s per frame.">
      <Frame idx={1} time="0:00">
        <Caption size={32}>Your<br/>pipeline</Caption>
      </Frame>
      <Frame idx={2} time="0:03" dark>
        <Caption size={26} dark>isn't a <span className="squiggle">spreadsheet</span>.</Caption>
      </Frame>
      <Frame idx={3} time="0:07">
        <Caption size={22}>It's a <span className="squiggle">conduit</span> —</Caption>
        <div className="print" style={{ fontSize: 12, marginTop: 8 }}>between lead and paid.</div>
      </Frame>
      <Frame idx={4} time="0:11" dark>
        <div className="mono" style={{ color:'#9a9a9a' }}>● CONDUIT · DFW</div>
        <Caption size={20} dark>Built around your business.</Caption>
        <div style={{ marginTop: 14 }}><CTA accent={tweaks.accent}>{tweaks.cta}</CTA></div>
      </Frame>
    </ReelShell>
  );
}

// ── R4 — Before / After (broker website) ────────────────────────
function R4BeforeAfter({ tweaks }) {
  return (
    <ReelShell tweaks={tweaks}
      title="Before / After · broker site"
      subtitle="Sites pitch · vertical swipe"
      notes="Fast cut between two screens. Text-overlay only. Use a real client site as the 'after'.">
      <Frame idx={1} time="0:00">
        <div className="mono">BEFORE</div>
        <div className="box x" style={{ height: 120, marginTop: 6 }}><span className="tag">EVERY OTHER BROKER</span></div>
        <Caption size={13} hand={false}>Stock photos. Slider hero. Carousel of agents.</Caption>
      </Frame>
      <Frame idx={2} time="0:04">
        <div style={{ textAlign:'center', padding: '40px 0' }}>
          <div className="hand" style={{ fontSize: 28 }}><span className="squiggle">vs.</span></div>
          <svg width="40" height="60" viewBox="0 0 40 60" style={{ display:'inline-block', marginTop: 10 }}>
            <path d="M20 4 V 50 M8 38 L 20 52 L 32 38" stroke={tweaks.accent?'#FF4529':'#000'} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Frame>
      <Frame idx={3} time="0:08">
        <div className="mono">AFTER</div>
        <div className="sketch" style={{ padding: 0, marginTop: 6, overflow:'hidden' }}>
          <div style={{ padding: '4px 6px', borderBottom:'1px solid #000', fontFamily:'var(--mono)', fontSize: 7, letterSpacing:'.14em' }}>your-brokerage.com</div>
          <div style={{ height: 70, background: tweaks.accent ? 'linear-gradient(#FF4529, #212121)':'linear-gradient(#444,#111)' }}></div>
          <div style={{ padding: 4 }}>
            <div style={{ height: 4, background:'#000', width:'70%' }}></div>
            <div style={{ display:'flex', gap: 3, marginTop: 4 }}>
              {[0,1,2].map(i=>(<div key={i} style={{ flex:1, height: 18, border:'1px solid #000' }}></div>))}
            </div>
          </div>
        </div>
        <Caption size={11} hand={false}>1–2 weeks. Yours alone.</Caption>
      </Frame>
      <Frame idx={4} time="0:13" dark>
        <div className="mono" style={{ color: tweaks.accent?'#FF4529':'#9a9a9a' }}>● CONDUIT SITES</div>
        <Caption size={18} dark>See the work →</Caption>
        <div style={{ marginTop: 14 }}><CTA accent={tweaks.accent}>See work</CTA></div>
      </Frame>
    </ReelShell>
  );
}

Object.assign(window, { R1DayInLife, R2ScreenTour, R3Kinetic, R4BeforeAfter, ReelShell, Frame, Caption, Hatch });
