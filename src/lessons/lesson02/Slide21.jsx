// Slide 22 — Linked List - basic structure
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide21() {
  return (
    <section className="lesson02-slide" data-label="Linked List - basic structure">
      <div className="slide-eyebrow">22 / DATA STRUCTURE ②</div>
      <h1 className="slide-title">
        リスト{' '}
        <span
          className="slide-small"
          style={{ fontFamily: 'var(--font-mono)', marginLeft: '24px' }}
        >
          — Linked List
        </span>
      </h1>
      <div
        className="slide-body-wrap"
        style={{
          marginTop: '64px',
          gap: '56px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          className="neu-inset"
          style={{
            padding: '64px 48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: 0,
            rowGap: 24,
            width: '100%',
            maxWidth: '1700px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <div className="ll-node">
            <div className="ll-data">S</div>
            <div className="ll-ptr">next →</div>
          </div>
          <div className="ll-arrow">→</div>
          <div className="ll-node">
            <div className="ll-data">U</div>
            <div className="ll-ptr">next →</div>
          </div>
          <div className="ll-arrow">→</div>
          <div className="ll-node">
            <div className="ll-data">Z</div>
            <div className="ll-ptr">NULL</div>
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
          <span className="text-accent-dark">データを入れる箱</span>と、
          <span className="text-accent-dark">次のデータがあるアドレスを保管するポインタ</span>
          からなる
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Linked List
        </div>
      </div>
    </section>
  )
}
