import SlideLayout from '../../components/SlideLayout/SlideLayout'

const rules = [
  { text: '今、机においてあるカードの中から「７」を探してください。' },
  { text: '最短で見つけられたチームの勝ち' },
  { text: '一度しか挑戦できないので、じっくり考えてください。' },
]

export default function Slide19() {
  return (
    <SlideLayout title="ルール説明" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
        {rules.map((rule, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            padding: '28px 36px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '6px solid var(--color-accent)',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '3.2rem',
              color: 'var(--color-accent)',
              opacity: 0.5,
              minWidth: '48px',
            }}>{i + 1}</span>
            <p style={{ margin: 0, fontSize: '2.2rem', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>{rule.text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
