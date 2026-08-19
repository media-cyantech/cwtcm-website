// ⚠️ 由 scripts/esmify.mjs 从 ../../locations-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState as useStateLoc } from 'react';
import { useStrings } from '../data/i18n.jsx';
import { Clauses } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// Locations.html — locator page component
// Renders: Nav (light, LOCATIONS active) → header block → stylized sepia map
// → 4 clinic cards → shared standards band → CTA band → Footer.
// All copy from window.STRINGS.locator + window.STRINGS.


// ----------------------------------------------------------
// Locator map — Google "My Maps" embed with the four clinic pins
// (client-provided map: Richmond, Burnaby, Vancouver, White Rock).
// The clinic cards below carry the full addresses.
// ----------------------------------------------------------
const LocatorMap = () => {
  const STRINGS = useStrings();
  const c = STRINGS.locator;
  const mapSrc = 'https://www.google.com/maps/d/embed?mid=1z2AD68hH0wuJ51sXuj07Hbs22hrYLcE&ehbc=2E312F';
  return (
    <div style={{
      background: 'var(--cream-100)',
      border: '1px solid var(--sepia-100)',
      borderRadius: 4,
      padding: '24px 24px 20px',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 18,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--sepia-400)',
        }}>{c.mapTitle}</div>
        <div style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 14, color: 'var(--sepia-400)',
        }}>{c.mapCaption}</div>
      </div>
      <div className="loc-map-frame" style={{
        width: '100%', height: 460, overflow: 'hidden', borderRadius: 4,
        border: '1px solid var(--sepia-100)', background: 'var(--cream-200)',
      }}>
        <iframe
          src={mapSrc}
          title="Map of Canadian Western TCM clinics across Greater Vancouver"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        />
      </div>
    </div>
  );
};

// ----------------------------------------------------------
// White Rock placeholder — elegant sepia line illustration
// (same aspect ratio + visual weight as a real photo card)
// ----------------------------------------------------------
const WhiteRockPlaceholder = ({ caption }) => (
  <div style={{
    width: '100%', aspectRatio: '4/3',
    background: 'var(--cream-100)',
    position: 'relative', overflow: 'hidden',
    border: '1px solid var(--sepia-100)',
  }}>
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true">
      <defs>
        <pattern id="wr-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.45" fill="rgba(154,110,69,0.16)" />
        </pattern>
      </defs>
      {/* sky / background */}
      <rect width="400" height="300" fill="var(--cream-100)" />
      {/* sun — soft circle behind */}
      <circle cx="310" cy="100" r="34" fill="none" stroke="rgba(154,110,69,0.35)" strokeWidth="0.8" />
      <circle cx="310" cy="100" r="22" fill="none" stroke="rgba(154,110,69,0.5)" strokeWidth="0.8" />
      {/* distant headland (Point Roberts / coastline) */}
      <path d="M 0 175 Q 60 170 110 175 Q 150 178 180 172 L 400 168 L 400 185 L 0 185 Z"
        fill="none" stroke="var(--sepia-300)" strokeWidth="0.9" />
      {/* water with dot pattern */}
      <rect y="185" width="400" height="80" fill="url(#wr-dots)" />
      {/* wave lines */}
      <path d="M 0 215 Q 50 210 100 215 T 200 215 T 300 215 T 400 215"
        fill="none" stroke="var(--sepia-300)" strokeWidth="0.7" />
      <path d="M 0 235 Q 50 230 100 235 T 200 235 T 300 235 T 400 235"
        fill="none" stroke="var(--sepia-300)" strokeWidth="0.6" opacity="0.7" />
      {/* pier — perspective into water */}
      <g stroke="var(--sepia-400)" strokeWidth="1.2" fill="none" strokeLinecap="round">
        {/* deck top edges */}
        <line x1="40" y1="200" x2="220" y2="180" />
        <line x1="40" y1="220" x2="220" y2="194" />
        {/* far end railing */}
        <line x1="220" y1="180" x2="220" y2="194" />
        {/* pilings */}
        <line x1="60"  y1="200" x2="60"  y2="265" />
        <line x1="100" y1="195" x2="100" y2="260" />
        <line x1="140" y1="190" x2="140" y2="255" />
        <line x1="180" y1="186" x2="180" y2="250" />
        <line x1="220" y1="180" x2="220" y2="245" />
        {/* small bell-house at end */}
        <rect x="206" y="158" width="28" height="22" />
        <line x1="206" y1="158" x2="220" y2="146" />
        <line x1="234" y1="158" x2="220" y2="146" />
      </g>
      {/* shore curve */}
      <path d="M 0 185 Q 20 188 40 185" fill="none" stroke="var(--sepia-300)" strokeWidth="0.8" />
      {/* foreground rock — the famous White Rock */}
      <ellipse cx="65" cy="232" rx="22" ry="14" fill="var(--cream-50)" stroke="var(--sepia-400)" strokeWidth="1" />
      <path d="M 50 230 Q 60 224 72 226 M 56 235 Q 65 232 76 234"
        fill="none" stroke="rgba(154,110,69,0.45)" strokeWidth="0.6" />
      {/* ground line */}
      <line x1="0" y1="252" x2="400" y2="252"
        stroke="var(--sepia-300)" strokeWidth="0.7" opacity="0.5" />
    </svg>
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '10px 14px',
      background: 'linear-gradient(to top, rgba(247,241,229,0.95), rgba(247,241,229,0))',
      fontSize: 10, fontWeight: 500, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--sepia-500)',
      textAlign: 'center',
    }}>
      {caption}
    </div>
  </div>
);

