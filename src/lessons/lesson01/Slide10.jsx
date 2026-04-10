import SlideLayout from '../../components/SlideLayout/SlideLayout'

export default function Slide10() {
  return (
    <SlideLayout title="計算量" lessonTag="01">
      <div style={{
        padding: '20px 28px',
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-raised-sm)',
        borderRadius: 'var(--radius-md)',
        marginBottom: '20px',
        borderLeft: '5px solid var(--color-accent)',
      }}>
        <p style={{ margin: 0, fontSize: '2.4rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          計算量 ＝ 命令の実行時間の総和
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '1.9rem', color: 'var(--color-text-secondary)' }}>
          プログラム上で各文がどれくらい実行されるかを数えて目安にする。
        </p>
      </div>
      <div style={{
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-raised-sm)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        marginBottom: '16px',
      }}>
        <div style={{
          padding: '12px 20px',
          background: 'rgba(91,122,157,0.06)',
          borderBottom: '1px solid rgba(91,122,157,0.1)',
          fontWeight: 600,
          fontSize: '1.8rem',
          color: 'var(--color-text-secondary)',
        }}>
          線形探索の計算量（n枚のカードを探す場合）
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '0' }}>
          {[
            { label: '最短', value: '1回', color: '#4a8c6a', note: '最初のカードが当たり' },
            { label: '最大', value: 'n回', color: '#8c4a4a', note: '最後まで見つからない' },
            { label: '平均', value: '(1+2+…+n) / n', color: '#5b7a9d', note: 'すべての場合の平均' },
          ].map((item, i, arr) => (
            <div key={item.label} style={{
              padding: '20px 24px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(91,122,157,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.6rem', color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '2.6rem', color: item.color, marginBottom: '6px' }}>{item.value}</div>
              <div style={{ fontSize: '1.5rem', color: 'var(--color-text-tertiary)' }}>{item.note}</div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '1.8rem', color: 'var(--color-text-tertiary)' }}>
        データが整列されているなど、データ構造に特徴があれば計算量は変わる
      </p>
    </SlideLayout>
  )
}
