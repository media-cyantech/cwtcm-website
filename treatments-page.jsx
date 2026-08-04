// treatments-page.jsx — Treatments archive (诊疗项目总览)
// Hero (text-forward) → 3 category groups of service cards
// → "Browse by condition" bridge → CTA band → Footer.
// Reads window.STRINGS.treatments. Reuses Nav + Footer from sections-1-4/9-12.

const { useState: useStateTX } = React;
const TX_IS_ZH = (typeof STRINGS !== 'undefined') && STRINGS.lang === 'zh';

// ============================================================
// TREATMENT ICON — small, elegant editorial line mark
// 60px on a 32×32 viewBox, sepia stroke @ 1.4px, sits in a calm
// compact zone with generous whitespace above and below — NOT a
// large 3:2 image area. Each treatment keeps a distinct motif.
// ============================================================
const TxIcon = ({ kind }) => {
  const s = {
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.4,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  const faint = { ...s, opacity: 0.5, strokeWidth: 1 };
  let art;
  switch (kind) {
    case 'needle': // single needle planted, soft ripple at base
      art = (
        <>
          <circle cx="16" cy="6" r="1.6" {...s} fill="var(--cream-50)" />
          <line x1="16" y1="7.6" x2="16" y2="23" {...s} />
          <path d="M11 26 q5 -2 10 0" {...s} />
          <path d="M9 28.5 q7 -2.5 14 0" {...faint} />
        </>
      );
      break;
    case 'tuina': // two stacked palm arcs pressing
      art = (
        <>
          <path d="M7 14 q5 -5 11 -3.5 q6 1.5 7 5.5" {...s} />
          <path d="M7 14 q1 -3 4 -3 q1 -3 3.5 -2 q1 -3 3.5 -1.5 q1.5 -2 4 0" {...s} />
          <path d="M9 22.5 q5 -2 11 -1 q5 1 7 3" {...faint} />
          <path d="M9 26 q5 -1.5 11 -0.5 q5 1 7 2.5" {...faint} />
        </>
      );
      break;
    case 'moxa': // moxa stick: glowing tip + rising smoke curls
      art = (
        <>
          <circle cx="16" cy="20" r="2" {...s} />
          <rect x="14" y="20" width="4" height="8" rx="0.6" {...s} />
          <path d="M16 17 q-3 -2 -1 -5 q2 -3 0 -6" {...s} />
          <path d="M16 17 q3 -2 1 -5 q-2 -3 0 -6" {...faint} />
        </>
      );
      break;
    case 'cupping': // single inverted glass cup
      art = (
        <>
          <ellipse cx="16" cy="22" rx="6.5" ry="1.6" {...s} />
          <path d="M9.5 22 v-9 a6.5 1.6 0 0 1 13 0 v9" {...s} />
          <path d="M8 26 q8 1.5 16 0" {...faint} />
        </>
      );
      break;
    case 'boneset': // vertebra column — 5 beads on a line
      art = (
        <>
          <path d="M16 5 q-1.5 6 0 11 q1.5 5 0 11" {...s} />
          {[7, 12, 17, 22, 27].map((y, i) => (
            <ellipse key={i} cx="16" cy={y} rx="3.2" ry="1.4" {...s} />
          ))}
          <line x1="13" y1="16" x2="9" y2="16" {...faint} />
          <line x1="19" y1="16" x2="23" y2="16" {...faint} />
        </>
      );
      break;
    case 'scalp': // small head profile + radiating pressure marks
      art = (
        <>
          <path d="M11 25 v-4 c-2 -1 -3.5 -4 -3.5 -7
                   a8 8 0 0 1 16 0 c0 3 -1.5 5 -3.5 6 v5" {...s} />
          <path d="M9 13.5 q7 -3 14 0" {...faint} />
          <line x1="16" y1="6" x2="16" y2="3.5" {...faint} />
          <line x1="9.5" y1="9" x2="7.5" y2="7.5" {...faint} />
          <line x1="22.5" y1="9" x2="24.5" y2="7.5" {...faint} />
        </>
      );
      break;
    case 'herbs': // sprig of leaves
      art = (
        <>
          <path d="M9 27 q5 -8 15 -20" {...s} />
          <path d="M13 21 q-4 0 -6 -4 q4 -1 7 3" {...s} />
          <path d="M16 17 q4 0 6 -4 q-4 -1 -7 3" {...s} />
          <path d="M19 13 q-3 -0.5 -5 -3.5 q3 -0.5 6 2.5" {...faint} />
        </>
      );
      break;
    case 'fsn': // horizontal floating needle + 3 insertion dots below
      art = (
        <>
          <circle cx="6.5" cy="14" r="1.5" {...s} fill="var(--cream-50)" />
          <line x1="8" y1="14" x2="26" y2="14" {...s} />
          <line x1="10" y1="19" x2="24" y2="19" {...faint} strokeDasharray="1 2" />
          <circle cx="12" cy="22.5" r="0.9" fill="currentColor" />
          <circle cx="17" cy="22.5" r="0.9" fill="currentColor" />
          <circle cx="22" cy="22.5" r="0.9" fill="currentColor" />
        </>
      );
      break;
    case 'facial': // face profile with 4 small acu dots
      art = (
        <>
          <path d="M13 27 v-3 c-1.5 -0.5 -2.5 -2 -2.5 -4 v-1
                   c-1 -0.4 -1.5 -1.2 -1.5 -2.5
                   q0 -7 6.5 -9 q7 -1.5 9.5 5 v4
                   q1 0 0.8 1.6 t-2 1.6 v1.2
                   a2.4 2.4 0 0 1 -2.4 2.4 z" {...s} />
          <path d="M10.5 13.5 q3.5 -3.5 9 -2.5 q3.5 1 4.5 3.5" {...faint} />
          <circle cx="14" cy="11.5" r="0.9" fill="currentColor" />
          <circle cx="19" cy="10.5" r="0.9" fill="currentColor" />
          <circle cx="22" cy="14" r="0.9" fill="currentColor" />
          <circle cx="20" cy="20" r="0.9" fill="currentColor" />
        </>
      );
      break;
    case 'rmt': // two hands cupping a forearm
      art = (
        <>
          <path d="M4 16 q5 -2.5 12 -2.5 q7 0 12 2.5
                   q-5 2.5 -12 2.5 q-7 0 -12 -2.5 z" {...s} />
          <path d="M12 11 q-0.5 -2 1 -2.5 q0.8 -0.2 1 1
                   q0.2 -1.5 1.5 -1.5 q1 0 0.8 1.7
                   q0.4 -1.4 1.7 -1.2 q1.2 0.2 0.6 2.1
                   q1 -1 2 -0.4 q1.2 0.8 -0.2 2.6" {...s} />
          <path d="M20 21 q0.5 2 -1 2.5 q-0.8 0.2 -1 -1
                   q-0.2 1.5 -1.5 1.5 q-1 0 -0.8 -1.7
                   q-0.4 1.4 -1.7 1.2 q-1.2 -0.2 -0.6 -2.1
                   q-1 1 -2 0.4 q-1.2 -0.8 0.2 -2.6" {...s} />
        </>
      );
      break;
    default:
      art = null;
  }
  return (
    <div className="tx-icon-zone" style={{
      width: '100%', display: 'grid', placeItems: 'center',
      padding: '38px 0 32px',
      background: 'var(--cream-50)',
      borderBottom: '1px solid var(--sepia-100)',
      color: 'var(--sepia-400)',
    }}>
      <svg viewBox="0 0 32 32" width="60" height="60"
        aria-hidden="true" focusable="false">
        {art}
      </svg>
    </div>
  );
};

// ============================================================
// HERO — text-forward, no large photo
// ============================================================
const TxHero = ({ c }) => (
  <section data-screen-label="01 Hero" style={{
    background: 'var(--cream-100)',
    borderBottom: '1px solid var(--sepia-100)',
    padding: '88px 0 96px',
  }}>
    <div className="container">
      <div style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 36 }}>{c.eyebrow}</div>
        <h1 style={{
          fontFamily: TX_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: TX_IS_ZH
            ? 'clamp(48px, 6vw, 88px)'
            : 'clamp(60px, 7.2vw, 108px)',
          lineHeight: TX_IS_ZH ? 1.15 : 1.02,
          letterSpacing: TX_IS_ZH ? '0.02em' : '-0.015em',
          color: 'var(--sepia-700)',
          margin: '0 0 28px 0', textWrap: 'balance',
        }}><Clauses text={c.h1} /></h1>
        <p style={{
          fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: TX_IS_ZH ? 'normal' : 'italic',
          fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: TX_IS_ZH ? 1.7 : 1.45,
          color: 'var(--sepia-500)',
          margin: 0, maxWidth: 760, textWrap: 'pretty',
        }}>{c.sub}</p>
      </div>
    </div>
  </section>
);

