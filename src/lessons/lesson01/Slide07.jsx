import SlideLayout from '../../components/SlideLayout/SlideLayout'

const techItems = [
  {
    title: '計算速度の向上',
    example: '例：よりメモリが少なく計算できるようになる',
    effect: '→ 大量に並列計算できる',
    color: '#5b7a9d',
  },
  {
    title: '新たな価値創造',
    example: '例：大規模言語モデル（ChatGPT）',
    effect: '→ 新たな産業・サービスの誕生',
    color: '#4a8c6a',
  },
]

const designItems = [
  {
    title: 'レスポンシブデザイン',
    desc: '各デバイスサイズで最適化するデザイン',
    color: '#7a6b5a',
  },
  {
    title: 'クリエイティブコーディング',
    desc: 'アルゴリズムを表現・造形・音楽へ応用',
    color: '#8c4a6a',
  },
]

export default function Slide07() {
  return (
    <SlideLayout title="アルゴリズムと現代テクノロジー" lessonTag="01">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-text-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>テクノロジー</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {techItems.map((item) => (
              <div key={item.title} style={{
                padding: '20px 24px',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-raised-sm)',
                borderRadius: 'var(--radius-md)',
                borderLeft: `4px solid ${item.color}`,
              }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '2rem', color: item.color }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-text-secondary)' }}>{item.example}</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '1.6rem', color: 'var(--color-text-tertiary)' }}>{item.effect}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-text-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>デザイン</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {designItems.map((item) => (
              <div key={item.title} style={{
                padding: '20px 24px',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-raised-sm)',
                borderRadius: 'var(--radius-md)',
                borderLeft: `4px solid ${item.color}`,
              }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '2rem', color: item.color }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
