// ⚠️ 由 scripts/esmify.mjs 从 ../../clinic-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState as useStateRC } from 'react';
import { useStrings, useIsZh } from '../data/i18n.jsx';
import { Clauses, HeroTopScrim } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// clinic-page.jsx — reusable single-clinic detail page
// Parametric: reads STRINGS[clinicKey] (e.g. STRINGS.richmond / STRINGS.burnaby).
// 6 sections: Hero · Story · Info Panel · Gallery · Find · Neighbourhood.
// Optional: Feature Band (between Neighbourhood and Footer).
// Sticky mobile Call · Book · Directions bar.
// Photo fallback: any photo field === null renders a sepia line-illustration placeholder.


// ---------- helper: warm filter applied to ALL clinic photos
const WARM_FILTER = 'sepia(8%) saturate(92%) brightness(1.01)';

const WarmImage = ({ src, alt, style, objectPosition = 'center center' }) => (
  <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
    <img src={src} alt={alt}
      style={{
        width: '100%', height: '100%', objectFit: 'cover',
        objectPosition,
        display: 'block', filter: WARM_FILTER,
      }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'rgba(247,242,234,0.04)',
      mixBlendMode: 'multiply', pointerEvents: 'none',
    }} />
  </div>
);

// ============================================================
// SEPIA PLACEHOLDER — elegant line illustration for blocks
// without a real photo. Three motifs: pier, needle, emblem.
// ============================================================
const SepiaMotif = ({ kind = 'pier' }) => {
  const stroke = 'var(--sepia-400)';
  const stroke2 = 'var(--sepia-300)';
  if (kind === 'needle') {
    // FSN: long fine needle + soft cloud halos
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true"
        style={{ width: '70%', height: '70%' }}>
        {/* halo clouds */}
        <g fill="none" stroke={stroke2} strokeWidth="0.8" opacity="0.7">
          <path d="M120 90 Q 160 70 200 90 Q 240 110 280 90" />
          <path d="M100 130 Q 150 110 200 130 Q 250 150 300 130" />
          <path d="M120 170 Q 160 150 200 170 Q 240 190 280 170" />
        </g>
        {/* needle */}
        <g stroke={stroke} strokeLinecap="round" fill="none">
          <line x1="200" y1="40" x2="200" y2="244" strokeWidth="1.6" />
          {/* needle head */}
          <circle cx="200" cy="34" r="6" strokeWidth="1.4" fill="var(--cream-100)" />
          <circle cx="200" cy="34" r="2.5" strokeWidth="1" fill={stroke} />
          {/* base resonance */}
          <path d="M170 252 Q 200 246 230 252" strokeWidth="0.9" />
        </g>
        {/* faint ripples */}
        <g fill="none" stroke={stroke2} strokeWidth="0.6" opacity="0.55">
          <circle cx="200" cy="244" r="22" />
          <circle cx="200" cy="244" r="36" />
          <circle cx="200" cy="244" r="50" />
        </g>
      </svg>
    );
  }
  if (kind === 'emblem') {
    // Brand-evoking emblem: gourd-on-a-cloud abstract glyph
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true"
        style={{ width: '55%', height: '55%' }}>
        <g fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
          {/* outer cartouche */}
          <path d="M150 90 Q 130 100 130 130 Q 130 160 160 175 Q 180 195 200 195 Q 220 195 240 175 Q 270 160 270 130 Q 270 100 250 90 Q 220 80 200 90 Q 180 80 150 90 Z" strokeWidth="1.4" />
          {/* inner gourd */}
          <path d="M195 110 Q 175 110 180 125 Q 190 140 195 145 Q 175 150 175 170 Q 175 188 200 188 Q 225 188 225 170 Q 225 150 205 145 Q 210 140 220 125 Q 225 110 205 110 Z" strokeWidth="1.2" />
          {/* leaves */}
          <path d="M160 100 Q 150 95 145 102 M240 100 Q 250 95 255 102" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  // default: pier (White Rock motif)
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      style={{ width: '100%', height: '100%' }}>
      <defs>
        <pattern id="sepia-wr-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.45" fill="rgba(154,110,69,0.16)" />
        </pattern>
      </defs>
      {/* soft sun */}
      <circle cx="310" cy="95" r="34" fill="none" stroke="rgba(154,110,69,0.35)" strokeWidth="0.8" />
      <circle cx="310" cy="95" r="22" fill="none" stroke="rgba(154,110,69,0.5)" strokeWidth="0.8" />
      {/* distant headland */}
      <path d="M 0 175 Q 60 170 110 175 Q 150 178 180 172 L 400 168 L 400 185 L 0 185 Z"
        fill="none" stroke={stroke2} strokeWidth="0.9" />
      {/* water dots + waves */}
      <rect y="185" width="400" height="80" fill="url(#sepia-wr-dots)" />
      <path d="M 0 215 Q 50 210 100 215 T 200 215 T 300 215 T 400 215"
        fill="none" stroke={stroke2} strokeWidth="0.7" />
      <path d="M 0 235 Q 50 230 100 235 T 200 235 T 300 235 T 400 235"
        fill="none" stroke={stroke2} strokeWidth="0.6" opacity="0.7" />
      {/* pier */}
      <g stroke={stroke} strokeWidth="1.2" fill="none" strokeLinecap="round">
        <line x1="40" y1="200" x2="220" y2="180" />
        <line x1="40" y1="220" x2="220" y2="194" />
        <line x1="220" y1="180" x2="220" y2="194" />
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
      {/* the famous white rock */}
      <ellipse cx="65" cy="232" rx="22" ry="14" fill="var(--cream-50)" stroke={stroke} strokeWidth="1" />
      <path d="M 50 230 Q 60 224 72 226 M 56 235 Q 65 232 76 234"
        fill="none" stroke="rgba(154,110,69,0.45)" strokeWidth="0.6" />
    </svg>
  );
};

