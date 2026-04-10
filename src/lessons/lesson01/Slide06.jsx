import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'
import CodeBlock from '../../components/CodeBlock/CodeBlock'

export default function Slide06() {
  return (
    <SlideLayout title="アルゴリズムとは？" lessonTag="01">
      <InfoBox variant="definition" title="アルゴリズム (Algorithm)">
        <p style={{ fontSize: '2rem', lineHeight: 1.6 }}>
          問題を解くための手順。<br />
          どのような操作を、どのような順序で行うかを、<strong>曖昧さが残らないようにきっちりと定めたもの</strong>。
        </p>
      </InfoBox>
      <p style={{ fontSize: '1.8rem', color: 'var(--color-text-secondary)', margin: '16px 0 10px' }}>例：nの階乗を求める手順</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
        }}>
          <h4 style={{ marginBottom: '12px', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '1.6rem' }}>アルゴリズム（手順）</h4>
          <ol style={{ paddingLeft: '28px', fontSize: '1.8rem', lineHeight: 1.9, color: 'var(--color-text-secondary)', margin: 0 }}>
            <li><code>a</code> に <code>n</code> を格納</li>
            <li><code>n-1</code> を <code>n</code> に代入</li>
            <li><code>a × n</code> を <code>ans</code> に代入</li>
            <li><code>n</code> が1でなければ 2 に戻る</li>
          </ol>
        </div>
        <div>
          <CodeBlock
            title="factorial.c"
            language="c"
            code={`int factorial(int n) {
  int ans = n;
  while (n > 1) {
    n--;
    ans *= n;
  }
  return ans;
}`}
          />
        </div>
      </div>
      <InfoBox variant="info" title="良いアルゴリズムには驚きがある" style={{ marginTop: '14px' }}>
        <p style={{ fontSize: '1.8rem' }}>
          <strong style={{ fontFamily: 'var(--font-mono)' }}>(input + 5) / 10 * 10</strong>
          &emsp;— 「1の位を四捨五入する」をたった1行で表現できる
        </p>
      </InfoBox>
    </SlideLayout>
  )
}
