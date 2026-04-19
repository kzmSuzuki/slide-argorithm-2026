// Slide 23 — Linked List - memory layout
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide22() {
  return (
    <section className="lesson02-slide" data-label="Linked List - memory layout">
      <div className="slide-eyebrow">23 / MEMORY LAYOUT</div>
      <h1 className="slide-title">リスト — メモリ配置</h1>
      <div
        className="slide-body-wrap"
        style={{
          marginTop: '56px',
          gap: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          className="neu-inset"
          style={{
            padding: '48px',
            width: '100%',
            maxWidth: '1700px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '28px',
              color: 'var(--color-text-tertiary)',
              marginBottom: '24px',
            }}
          >
            MEMORY
          </div>
          <div
            className="mem-row"
            style={{ flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}
          >
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell" style={{ background: 'rgba(91,122,157,0.15)' }}>
              S
            </div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell" style={{ background: 'rgba(91,122,157,0.15)' }}>
              Z
            </div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell" style={{ background: 'rgba(91,122,157,0.15)' }}>
              U
            </div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell mem-cell--empty">…</div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '26px',
              color: 'var(--color-accent-dark)',
              marginTop: '28px',
              wordBreak: 'break-all',
            }}
          >
            S (0x04) → U (0x12) → Z (0x08) → NULL
          </div>
        </div>
        <div
          className="callout"
          style={{
            fontSize: '38px',
            padding: '36px 48px',
            textAlign: 'center',
            maxWidth: '1700px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          次の要素が必ずしも、
          <span className="text-accent-dark">メモリ的にとなりではない</span>
          （ポインタで繋がっているだけ）
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Memory layout
        </div>
      </div>
    </section>
  )
}
