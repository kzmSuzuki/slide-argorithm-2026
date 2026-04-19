import SlideLayout from '../../components/SlideLayout/SlideLayout'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide24() {
  return (
    <SlideLayout title="（クイズ）次の計算量はいくらか？ — 回答" lessonTag="01">
      <CodeBlock
        language="c"
        code={`// 配列 a[n] の全ての要素の和を求める
int sum = 0;
for (int i = 0; i < n; i++) {  // n回実行
    sum += a[i];                // n回実行
}`}
      />
      <InfoBox variant="definition" title="計算量は O(n)">
        <p style={{ fontSize: '2rem', lineHeight: 1.7 }}>
          ループが n 回実行されるため、<br />
          実行される命令の総数は n に比例する。
        </p>
      </InfoBox>
    </SlideLayout>
  )
}
