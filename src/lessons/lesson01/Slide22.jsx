import SlideLayout from '../../components/SlideLayout/SlideLayout'

const items = [
  {
    notation: 'O(n)',
    label: '線形',
    example: '例：総和',
    desc: '1個増えたら1回増える',
    color: '#5b7a9d',
    bars: 6,
  },
  {
    notation: 'O(n²)',
    label: '二乗',
    example: '例：重複チェック',
    desc: '1個増えたら他の全てとの計算 = n回増える',
    color: '#8c6a5a',
    bars: 36,
  },
]

export default function Slide22() {
  return (
    <SlideLayout title="オーダーの感覚を身に着けよう" lessonTag="01">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
        {items.map((item) => (
          <div key={item.notation} style={{
            padding: '32px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: `6px solid ${item.color}`,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '4rem', color: item.color, marginBottom: '12px' }}>
              {item.notation}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>{item.example}</div>
            <div style={{ fontSize: '1.9rem', color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>{item.desc}</div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {Array.from({ length: Math.min(item.bars, 36) }).map((_, i) => (
                <div key={i} style={{
                  width: '20px', height: '20px',
                  borderRadius: '4px',
                  background: item.color,
                  opacity: 0.6 + (i / Math.min(item.bars, 36)) * 0.4,
                }} />
              ))}
            </div>
            <div style={{ marginTop: '8px', fontSize: '1.6rem', color: 'var(--color-text-tertiary)' }}>
              n=6 のとき: {item.bars}回
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
