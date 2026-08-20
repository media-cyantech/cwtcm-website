// ⚠️ 由 scripts/esmify.mjs 从 ../../sections-5-8.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useStrings, useCopy } from '../data/i18n.jsx';
import { resources } from '../data/resources.js';
import { Stroke, Clauses, ConditionIcon, TreatmentPlaceholder } from './atoms.jsx';
// Sections 5–8: Treatments, Conditions, Locations, Heritage

// ============================================================
// 5. TREATMENTS
// ============================================================
const TreatmentCard = ({ t }) => {
  const STRINGS = useStrings();
  // 首页这批卡片一直只是展示，没有链接——但 8 项的详情页其实都存在。
  // 跟 treatments-page.jsx 的 TxCard 同一套判断：slug 在 live 名单里才渲染
  // 成 <a>，否则保持纯展示，不给不存在的页面留假链接。
  const live = !!t.slug && (STRINGS.treatments.live || []).includes(t.slug);
  const href = live ? `Treatments/${t.slug}${STRINGS.lang === 'zh' ? '-ZH' : ''}.html` : undefined;
  const Tag = live ? 'a' : 'article';
  return (
  <Tag {...(live ? { href, className: 'home-tx-card' } : {})}
    style={{ display: 'flex', flexDirection: 'column', color: 'inherit' }}>
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden', marginBottom: 18 }}>
      {/* 这里原本在图片上盖一个「Photo TBD」标签 —— 设计评审期用来标记
          「这张是选配的图，等诊所给正式照片」。判断条件其实是反的：只要图片
          **存在**就盖标签，所以 8 张图全被盖上，中英首页共 16 处。
          上线站不该让访客看见内部评审标记，去掉。
          图片本身没动；诊所日后给了自己的照片，换掉 assets/treatments/ 下
          对应的 8 个文件即可，不需要改代码。 */}
      {t.photo ? (
        <img src={t.photo} alt={t.name} className="warm-image" style={{
          width: '100%', aspectRatio: '4/3', objectFit: 'cover',
          filter: 'sepia(0.18) saturate(0.82) contrast(1.06) brightness(1.02) hue-rotate(-4deg)',
        }} />
      ) : (
        <TreatmentPlaceholder kind={t.placeholder} />
      )}
    </div>
    <div style={{
      fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
      color: 'var(--sepia-700)', lineHeight: 1.25, textWrap: 'balance',
    }}>{t.name}{t.zh && (
      <span style={{
        fontFamily: 'var(--font-serif-zh)', fontSize: 16, fontWeight: 500,
        letterSpacing: '0.15em', color: 'var(--sepia-400)',
        marginLeft: 10, whiteSpace: 'nowrap',
      }}>{t.zh}</span>
    )}</div>
    <p style={{
      fontSize: 13, lineHeight: 1.6, color: 'var(--sepia-500)',
      margin: '10px 0 14px 0', textWrap: 'pretty',
    }}>{t.body}</p>
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'var(--sepia-400)',
      paddingTop: 12, borderTop: '1px solid var(--sepia-100)',
    }}>{t.meta}</div>
  </Tag>
  );
};

const Treatments = () => {
  const COPY = useCopy();
  const STRINGS = useStrings();
  const c = COPY.treatments;
  return (
    <section data-screen-label="05 Treatments" className="section" style={{ background: 'var(--cream-200)' }}>
      <style>{`
        .home-tx-card img { transition: transform var(--dur-slow) var(--ease); }
        .home-tx-card:hover img { transform: scale(1.03); }
      `}</style>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section" style={{ maxWidth: 760, whiteSpace: 'pre-line' }}>{c.h2}</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 32,
          rowGap: 56,
        }}>
          {c.cards.map((t, i) => <TreatmentCard key={i} t={t} />)}
        </div>
        <div style={{ marginTop: 56, textAlign: 'right' }}>
          <a href={`Treatments${STRINGS.lang === 'zh' ? '-ZH' : ''}.html`} className="btn-ghost" style={{
            fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--sepia-600)', borderBottom: '1px solid var(--sepia-300)',
            paddingBottom: 6,
          }}>{STRINGS.treatmentsViewAll}</a>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 6. CONDITIONS
