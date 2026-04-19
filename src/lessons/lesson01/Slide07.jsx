import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide07() {
  return (
    <SlideLayout title="アルゴリズムとは？" lessonTag="01">
      <InfoBox variant="definition" title="アルゴリズム (Algorithm)">
        <p style={{ fontSize: '2.2rem', lineHeight: 1.7 }}>
          <strong>問題を解くための手順。</strong><br />
          どのような操作を、どのような順序で行うかを、<br />
          曖昧さが残らないようにきっちりと定めたもの。
        </p>
      </InfoBox>

      <p style={{ fontSize: '2rem', color: 'var(--color-text-secondary)', margin: '20px 0 14px' }}>
        例：nの階乗を求める手順
      </p>

      <div style={{
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-raised-sm)',
        borderRadius: 'var(--radius-md)',
        padding: '24px 32px',
      }}>
        <ol style={{ paddingLeft: '32px', fontSize: '2rem', lineHeight: 2, color: 'var(--color-text-secondary)', margin: 0 }}>
          <li><code>a</code> に <code>n</code> を格納</li>
          <li><code>n-1</code> を <code>n</code> に代入</li>
          <li><code>a</code> と <code>n</code> をかけたものを <code>ans</code> に代入</li>
          <li><code>n</code> が1でなければ、2に戻る</li>
        </ol>
      </div>
    </SlideLayout>
  )
}
