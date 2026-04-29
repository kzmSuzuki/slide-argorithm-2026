import '../lesson02/lesson02Slides.css'

// from algo04 slide14.jsx
export default function Slide15() {
  const Row = ({ name, status }) => (
    <div className="row" style={{
      gap: '20px',
      alignItems: 'center',
      padding: '18px 32px',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: status === 'match' ? '0 0 0 3px var(--color-accent), var(--shadow-raised)' : 'var(--shadow-raised-sm)',
      minWidth: '560px',
    }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: 'var(--color-text-tertiary)', minWidth: '80px' }}>name[{status === 'match' ? '2' : status === 'miss1' ? '0' : status === 'miss2' ? '1' : 'i'}]</div>
      <div style={{ flex: 1, fontSize: '40px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', color: status === 'match' ? 'var(--color-accent)' : '#a66666', fontWeight: 700 }}>
        {status === 'match' ? '← 一致！ ◎' : '← 違う！'}
      </div>
    </div>
  )
  return (
    <section className="lesson02-slide" data-label="Linear search example">
      <div className="slide-eyebrow">16 / LINEAR · EXAMPLE</div>
      <h1 className="slide-title">例 — <span className="code-inline">「神山まるみ」</span> はいる？</h1>
      <div className="slide-body-wrap" style={{ marginTop: '32px', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '26px', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
          name[100][20]
        </div>
        <Row name="神山まる子" status="miss1" />
        <Row name="神山まるお" status="miss2" />
        <Row name="神山まるみ" status="match" />
        <div className="row" style={{ gap: '20px', alignItems: 'center', padding: '18px 32px', minWidth: '560px', justifyContent: 'center' }}>
          <div style={{ fontSize: '32px', color: 'var(--color-text-tertiary)' }}>⋮</div>
        </div>
        <div className="callout" style={{ fontSize: '40px', padding: '24px 36px', marginTop: '20px' }}>
          どう、<span className="text-accent-dark">プログラムする？</span>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Example</div>
        <div className="sf-right">16 / 33</div>
      </div>
    </section>
  )
}
