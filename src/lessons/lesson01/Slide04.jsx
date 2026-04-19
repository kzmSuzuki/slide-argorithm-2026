import SlideLayout from '../../components/SlideLayout/SlideLayout'

const rules = [
  {
    icon: '💻',
    text: '授業ではプログラミングによる演習を行います。PCを持参してください。',
  },
  {
    icon: '📝',
    text: '各授業の最後、授業改善のためのアンケートへの回答にご協力ください。',
  },
]

export default function Slide04() {
  return (
    <SlideLayout title="ルール" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '16px' }}>
        {rules.map((rule, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '28px',
            padding: '36px 40px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <span style={{ fontSize: '4rem', lineHeight: 1, minWidth: '64px', textAlign: 'center' }}>{rule.icon}</span>
            <p style={{ margin: 0, fontSize: '2.4rem', color: 'var(--color-text-primary)', lineHeight: 1.7 }}>{rule.text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
