import SlideLayout from '../../components/SlideLayout/SlideLayout'

const rules = [
  {
    icon: '💻',
    text: '授業ではプログラミングによる演習を行います。PCを持参してください。',
  },
  {
    icon: '🏆',
    text: '演習では、コーディングの速度を競うことがあります。上位者にはポイントを付与し、学期末に1位を表彰します。',
  },
  {
    icon: '📝',
    text: '各授業の最後、授業改善のためのアンケートへの回答にご協力ください。',
  },
]

export default function Slide04() {
  return (
    <SlideLayout title="ルール" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
        {rules.map((rule, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px',
            padding: '24px 28px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <span style={{ fontSize: '3.5rem', lineHeight: 1, minWidth: '60px', textAlign: 'center' }}>{rule.icon}</span>
            <p style={{ margin: 0, fontSize: '2.2rem', color: 'var(--color-text-primary)', lineHeight: 1.7 }}>{rule.text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
