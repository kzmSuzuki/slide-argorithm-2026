import SlideLayout from '../../components/SlideLayout/SlideLayout'

export default function Slide20() {
  return (
    <SlideLayout title="ワーク解説" lessonTag="01">
      <div style={{
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-raised-sm)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <div style={{
          padding: '14px 24px',
          background: 'rgba(91,122,157,0.06)',
          borderBottom: '1px solid rgba(91,122,157,0.1)',
          fontWeight: 700,
          fontSize: '2rem',
          color: 'var(--color-text-secondary)',
        }}>
          n枚のカードがある場合
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          {[
            { label: '最短', value: '1回', color: '#4a8c6a', note: '最初のカードが当たり' },
            { label: '最大', value: 'n回', color: '#8c4a4a', note: '最後まで見つからない' },
            { label: '平均', value: '(1+2+…+n) / n', color: '#5b7a9d', note: 'すべての場合の平均' },
          ].map((item, i, arr) => (
            <div key={item.label} style={{
              padding: '24px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(91,122,157,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--color-text-tertiary)', marginBottom: '10px' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3rem', color: item.color, marginBottom: '8px' }}>{item.value}</div>
              <div style={{ fontSize: '1.7rem', color: 'var(--color-text-tertiary)' }}>{item.note}</div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '2rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
        ただし、「データが整列されている」など、データの構造に特徴があれば計算量は変わる。
      </p>
    </SlideLayout>
  )
}
