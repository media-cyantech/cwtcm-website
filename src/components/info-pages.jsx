// ⚠️ 由 scripts/esmify.mjs 从 ../../info-pages.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import React from 'react';
import { useStrings } from '../data/i18n.jsx';
import { resources } from '../data/resources.js';
import { Clauses } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// ============================================================
// info-pages.jsx — FAQPage / FirstVisitPage / ContactPage
// All read STRINGS.{faq,firstVisit,contact}.en (lang-aware default to .en)
// Reuses shared Nav, Footer, atoms; matches the About / Conditions chrome.
// ============================================================

// 非组件函数不能调 hook，STRINGS 改成显式传入（原为模块顶层读全局）。
const pickInfo = (STRINGS, key) => STRINGS[key][STRINGS.lang] || STRINGS[key].en;

// ============================================================
// Shared dark hero (used by all three info pages)
// ============================================================
const InfoHero = ({ eyebrow, h1, sub }) => (
  <section data-screen-label="01 Hero" style={{
    position: 'relative',
    background: 'var(--sepia-700)', color: 'var(--cream-50)',
    minHeight: 'auto', padding: '0 0 96px',
    overflow: 'hidden',
  }}>
    {/* soft sepia art overlay — texture, no photo */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      background:
        'radial-gradient(900px 360px at 12% -20%, rgba(184,148,96,0.18), transparent 70%), ' +
        'radial-gradient(700px 400px at 92% 10%, rgba(178,58,46,0.10), transparent 60%)',
      pointerEvents: 'none',
    }} />
    <Nav theme="dark" />
    <div className="container" style={{
      position: 'relative', paddingTop: 200, maxWidth: 1080,
    }}>
      <div className="eyebrow" style={{
        color: 'rgba(247,241,229,0.78)', marginBottom: 18,
      }}>{eyebrow}</div>
      <h1 className="h-display" style={{
        color: 'var(--cream-50)',
        fontSize: 'clamp(40px, 5.4vw, 72px)',
        marginBottom: 20, maxWidth: 900, textWrap: 'balance',
      }}><Clauses text={h1} /></h1>
      {sub && (
        <p className="lede" style={{
          color: 'rgba(247,241,229,0.82)', fontStyle: 'italic',
          maxWidth: 620, margin: 0,
        }}>{sub}</p>
      )}
    </div>
  </section>
);