const SepiaPlaceholder = ({
  kind = 'pier',
  caption = 'Photography coming soon',
  alt = '',
  style = {},
  scrim = false,    // when true, dim it like a hero scrim
  // 默认不显示「Photography coming soon」—— 见 condition-detail.jsx 的说明。
  // 需要单独某处显示，传 showCaption 即可。
  showCaption = false,
}) => (
  <div role="img" aria-label={alt}
    style={{
      width: '100%', height: '100%', position: 'relative',
      background: 'var(--cream-100)',
      display: 'grid', placeItems: 'center',
      overflow: 'hidden', ...style,
    }}>
    {/* subtle diagonal grain so it doesn't feel flat */}
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(154,110,69,0.04) 0 1px, transparent 1px 6px)',
    }} />
    <SepiaMotif kind={kind} />
    {showCaption && (
      <div style={{
        position: 'absolute', bottom: 12, left: 0, right: 0,
        textAlign: 'center',
        fontSize: 10, fontWeight: 500, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--sepia-500)',
      }}>{caption}</div>
    )}
    {scrim && (
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top right, rgba(20,12,4,0.55) 0%, rgba(20,12,4,0.20) 45%, rgba(20,12,4,0) 75%)',
        pointerEvents: 'none',
      }} />
    )}
  </div>
);

// ============================================================
// 1. HERO
// ============================================================
const RCHero = ({ c, directionsHref }) => {
  const STRINGS = useStrings();
  const usePlaceholder = !c.photo;
  return (
  <section data-screen-label="01 Hero" className="rc-hero-section" style={{
    position: 'relative', width: '100%', height: '78vh', minHeight: 580,
    overflow: 'hidden',
    background: usePlaceholder ? 'var(--cream-200)' : 'var(--sepia-700)',
  }}>
    <Nav theme={usePlaceholder ? 'light' : 'dark'} active={STRINGS.nav.items[3]} bookHref={c.primaryHref} />
    {usePlaceholder ? (
      <div style={{ position: 'absolute', inset: 0 }}>
        <SepiaPlaceholder kind={c.placeholderKind || 'pier'}
          alt={c.alt || ''}
          caption="" showCaption={false} />
      </div>
    ) : (
      <>
        <img src={c.photo} alt={c.alt} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: c.heroCrop || '50% 50%',
          filter: 'sepia(8%) saturate(92%) brightness(0.82) contrast(1.04)',
        }} />
        {/* Left-to-right scrim: darkens the text side of bright daytime
            heroes so eyebrow + H1 + sub + chips stay legible. Stronger
            on the left where the content-safe-zone sits, fully clear
            past ~68% so building/signage on the right stays bright. */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 18%, rgba(0,0,0,0.28) 38%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 68%)',
        }} />
        {/* Slight bottom-warm vignette keeps the existing editorial
            footing under the CTAs without re-darkening the right. */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(20,12,4,0.35) 0%, rgba(20,12,4,0.10) 25%, rgba(20,12,4,0) 50%)',
          pointerEvents: 'none',
        }} />
        <HeroTopScrim />
      </>
    )}
    <div className="rc-hero-content" style={{
      position: 'absolute', left: 0, right: 0, bottom: 88,
    }}>
      <div className="container">
        <div style={{
          color: usePlaceholder ? 'var(--sepia-700)' : 'var(--cream-50)',
          maxWidth: 820,
        }}>
          <div className="rc-hero-eyebrow" style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', opacity: usePlaceholder ? 0.7 : 0.85,
            marginBottom: 26,
          }}>{c.eyebrow}</div>
          {/* ⚠️ clamp(72px, 9vw, 132px) 的下限是 72px —— 在手机宽度上 9vw
              永远够不到 72px，所以这个 clamp 在窄屏上恒等于 72px，跟首页轮播
              那次一样，会把这块（底部对齐）撑得比导航还高，压到 logo 上。
              手机端专门用 .rc-hero-title 类把下限收到 44px。 */}
          <h1 className="rc-hero-title" style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(72px, 9vw, 132px)', lineHeight: 1,
            letterSpacing: '-0.015em', margin: '0 0 18px 0',
            color: usePlaceholder ? 'var(--sepia-700)' : 'var(--cream-50)',
          }}>{c.h1}</h1>
          <div className="rc-hero-sub" style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 24, lineHeight: 1.4,
            color: usePlaceholder ? 'var(--sepia-500)' : 'var(--cream-100)',
            opacity: 0.95, marginBottom: 36, maxWidth: 600,
          }}>{c.sub}</div>
          <div style={{
            display: 'flex', gap: 14, flexWrap: 'wrap',
            marginBottom: 28,
          }}>
            {c.chips.map((chip, i) => (
              <span key={i} style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: usePlaceholder ? 'var(--sepia-600)' : 'var(--cream-100)',
                padding: '8px 14px',
                border: usePlaceholder
                  ? '1px solid var(--sepia-300)'
                  : '1px solid rgba(247,241,229,0.45)',
                borderRadius: 2,
              }}>{chip}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="btn btn-primary"
              href={c.primaryHref}
              target={c.primaryTarget}
              rel={c.primaryTarget === '_blank' ? 'noopener' : undefined}>{c.primary}</a>
            <a className="btn btn-outline"
              href={directionsHref} target="_blank" rel="noopener"
              style={{
                color: usePlaceholder ? 'var(--sepia-700)' : 'var(--cream-50)',
                borderColor: usePlaceholder ? 'var(--sepia-300)' : 'rgba(247,241,229,0.55)',
              }}>{c.secondary}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

// ============================================================
// 2. STORY (editorial two-up)
// ============================================================
const RCStory = ({ c }) => (
  <section data-screen-label="02 Story" style={{
    background: 'var(--cream-200)',
    padding: '120px 0 96px',
  }}>
    <div className="container">
      <div className="rc-story-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.05fr',
        gap: 80, alignItems: 'center',
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{c.eyebrow}</div>
          <p style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 24, lineHeight: 1.5, color: 'var(--sepia-600)',
            margin: 0, textWrap: 'pretty',
          }}>{c.body}</p>
        </div>
        {c.photo ? (
          <WarmImage src={c.photo} alt={c.alt} objectPosition={c.objectPosition}
            style={{ aspectRatio: '4/3' }} />
        ) : (
          <div style={{ aspectRatio: '4/3', border: '1px solid var(--sepia-100)' }}>
            <SepiaPlaceholder kind={c.placeholderKind || 'needle'}
              alt={c.alt || 'Photography coming soon'}
              caption={c.placeholderCaption || 'Photography coming soon'} />
          </div>
        )}
      </div>
    </div>
  </section>
);

