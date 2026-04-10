import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'

const cards = [
  { notation: 'O(n)',     example: '総和',        desc: '1個増えたら1回増える',                     color: '#5b7a9d' },
  { notation: 'O(n²)',    example: '重複チェック', desc: '1個増えたら他の全てとの計算 = n回増える',   color: '#8c6a5a' },
  { notation: 'O(log n)', example: '二分探索',     desc: '半分ずつ絞り込む → 増え方が非常に緩やか',  color: '#4a8c6a' },
]

export default function Slide11() {
  return (
    <SlideLayout title="O記法（ビッグオー記法）" lessonTag="01">
      <InfoBox variant="definition" title="O記法とは">
        <p style={{ fontSize: '1.9rem', lineHeight: 1.6 }}>
          nが増えたらどれくらい計算量が大きくなるか、という「引数nの関数」として計算量を表す記法。<br />
          具体的な計算時間は考えず、<strong>成長のオーダー</strong>だけを捉える。
        </p>
      </InfoBox>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '16px' }}>
        {cards.map((item) => (
          <div key={item.notation} style={{
            padding: '24px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-md)',
            borderTop: `4px solid ${item.color}`,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '3rem', color: item.color, marginBottom: '8px' }}>{item.notation}</div>
            <div style={{ fontSize: '1.7rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>{item.example}</div>
            <div style={{ fontSize: '1.6rem', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '14px', fontSize: '1.8rem', color: 'var(--color-text-tertiary)' }}>
        悪いアルゴリズムを選択すると、数百・数千倍の計算時間がかかる。言葉通り「桁が違う」。
      </p>
    </SlideLayout>
  )
}
