// Slide 26 — Linked List - insertion example（S,U,Z,H の並びは固定、AFTER は矢印のみ差し替え）
import './lesson02Slides.css'

const H_GAP = 80

function BrokenLink() {
  return (
    <div className="insertion-broken-link" aria-hidden>
      <span className="insertion-broken-link__x">×</span>
      <div className="insertion-broken-link__line" />
    </div>
  )
}

export default function Slide26() {
  return (
    <section className="lesson02-slide" data-label="Linked List - insertion example">
      <div className="slide-eyebrow">27 / INSERTION</div>
      <h1 className="slide-title">
        リストへの挿入 —{' '}
        <span className="slide-small" style={{ fontFamily: 'var(--font-mono)' }}>
          S と U の間に H を入れたい
        </span>
      </h1>
      <div
        className="slide-body-wrap"
        style={{
          marginTop: '40px',
          gap: '28px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            maxWidth: '1700px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          {/* BEFORE */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '26px',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              BEFORE
            </div>
            <div
              className="neu-inset"
              style={{
                padding: '32px 40px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                width: '100%',
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
              <div style={{ width: H_GAP, flexShrink: 0 }} aria-hidden />
              <div className="ll-node" style={{ opacity: 0.65 }}>
                <div className="ll-data" style={{ color: 'var(--color-accent-dark)' }}>
                  H
                </div>
                <div className="ll-ptr">未接続</div>
              </div>
            </div>
          </div>

          <div className="insertion-between-section" aria-hidden>
            ↓
          </div>

          {/* AFTER：H の位置は BEFORE と同じ（右端）。矢印のみ変更 */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '26px',
                color: 'var(--color-accent)',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              AFTER
            </div>
            <div className="neu-inset insertion-after-canvas">
              <p className="insertion-after-caption" style={{"opacity":"0"}}>例：SとUの間にHをいれたい</p>

              <svg className="insertion-after-svg" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker
                    id="ins-arrow-orange"
                    markerWidth="9"
                    markerHeight="9"
                    refX="8"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,0 L9,4 L0,8 z" fill="#e67e22" />
                  </marker>
                </defs>

                {/* S のポインタ付近から H のデータへ（オレンジ） */}
                <polyline
                  points="100,130 100,158 870,158 870,125"
                  fill="none"
                  stroke="#e67e22"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  markerEnd="url(#ins-arrow-orange)"
                />

                {/* H のポインタから U のデータへ（オレンジ） */}
                <polyline
                  points="960,20 960,0 300,0 300,30"
                  fill="none"
                  stroke="#e67e22"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  markerEnd="url(#ins-arrow-orange)"
                />
              </svg>

              <div className="insertion-after-row">
                <div className="ll-node">
                  <div className="ll-data">S</div>
                  <div className="ll-ptr">next →</div>
                </div>
                <BrokenLink />
                <div className="ll-node">
                  <div className="ll-data">U</div>
                  <div className="ll-ptr">next →</div>
                </div>
                <div className="ll-arrow">→</div>
                <div className="ll-node">
                  <div className="ll-data">Z</div>
                  <div className="ll-ptr">NULL</div>
                </div>
                <div style={{ width: H_GAP, flexShrink: 0 }} aria-hidden />
                <div className="ll-node">
                  <div className="ll-data" style={{ color: 'var(--color-accent-dark)' }}>
                    H
                  </div>
                  <div className="ll-ptr">next →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Insertion
        </div>
      </div>
    </section>
  )
}
