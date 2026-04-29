import '../lesson02/lesson02Slides.css'

// Slide 29 — Check 2: answer (pros & cons)

export default function Slide29() {
  return (
    <section className="lesson02-slide" data-label="Check 2 - answer">
      <div className="slide-eyebrow">32 / CHECK ② · ANSWER</div>
      <h1 className="slide-title">再帰の良い点・悪い点</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Pros */}
          <div className="neu-card" style={{ padding: "48px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "28px", color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "20px" }}>PROS</div>
            <div style={{ fontSize: "52px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "32px" }}>良い点</div>
            <div className="col" style={{ gap: "24px" }}>
              <div className="row" style={{ gap: "24px", alignItems: "flex-start" }}>
                <div style={{ color: "var(--color-accent)", fontSize: "36px", lineHeight: 1 }}>✓</div>
                <div className="slide-body" style={{ flex: 1, fontSize: "30px", color: "var(--color-text-primary)", lineHeight: 1.5 }}>定義がそのままコードに表すことができる</div>
              </div>
              <div className="row" style={{ gap: "24px", alignItems: "flex-start" }}>
                <div style={{ color: "var(--color-accent)", fontSize: "36px", lineHeight: 1 }}>✓</div>
                <div className="slide-body" style={{ flex: 1, fontSize: "30px", color: "var(--color-text-primary)", lineHeight: 1.5 }}>コードの記述量が少なくなる</div>
              </div>
            </div>
          </div>
          {/* Cons */}
          <div className="neu-card" style={{ padding: "48px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "28px", color: "#a66666", letterSpacing: "0.1em", marginBottom: "20px" }}>CONS</div>
            <div style={{ fontSize: "52px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "32px" }}>悪い点</div>
            <div className="col" style={{ gap: "24px" }}>
              <div className="row" style={{ gap: "24px", alignItems: "flex-start" }}>
                <div style={{ color: "#a66666", fontSize: "36px", lineHeight: 1 }}>!</div>
                <div className="slide-body" style={{ flex: 1, fontSize: "30px", color: "var(--color-text-primary)", lineHeight: 1.5 }}>メモリを多く消費する</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Check ② · Answer</div>
      </div>
    </section>
  );
}