// ============================================================
// CARD
// ============================================================
const TxCard = ({ card }) => {
  const [hover, setHover] = useStateTX(false);
  // A treatment is "live" only when its detail page is built. Slug-to-live-
  // page mapping lives in STRINGS.treatments.live so we don't hand-edit
  // the card data per build.
  const live = (STRINGS.treatments.live || []).includes(card.slug);
  // ZH detail pages live alongside EN ones under /Treatments/ with a -ZH
  // suffix — matches the rest of the site's convention (Locations-Burnaby-ZH.html).
  const suffix = STRINGS.lang === 'zh' ? '-ZH' : '';
  const href = live
    ? `Treatments/${card.slug}${suffix}.html`
    : '#';
  return (
    <a
      href={href}
      onClick={(e) => { if (!live) e.preventDefault(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4,
        overflow: 'hidden', color: 'inherit',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover
          ? '0 10px 28px rgba(43,33,26,0.08)' : 'none',
        borderColor: hover ? 'var(--sepia-200)' : 'var(--sepia-100)',
      }}>
      <TxIcon kind={card.kind} />
      <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <div style={{
            fontFamily: TX_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
            fontWeight: 500,
            fontSize: 26, lineHeight: 1.2, color: 'var(--sepia-700)',
            marginBottom: 8, textWrap: 'balance',
          }}>{card.name}</div>
          {TX_IS_ZH && (
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--sepia-400)',
            }}>{card.sub}</div>
          )}
        </div>
        <div style={{
          fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: TX_IS_ZH ? 'normal' : 'italic',
          fontSize: TX_IS_ZH ? 15 : 16, lineHeight: TX_IS_ZH ? 1.7 : 1.5,
          color: 'var(--sepia-500)',
          textWrap: 'pretty',
        }}>{card.tagline}</div>
        <div style={{
          marginTop: 'auto', paddingTop: 6,
          fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: TX_IS_ZH ? 'none' : 'uppercase',
          fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          color: 'var(--sepia-700)',
          borderTop: '1px solid var(--sepia-100)',
          paddingBlock: '14px 0',
        }}>{STRINGS.treatments.readMore}</div>
      </div>
    </a>
  );
};