// ----------------------------------------------------------
// Clinic card — identical sizing across all 4
// ----------------------------------------------------------
const ClinicCard = ({ c, viewClinicLabel }) => {
  const [hover, setHover] = useStateLoc(false);
  return (
    <a href={c.href} style={{
      display: 'flex', flexDirection: 'column',
      background: 'var(--cream-50)',
      border: '1px solid var(--sepia-100)',
      color: 'inherit',
      transition: 'all var(--dur) var(--ease)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? '0 8px 24px rgba(43,33,26,0.08)' : 'none',
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      {/* image block */}
      <div style={{
        width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden',
        background: 'var(--cream-100)',
      }}>
        {c.photo ? (
          <>
            <img src={c.photo} alt={c.alt}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                display: 'block',
                filter: 'sepia(8%) saturate(92%) brightness(1.01)',
              }} />
            {/* 3% cream multiply overlay for unifying warmth */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(247,242,234,0.04)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }} />
          </>
        ) : (
          <WhiteRockPlaceholder caption={c.placeholderCaption} />
        )}
      </div>

      {/* text block */}
      <div style={{
        padding: '28px 24px 26px',
        display: 'flex', flexDirection: 'column', gap: 0, flex: 1,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 34, lineHeight: 1.05,
          letterSpacing: '-0.012em',
          color: 'var(--sepia-700)',
          margin: '0 0 10px 0',
        }}>{c.city}</h3>
        <div style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 16, lineHeight: 1.4,
          color: 'var(--sepia-400)',
          marginBottom: 20,
        }}>{c.caption}</div>

        <div style={{
          width: 28, height: 1, background: 'var(--copper)', marginBottom: 18,
        }} />

        <div style={{
          fontSize: 14, lineHeight: 1.6, color: 'var(--sepia-600)',
          marginBottom: 8,
        }}>{c.address}</div>

        <div style={{
          fontSize: 14, fontWeight: 500, color: 'var(--sepia-500)',
          letterSpacing: '0.02em', marginBottom: 22,
        }}>{c.phone}</div>

        <div style={{
          marginTop: 'auto', paddingTop: 18,
          borderTop: '1px solid var(--sepia-100)',
          fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--sepia-700)',
          display: 'inline-flex', gap: 8, alignItems: 'center',
        }}>
          {viewClinicLabel.replace(/\s*→\s*$/, '')}
          <span style={{
            transition: 'transform 200ms ease',
            transform: hover ? 'translateX(4px)' : 'none',
          }}>→</span>
        </div>
      </div>
    </a>
  );
};

// ----------------------------------------------------------
// Page
// ----------------------------------------------------------
const LocationsPage = () => {
  const STRINGS = useStrings();
  const c = STRINGS.locator;
  return (
    <>
      <Nav theme="light" active={STRINGS.nav.items[3]} />

      {/* 1. Header block */}
      <section data-screen-label="01 Header" style={{
        background: 'var(--cream-100)',
        padding: '88px 0 64px',
      }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>{c.eyebrow}</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(44px, 5.4vw, 72px)', lineHeight: 1.05,
            letterSpacing: '-0.015em',
            color: 'var(--sepia-700)',
            margin: '0 0 32px 0',
            maxWidth: 860,
            textWrap: 'balance',
          }}><Clauses text={c.h1} /></h1>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65,
            color: 'var(--sepia-500)',
            maxWidth: '60ch', margin: 0, textWrap: 'pretty',
          }}>{c.intro}</p>
        </div>
      </section>

      {/* 2. Stylized map */}
      <section data-screen-label="02 Map" style={{
        background: 'var(--cream-200)',
        padding: '48px 0 24px',
      }}>
        <div className="container">
          <LocatorMap />
        </div>
      </section>

      {/* 3. Four cards */}
      <section data-screen-label="03 Cards" style={{
        background: 'var(--cream-200)',
        padding: '32px 0 96px',
      }}>
        <div className="container">
          <div className="loc-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 20,
          }}>
            {c.cards.map((card) => (
              <ClinicCard key={card.key} c={card} viewClinicLabel={c.viewClinic} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Standards / trust band */}
      <section data-screen-label="04 Standards" style={{
        background: 'var(--cream-100)',
        borderTop: '1px solid var(--sepia-100)',
        borderBottom: '1px solid var(--sepia-100)',
        padding: '56px 0',
      }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 28, textAlign: 'center' }}>
            {c.standardEyebrow}
          </div>
          <div className="trust-row" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            alignItems: 'center',
          }}>
            {c.standardPoints.map((p, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '0 20px',
                borderLeft: i === 0 ? 'none' : '1px solid var(--copper)',
                fontFamily: 'var(--font-display)',
                fontSize: 18, lineHeight: 1.4,
                color: 'var(--sepia-600)',
                textWrap: 'balance',
              }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA band */}
      <section data-screen-label="05 CTA" style={{
        background: 'var(--cream-200)',
        padding: '88px 0 96px',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2,
            color: 'var(--sepia-700)',
            margin: '0 0 32px 0',
            maxWidth: 760, marginInline: 'auto',
            textWrap: 'balance',
          }}>{c.ctaLine}</p>
          <a href={c.ctaPrimaryHref} target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: '18px 36px', fontSize: 13 }}>
            {c.ctaPrimary}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};


export { LocationsPage };
