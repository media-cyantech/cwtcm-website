// ============================================================
// legal-page.jsx — LegalPage
// One page holding all policies (Privacy, Terms, Cancellation, Cookies)
// as anchored sections, so the whole thing is edited in one place
// (STRINGS.legalPage). Footer legal links point at Legal.html#{id}.
// Reuses shared window.Nav / window.Footer / window.Clauses.
// ============================================================

const LG_IS_ZH = (typeof STRINGS !== 'undefined') && STRINGS.lang === 'zh';
const lgData = () => (STRINGS.legalPage && (STRINGS.legalPage[STRINGS.lang] || STRINGS.legalPage.en)) || {};

// ---- dark hero (mirrors the shared info-page hero) ----
const LegalHero = ({ eyebrow, h1, sub }) => (
  <section data-screen-label="01 Hero" style={{
    position: 'relative',
    background: 'var(--sepia-700)', color: 'var(--cream-50)',
    padding: '0 0 84px', overflow: 'hidden',
  }}>
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      background:
        'radial-gradient(900px 360px at 12% -20%, rgba(184,148,96,0.18), transparent 70%), ' +
        'radial-gradient(700px 400px at 92% 10%, rgba(178,58,46,0.10), transparent 60%)',
      pointerEvents: 'none',
    }} />
    <Nav theme="dark" active={STRINGS.nav.items[4]} />
    <div className="container" style={{ position: 'relative', paddingTop: 190, maxWidth: 1080 }}>
      <div className="eyebrow" style={{ color: 'rgba(247,241,229,0.78)', marginBottom: 18 }}>{eyebrow}</div>
      <h1 className="h-display" style={{
        color: 'var(--cream-50)', fontSize: 'clamp(40px, 5.4vw, 68px)',
        marginBottom: 20, maxWidth: 900, textWrap: 'balance',
      }}><Clauses text={h1} /></h1>
      {sub && (
        <p className="lede" style={{
          color: 'rgba(247,241,229,0.82)', fontStyle: 'italic', maxWidth: 660, margin: 0,
        }}>{sub}</p>
      )}
    </div>
  </section>
);

const LegalTOC = ({ label, sections }) => (
  <nav className="legal-toc" aria-label={label} style={{ position: 'sticky', top: 96 }}>
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--sepia-400)',
      marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid var(--sepia-200)',
    }}>{label}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} style={{
          fontFamily: LG_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          fontSize: 14, color: 'var(--sepia-600)', lineHeight: 1.4,
          textDecoration: 'none',
        }} dangerouslySetInnerHTML={{ __html: s.title }} />
      ))}
    </div>
  </nav>
);

const LegalPage = () => {
  const c = lgData();
  const sections = c.sections || [];
  return (
    <>
      <LegalHero {...(c.hero || {})} />
      <section data-screen-label="02 Policies" className="section">
        <div className="container legal-grid" style={{
          maxWidth: 1080,
          display: 'grid', gridTemplateColumns: '230px 1fr', gap: 60, alignItems: 'start',
        }}>
          <LegalTOC label={c.tocLabel} sections={sections} />
          <div>
            {(c.updated || c.note) && (
              <div style={{ marginBottom: 44 }}>
                {c.updated && (
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: 'var(--sepia-400)', marginBottom: c.note ? 14 : 0,
                  }}>{c.updated}</div>
                )}
                {c.note && (
                  <div style={{
                    fontFamily: LG_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
                    fontSize: 13, lineHeight: 1.6, color: 'var(--sepia-500)',
                    background: 'var(--cream-100)', border: '1px solid var(--sepia-100)',
                    borderLeft: '3px solid var(--copper)', borderRadius: 4,
                    padding: '12px 16px',
                  }}>{c.note}</div>
                )}
              </div>
            )}
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} style={{
                scrollMarginTop: 92,
                paddingTop: i === 0 ? 0 : 40, paddingBottom: 8,
                borderTop: i === 0 ? 'none' : '1px solid var(--sepia-100)',
                marginTop: i === 0 ? 0 : 24,
              }}>
                <h2 style={{
                  fontFamily: LG_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
                  fontSize: 'clamp(26px, 2.6vw, 34px)', fontWeight: 600,
                  color: 'var(--sepia-700)', margin: '0 0 20px',
                }} dangerouslySetInnerHTML={{ __html: s.title }} />
                <div className="legal-body" dangerouslySetInnerHTML={{ __html: s.body }} />
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

window.LegalPage = LegalPage;