// ============================================================
// GROUP — eyebrow + ZH ghost + 3-up responsive grid
// ============================================================
const TxGroup = ({ g, idx }) => (
  <section data-screen-label={`0${idx + 2} ${g.eyebrow}`} style={{
    background: idx % 2 === 0 ? 'var(--cream-200)' : 'var(--cream-100)',
    padding: '104px 0 96px',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 22, marginBottom: 56, flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          fontSize: TX_IS_ZH ? 15 : 12,
          fontWeight: TX_IS_ZH ? 600 : 500,
          letterSpacing: TX_IS_ZH ? '0.22em' : '0.14em',
          textTransform: TX_IS_ZH ? 'none' : 'uppercase',
          color: TX_IS_ZH ? 'var(--sepia-600)' : 'var(--sepia-300)',
        }}>{g.eyebrow}</div>
        <div style={{
          flex: 1, height: 1, background: 'var(--sepia-200)',
          minWidth: 80,
        }} />
        {TX_IS_ZH && (
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--sepia-400)',
          }}>{g.zh}</div>
        )}
      </div>
      <div className="tx-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 28,
      }}>
        {g.cards.map((card, i) => <TxCard key={i} card={card} />)}
      </div>
    </div>
  </section>
);

// ============================================================
// BRIDGE — "Not sure which treatment? Start from how you feel."
// ============================================================
const TxBridge = ({ c }) => (
  <section data-screen-label="05 Bridge" style={{
    background: 'var(--cream-200)',
    padding: '88px 0',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: TX_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontWeight: 500,
        fontSize: TX_IS_ZH ? 'clamp(24px, 2.4vw, 34px)' : 'clamp(28px, 3vw, 40px)',
        lineHeight: TX_IS_ZH ? 1.4 : 1.25,
        color: 'var(--sepia-700)',
        margin: '0 auto 28px', maxWidth: 760, textWrap: 'balance',
      }}>{c.title}</div>
      <a href={c.href} style={{
        fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
        fontSize: TX_IS_ZH ? 14 : 12,
        fontWeight: 600, letterSpacing: '0.14em',
        textTransform: TX_IS_ZH ? 'none' : 'uppercase',
        color: 'var(--sepia-700)',
        borderBottom: '1px solid var(--sepia-300)', paddingBottom: 4,
      }}>{c.link}</a>
    </div>
  </section>
);

