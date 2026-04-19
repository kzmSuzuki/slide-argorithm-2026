import SlideLayout from '../../components/SlideLayout/SlideLayout'

const cases = [
  {
    title: 'ページランク',
    desc: 'リンクが貼られているほど重要なページとして検索上位に来るアルゴリズム',
    valuation: '500億円',
    note: '使用権の代わりに大学に譲渡した株の売却価格より算出',
    color: '#5b7a9d',
  },
  {
    title: 'Sakana AI',
    desc: '生物進化を模倣するアルゴリズムで高性能・低コストのAIを開発',
    valuation: '1,600億円',
    note: '企業価値',
    color: '#4a8c6a',
  },
]

export default function Slide11() {
  return (
    <SlideLayout title="アルゴリズムとアントレプレナーシップ（回答）" lessonTag="01">
      <p style={{ fontSize: '2.2rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
        アルゴリズムで起業できる。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {cases.map((c) => (
          <div key={c.title} style={{
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{ background: c.color, padding: '14px 24px' }}>
              <h3 style={{ margin: 0, fontSize: '2.8rem', color: '#fff' }}>{c.title}</h3>
            </div>
            <div style={{ padding: '20px 24px' }}>
              <p style={{ margin: '0 0 20px 0', fontSize: '1.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{c.desc}</p>
              <div style={{
                padding: '14px 20px',
                background: 'var(--color-surface-inset)',
                borderRadius: 'var(--radius-md)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3.2rem', color: c.color }}>
                  {c.valuation}
                </div>
                <div style={{ fontSize: '1.6rem', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>{c.note}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
