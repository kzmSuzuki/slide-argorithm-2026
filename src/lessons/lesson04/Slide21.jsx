import '../lesson02/lesson02Slides.css'

// from algo04 slide20.jsx
export default function Slide21() {
  return (

        <section className="lesson02-slide" data-label="Linear complexity verdict">
          <div className="slide-eyebrow">22 / VERDICT</div>
          <h1 className="slide-title">線形探索の計算量 — 結論</h1>
          <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", gap: "48px" }}>
            <div style={{
              padding: "60px 96px",
              background: "var(--color-surface)",
              borderRadius: "32px",
              boxShadow: "var(--shadow-raised)",
              fontFamily: "var(--font-mono)",
              fontSize: "144px",
              fontWeight: 700,
              color: "var(--color-accent-dark)",
              letterSpacing: "0.02em",
            }}>O(n)</div>
            <div className="quote-block" style={{ textAlign: "center", fontSize: "44px", padding: "32px 56px", maxWidth: "1500px" }}>
              データが増えると、<br />
              <span className="text-accent-dark">計算量は比例して増える</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Verdict</div>
            <div className="sf-right">22 / 33</div>
          </div>
        </section>
  )
}
