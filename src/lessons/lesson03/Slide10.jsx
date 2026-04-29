import '../lesson02/lesson02Slides.css'

// Slide 10 — Formula 3: discovering sum(n-1)

export default function Slide10() {
  return (
    <section className="lesson02-slide" data-label="Formula 3 - discover sum(n-1)">
      <div className="slide-eyebrow">13 / FORMULA ③</div>
      <h1 className="slide-title"><span className="code-inline">sum(n-1)</span> の発見</h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="neu-inset" style={{ padding: "72px 88px", fontFamily: "var(--font-mono)", fontSize: "48px", color: "var(--color-text-primary)", fontWeight: 700, lineHeight: 1.7 }}>
          <div><span style={{ color: "var(--color-accent)" }}>sum(n)</span> = 1 + 2 + … + (n-1) + n</div>
          <div style={{ paddingLeft: "4.2em" }}>
            = <span style={{ color: "var(--color-accent-dark)" }}>{"{ 1 + 2 + … + (n-1) }"}</span> + n
          </div>
          <div style={{ paddingLeft: "5em", marginTop: "16px", color: "var(--color-accent)", fontSize: "40px" }}>
            ↑
          </div>
          <div style={{ paddingLeft: "4.2em", color: "var(--color-accent)", fontSize: "44px" }}>
            sum(n - 1)
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Formula ③</div>
      </div>
    </section>
  );
}
