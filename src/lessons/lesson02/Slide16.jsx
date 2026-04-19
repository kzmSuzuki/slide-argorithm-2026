// Slide 17 — Array - structure
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

const INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Slide16() {
  return (
    <section className="lesson02-slide" data-label="Array - structure">
      <div className="slide-eyebrow">17 / DATA STRUCTURE ①</div>
      <h1 className="slide-title">
        配列{' '}
        <span
          className="slide-small"
          style={{ fontFamily: 'var(--font-mono)', marginLeft: '24px' }}
        >
          — Array
        </span>
      </h1>
      <div
        className="slide-body-wrap"
        style={{
          marginTop: '64px',
          gap: '56px',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        <div
          className="neu-inset"
          style={{
            padding: '56px 48px',
            width: '100%',
            maxWidth: '1700px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '32px',
              color: 'var(--color-text-tertiary)',
              marginBottom: '28px',
            }}
          >
            char arr[100]
          </div>
          <div className="mem-row mem-row--array">
            <div className="mem-cell">S</div>
            <div className="mem-cell">U</div>
            <div className="mem-cell">Z</div>
            <div className="mem-cell">U</div>
            <div className="mem-cell">K</div>
            <div className="mem-cell">I</div>
            <div className="mem-cell">
              <span style={{ fontSize: '32px', color: 'var(--color-accent)' }}>
                {'\\0'}
              </span>
            </div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell mem-cell--empty">…</div>
            <div className="mem-cell mem-cell--empty">…</div>
          </div>
          <div className="mem-index-row">
            {INDEXES.map((n) => (
              <div key={n}>[{n}]</div>
            ))}
          </div>
        </div>
        <div
          className="callout"
          style={{
            fontSize: '40px',
            padding: '40px 48px',
            maxWidth: '1700px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          次の要素が（物理的＝メモリ的にも）
          <span className="text-accent-dark">となりに存在</span>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Array
        </div>
      </div>
    </section>
  )
}
