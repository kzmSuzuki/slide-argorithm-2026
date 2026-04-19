import SlideLayout from '../../components/SlideLayout/SlideLayout'

export default function Slide15() {
  return (
    <SlideLayout variant="title" lessonTag="01" title="先人の知識を活用しよう">
      <p style={{ fontSize: '2.4rem', color: 'var(--color-text-secondary)', marginTop: '24px', lineHeight: 1.8 }}>
        アルゴリズムの多くは、すでに先人によって発見・整理されている。<br />
        学ぶことで、巨人の肩に立てる。
      </p>
    </SlideLayout>
  )
}
