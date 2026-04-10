import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide09() {
  return (
    <SlideLayout title="アルゴリズムとプログラムの違い" lessonTag="01">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '8px' }}>
        <div style={{
          padding: '32px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-lg)',
          borderTop: '5px solid #5b7a9d',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '12px' }}>📐</div>
          <h3 style={{ color: '#5b7a9d', margin: '0 0 12px 0', fontSize: '2.8rem' }}>アルゴリズム</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '2rem', lineHeight: 1.7, margin: 0 }}>
            問題を解くための<strong>手順を定めたもの</strong>。<br />
            言語に依存しない抽象的な概念。
          </p>
        </div>
        <div style={{
          padding: '32px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-lg)',
          borderTop: '5px solid #4a8c6a',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '12px' }}>💻</div>
          <h3 style={{ color: '#4a8c6a', margin: '0 0 12px 0', fontSize: '2.8rem' }}>プログラム</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '2rem', lineHeight: 1.7, margin: 0 }}>
            アルゴリズムを計算機に載せるための<br />
            <strong>表現方法の1つ</strong>。
          </p>
        </div>
      </div>
      <InfoBox variant="info" title="関係性">
        <p style={{ fontSize: '1.8rem' }}>
          アルゴリズム → 設計図&emsp;&emsp;プログラム → 実装<br />
          同じアルゴリズムを Python / C / Java など異なる言語で書ける
        </p>
      </InfoBox>
    </SlideLayout>
  )
}