// ============================================================
// 3. INFO PANEL
// ============================================================
const RCInfoPanel = ({ c }) => (
  <section data-screen-label="03 Info" style={{
    background: 'var(--cream-100)',
    padding: '88px 0 96px',
    borderTop: '1px solid var(--sepia-100)',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 36 }}>{c.eyebrow}</div>
      <div className="rc-info-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.15fr',
        gap: 56,
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4,
        padding: '40px 40px 32px',
      }}>
        {/* Left: address + hours + phone + transit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <div className="info-label">{c.addressLabel}</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
              lineHeight: 1.4, color: 'var(--sepia-700)',
            }}>{c.address}</div>
          </div>
          <div>
            <div className="info-label">{c.hoursLabel}</div>
            <div style={{
              fontSize: 15, color: 'var(--sepia-600)', lineHeight: 1.6,
              whiteSpace: 'pre-line',
            }}>{c.hours}</div>
            <div style={{
              fontSize: 12, color: 'var(--sepia-400)', marginTop: 6,
              fontStyle: 'italic',
            }}>{c.hoursNote}</div>
          </div>
          <div>
            <div className="info-label">{c.phoneLabel}</div>
            <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} style={{
              fontFamily: 'var(--font-display)', fontSize: 22,
              color: 'var(--sepia-700)',
              borderBottom: '1px solid var(--sepia-200)',
              paddingBottom: 2,
            }}>{c.phone}</a>
          </div>
          <div>
            <div className="info-label">{c.transitLabel}</div>
            <div style={{
              fontSize: 13, color: 'var(--sepia-400)',
              fontStyle: 'italic', letterSpacing: '0.01em',
            }}>{c.transit}</div>
          </div>
        </div>

        {/* Right: Google Maps embed + directions button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{
            width: '100%', height: 380, overflow: 'hidden',
            borderRadius: 4, border: '1px solid var(--sepia-100)',
            background: 'var(--cream-200)',
          }}>
            <iframe
              src={c.mapSrc}
              title={c.mapIframeTitle || 'Clinic map'}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
          <a className="btn btn-outline"
            href={c.directionsHref}
            target="_blank" rel="noopener"
            style={{ alignSelf: 'flex-start' }}>{c.directionsLabel}</a>
        </div>
      </div>
    </div>
    <style>{`
      .info-label {
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--sepia-400);
        margin-bottom: 10px;
      }
    `}</style>
  </section>
);

// ============================================================
// 4. GALLERY (editorial grid; adapts to 2–5 cards; placeholder-aware)
// ============================================================
const RCGallery = ({ c }) => {
  const cards = c.cards || [];
  const count = cards.length;
  // Layout templates by card count. Each entry maps grid cell -> card index.
  // Heights stay editorial.
  let layout;
  if (count >= 6) {
    // 6-tile editorial layout: large + 2 stacked right, then 3 equal across
    layout = [
      { col: '1 / 8',  row: '1 / 3' },
      { col: '8 / 13', row: '1 / 2' },
      { col: '8 / 13', row: '2 / 3' },
      { col: '1 / 5',  row: '3 / 4' },
      { col: '5 / 9',  row: '3 / 4' },
      { col: '9 / 13', row: '3 / 4' },
    ];
  } else if (count >= 5) {
    // Original editorial 5-up
    layout = [
      { col: '1 / 8',  row: '1 / 3' },
      { col: '8 / 13', row: '1 / 2' },
      { col: '8 / 13', row: '2 / 3' },
      { col: '1 / 7',  row: '3 / 4' },
      { col: '7 / 13', row: '3 / 4' },
    ];
  } else if (count === 4) {
    layout = [
      { col: '1 / 7',  row: '1 / 3' },
      { col: '7 / 13', row: '1 / 2' },
      { col: '7 / 13', row: '2 / 3' },
      { col: '1 / 13', row: '3 / 4' },
    ];
  } else if (count === 3) {
    layout = [
      { col: '1 / 8',  row: '1 / 3' },
      { col: '8 / 13', row: '1 / 2' },
      { col: '8 / 13', row: '2 / 3' },
    ];
  } else if (count === 2) {
    layout = [
      { col: '1 / 7',  row: '1 / 2' },
      { col: '7 / 13', row: '1 / 2' },
    ];
  } else if (count === 1) {
    // single full-width editorial image
    layout = [{ col: '1 / 13', row: '1 / 2' }];
  } else {
    layout = cards.map((_, i) => ({ col: `${i*4+1} / ${i*4+5}`, row: '1 / 2' }));
  }
  const rowsCount = count >= 6 ? 'repeat(3, 240px)'
    : count >= 4 ? 'repeat(2, 280px)'
    : count === 1 ? 'repeat(1, 520px)'
    : 'repeat(1, 360px)';
  return (
    <section data-screen-label="04 Gallery" style={{
      background: 'var(--cream-200)',
      padding: '120px 0 96px',
    }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{c.eyebrow}</div>
          <h2 className="h-section">{c.h2}</h2>
        </div>
        <div className="rc-gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gridTemplateRows: rowsCount,
          gap: 16,
        }}>
          {cards.map((card, i) => {
            const cell = layout[i] || { col: '1 / 13', row: 'auto' };
            return (
              <div key={i} style={{ gridColumn: cell.col, gridRow: cell.row }}>
                <GalleryItem c={card} />
                {card.caption && (
                  <div style={{
                    marginTop: 10,
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 14, color: 'var(--sepia-500)',
                  }}>{card.caption}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ c }) => {
  const [hover, setHover] = useStateRC(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: '100%', height: '100%',
        transition: 'all var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? '0 8px 24px rgba(43,33,26,0.08)' : 'none',
      }}>
      {c.photo ? (
        <WarmImage src={c.photo} alt={c.alt} objectPosition={c.objectPosition}
          style={{ width: '100%', height: '100%' }} />
      ) : (
        <div style={{
          width: '100%', height: '100%',
          border: '1px solid var(--sepia-100)',
        }}>
          <SepiaPlaceholder kind={c.placeholderKind || 'pier'}
            alt={c.alt || 'Photography coming soon'}
            caption={c.placeholderCaption || 'Photography coming soon'} />
        </div>
      )}
    </div>
  );
};

// ============================================================
// 5. FIND HERE — practitioners + services
// ============================================================

// --- shared tokens for the anchor-style practitioner card (matches
//     the homepage / Practitioners archive vocabulary) ---
const RC_RING = '#B89460';
const RC_GOLD = 'var(--sepia-300)';

const RCBirds = () => (
  <svg width="46" height="30" viewBox="0 0 46 30" aria-hidden="true" style={{
    position: 'absolute', top: 14, right: 14, opacity: 0.34, pointerEvents: 'none',
  }}>
    <g stroke={RC_RING} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
      <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
    </g>
  </svg>
);

// New anchor-style card (circular portrait + ring + birds + badge +
// Cormorant name + ▶ credentials + italic subtitle). Used when a
// practitioner entry carries a creds[] array.
const RCAnchorCard = ({ p }) => {
  const STRINGS = useStrings();
  const RC_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const [hover, setHover] = useStateRC(false);
  const src = p.photo && p.photo.includes('/') ? p.photo : `assets/practitioners/${p.photo}`;
  const _sfx = RC_IS_ZH ? '-ZH' : '';
  const _list = (typeof STRINGS !== 'undefined' && STRINGS.practitioners && STRINGS.practitioners.list) || [];
  const _m = _list.find((x) => x.name === p.name);
  const detailHref = p.href || (_m ? `Practitioners/${_m.slug}${_sfx}.html` : null);
  return (
    <a
      href={detailHref || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: '0 0 264px', width: 264,
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        background: 'var(--cream-50)',
        border: `1px solid ${hover ? 'var(--sepia-200)' : 'var(--sepia-100)'}`,
        borderRadius: 4, padding: '42px 26px 32px', position: 'relative',
        textDecoration: 'none', color: 'inherit', cursor: detailHref ? 'pointer' : 'default',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 18px 38px -22px rgba(58,44,24,0.45), 0 4px 10px -6px rgba(58,44,24,0.2)'
          : '0 1px 2px rgba(58,44,24,0.04)',
      }}>
      <RCBirds />
      <div style={{
        width: 148, height: 148, borderRadius: '50%', overflow: 'hidden', position: 'relative',
        border: `3px solid ${RC_RING}`,
        boxShadow: '0 0 0 6px var(--cream-100), inset 0 0 0 1px rgba(184,148,96,0.25)',
        background: 'var(--cream-300)',
      }}>
        <img src={src} alt={`Portrait of ${p.name}`} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: p.crop || '50% 25%', display: 'block',
          filter: 'saturate(0.9) contrast(1.02)',
        }} />
      </div>
      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 25,
          lineHeight: 1.1, color: RC_GOLD, margin: 0, whiteSpace: 'nowrap',
        }}>{p.name}</h3>
        {p.badge && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--sepia-500)', background: 'var(--cream-200)',
            border: '1px solid var(--sepia-100)', borderRadius: 4, padding: '4px 10px',
            whiteSpace: 'nowrap',
          }}>{p.badge}</span>
        )}
      </div>
      <div style={{
        marginTop: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        gap: '5px 12px', maxWidth: 220,
      }}>
        {p.creds.map((cr, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontFamily: RC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: 12, fontWeight: 700, color: 'var(--sepia-600)', lineHeight: 1.3,
          }}>
            <span aria-hidden="true" style={{ color: RC_RING, fontSize: 8 }}>▶</span>{cr}
          </span>
        ))}
      </div>
      <div style={{
        marginTop: 14,
        fontFamily: RC_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontStyle: RC_IS_ZH ? 'normal' : 'italic',
        fontSize: RC_IS_ZH ? 13 : 14, lineHeight: 1.55,
        color: 'var(--sepia-400)', maxWidth: 220,
      }}>{p.subtitle}</div>
      {detailHref && (
        <div style={{
          marginTop: 'auto', paddingTop: 18,
          fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: hover ? 'var(--vermilion)' : 'var(--sepia-500)',
          transition: 'color var(--dur) var(--ease)',
        }}>{RC_IS_ZH ? '查看简介 →' : 'View profile →'}</div>
      )}
    </a>
  );
};

// Legacy card (role/note strings + 4:5 rectangular photo). Kept for
// Richmond / Burnaby clinic pages that still use the old data shape.
const RCOldPractCard = ({ p }) => (
  <article style={{
    flex: '0 0 248px', width: 248,
    background: 'var(--cream-50)',
    border: '1px solid var(--sepia-100)',
    borderRadius: 4,
    padding: 0, display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
  }}>
    <div style={{
      width: '100%', aspectRatio: '4/5',
      background: 'var(--cream-200)',
      position: 'relative',
      display: 'grid', placeItems: 'center',
      borderBottom: '1px solid var(--sepia-100)',
      overflow: 'hidden',
    }}>
      {p.photo ? (
        <>
          <img src={p.photo} alt={p.alt || p.name} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: p.crop || '50% 25%',
            filter: 'saturate(0.88) contrast(1.02)',
            display: 'block',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(247,242,234,0.04)',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }} />
        </>
      ) : (
        <div style={{
          fontSize: 9, fontWeight: 500, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--sepia-400)',
          padding: '5px 10px',
          background: 'var(--cream-50)',
          border: '1px solid var(--sepia-200)',
          borderRadius: 2,
        }}>Photo placeholder</div>
      )}
    </div>
    <div style={{ padding: '20px 20px 22px' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
        color: 'var(--sepia-700)', lineHeight: 1.2,
        marginBottom: 6,
      }}>{p.name}</div>
      <div style={{
        fontSize: 11, fontWeight: 500, letterSpacing: '0.06em',
        color: 'var(--sepia-500)', marginBottom: 10,
      }}>{p.role}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 14, lineHeight: 1.5, color: 'var(--sepia-500)',
      }}>{p.note}</div>
    </div>
  </article>
);

// Prominent specialty CTA band (used by White Rock in place of a
// practitioner roster — the authoritative team lives on the subsite).
const RCSpecialtyBlock = ({ c }) => (
  <div style={{
    background: 'var(--cream-50)', border: '1px solid var(--sepia-100)',
    borderRadius: 4, padding: '56px 52px', maxWidth: 880, position: 'relative',
  }}>
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: 'var(--sepia-400)', marginBottom: 18,
    }}>{c.eyebrow}</div>
    <h3 style={{
      fontFamily: 'var(--font-display)', fontWeight: 500,
      fontSize: 'clamp(30px, 3.4vw, 42px)', lineHeight: 1.15,
      color: 'var(--sepia-700)', margin: '0 0 20px', textWrap: 'balance',
    }}>{c.title}</h3>
    <p style={{
      fontFamily: 'var(--font-display)', fontStyle: 'italic',
      fontSize: 19, lineHeight: 1.55, color: 'var(--sepia-500)',
      margin: '0 0 32px', maxWidth: 640, textWrap: 'pretty',
    }}>{c.body}</p>
    <a className="btn btn-primary" href={c.ctaHref} target="_blank" rel="noopener"
      style={{ padding: '16px 28px' }}>{c.cta}</a>
  </div>
);

const RCFind = ({ c }) => (
  <section data-screen-label="05 Find" style={{
    background: 'var(--cream-100)',
    padding: '120px 0 96px',
  }}>
    <div className="container">
      <div style={{ marginBottom: 64 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>{c.eyebrow}</div>
        <h2 className="h-section">{c.h2}</h2>
      </div>

      {/* Practitioners — anchor-style cards (new shape) or legacy cards.
          White Rock swaps the whole roster for a specialty CTA band. */}
      {c.specialtyBlock ? (
        <div style={{ marginBottom: 96, marginTop: 8 }}>
          <RCSpecialtyBlock c={c.specialtyBlock} />
        </div>
      ) : (
        <div style={{ marginBottom: 96, marginTop: 8 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 26, color: 'var(--sepia-700)',
            marginBottom: 36,
          }}>{c.practitionersTitle}</div>
          <div className="rc-pract-grid" style={{
            display: 'flex', flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          }}>
            {c.practitioners.map((p, i) => (
              Array.isArray(p.creds)
                ? <RCAnchorCard key={i} p={p} />
                : <RCOldPractCard key={i} p={p} />
            ))}

            {/* dashed "More" card — only when there's no small-text team CTA */}
            {!c.teamCta && (
              <a
                href={c.morePractitionersHref}
                target={c.morePractitionersExternal ? '_blank' : undefined}
                rel={c.morePractitionersExternal ? 'noopener' : undefined}
                style={{
                  flex: '0 0 248px', width: 248,
                  background: 'var(--cream-50)',
                  border: '1px dashed var(--sepia-200)',
                  borderRadius: 4,
                  display: 'flex', flexDirection: 'column',
                  color: 'inherit',
                  overflow: 'hidden',
                }}>
                <div style={{
                  width: '100%', aspectRatio: '4/5',
                  background: 'var(--cream-200)',
                  display: 'grid', placeItems: 'center',
                  borderBottom: '1px dashed var(--sepia-200)',
                }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                    stroke="var(--sepia-300)" strokeWidth="1.2" strokeLinecap="round">
                    <circle cx="20" cy="22" r="8" />
                    <path d="M8 46 Q 20 36 32 46" />
                    <circle cx="42" cy="20" r="6" opacity="0.55" />
                    <path d="M32 40 Q 42 32 52 40" opacity="0.55" />
                  </svg>
                </div>
                <div style={{ padding: '20px 20px 22px' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500,
                    color: 'var(--sepia-700)', lineHeight: 1.25,
                    marginBottom: 8,
                  }}>{c.morePractitionersTitle}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 13, color: 'var(--sepia-400)', marginBottom: 14,
                  }}>{c.morePractitionersNote}</div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--sepia-700)',
                  }}>{c.morePractitionersLink}</div>
                </div>
              </a>
            )}
          </div>

          {/* small-text "view all team" CTA (replaces the dashed card) */}
          {c.teamCta && (
            <div style={{ marginTop: 36 }}>
              <a href={c.teamCta.href} style={{
                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.08em', color: 'var(--sepia-500)',
                borderBottom: '1px solid var(--sepia-200)', paddingBottom: 3,
              }}>{c.teamCta.label}</a>
            </div>
          )}
        </div>
      )}

      {/* Services */}
      <div>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 26, color: 'var(--sepia-700)',
          marginBottom: 24,
        }}>{c.servicesTitle}</div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10,
        }}>
          {c.services.map((s, i) => (
            <a key={i} href={s.href} style={{
              padding: '12px 18px',
              border: '1px solid var(--sepia-200)',
              borderRadius: 2,
              background: 'var(--cream-50)',
              fontFamily: 'var(--font-sans)', fontSize: 13,
              fontWeight: 500, letterSpacing: '0.04em',
              color: 'var(--sepia-600)',
              transition: 'all var(--dur) var(--ease)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--sepia-700)';
              e.currentTarget.style.color = 'var(--cream-50)';
              e.currentTarget.style.borderColor = 'var(--sepia-700)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--cream-50)';
              e.currentTarget.style.color = 'var(--sepia-600)';
              e.currentTarget.style.borderColor = 'var(--sepia-200)';
            }}>{s.name}</a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// 5.5 PRICE LIST (optional) — per-clinic services & rates.
// Renders only when the clinic data provides `priceList`
// (currently Vancouver, from the client price sheet).
// ============================================================
const RCPriceRow = ({ it }) => {
  const RC_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <div style={{
    display: 'flex', alignItems: 'baseline',
    justifyContent: 'space-between', gap: 18,
    padding: '13px 0', borderBottom: '1px solid var(--sepia-200)',
  }}>
    <div style={{ minWidth: 0 }}>
      <div style={{
        fontFamily: RC_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontWeight: 500, fontSize: 16, lineHeight: 1.35,
        color: 'var(--sepia-700)',
      }}>{it.name}</div>
      {it.sub && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.04em', color: 'var(--sepia-400)', marginTop: 2,
        }}>{it.sub}</div>
      )}
    </div>
    <div style={{
      textAlign: 'right',
      fontFamily: 'var(--font-sans)', fontSize: 13,
      fontWeight: 600, color: 'var(--sepia-600)',
    }}>
      <div style={{ whiteSpace: 'nowrap' }}>
        {it.price}
        {it.dur && <span style={{ fontWeight: 400, color: 'var(--sepia-400)' }}> · {it.dur}</span>}
      </div>
      {it.pkg && (
        <div style={{
          fontWeight: 400, fontSize: 11, lineHeight: 1.5,
          color: 'var(--sepia-400)', marginTop: 2,
          maxWidth: 250, marginLeft: 'auto',
        }}>{it.pkg}</div>
      )}
    </div>
  </div>
);
};