// ============================================================
// CTA BAND — vermilion Book + outline Find clinic
// ============================================================
const TxCTA = ({ c }) => (
  <section data-screen-label="06 CTA" style={{
    background: 'var(--sepia-700)', color: 'var(--cream-100)',
    padding: '96px 0',
  }}>
    <div className="container" style={{
      display: 'flex', flexWrap: 'wrap',
      alignItems: 'center', justifyContent: 'space-between',
      gap: 36,
    }}>
      <div style={{ flex: '1 1 540px', minWidth: 280 }}>
        <div style={{
          fontFamily: TX_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: TX_IS_ZH ? 'clamp(28px, 3vw, 42px)' : 'clamp(32px, 3.4vw, 48px)',
          lineHeight: TX_IS_ZH ? 1.3 : 1.15,
          color: 'var(--cream-50)',
          marginBottom: 16, textWrap: 'balance',
        }}>{c.headline}</div>
        <div style={{
          fontFamily: TX_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: TX_IS_ZH ? 'normal' : 'italic',
          fontSize: TX_IS_ZH ? 17 : 19, color: 'var(--cream-300)',
          maxWidth: 620, lineHeight: 1.6,
        }}>{c.sub}</div>
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <a className="btn btn-primary"
          href={c.primaryHref} target="_blank" rel="noopener"
          style={{ padding: '18px 32px' }}>{c.primary}</a>
        <a className="btn btn-outline"
          href={c.secondaryHref}
          style={{
            color: 'var(--cream-50)',
            borderColor: 'rgba(247,241,229,0.55)',
            padding: '18px 32px',
          }}>{c.secondary}</a>
      </div>
    </div>
  </section>
);

// ============================================================
// PAGE
// ============================================================
const TreatmentsPage = () => {
  const c = STRINGS.treatments;
  return (
    <>
      <Nav theme="light" active={STRINGS.nav.items[0]} />
      <TxHero c={c.hero} />
      {c.groups.map((g, i) => <TxGroup key={i} g={g} idx={i} />)}
      <TxBridge c={c.bridge} />
      <TxCTA c={c.cta} />
      <Footer />
    </>
  );
};

Object.assign(window, { TreatmentsPage });
