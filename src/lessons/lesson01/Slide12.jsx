import SlideLayout from '../../components/SlideLayout/SlideLayout'

export default function Slide12() {
  return (
    <SlideLayout title="アルゴリズムとプログラムの違い" lessonTag="01">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '16px' }}>
        <div style={{
          padding: '40px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-lg)',
          borderLeft: '6px solid #5b7a9d',
        }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '16px' }}>📐</div>
          <h3 style={{ color: '#5b7a9d', margin: '0 0 16px 0', fontSize: '3rem' }}>アルゴリズム</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '2.2rem', lineHeight: 1.7, margin: 0 }}>
            問題を解くための<strong>手順を定めたもの</strong>。
          </p>
        </div>
        <div style={{
          padding: '40px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-lg)',
          borderLeft: '6px solid #4a8c6a',
        }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '16px' }}>💻</div>
          <h3 style={{ color: '#4a8c6a', margin: '0 0 16px 0', fontSize: '3rem' }}>プログラム</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '2.2rem', lineHeight: 1.7, margin: 0 }}>
            アルゴリズムを計算機に載せるための<strong>表現方法の1つ</strong>。
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
