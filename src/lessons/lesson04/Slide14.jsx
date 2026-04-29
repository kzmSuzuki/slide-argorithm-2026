import '../lesson02/lesson02Slides.css'

// from algo04 slide13.jsx
export default function Slide14() {
  return (

        <section className="lesson02-slide" data-label="Linear search intro">
          <div className="slide-eyebrow">15 / LINEAR SEARCH</div>
          <h1 className="slide-title">線形探索 — <span className="text-accent">Linear Search</span></h1>
          <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", alignItems: "center", gap: "48px", maxWidth: "1600px" }}>
            <div className="quote-block" style={{ textAlign: "center", fontSize: "44px", padding: "48px 64px" }}>
              並べられたデータを、<br />
              <span className="text-accent-dark">一つずつ順に、端から</span>調べていく探索方法
            </div>
            <div className="row" style={{ gap: "16px", alignItems: "center" }}>
              {["", "", "", "", "", "", "", "", "", ""].map((_, i) => (
                <div key={i} style={{
                  width: "84px",
                  height: "84px",
                  background: "var(--color-surface)",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-raised-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "40px",
                  color: "var(--color-text-secondary)",
                  fontWeight: 700,
                }}>?</div>
              ))}
            </div>
            <div className="slide-small" style={{ fontSize: "30px", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--color-text-tertiary)" }}>
              → → → 端から順番にチェック
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Linear Search</div>
            <div className="sf-right">15 / 33</div>
          </div>
        </section>
  )
}
