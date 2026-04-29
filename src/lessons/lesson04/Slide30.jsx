import '../lesson02/lesson02Slides.css'

// from algo04 slide29.jsx
export default function Slide30() {
  return (

        <section className="lesson02-slide" data-label="Check 2 - representatives">
          <div className="slide-eyebrow">31 / CHECK ②</div>
          <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "32px" }}>“</div>
            <div style={{ fontSize: "72px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1600px", letterSpacing: "-0.02em" }}>
              <span className="text-accent-dark">代表的な探索アルゴリズム</span><br />
              について説明してください
            </div>
            <div style={{ marginTop: "48px", display: "flex", gap: "20px" }}>
              <span className="neu-pill"><span className="text-accent">●</span> 線形探索 — O(n)</span>
              <span className="neu-pill"><span className="text-accent">●</span> 2分探索 — O(log n)</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Check ②</div>
            <div className="sf-right">31 / 33</div>
          </div>
        </section>
  )
}
