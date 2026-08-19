// ⚠️ 由 scripts/esmify.mjs 从 ../../sections-9-12.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import React from 'react';
import { useStrings, useCopy } from '../data/i18n.jsx';
import { resources } from '../data/resources.js';
import { Clauses, ArticlePlaceholder } from './atoms.jsx';
// Sections 9–12: Testimonials, Journal, Newsletter, Footer

// ============================================================
// 9. TESTIMONIALS
// ============================================================
const TestimonialCard = ({ q }) => (
  <article style={{ display: 'flex', flexDirection: 'column', padding: '8px 0' }}>
    <div style={{
      width: 6, height: 6, borderRadius: '50%',
      background: 'var(--vermilion)', marginBottom: 32,
    }} />
    <p style={{
      fontFamily: 'var(--font-display)', fontStyle: 'italic',
      fontWeight: 400, fontSize: 24, lineHeight: 1.45,
      color: 'var(--sepia-700)', margin: '0 0 32px 0',
    }}>{q.quote}</p>
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: 'var(--sepia-400)',
    }}>— {q.attr}</div>
  </article>
);

const Testimonials = () => {
  const COPY = useCopy();
  const c = COPY.testimonials;
  const reviews = c.reviews || c.quotes || []; // real, consented reviews go in c.reviews
  return (
    <section data-screen-label="09 Testimonials" className="section" style={{ background: 'var(--cream-100)' }}>
      <div className="container">
        <div style={{ marginBottom: reviews.length ? 64 : 40 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section" style={{ maxWidth: 760 }}><Clauses text={c.h2} /></h2>
        </div>
        {reviews.length ? (
          <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64 }}>
            {reviews.map((q, i) => <TestimonialCard key={i} q={q} />)}
          </div>
        ) : (
          <div style={{
            border: '1px dashed var(--sepia-200)', borderRadius: 4,
            background: 'var(--cream-50)', padding: '56px 32px', textAlign: 'center',
            maxWidth: 720, margin: '0 auto',
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--vermilion)', margin: '0 auto 24px',
            }} />
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 22, lineHeight: 1.5, color: 'var(--sepia-500)', margin: 0,
            }}>{c.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================
// 10. JOURNAL
// ============================================================
const ArticleCard = ({ a, kind }) => (
  <article style={{ cursor: 'pointer' }}>
    <div style={{ marginBottom: 20 }}>
      <ArticlePlaceholder kind={kind} />
    </div>
    <div style={{
      fontSize: 10, fontWeight: 500, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--sepia-400)',
      marginBottom: 12,
    }}>{a.tag}</div>
    <h3 style={{
      fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500,
      lineHeight: 1.2, color: 'var(--sepia-700)', margin: '0 0 14px 0',
    }}>{a.title}</h3>
    <p style={{
      fontSize: 13, lineHeight: 1.65, color: 'var(--sepia-500)',
      margin: '0 0 18px 0',
    }}>{a.excerpt}</p>
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: 'var(--sepia-400)',
    }}>{a.read}</div>
  </article>
);

const Journal = () => {
  const COPY = useCopy();
  const STRINGS = useStrings();
  const c = COPY.journal;
  const kinds = ['pulse', 'icbc', 'sleep'];
  return (
    <section data-screen-label="10 Journal" className="section" style={{ background: 'var(--cream-200)' }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section">{c.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {c.cards.map((a, i) => <ArticleCard key={i} a={a} kind={kinds[i]} />)}
        </div>
        <div style={{ marginTop: 56, textAlign: 'right' }}>
          <a href={`Journal${STRINGS.lang === 'zh' ? '-ZH' : ''}.html`} className="btn-ghost" style={{
            fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--sepia-600)', borderBottom: '1px solid var(--sepia-300)',
            paddingBottom: 6,
          }}>{STRINGS.journalViewAll}</a>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 11. NEWSLETTER
// ============================================================
const Newsletter = () => {
  const COPY = useCopy();
  const c = COPY.newsletter;
  return (
    <section data-screen-label="11 Newsletter" style={{
      background: 'var(--cream-100)',
      borderTop: '1px solid var(--sepia-100)',
      borderBottom: '1px solid var(--sepia-100)',
      padding: '56px 0',
    }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
        alignItems: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 24, lineHeight: 1.4, color: 'var(--sepia-600)', margin: 0,
        }}>{c.text}</p>
        <form style={{ display: 'flex', gap: 12 }} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder={c.placeholder} style={{
            flex: 1, padding: '16px 20px', background: 'var(--cream-50)',
            border: '1px solid var(--sepia-200)', borderRadius: 2,
            fontFamily: 'var(--font-sans)', fontSize: 14,
            color: 'var(--sepia-700)', outline: 'none',
          }} />
          <button className="btn btn-primary" type="submit" style={{ padding: '16px 32px' }}>
            {c.button}
          </button>
        </form>
      </div>
    </section>
  );
};

// ============================================================
// 12. FOOTER
// ============================================================
const FooterColumn = ({ title, children }) => (
  <div>
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--cream-400)',
      marginBottom: 24, paddingBottom: 14,
      borderBottom: '1px solid rgba(184, 148, 96, 0.4)',
    }}>{title}</div>
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      fontSize: 13, color: 'var(--cream-200)', lineHeight: 1.6,
    }}>{children}</div>
  </div>
);

