import SlideLayout from '../../components/SlideLayout/SlideLayout'

const cases = [
  {
    label: '起業事例',
    title: 'ページランク',
    desc: 'リンクが貼られているほど重要なページとして検索上位に来るアルゴリズム',
    valuation: '500億円',
    note: '使用権の代わりに大学に譲渡した株の売却価格より算出',
    color: '#5b7a9d',
  },
  {
    label: '起業事例',
    title: 'Sakana AI',
    desc: '生物進化を模倣するアルゴリズムで高性能・低コストのAIを開発',
    valuation: '1,600億円',
    note: '企業価値',
    color: '#4a8c6a',
  },
]

export default function Slide08() {
  return (
    <SlideLayout title="アルゴリズムで起業できる" lessonTag="01">
      <p style={{ fontSize: '2rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
        アルゴリズム ＝ 事業の核になりうる
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {cases.map((c) => (
          <div key={c.title} style={{
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              background: c.color,
              padding: '10px 20px',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>{c.label}</div>
            <div style={{ padding: '20px 24px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '2.8rem', color: 'var(--color-text-primary)' }}>{c.title}</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '1.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{c.desc}</p>
              <div style={{
                padding: '12px 18px',
                background: 'var(--color-surface-inset)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3rem', color: c.color }}>{c.valuation}</span>
                <span style={{ fontSize: '1.6rem', color: 'var(--color-text-tertiary)' }}>{c.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '16px', fontSize: '1.8rem', color: 'var(--color-text-tertiary)' }}>
        アルゴリズムそのものが、世界規模の価値を持ちうる
      </p>
    </SlideLayout>
  )
}