// ============================================================
const ConditionCard = ({ c, noPageNote }) => {
  const STRINGS = useStrings();
  // 10 张卡片里有 8 张有详情页，「运动表现」「健康抗衰」没有——只给有页面的
  // 那 8 张加链接。原来整批都是纯展示 <article>，但都带着 cursor:pointer，
  // 看着能点其实点不动；没有详情页的那两张现在也不再显示成可点的样子。
  const live = !!c.slug && (STRINGS.conditions.live || []).includes(c.slug);
  const href = live ? `Conditions/${c.slug}${STRINGS.lang === 'zh' ? '-ZH' : ''}.html` : undefined;
  const Tag = live ? 'a' : 'article';
  return (
  <Tag {...(live ? { href } : {})} className={live ? 'home-cd-card' : undefined}
    style={{
      padding: '32px 28px',
      background: 'var(--cream-50)',
      border: '1px solid var(--sepia-100)',
      borderRadius: 2,
      display: 'flex', flexDirection: 'column', color: 'inherit',
      gap: 16, transition: 'all var(--dur) var(--ease)',
    }}>
    <div style={{ color: 'var(--sepia-400)' }}>
      <ConditionIcon name={c.icon} size={32} />
    </div>
    <div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
        color: 'var(--sepia-700)', lineHeight: 1.2, marginBottom: 8,
      }}>{c.title}</div>
      <p style={{
        fontSize: 13, lineHeight: 1.55, color: 'var(--sepia-500)', margin: 0,
      }}>{c.body}</p>
      {!live && noPageNote && (
        <div style={{
          marginTop: 12, paddingTop: 10,
          borderTop: '1px solid var(--sepia-100)',
          fontFamily: 'var(--font-sans)',
          fontSize: 11, letterSpacing: '0.06em',
          color: 'var(--sepia-400)', fontStyle: 'italic',
        }}>{noPageNote}</div>
      )}
    </div>
  </Tag>
  );
};

const Conditions = () => {
  const COPY = useCopy();
  const c = COPY.conditions;
  return (
    <section data-screen-label="06 Conditions" className="section" style={{ background: 'var(--cream-100)' }}>
      <style>{`
        .home-cd-card:hover { border-color: var(--sepia-300) !important; }
      `}</style>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section" style={{ maxWidth: 760 }}>{c.h2}</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20,
        }}>
          {c.cards.map((card, i) => <ConditionCard key={i} c={card} noPageNote={c.noPageNote} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 7. LOCATIONS
// ============================================================
// TCM-motif sketches for Location cards — siblings to ApproachMacro language
const LocationMotif = ({ kind }) => {
  const s = { ...Stroke({ strokeWidth: 1.5 }) };
  const C = { width: 64, height: 48, viewBox: '0 0 80 60', xmlns: 'http://www.w3.org/2000/svg' };
  switch (kind) {
    case 'brush': // Richmond — single calligraphy stroke
      return (
        <svg {...C}>
          <path d="M12 38 q10 -22 28 -22 q18 0 30 18" {...s} />
          <path d="M68 32 q-3 4 -8 4" {...s} strokeWidth="2.4" opacity="0.85" />
        </svg>
      );
    case 'sprig': // Burnaby — herb sprig / mugwort
      return (
        <svg {...C}>
          <path d="M40 52 v-32" {...s} />
          <path d="M40 36 q-8 -2 -12 -10 q6 1 12 10 z" {...s} />
          <path d="M40 28 q8 -2 12 -10 q-6 1 -12 10 z" {...s} />
          <path d="M40 44 q-7 -2 -11 -8 q5 1 11 8 z" {...s} />
          <circle cx="40" cy="18" r="2" {...s} />
        </svg>
      );
    case 'pulse': // Vancouver — pulse waveform
      return (
        <svg {...C}>
          <path d="M8 32 h16 l4 -14 l6 22 l5 -16 l5 12 l4 -8 h24" {...s} />
          <circle cx="38" cy="40" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'needle': // White Rock — fine needle + moxa curl
      return (
        <svg {...C}>
          <line x1="40" y1="50" x2="40" y2="14" {...s} />
          <circle cx="40" cy="10" r="3" {...s} />
          <path d="M48 28 q6 -4 10 2 q4 6 -2 8 q-4 1 -3 -3" {...s} opacity="0.7" />
        </svg>
      );
    default: return null;
  }
};

const CLINIC_PAGE_SLUGS = ['Locations-Richmond', 'Locations-Burnaby', 'Locations-Vancouver', 'Locations-WhiteRock'];
const LocationCard = ({ l, i }) => {
  const STRINGS = useStrings();
  const sfx = STRINGS.lang === 'zh' ? '-ZH' : '';
  const clinicHref = `${CLINIC_PAGE_SLUGS[i] || 'Locations'}${sfx}.html`;
  return (
  <article className="loc-card" style={{
    position: 'relative',
    background: 'var(--cream-50)',
    padding: '36px 24px 32px',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    height: '100%',
    textAlign: 'center', gap: 0,
    transition: 'all var(--dur) var(--ease)',
    border: '1px solid var(--copper)',
  }}>
    <img src={resources.r_brand_logo_tight_avif} alt="CWTCM" style={{
      height: 58, width: 'auto', marginBottom: 24,
      filter: 'brightness(0) saturate(100%) invert(48%) sepia(14%) saturate(1180%) hue-rotate(0deg) brightness(85%) contrast(80%)',
      opacity: 0.92,
    }} />
    {/* 门店名原本是写死的 38px + nowrap：卡片一窄，这行字既不能缩也不能换行，
        就横着捅出卡片、跟隔壁那张的店名叠在一起（「WHITE ROCK」尤其明显）。
        改成按卡片宽度伸缩的 clamp()，并允许换行——两个词的店名在窄卡片里
        会自然折成两行，而不是溢出去。 */}
    <h3 style={{
      fontFamily: 'var(--font-display)', fontWeight: 500,
      fontSize: 'clamp(24px, 3.4vw, 38px)', lineHeight: 1.05,
      letterSpacing: '-0.012em', textTransform: 'uppercase',
      color: 'var(--sepia-700)', margin: '0 0 14px 0',
      maxWidth: '100%', textWrap: 'balance', hyphens: 'none',
    }}>{l.city}</h3>
    <div style={{
      fontFamily: 'var(--font-display)', fontStyle: 'italic',
      fontSize: 15, color: 'var(--sepia-400)', lineHeight: 1.45,
      marginBottom: 22, maxWidth: 260, textWrap: 'balance',
    }}>{l.caption}</div>
    <div style={{
      width: '40%', height: 1, background: 'var(--sepia-200)', marginBottom: 20,
    }} />
    <div style={{
      fontSize: 13, lineHeight: 1.6, color: 'var(--sepia-500)',
      marginBottom: 14, maxWidth: 240,
    }}>{l.address}</div>
    <a href={`tel:${l.phone.replace(/[^0-9+]/g, '')}`} style={{
      position: 'relative', zIndex: 1,
      fontSize: 14, fontWeight: 500, color: 'var(--sepia-400)',
      letterSpacing: '0.02em', marginBottom: 18, textDecoration: 'none',
    }}>{l.phone}</a>
    {/* 整卡可点：这个链接铺满卡片（position:absolute + inset:0），
        电话号码用 position:relative + z-index 盖在它上面，保持独立可点。
        没用 ::after 伪元素放 content:''——JSX 把 <style> 当文本子节点，
        引号会被转义成 &#x27;，content 值就成了非法 CSS，伪元素不生成。 */}
    <a className="loc-cta loc-cta-stretched" href={clinicHref} style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      paddingBottom: 32,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--sepia-700)', textDecoration: 'none',
      cursor: 'pointer', gap: 8,
    }}>{STRINGS.bookAtClinic} <span className="loc-arrow" style={{ transition: 'all 200ms ease' }}>→</span></a>
  </article>
  );
};

