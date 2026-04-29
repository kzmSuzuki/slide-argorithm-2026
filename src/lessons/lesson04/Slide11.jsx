import '../lesson02/lesson02Slides.css'

// from algo04 slide10.jsx
export default function Slide11() {
  return (

        <section className="lesson02-slide" data-label="Quiz - question">
          <div className="slide-eyebrow">12 / QUIZ</div>
          <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "24px" }}>“</div>
            <div style={{ fontSize: "76px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1500px", letterSpacing: "-0.02em" }}>
              次の選択肢のうち、<br /><span className="text-accent-dark">正しいもの</span>を選べ
            </div>
            <div style={{ marginTop: "48px", fontFamily: "var(--font-mono)", fontSize: "40px", color: "var(--color-text-tertiary)" }}>
              レコード と キー、それぞれ何？
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Quiz</div>
            <div className="sf-right">12 / 33</div>
          </div>
        </section>
  )
}
