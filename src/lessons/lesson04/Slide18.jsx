import '../lesson02/lesson02Slides.css'

// from algo04 slide17.jsx
export default function Slide18() {
  return (

        <section className="lesson02-slide" data-label="Linear complexity - question">
          <div className="slide-eyebrow">19 / COMPLEXITY · ASK</div>
          <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "32px" }}>“</div>
            <div style={{ fontSize: "84px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1500px", letterSpacing: "-0.02em" }}>
              線形探索の<br />
              <span className="text-accent-dark">計算量</span>は<br />
              どれくらい？
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Complexity?</div>
            <div className="sf-right">19 / 33</div>
          </div>
        </section>
  )
}