const Footer = () => {
  const STRINGS = useStrings();
  const COPY = useCopy();
  const f = STRINGS.footer;
  const isZh = STRINGS.lang === 'zh';
  const sfx = isZh ? '-ZH' : '';
  const locs = COPY.locations.cards;
  // Slug maps — order matches footer.treatmentNames / conditionNames in BOTH languages.
  const TREATMENT_SLUGS = ['acupuncture', 'tui-na', 'manual-bone-setting', 'moxibustion', 'cupping-gua-sha', 'head-therapy', 'herbal-medicine', 'aesthetic-acupuncture'];
  const CONDITION_SLUGS = ['pain-injury', 'icbc-recovery', 'sleep-stress', 'digestion', 'womens-health', 'fertility-pregnancy', 'skin-acne', 'headaches-migraines'];
  const CLINIC_SLUGS = ['Locations-Richmond', 'Locations-Burnaby', 'Locations-Vancouver', 'Locations-WhiteRock'];
  const LEGAL_ANCHORS = ['privacy', 'terms', 'cancellation', 'cookies']; // order matches f.legal in both languages
  const telHref = (phone) => `tel:+1${(phone || '').replace(/\D/g, '')}`;
  return (
  <footer data-screen-label="12 Footer" style={{
    background: 'var(--sepia-700)', color: 'var(--cream-100)',
    padding: '80px 0 32px',
  }}>
    <div className="container">
      <div style={{
        display: 'flex', alignItems: 'center', gap: 22,
        paddingBottom: 48, marginBottom: 56,
        borderBottom: '1px solid rgba(184, 148, 96, 0.4)',
      }}>
        <img src={resources.r_brand_logo_tight_avif} alt="加西中医 Canadian Western TCM" style={{
          height: 88, width: 'auto', display: 'block',
          filter: 'brightness(0) invert(1)',
        }} />
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 800,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--cream-50)', lineHeight: 1.25,
          borderLeft: '1px solid rgba(247,241,229,0.3)',
          paddingLeft: 22,
        }}>
          Canadian<br />Western TCM
        </div>
        <div style={{
          marginLeft: 'auto',
          fontFamily: isZh ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontStyle: isZh ? 'normal' : 'italic',
          fontSize: 18, color: 'var(--cream-300)', maxWidth: 420,
          textAlign: 'right', lineHeight: 1.6, textWrap: 'balance',
        }}>{f.tagline.map((line, i) => (
          <React.Fragment key={i}>{line}{i < f.tagline.length - 1 && <br />}</React.Fragment>
        ))}</div>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr 1fr', gap: 48,
        marginBottom: 64,
      }}>
        <FooterColumn title={f.columns.locations}>
          {locs.map((l, i) => (
            <div key={i}>
              <a href={`${CLINIC_SLUGS[i]}${sfx}.html`} style={{ color: 'var(--cream-50)' }}><strong>{l.city}</strong></a><br />
              {l.address.split(',')[0]}<br />
              <a href={telHref(l.phone)} style={{ color: 'var(--cream-300)' }}>{l.phone}</a>
            </div>
          ))}
        </FooterColumn>

        <FooterColumn title={f.columns.treatments}>
          {f.treatmentNames.map((n, i) => <a key={i} href={`Treatments/${TREATMENT_SLUGS[i]}${sfx}.html`}>{n}</a>)}
          <a href={`Treatments${sfx}.html`} style={{ color: 'var(--cream-400)', marginTop: 6 }}>{f.viewAll}</a>
        </FooterColumn>

        <FooterColumn title={f.columns.conditions}>
          {f.conditionNames.map((n, i) => <a key={i} href={`Conditions/${CONDITION_SLUGS[i]}${sfx}.html`}>{n}</a>)}
          <a href={`Conditions${sfx}.html`} style={{ color: 'var(--cream-400)', marginTop: 6 }}>{f.viewAll}</a>
        </FooterColumn>

        <FooterColumn title={f.columns.resources}>
          {f.resourceLinks.map((n, i) => {
            const enMap = {
              'About': 'About.html',
              'FAQ': 'FAQ.html',
              'First Visit Guide': 'First-Visit.html',
              'Contact': 'Contact.html',
              'Browse the full team': 'Practitioners.html',
              'The Journal': 'Journal.html',
              'ICBC Insurance': 'Conditions/icbc-recovery.html',
            };
            const zhMap = {
              '关于我们': 'About-ZH.html',
              '常见问题': 'FAQ-ZH.html',
              '首次就诊指南': 'First-Visit-ZH.html',
              '联系我们': 'Contact-ZH.html',
              '浏览完整团队': 'Practitioners-ZH.html',
              '资讯': 'Journal-ZH.html',
              'ICBC 保险': 'Conditions/icbc-recovery-ZH.html',
            };
            const href = (isZh ? zhMap : enMap)[n];
            return <a key={i} href={href}>{n}</a>;
          })}
        </FooterColumn>

        <FooterColumn title={f.columns.connected}>
          <div style={{
            display: 'flex', gap: 14, fontSize: 14, fontWeight: 500,
            marginBottom: 8, alignItems: 'center',
          }}>
            {isZh ? (
              <>
                <a href={STRINGS.otherLang.href} style={{ color: 'var(--cream-400)', textDecoration: 'underline', textDecorationColor: 'rgba(184,148,96,0.4)', textUnderlineOffset: 4 }}>EN</a>
                <span style={{ color: 'var(--cream-400)' }}>·</span>
                <span style={{ fontFamily: 'var(--font-serif-zh)', color: 'var(--cream-50)' }}>中文</span>
              </>
            ) : (
              <>
                <span style={{ color: 'var(--cream-50)' }}>EN</span>
                <span style={{ color: 'var(--cream-400)' }}>·</span>
                <a href={STRINGS.otherLang.href} style={{ fontFamily: 'var(--font-serif-zh)', color: 'var(--cream-400)', textDecoration: 'underline', textDecorationColor: 'rgba(184,148,96,0.4)', textUnderlineOffset: 4 }}>中文</a>
              </>
            )}
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 4, flexWrap: 'wrap' }}>
            {[
              { src: resources.r_brand_wechat_qr_png, label: isZh ? '微信' : 'WeChat' },
              { src: resources.r_brand_xiaohongshu_qr_png, label: '小红书' },
              { src: resources.r_brand_instagram_qr_png, label: 'Instagram' },
            ].map((q, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 74, height: 74, background: 'var(--cream-50)', padding: 5,
                  borderRadius: 4, display: 'grid', placeItems: 'center',
                }}>
                  <img src={q.src} alt={`${q.label} QR`} style={{
                    width: '100%', height: '100%', objectFit: 'contain', display: 'block',
                  }} />
                </div>
                <div style={{
                  marginTop: 6, fontSize: 10, letterSpacing: '0.06em', color: 'var(--cream-300)',
                }}>{q.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--cream-400)', marginTop: 10 }}>
            {isZh ? '扫码关注我们' : 'Scan to connect with us'}
          </div>
        </FooterColumn>
      </div>

      <div style={{
        paddingTop: 28,
        borderTop: '1px solid rgba(184, 148, 96, 0.4)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 11, color: 'var(--cream-400)', letterSpacing: '0.04em',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div>{f.copyright}</div>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {f.legal.map((n, i) => <a key={i} href={`Legal${sfx}.html#${LEGAL_ANCHORS[i]}`}>{n}</a>)}
        </div>
      </div>
    </div>
  </footer>
  );
};


export { Testimonials, Journal, Newsletter, Footer };
