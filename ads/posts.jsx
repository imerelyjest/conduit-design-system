// Static post wireframes — 1080×1080 rendered at 380×380.
// Each accepts { tweaks } so we can flip sketchy↔clean and accent on/off.

const PostShell = ({ children, dark = false, tweaks }) => {
  const cn = [
    'wf',
    dark ? 'wf--dark' : (tweaks.surface === 'clean' ? 'wf--clean' : ''),
    tweaks.accent ? '' : 'wf--no-accent',
    tweaks.style === 'clean' ? 'clean' : '',
  ].filter(Boolean).join(' ');
  return (
    <div className={cn} style={{ width: 380, height: 380, padding: 18, boxSizing: 'border-box', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative' }}>
      {children}
    </div>
  );
};

const Kicker = ({ children, show = true }) => (
  show ? <div className="pill"><span className="dot"></span>{children}</div> : null
);

const CTA = ({ children = 'Book a 30-min call', accent=false }) => (
  <span className={'cta' + (accent ? ' cta--accent':'')}>{children} <span style={{fontFamily:'serif'}}>→</span></span>
);

// ── P1 — Spreadsheet vs Conduit ──────────────────────────────────
function P1Spreadsheet({ tweaks }) {
  const head = tweaks.p1Headline || 'Your pipeline.\nOff the spreadsheet.';
  return (
    <PostShell tweaks={tweaks}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <Kicker show={tweaks.kicker}>BEFORE / AFTER</Kicker>
        <div className="mono">01 · GC PIPELINE</div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, alignItems:'stretch' }}>
        {/* Left: hatched spreadsheet */}
        <div className="sketch" style={{ padding: 8, position:'relative', height: 150 }}>
          <div className="mono" style={{ marginBottom: 4 }}>Sheets</div>
          <div style={{ borderTop:'1px solid #000' }}>
            {Array.from({length: 10}).map((_,i)=>(<div className="ss-row" key={i} />))}
          </div>
          <div style={{ position:'absolute', inset: 8, top: 22, pointerEvents:'none' }}>
            {/* sketched X scribble */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M5 12 Q 50 50 95 90" stroke="#FF4529" strokeWidth="3" fill="none" strokeLinecap="round" opacity={tweaks.accent?1:0.4} />
              <path d="M95 14 Q 50 55 4 92" stroke="#FF4529" strokeWidth="3" fill="none" strokeLinecap="round" opacity={tweaks.accent?1:0.4} />
            </svg>
          </div>
        </div>
        {/* Right: kanban */}
        <div className="sketch" style={{ padding: 8, height: 150 }}>
          <div className="mono" style={{ marginBottom: 6 }}>Conduit CRM</div>
          <div style={{ display:'flex', gap: 6 }}>
            {['LEAD','BID','WON'].map((col,ci)=>(
              <div key={col} style={{ flex:1, border:'1px dashed #000', padding: 4, borderRadius: 4 }}>
                <div className="mono" style={{ fontSize: 8 }}>{col}</div>
                {Array.from({length: ci===2?1:2}).map((_,i)=>(
                  <div key={i} style={{ marginTop:4, height: 22, background:'#fff', border:'1px solid #000', borderRadius: 3, display:'flex', alignItems:'center', padding:'0 3px' }}>
                    <div style={{ width: 6, height: 6, background: tweaks.accent?'#FF4529':'#000', borderRadius:9999, marginRight: 3 }}></div>
                    <div style={{ height: 3, background:'#000', flex:1, opacity:0.5 }}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="hand" style={{ fontSize: 26, lineHeight: 1.05, whiteSpace:'pre-line' }}>
          {head.split('\n').map((l,i)=>(
            <div key={i}>{i===1 ? <span className="squiggle">{l}</span> : l}</div>
          ))}
        </div>
        <div className="print" style={{ fontSize: 12, color:'#444', marginTop: 6 }}>For GCs done with Sunday-night spreadsheet night.</div>
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop: 8 }}>
          <CTA accent={tweaks.accent}>{tweaks.cta}</CTA>
        </div>
      </div>
    </PostShell>
  );
}

// ── P2 — 30 min / 48 hr typographic ──────────────────────────────
function P2Typographic({ tweaks }) {
  return (
    <PostShell tweaks={tweaks} dark>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <Kicker show={tweaks.kicker}>DFW · CONDUIT SYSTEMS</Kicker>
        <div className="mono">02 · BRAND</div>
      </div>

      <div style={{ textAlign:'center' }}>
        <div className="hand" style={{ fontSize: 36, lineHeight: 1.0 }}>30 min</div>
        <div className="print" style={{ fontSize: 14, opacity:0.7, margin: '4px 0 12px' }}>on the phone.</div>
        <div className="hand" style={{ fontSize: 36, lineHeight: 1.0 }}>
          <span className="squiggle">48 hr quote</span>
        </div>
        <div className="print" style={{ fontSize: 14, opacity:0.7, marginTop: 4 }}>on your desk.</div>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span className="mono">● CONDUIT</span>
        <CTA accent={tweaks.accent}>{tweaks.cta}</CTA>
      </div>
    </PostShell>
  );
}

// ── P3 — Conduit Sites · real-estate broker ──────────────────────
function P3Sites({ tweaks }) {
  return (
    <PostShell tweaks={tweaks}>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <Kicker show={tweaks.kicker}>CONDUIT SITES</Kicker>
        <div className="mono">03 · BROKERS</div>
      </div>

      {/* Browser frame */}
      <div className="sketch" style={{ padding: 0, overflow:'hidden' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 4, padding: '6px 8px', borderBottom:'1px solid #000' }}>
          <span style={{ width: 8, height: 8, borderRadius:9999, border:'1px solid #000' }}></span>
          <span style={{ width: 8, height: 8, borderRadius:9999, border:'1px solid #000' }}></span>
          <span style={{ width: 8, height: 8, borderRadius:9999, border:'1px solid #000' }}></span>
          <span className="mono" style={{ marginLeft: 8 }}>your-brokerage.com</span>
        </div>
        <div className="box x" style={{ height: 138, borderTop:0, borderLeft:0, borderRight:0 }}>
          <span className="tag">HERO IMAGE · YOUR LISTINGS</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap: 4, padding: 6 }}>
          <div style={{ height: 8, background:'#000' }}></div>
          {[1,2,3].map(i=>(<div key={i} style={{ height: 6, background:'#aaa' }}></div>))}
        </div>
      </div>

      <div>
        <div className="hand" style={{ fontSize: 26, lineHeight: 1.05 }}>
          A website that doesn't look like <span className="squiggle">every other broker's</span>.
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 10 }}>
          <span className="print" style={{ fontSize: 13, color:'#444' }}>1–2 weeks to first deliverable.</span>
          <CTA accent={tweaks.accent}>See work →</CTA>
        </div>
      </div>
    </PostShell>
  );
}

// ── P4 — Case study: 9 hrs/week ─────────────────────────────────
function P4Case({ tweaks }) {
  return (
    <PostShell tweaks={tweaks}>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <Kicker show={tweaks.kicker}>FORT WORTH GC · CASE</Kicker>
        <div className="mono">04 · PROOF</div>
      </div>

      <div style={{ textAlign:'left' }}>
        <div className="hand" style={{ fontSize: 92, lineHeight: 0.85 }}>
          9<span style={{ fontSize: 48 }}> hrs</span>
        </div>
        <div className="print" style={{ fontSize: 18, marginTop: -4 }}>saved every week.</div>
        <div style={{ marginTop: 14, borderLeft:'3px solid #000', paddingLeft: 10 }}>
          <div className="print" style={{ fontSize: 13, lineHeight: 1.35 }}>
            We replaced <span className="squiggle">four tools</span> — sheets, group texts,
            a whiteboard, and a PDF folder — with one CRM built around how the crew
            actually runs jobs.
          </div>
        </div>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span className="mono">— OWNER · 14 CREW</span>
        <CTA accent={tweaks.accent}>{tweaks.cta}</CTA>
      </div>
    </PostShell>
  );
}

// ── P5 — Founder quote card ─────────────────────────────────────
function P5Quote({ tweaks }) {
  return (
    <PostShell tweaks={tweaks}>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <Kicker show={tweaks.kicker}>FROM THE OWNER</Kicker>
        <div className="mono">05 · TRUST</div>
      </div>

      <div style={{ position:'relative', paddingLeft: 26 }}>
        <div className="hand" style={{ position:'absolute', left: -6, top: -18, fontSize: 72, lineHeight: 1, color: tweaks.accent ? '#FF4529':'#000' }}>"</div>
        <div className="hand" style={{ fontSize: 22, lineHeight: 1.1 }}>
          I've done this before.<br/>
          You'll get a <span className="squiggle">real answer</span><br/>
          in 48 hours — not a sales deck.
        </div>
        <div className="print" style={{ marginTop: 12, fontSize: 13 }}>— Conduit Systems · DFW</div>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', gap: 6, alignItems:'center' }}>
          <div style={{ width: 28, height: 28, borderRadius:9999, border:'1.5px solid #000', background:'#eee' }}></div>
          <span className="mono">PORTRAIT · OWNER</span>
        </div>
        <CTA accent={tweaks.accent}>{tweaks.cta}</CTA>
      </div>
    </PostShell>
  );
}

// ── P6 — 4 tools → 1 app ────────────────────────────────────────
function P6Stack({ tweaks }) {
  return (
    <PostShell tweaks={tweaks}>
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <Kicker show={tweaks.kicker}>INTERNAL TOOLS</Kicker>
        <div className="mono">06 · PRO SVCS</div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'auto 30px 1fr', alignItems:'center', gap: 10 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, alignItems:'flex-start' }}>
          <span className="toolchip">Sheets</span>
          <span className="toolchip" style={{ marginLeft: 10 }}>Email threads</span>
          <span className="toolchip">Whiteboard</span>
          <span className="toolchip" style={{ marginLeft: 14 }}>PDFs</span>
        </div>
        <svg viewBox="0 0 60 40" width="40" height="60" style={{ overflow:'visible' }}>
          <path d="M2 20 Q 30 -4 56 20" stroke={tweaks.accent ? '#FF4529':'#000'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M48 13 L 58 20 L 48 28" stroke={tweaks.accent ? '#FF4529':'#000'} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="sketch" style={{ padding: 6, height: 130 }}>
          <div className="mono" style={{ marginBottom: 4 }}>One app · Conduit</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 4 }}>
            {[0,1,2,3].map(i=>(
              <div key={i} style={{ border:'1px solid #000', height: 36, padding: 3, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div style={{ height: 4, background: i===0 && tweaks.accent ? '#FF4529' : '#000', width: '60%' }}></div>
                <div style={{ display:'flex', gap: 2 }}>
                  <div style={{ height: 2, background:'#aaa', flex: 1 }}></div>
                  <div style={{ height: 2, background:'#aaa', flex: 1 }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="hand" style={{ fontSize: 22, lineHeight: 1.05 }}>
          We build the <span className="squiggle">one app</span><br/>that replaces four.
        </div>
        <div className="print" style={{ fontSize: 12, color:'#444', marginTop: 6 }}>For firms tired of duct-taped workflows.</div>
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop: 6 }}>
          <CTA accent={tweaks.accent}>{tweaks.cta}</CTA>
        </div>
      </div>
    </PostShell>
  );
}

Object.assign(window, { P1Spreadsheet, P2Typographic, P3Sites, P4Case, P5Quote, P6Stack, PostShell, Kicker, CTA });