const RCPriceGrid = ({ items }) => (
  <div className="rc-price-grid" style={{
    display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    columnGap: 56, rowGap: 0,
  }}>
    {items.map((it, i) => <RCPriceRow key={i} it={it} />)}
  </div>
);

const RCPriceTables = ({ c }) => {
  const RC_IS_ZH = useIsZh();
  return (
    <>
      {c.items && <RCPriceGrid items={c.items} />}
      {(c.groups || []).map((g, gi) => (
        <div key={gi} style={{ marginTop: gi === 0 ? 24 : 52 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
            <span style={{
              fontFamily: RC_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
              fontWeight: 500, fontSize: 20, color: 'var(--sepia-700)',
            }}>{g.title}</span>
            <span aria-hidden="true" style={{ flex: 1, height: 1, background: 'var(--sepia-200)' }} />
          </div>
          <RCPriceGrid items={g.items} />
          {g.note && (
            <p style={{
              fontFamily: RC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: 12, lineHeight: 1.6, color: 'var(--sepia-500)',
              margin: '14px 0 0 0',
            }}>{g.note}</p>
          )}
        </div>
      ))}
      {c.footnote && (
        <p style={{
          fontFamily: RC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          fontSize: 12, lineHeight: 1.6, color: 'var(--sepia-400)',
          margin: '26px 0 0 0',
        }}>{c.footnote}</p>
      )}
    </>
  );
};

const RCPriceList = ({ c }) => {
  const RC_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const hasSheets = Boolean(c.sheets && c.sheets.length);
  return (
  <section data-screen-label="05b Pricing" style={{
    background: 'var(--cream-50)',
    padding: '96px 0',
  }}>
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 16 }}>{c.eyebrow}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.25,
        color: 'var(--sepia-700)', margin: '0 0 14px 0', textWrap: 'balance',
      }}>{c.h2}</h2>
      {c.lede && (
        <p style={{
          fontFamily: RC_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontStyle: RC_IS_ZH ? 'normal' : 'italic',
          fontSize: 17, lineHeight: 1.65, color: 'var(--sepia-500)',
          maxWidth: 680, margin: '0 0 44px 0',
        }}>{c.lede}</p>
      )}
      {hasSheets && (
        <div style={{ display: 'grid', gap: 32, marginTop: 36 }}>
          {c.sheets.map((sheet, i) => (
            <figure key={i} style={{ width: 'min(100%, 940px)', margin: '0 auto' }}>
              <a href={sheet.src} target="_blank" rel="noopener"
                aria-label={`${sheet.alt} — ${c.viewFullLabel}`}>
                <img src={sheet.src} alt={sheet.alt} loading="lazy" style={{
                  display: 'block', width: '100%', height: 'auto',
                  border: '1px solid var(--sepia-100)', background: '#fff',
                  boxShadow: '0 8px 28px rgba(43,33,26,0.06)',
                }} />
              </a>
              <figcaption style={{
                marginTop: 10, textAlign: 'center',
                fontFamily: RC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
                fontSize: 12, lineHeight: 1.5, color: 'var(--sepia-500)',
              }}>{sheet.caption} · {c.viewFullLabel}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {hasSheets ? (
        <details style={{
          width: 'min(100%, 940px)', margin: '36px auto 0',
          borderTop: '1px solid var(--sepia-200)',
          borderBottom: '1px solid var(--sepia-200)',
          padding: '18px 0',
        }}>
          <summary style={{
            cursor: 'pointer',
            fontFamily: RC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
            color: 'var(--sepia-600)',
          }}>{c.textVersionLabel}</summary>
          <div style={{ paddingTop: 22 }}><RCPriceTables c={c} /></div>
        </details>
      ) : (
        <RCPriceTables c={c} />
      )}
    </div>
  </section>
);
};

// ============================================================
// 6. NEIGHBOURHOOD
// ============================================================
const RCNeighbourhood = ({ c }) => (
  <section data-screen-label="06 Neighbourhood" style={{
    background: 'var(--cream-200)',
    padding: '96px 0 120px',
  }}>
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 24 }}>{c.eyebrow}</div>
      <p style={{
        fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.25,
        color: 'var(--sepia-700)',
        margin: '0 0 40px 0', maxWidth: 760,
        textWrap: 'balance',
      }}><Clauses text={c.line} /></p>
      <a href={c.backHref} style={{
        fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--sepia-700)',
        borderBottom: '1px solid var(--sepia-300)', paddingBottom: 4,
      }}>{c.backLink}</a>
    </div>
  </section>
);