const Locations = () => {
  const COPY = useCopy();
  const c = COPY.locations;
  return (
    <section data-screen-label="07 Locations" className="section" style={{ background: 'var(--cream-200)' }}>
      <style>{`
        .loc-cta:hover { color: var(--sepia-500); }
        .loc-cta:hover .loc-arrow { transform: translateX(4px); }
        .loc-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(43,33,26,0.08); }
      `}</style>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section"><Clauses text={c.h2} /></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 20 }}>
          {c.cards.map((l, i) => <LocationCard key={i} l={l} i={i} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 8. HERITAGE MOMENT
// ============================================================
const Heritage = () => {
  const COPY = useCopy();
  const c = COPY.heritage;
  return (
    <section data-screen-label="08 Heritage" style={{ background: 'var(--sepia-700)', color: 'var(--cream-100)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 640,
      }}>
        {/* left: editorial macro — herbal cabinet (百子柜) wall at Richmond flagship */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="assets/heritage/hero-richmond-herbal-cabinet-baizigui.jpg" alt="Traditional herbal medicine cabinet wall at Canadian Western TCM Richmond flagship clinic" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'sepia(0.18) saturate(0.85) contrast(1.06) brightness(0.94) hue-rotate(-4deg)',
          }} />
          {/* one calligraphic moment — small ink stamp overlay */}
          <div style={{
            position: 'absolute', bottom: 32, left: 32,
            fontFamily: 'var(--font-serif-zh)', fontSize: 56, fontWeight: 600,
            color: 'rgba(178, 58, 46, 0.92)',
            letterSpacing: '0.08em', lineHeight: 1,
            transform: 'rotate(-3deg)',
            border: '2px solid rgba(178, 58, 46, 0.92)',
            padding: '12px 14px',
          }}>傳</div>
        </div>
        <div style={{
          padding: '96px 80px', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', maxWidth: 640,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--cream-400)', marginBottom: 24,
          }}>{c.eyebrow}</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.012em',
            color: 'var(--cream-50)', margin: '0 0 32px 0',
          }}>{c.h2}</h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85,
            color: 'var(--cream-200)', margin: 0,
          }}>{c.body}</p>
        </div>
      </div>
    </section>
  );
};


export { Treatments, Conditions, Locations, Heritage };
