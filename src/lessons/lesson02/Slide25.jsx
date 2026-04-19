// Slide 25 — Linked List - operations question（Slide17 と同型の問いかけ）
import './lesson02Slides.css'

export default function Slide25() {
  return (
    <section className="lesson02-slide" data-label="Linked List - operations question">
      <div className="slide-eyebrow">26 / LINKED LIST · QUESTION</div>
      <h1 className="slide-title">各データ操作は簡単？手間がかかる？</h1>
      <div
        className="slide-body-wrap"
        style={{ marginTop: '72px', justifyContent: 'center' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            maxWidth: '1500px',
            width: '100%',
          }}
        >
          <div
            className="neu-card"
            style={{ padding: '44px 48px', display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <div className="neu-num-badge" style={{ color: 'var(--color-accent)', fontSize: '44px' }}>
              C
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                挿入
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '30px',
                  color: 'var(--color-text-tertiary)',
                  marginTop: '8px',
                }}
              >
                ？
              </div>
            </div>
          </div>
          <div
            className="neu-card"
            style={{ padding: '44px 48px', display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <div className="neu-num-badge" style={{ color: 'var(--color-accent)', fontSize: '44px' }}>
              R
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                読み出す
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '30px',
                  color: 'var(--color-text-tertiary)',
                  marginTop: '8px',
                }}
              >
                ？
              </div>
            </div>
          </div>
          <div
            className="neu-card"
            style={{ padding: '44px 48px', display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <div className="neu-num-badge" style={{ color: 'var(--color-accent)', fontSize: '44px' }}>
              U
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                更新
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '30px',
                  color: 'var(--color-text-tertiary)',
                  marginTop: '8px',
                }}
              >
                ？
              </div>
            </div>
          </div>
          <div
            className="neu-card"
            style={{ padding: '44px 48px', display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <div className="neu-num-badge" style={{ color: 'var(--color-accent)', fontSize: '44px' }}>
              D
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                削除
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '30px',
                  color: 'var(--color-text-tertiary)',
                  marginTop: '8px',
                }}
              >
                ？
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Linked List · Question
        </div>
      </div>
    </section>
  )
}
