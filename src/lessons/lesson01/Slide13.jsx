import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide13() {
  return (
    <SlideLayout title="コーディング課題" lessonTag="01">
      <div style={{ marginTop: '20px' }}>
        <div style={{
          padding: '40px 48px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised)',
          borderRadius: 'var(--radius-xl)',
          borderLeft: '6px solid var(--color-accent)',
        }}>
          <p style={{ margin: 0, fontSize: '2.8rem', color: 'var(--color-text-primary)', lineHeight: 1.7 }}>
            C言語で<br />
            「入力した値の1の位を四捨五入するプログラム」<br />
            を作成せよ。
          </p>
        </div>

      </div>
    </SlideLayout>
  )
}