// ============================================================
// 6.5 FEATURE BAND (optional) — prominent CTA card pointing
// somewhere off-page (used by White Rock to point at the
// dedicated subdomain).
// ============================================================
const RCFeatureBand = ({ c }) => (
  <section data-screen-label="07 Feature" style={{
    background: 'var(--sepia-700)', color: 'var(--cream-100)',
    padding: '88px 0',
  }}>
    <div className="container" style={{
      display: 'flex', flexWrap: 'wrap',
      alignItems: 'center', justifyContent: 'space-between',
      gap: 32,
    }}>
      <div style={{ flex: '1 1 540px', minWidth: 280 }}>
        {c.eyebrow && (
          <div style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--cream-400)', marginBottom: 18,
          }}>{c.eyebrow}</div>
        )}
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2,
          color: 'var(--cream-50)',
          marginBottom: c.body ? 14 : 0, textWrap: 'balance',
        }}>{c.headline}</div>
        {c.body && (
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 18, color: 'var(--cream-300)', maxWidth: 600,
            lineHeight: 1.5,
          }}>{c.body}</div>
        )}
      </div>
      <a className="btn btn-outline"
        href={c.ctaHref}
        target={c.ctaTarget || '_blank'}
        rel={c.ctaTarget === '_self' ? undefined : 'noopener'}
        style={{
          color: 'var(--cream-50)',
          borderColor: 'rgba(247,241,229,0.55)',
          padding: '16px 28px',
        }}>{c.cta}</a>
    </div>
  </section>
);

