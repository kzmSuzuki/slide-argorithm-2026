import SlideLayout from '../../components/SlideLayout/SlideLayout'

const cards = [
  { notation: 'O(n)',     example: '総和',        desc: '1個増えたら1回増える',                    color: '#5b7a9d' },
  { notation: 'O(n²)',   example: '重複チェック', desc: '1個増えたら他の全てとの計算 = n回増える', color: '#8c6a5a' },
  { notation: 'O(log n)', example: '—',          desc: '—',                                       color: '#4a8c6a' },
]

export default function Slide21() {
  return (
    <SlideLayout title="O記法（オーダー記法）" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-secondary)' }}>
          扱うデータ数（n）が多ければ計算量は大きくなる。
        </p>
        <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-secondary)' }}>
          悪いアルゴリズムを選択すると、数百・数千倍の計算時間がかかる。言葉通り「桁が違う」。
        </p>
        <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-primary)' }}>
          具体的な計算時間は考えず、<strong>nが増えたらどれくらい大きくなるか</strong>という「引数nの関数」として考える。
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {cards.map((item) => (
          <div key={item.notation} style={{
            padding: '24px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-md)',
            borderLeft: `4px solid ${item.color}`,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3rem', color: item.color, marginBottom: '8px' }}>{item.notation}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>{item.example}</div>
            <div style={{ fontSize: '1.7rem', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
