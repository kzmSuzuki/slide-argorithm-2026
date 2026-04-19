import SlideLayout from '../../components/SlideLayout/SlideLayout'
import CodeBlock from '../../components/CodeBlock/CodeBlock'

export default function Slide23() {
  return (
    <SlideLayout title="（クイズ）次の計算量はいくらか？" lessonTag="01">
      <p style={{ fontSize: '2rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
        以下のコードの計算量を考えよう。
      </p>
      <CodeBlock
        language="c"
        code={`// 配列 a[n] の全ての要素の和を求める
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += a[i];
}`}
      />
      <div style={{
        marginTop: '24px',
        padding: '24px 32px',
        background: 'var(--color-surface-inset)',
        borderRadius: 'var(--radius-lg)',
        fontSize: '2.2rem',
        color: 'var(--color-text-tertiary)',
      }}>
        この処理の計算量は？ &emsp; O( ? )
      </div>
    </SlideLayout>
  )
}
