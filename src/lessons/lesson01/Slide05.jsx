import SlideLayout from '../../components/SlideLayout/SlideLayout'

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

export default function Slide05() {
  return (
    <SlideLayout title="関連DP" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '8px' }}>
        {dps.map((dp) => (
          <div key={dp.id} style={{
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              background: dp.color,
              padding: '14px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '2rem', color: '#fff', opacity: 0.8 }}>{dp.id}</span>
              <span style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fff' }}>{dp.label}</span>
            </div>
            <div style={{ padding: '20px 28px' }}>
              <p style={{ margin: 0, fontSize: '1.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{dp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
