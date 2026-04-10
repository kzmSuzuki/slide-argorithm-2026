import SlideLayout from '../../components/SlideLayout/SlideLayout'

const grades = [
  { label: '期末試験', pct: 70, color: '#5b7a9d' },
  { label: 'リフレクションシート（3回）', pct: 20, color: '#4a8c6a' },
  { label: '授業ごとのワーク', pct: 10, color: '#7a6b5a' },
]

export default function Slide03() {
  return (
    <SlideLayout title="成績評価" lessonTag="01">
      <div style={{ marginBottom: '20px', fontSize: '2.2rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        前期 50%&emsp;＋&emsp;後期 50%
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {grades.map((g) => (
          <div key={g.label} style={{
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '18px 24px',
              gap: '20px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '3.8rem',
                color: g.color,
                minWidth: '110px',
              }}>{g.pct}%</span>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '8px', fontSize: '2rem', color: 'var(--color-text-primary)' }}>{g.label}</div>
                <div style={{ height: '10px', borderRadius: '5px', background: 'var(--color-surface-inset)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${g.pct}%`,
                    background: g.color,
                    borderRadius: '5px',
                  }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '20px', fontSize: '1.8rem', color: 'var(--color-text-tertiary)' }}>
        前期内訳 合計 100%
      </p>
    </SlideLayout>
  )
}
