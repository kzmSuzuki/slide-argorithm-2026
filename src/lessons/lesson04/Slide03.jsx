// 関連DP（Lesson 04 用）
import '../lesson02/lesson02Slides.css'

const dps = [
  {
    id: '①-1',
    label: '知識の活用',
    color: '#5b7a9d',
    text: 'エンジニアリングの基礎知識（アルゴリズム、データ構造、ネットワーク、データベース、セキュリティ、ハードウェア等）を適切に理解し、これらを有機的に組み合わせて新たな価値を提案できる。',
  },
  {
    id: '④-2',
    label: '構造的思考',
    color: '#4a8c6a',
    text: '複数の視点や知識を組み合わせ、物事を構造として捉え、課題の原因や関係性を整理し、価値創出につなげることができる。',
  },
]

export default function Slide03() {
  return (
    <section className="lesson02-slide" data-label="Related DP">
      <div className="slide-eyebrow">04 / RELATED DP</div>
      <h1 className="slide-title">関連DP</h1>
      <div className="slide-body-wrap" style={{ marginTop: '48px', gap: '28px', justifyContent: 'center' }}>
        {dps.map((dp) => (
          <div
            key={dp.id}
            className="neu-card"
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                background: dp.color,
                padding: '20px 36px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '2rem',
                  color: '#fff',
                  opacity: 0.8,
                }}
              >
                {dp.id}
              </span>
              <span style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff' }}>
                {dp.label}
              </span>
            </div>
            <div style={{ padding: '28px 36px' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '2rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.8,
                }}
              >
                {dp.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Algorithm #04 · DP</div>
      </div>
    </section>
  )
}
