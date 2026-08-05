import { useStrings } from '../data/i18n.jsx';
import { Clauses } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// ⚠️ 由 scripts/esmify.mjs 从 ../../journal-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

// ============================================================
// journal-page.jsx — "launching soon" transition page (Journal.html / Journal-ZH.html)
// Reuses shared Nav + Footer. Reads STRINGS.journalPage. Lang-aware via STRINGS.lang.
// Pure brand copy — no medical claims, no practitioner/treatment cards.
// ============================================================

const JournalPage = () => {
  const STRINGS = useStrings();
  const j = STRINGS.journalPage;
  const isZh = STRINGS.lang === 'zh';
  return (
    <>
      <Nav theme="light" active={STRINGS.nav.items[5]} />

      <section data-screen-label="01 Journal" style={{
        background: 'var(--cream-100)',
        minHeight: '78vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* faint 4-bird heritage accent, centered above the block */}
        <svg width="80" height="52" viewBox="0 0 46 30" aria-hidden="true" style={{
          position: 'absolute', top: '16%', left: '50%', transform: 'translateX(-50%)',
          opacity: 0.18, pointerEvents: 'none',
        }}>
          <g stroke="#B89460" strokeWidth="1" fill="none" strokeLinecap="round">
            <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
            <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
            <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
            <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
          </g>
        </svg>

        <div className="container" style={{
          maxWidth: 760, margin: '0 auto', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: isZh ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: isZh ? 14 : 12, fontWeight: 600,
            letterSpacing: isZh ? '0.22em' : '0.18em',
            textTransform: isZh ? 'none' : 'uppercase',
            color: 'var(--sepia-400)', marginBottom: 30,
          }}>{j.eyebrow}</div>

          <h1 style={{
            fontFamily: isZh ? 'var(--font-serif-zh)' : 'var(--font-display)',
            fontWeight: 500,
            fontSize: isZh ? 'clamp(36px, 4.6vw, 60px)' : 'clamp(40px, 5vw, 68px)',
            lineHeight: isZh ? 1.2 : 1.08,
            letterSpacing: isZh ? '0.01em' : '-0.015em',
            color: 'var(--sepia-700)', margin: '0 0 30px', textWrap: 'balance',
          }}><Clauses text={j.title} /></h1>

          <p style={{
            fontFamily: isZh ? 'var(--font-sans-zh)' : 'var(--font-display)',
            fontStyle: isZh ? 'normal' : 'italic',
            fontSize: isZh ? 17 : 20, lineHeight: isZh ? 1.85 : 1.6,
            color: 'var(--sepia-500)', margin: '0 0 44px', maxWidth: 600, textWrap: 'pretty',
          }}>{j.body}</p>

          <a href={j.ctaHref} className="btn btn-primary" style={{ padding: '17px 32px' }}>{j.cta}</a>

          <div style={{
            marginTop: 40,
            fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
            letterSpacing: isZh ? '0.1em' : '0.18em',
            textTransform: isZh ? 'none' : 'uppercase',
            color: 'var(--sepia-400)',
          }}>{j.expected}</div>
        </div>
      </section>

      <Footer />
    </>
  );
};


export { JournalPage };