// ============================================================
// STICKY MOBILE BAR — Call · Book · Directions
// ============================================================
const StickyMobileBar = ({ c, phone, directionsHref, bookHref, bookTarget }) => (
  <div className="rc-sticky-bar" style={{
    position: 'fixed', left: 0, right: 0, bottom: 0,
    background: 'var(--cream-50)',
    borderTop: '1px solid var(--sepia-200)',
    display: 'none',
    boxShadow: '0 -8px 24px rgba(43,33,26,0.10)',
    zIndex: 40,
  }}>
    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '12px 8px 14px',
      fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--sepia-700)',
      borderRight: '1px solid var(--sepia-100)',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ marginBottom: 4 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      {c.call}
    </a>
    <a
      href={bookHref}
      target={bookTarget}
      rel={bookTarget === '_blank' ? 'noopener' : undefined}
      style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '12px 8px 14px',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--cream-50)',
      background: 'var(--vermilion)',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ marginBottom: 4 }}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      {c.book}
    </a>
    <a href={directionsHref} target="_blank" rel="noopener" style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '12px 8px 14px',
      fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--sepia-700)',
      borderLeft: '1px solid var(--sepia-100)',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ marginBottom: 4 }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      {c.directions}
    </a>
  </div>
);

// ============================================================
// PAGE — parametric on clinicKey
// ============================================================
const ClinicPage = ({ clinicKey = 'richmond' }) => {
  const STRINGS = useStrings();
  const c = STRINGS[clinicKey];
  if (!c) {
    return <div style={{ padding: 40 }}>Missing clinic data for “{clinicKey}”.</div>;
  }
  return (
    <>
      <RCHero c={c.hero} directionsHref={c.info.directionsHref} />
      <RCStory c={c.story} />
      <RCInfoPanel c={c.info} />
      <RCGallery c={c.gallery} />
      <RCFind c={c.find} />
      {c.priceList && <RCPriceList c={c.priceList} />}
      <RCNeighbourhood c={c.neighbourhood} />
      {c.featureBand && <RCFeatureBand c={c.featureBand} />}
      <Footer />
      <StickyMobileBar
        c={c.sticky}
        phone={c.info.phone}
        directionsHref={c.info.directionsHref}
        bookHref={c.hero.primaryHref}
        bookTarget={c.hero.primaryTarget} />
    </>
  );
};

// Thin wrappers — one per clinic page
const RichmondPage = () => <ClinicPage clinicKey="richmond" />;
const BurnabyPage  = () => <ClinicPage clinicKey="burnaby" />;
const VancouverPage = () => <ClinicPage clinicKey="vancouver" />;
const WhiteRockPage = () => <ClinicPage clinicKey="whiterock" />;


export { WarmImage, SepiaMotif, SepiaPlaceholder, RCHero, RCStory, RCInfoPanel, RCGallery, GalleryItem, RCBirds, RCAnchorCard, RCOldPractCard, RCSpecialtyBlock, RCFind, RCPriceRow, RCPriceGrid, RCPriceList, RCNeighbourhood, RCFeatureBand, StickyMobileBar, ClinicPage, RichmondPage, BurnabyPage, VancouverPage, WhiteRockPage };
