import SlideLayout from '../../components/SlideLayout/SlideLayout'

const goals = [
  { number: '01', text: 'アルゴリズムとは何か、その条件を説明できる' },
  { number: '02', text: '何を基準にしてアルゴリズムを選択すれば良いかわかる' },
  { number: '03', text: '計算量を見積もることができる' },
]

export default function Slide05() {
  return (
    <SlideLayout title="今日のゴールイメージ" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
        {goals.map((g) => (
          <div key={g.number} style={{
            display: 'flex', alignItems: 'center', gap: '28px',
            padding: '28px 36px', background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)', borderRadius: 'var(--radius-lg)',
            borderLeft: '5px solid var(--color-accent)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3.8rem', color: 'var(--color-accent)', opacity: 0.4, minWidth: '72px', lineHeight: 1 }}>{g.number}</span>
            <p style={{ fontSize: '2.4rem', color: 'var(--color-text-primary)', margin: 0, lineHeight: 1.5 }}>{g.text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
