import SlideLayout from '../../components/SlideLayout/SlideLayout'
import InfoBox from '../../components/InfoBox/InfoBox'

export default function Slide17() {
  return (
    <SlideLayout title="計算量" lessonTag="01">
      <InfoBox variant="definition" title="計算量とは">
        <p style={{ fontSize: '2.4rem', lineHeight: 1.7 }}>
          <strong>計算量 ＝ 命令の実行時間の総和</strong>
        </p>
      </InfoBox>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        <div style={{
          padding: '24px 32px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-md)',
          borderLeft: '5px solid var(--color-accent)',
        }}>
          <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            原理的には厳密に考えるのは面倒なため、<br />
            プログラム上で各文がどれくらい実行されるかを数えて目安にする。
          </p>
        </div>
        <div style={{
          padding: '24px 32px',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-raised-sm)',
          borderRadius: 'var(--radius-md)',
        }}>
          <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            現実的には、プログラム上でそれぞれの文がどれくらい実行されるかを数えて、<br />
            計算量の目安にしている。
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
