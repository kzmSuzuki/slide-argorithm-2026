import SlideLayout from '../../components/SlideLayout/SlideLayout'

const rows = [
  { notation: 'O(1)',       name: '定数時間',   example: '配列のインデックスアクセス', color: '#4a8c6a', bar: 2 },
  { notation: 'O(log n)',   name: '対数時間',   example: '二分探索',                  color: '#5b8a5b', bar: 8 },
  { notation: 'O(n)',       name: '線形時間',   example: '線形探索',                  color: '#5b7a9d', bar: 22 },
  { notation: 'O(n log n)', name: '準線形時間', example: 'マージソート',              color: '#7a6b5a', bar: 42 },
  { notation: 'O(n²)',      name: '二乗時間',   example: 'バブルソート',              color: '#8c6a5a', bar: 66 },
  { notation: 'O(2ⁿ)',      name: '指数時間',   example: '部分和問題（素朴解法）',    color: '#8c4a4a', bar: 92 },
]

export default function Slide12() {
  return (
    <SlideLayout title="主要な計算量クラス" lessonTag="01">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {rows.map((r) => (
          <div key={r.notation} style={{
            display: 'grid',
            gridTemplateColumns: '180px 200px 1fr 300px',
            alignItems: 'center',
            gap: '16px',
            padding: '10px 20px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-md)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '2rem', color: r.color }}>{r.notation}</span>
            <span style={{ fontSize: '1.8rem', color: 'var(--color-text-secondary)' }}>{r.name}</span>
            <div style={{ height: '10px', borderRadius: '5px', background: 'var(--color-surface-inset)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${r.bar}%`, background: r.color, borderRadius: '5px' }} />
            </div>
            <span style={{ fontSize: '1.6rem', color: 'var(--color-text-tertiary)', textAlign: 'right' }}>{r.example}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.8rem', color: 'var(--color-text-tertiary)', marginTop: '12px' }}>
        n が大きくなるにつれ、計算量クラスの差は劇的に拡大する
      </p>
    </SlideLayout>
  )
}