// ============================================================
// FAQPage
// ============================================================
const FAQPage = () => {
  const STRINGS = useStrings();
  const c = pickInfo(STRINGS, 'faq');
  return (
    <>
      <InfoHero {...c.hero} />
      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary::marker { content: ''; }
        .faq-item[open] .faq-icon { transform: rotate(45deg); background: var(--cream-100); }
      `}</style>
      <section data-screen-label="02 Q&A" className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          {c.items.map((item, i) => (
            <FAQItem key={i} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </section>
      <FAQStillAsk c={c.stillAsk} />
      <Footer />
    </>
  );
};

// 原来是 button + useState 做展开/收起——全站没有一处开水合，浏览器里这段
// React 状态从不会更新，点了没反应。改成原生 <details>/<summary>，展开/收起
// 由浏览器原生实现，不需要一行 JS。
const FAQItem = ({ item, defaultOpen }) => (
  <details className="faq-item" open={!!defaultOpen} style={{
    borderBottom: '1px solid var(--sepia-100)',
    padding: '32px 0',
  }}>
    <summary style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      gap: 32, color: 'var(--sepia-700)', cursor: 'pointer', listStyle: 'none',
    }}>
      <h3 className="h-card" style={{
        fontSize: 'clamp(20px, 1.8vw, 26px)',
        margin: 0, lineHeight: 1.35, flex: 1,
        fontWeight: 600,
      }}>{item.q}</h3>
      <span aria-hidden className="faq-icon" style={{
        flexShrink: 0,
        width: 32, height: 32, marginTop: 4,
        border: '1px solid var(--sepia-200)',
        borderRadius: 4,
        display: 'grid', placeItems: 'center',
        color: 'var(--sepia-500)',
        transition: 'transform 240ms cubic-bezier(.22,.61,.36,1), background 200ms',
        fontSize: 18, lineHeight: 1,
      }}>+</span>
    </summary>
    <p
      className="body"
      style={{
        fontSize: 17, lineHeight: 1.7,
        color: 'var(--sepia-600)', maxWidth: 720,
        margin: '18px 0 0 0',
      }}
      dangerouslySetInnerHTML={{ __html: item.a }}
    />
  </details>
);

const FAQStillAsk = ({ c }) => (
  <section data-screen-label="03 Still ask" data-comment-anchor="faq-cta" style={{
    background: 'var(--sepia-700)', color: 'var(--cream-50)',
    padding: '96px 0',
  }}>
    <div className="container" style={{
      textAlign: 'center', maxWidth: 720, margin: '0 auto',
    }}>
      <h2 className="h-section" style={{
        color: 'var(--cream-50)', margin: '0 0 16px',
      }}>{c.headline}</h2>
      <p className="lede" style={{
        color: 'var(--cream-300)', margin: '0 0 40px', fontSize: 20,
      }}>{c.sub}</p>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24,
        flexWrap: 'wrap',
      }}>
        <a href={c.primaryHref} className="btn btn-primary" style={{ padding: '18px 32px' }}>{c.primary}</a>
        <a href={c.secondaryHref} style={{
          color: 'var(--cream-300)',
          fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
          textTransform: 'uppercase',
          borderBottom: '1px solid rgba(247,241,229,0.4)',
          paddingBottom: 4,
        }}>{c.secondary}</a>
      </div>
    </div>
  </section>
);

// ============================================================
// FirstVisitPage
// ============================================================
const FirstVisitPage = () => {
  const STRINGS = useStrings();
  const c = pickInfo(STRINGS, 'firstVisit');
  return (
    <>
      <InfoHero {...c.hero} />
      <FirstVisitSteps steps={c.steps} />
      <FirstVisitDetails c={c.details} />
      <FAQStillAsk c={c.cta} />
      <Footer />
    </>
  );
};

const FirstVisitSteps = ({ steps }) => (
  <section data-screen-label="02 Steps" className="section">
    <div className="container" style={{ maxWidth: 1080 }}>
      {steps.map((s, i) => (
        <div key={i} className="iv-step-grid" style={{
          display: 'grid', gridTemplateColumns: '120px 1fr',
          gap: 56, alignItems: 'baseline',
          padding: '40px 0',
          borderBottom: i < steps.length - 1 ? '1px solid var(--sepia-100)' : 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 56, color: 'var(--sepia-300)',
            lineHeight: 1, fontStyle: 'italic',
          }}>{s.n}</div>
          <div>
            <h3 className="h-card" style={{
              fontSize: 'clamp(24px, 2.4vw, 32px)',
              margin: '0 0 14px', fontWeight: 600,
            }}>{s.h3}</h3>
            <p className="body" style={{
              fontSize: 18, lineHeight: 1.7,
              color: 'var(--sepia-600)', maxWidth: 720, margin: 0,
            }}>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FirstVisitDetails = ({ c }) => (
  <section data-screen-label="03 Details" className="section" style={{
    background: 'var(--cream-100)',
    borderTop: '1px solid var(--sepia-100)',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 40 }}>{c.eyebrow}</div>
      <div className="iv-details-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 56,
      }}>
        {c.items.map((it, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--sepia-500)',
              marginBottom: 10,
            }}>{it.label}</div>
            <p
              className="body"
              style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--sepia-700)', margin: 0 }}
              dangerouslySetInnerHTML={{ __html: it.body }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// ContactPage
// ============================================================
const ContactPage = () => {
  const STRINGS = useStrings();
  const c = pickInfo(STRINGS, 'contact');
  return (
    <>
      <InfoHero {...c.hero} />
      <ContactNap eyebrow={c.napEyebrow} clinics={c.clinics} />
      <ContactFormSection c={c.form} clinics={c.clinics} wechat={c.wechat} />
      <Footer />
    </>
  );
};

const ContactNap = ({ eyebrow, clinics }) => {
  const STRINGS = useStrings();
  return (
  <section data-screen-label="02 NAP" className="section">
    <div className="container">
      <div className="eyebrow" style={{ marginBottom: 40 }}>{eyebrow}</div>
      <div className="contact-nap-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24,
      }}>
        {clinics.map((cl, i) => (
          <div key={i} className="clinic-card contact-card-inner-grid" style={{
            background: 'var(--cream-100)',
            border: '1px solid var(--sepia-100)',
            padding: '32px 36px 28px',
            borderRadius: 4,
            display: 'grid', gridTemplateColumns: '1fr 280px',
            gap: 28, alignItems: 'stretch',
          }}>
            <div>
              <h3 className="h-card" style={{
                fontSize: 28, margin: '0 0 14px', fontWeight: 600,
              }}>{cl.city}</h3>
              <div className="body" style={{
                fontSize: 15, lineHeight: 1.7,
                color: 'var(--sepia-600)', marginBottom: 16,
              }}>
                {cl.address}
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14,
                color: 'var(--sepia-700)',
              }}>
                <a href={`tel:${cl.phone.replace(/[^+\d]/g, '')}`} style={{
                  color: 'var(--sepia-700)', fontWeight: 600,
                  borderBottom: '1px solid var(--sepia-200)',
                  paddingBottom: 2, alignSelf: 'flex-start',
                }}>{cl.phone}</a>
                <div style={{ color: 'var(--sepia-500)' }}>{cl.hours}</div>
              </div>
              <div style={{
                marginTop: 22,
                display: 'flex', gap: 22, flexWrap: 'wrap',
                fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
              }}>
                <a href={cl.href} style={{
                  color: 'var(--sepia-700)',
                  borderBottom: '1px solid var(--sepia-300)', paddingBottom: 3,
                }}>{(STRINGS.contact[STRINGS.lang] || STRINGS.contact.en).cardCta || 'Visit clinic →'}</a>
                <a href={cl.directions} target="_blank" rel="noopener" style={{
                  color: 'var(--sepia-500)',
                  borderBottom: '1px solid var(--sepia-200)', paddingBottom: 3,
                }}>{(STRINGS.contact[STRINGS.lang] || STRINGS.contact.en).directions || 'Get directions →'}</a>
              </div>
            </div>
            <ClinicMapTile cl={cl} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

// Real Google Maps embed per clinic (keyless q=address &output=embed).
// For production, swap to the official Google Maps Embed API using the
// client's API key: https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=<address>
// The q value (the full address) stays the same.
const ClinicMapTile = ({ cl }) => (
  <div className="clinic-map" style={{
    width: '100%',
    minHeight: 230,
    alignSelf: 'stretch',
    background: 'var(--cream-200)',
    border: '1px solid var(--sepia-100)',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  }}>
    <iframe
      title={`Map of ${cl.city} — ${cl.address}`}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(cl.address)}&output=embed`}
      style={{
        border: 0, display: 'block',
        width: '100%', height: '100%',
        position: 'absolute', inset: 0,
        filter: 'sepia(0.12) saturate(0.9) contrast(1.02)',
      }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
);

const ContactFormSection = ({ c, clinics, wechat }) => (
  <section data-screen-label="03 Write to us" className="section" style={{
    background: 'var(--cream-100)',
    borderTop: '1px solid var(--sepia-100)',
  }}>
    <div className="container contact-form-grid" style={{
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80,
    }}>
      <ContactForm c={c} clinics={clinics} />
      <ContactWeChat c={wechat} />
    </div>
  </section>
);

const ContactForm = ({ c, clinics }) => {
  const STRINGS = useStrings();
  const inputStyle = {
    width: '100%',
    background: 'var(--cream-50)',
    border: '1px solid var(--sepia-200)',
    borderRadius: 4,
    padding: '14px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--sepia-700)',
    outline: 'none',
    transition: 'border-color 180ms',
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: 12, fontWeight: 600, letterSpacing: '0.06em',
    textTransform: 'uppercase', color: 'var(--sepia-500)',
    marginBottom: 8,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // [Form submission endpoint TBC]
    const msg = STRINGS.lang === 'zh'
      ? '表单提交端点待确认——请暂时致电诊所。'
      : 'Form submission endpoint TBC — please call the clinic for now.';
    alert(msg);
  };
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 18 }}>{c.eyebrow}</div>
      <h2 className="h-section" style={{ margin: '0 0 32px' }}><Clauses text={c.h2} /></h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 22, maxWidth: 560 }}>
        <div>
          <label style={labelStyle} htmlFor="contact-name">{c.fields.name}</label>
          <input id="contact-name" type="text" required style={inputStyle} />
        </div>
        <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div>
            <label style={labelStyle} htmlFor="contact-email">{c.fields.email}</label>
            <input id="contact-email" type="email" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="contact-phone">{c.fields.phone}</label>
            <input id="contact-phone" type="tel" style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-clinic">{c.fields.clinic}</label>
          <select id="contact-clinic" style={inputStyle} defaultValue="">
            <option value="" disabled>{c.fields.clinicDefault}</option>
            {clinics.map((cl, i) => (
              <option key={i} value={cl.city}>{cl.city}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-message">{c.fields.message}</label>
          <textarea id="contact-message" rows="5" required style={{
            ...inputStyle, resize: 'vertical', minHeight: 130,
          }} />
        </div>
        <p
          className="body"
          style={{
            fontSize: 13, color: 'var(--sepia-500)', margin: 0, lineHeight: 1.6,
            fontStyle: 'italic',
          }}
        >{c.helper}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 4, flexWrap: 'wrap' }}>
          <button type="submit" className="btn btn-primary" style={{
            padding: '14px 28px', fontSize: 13, cursor: 'pointer', border: 'none',
          }}>{c.submit}</button>
          <span
            style={{ fontSize: 12, color: 'var(--sepia-400)', fontStyle: 'italic' }}
            dangerouslySetInnerHTML={{ __html: c.disabled }}
          />
        </div>
      </form>
    </div>
  );
};

const ContactWeChat = ({ c }) => (
  <div style={{
    background: 'var(--cream-50)',
    border: '1px solid var(--sepia-100)',
    borderRadius: 4,
    padding: 32,
    alignSelf: 'start',
    textAlign: 'center',
  }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
    <div style={{
      width: 200, height: 200,
      background: 'var(--cream-50)',
      border: '1px solid var(--sepia-100)',
      borderRadius: 4,
      margin: '0 auto 22px',
      padding: 12,
      display: 'grid', placeItems: 'center',
    }}>
      <img
        src={resources.r_brand_wechat_qr_png}
        alt="WeChat QR"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    <div style={{
      fontFamily: 'var(--font-display)',
      fontSize: 20, fontStyle: 'italic',
      color: 'var(--sepia-700)', marginBottom: 6,
    }}>{c.title}</div>
    <div className="body" style={{
      fontSize: 14, color: 'var(--sepia-500)', margin: 0,
    }}>{c.sub}</div>
  </div>
);


export { FAQPage, FirstVisitPage, ContactPage };
