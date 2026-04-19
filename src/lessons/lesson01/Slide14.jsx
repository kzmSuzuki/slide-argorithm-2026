import SlideLayout from '../../components/SlideLayout/SlideLayout'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide14() {
  return (
    <SlideLayout title="コーディング課題 — 回答" lessonTag="01">
      <p style={{ fontSize: '2rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
        C言語で「入力した値の1の位を四捨五入するプログラム」を作成せよ。
      </p>
      <CodeBlock
        title="回答例"
        language="c"
        code={`(input + 5) / 10 * 10;`}
      />
      <InfoBox variant="info" title="良いアルゴリズムには驚きがある">
        <p style={{ fontSize: '2rem', lineHeight: 1.7 }}>
          たった1行の式で「四捨五入」が完成する。<br />
          シンプルさの中に、数学的な美しさがある。
        </p>
      </InfoBox>
    </SlideLayout>
  )
}
