import '../lesson02/lesson02Slides.css'

// Slide 11 — Formula 4: recursion formula

export default function Slide11() {
  return (
    <section className="lesson02-slide" data-label="Formula 4 - recursion formula">
      <div className="slide-eyebrow">14 / FORMULA ④</div>
      <h1 className="slide-title">再帰式</h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="neu-inset" style={{ padding: "64px 80px", fontFamily: "var(--font-mono)", fontSize: "44px", color: "var(--color-text-primary)", fontWeight: 700, lineHeight: 1.7 }}>
          <div><span style={{ color: "var(--color-accent)" }}>sum(n)</span> = 1 + 2 + … + (n-1) + n</div>
          <div style={{ paddingLeft: "4.5em" }}>
            = <span style={{ color: "var(--color-accent-dark)" }}>{"{ 1 + 2 + … + (n-1) }"}</span> + n
          </div>
          <div style={{ paddingLeft: "5.2em", color: "var(--color-accent)", fontSize: "36px" }}>↑</div>
          <div style={{ paddingLeft: "4.5em", color: "var(--color-accent)", fontSize: "40px", marginBottom: "32px" }}>sum(n - 1)</div>
          <div style={{ borderTop: "2px dashed rgba(91,122,157,0.3)", paddingTop: "32px", paddingLeft: "4.5em", fontSize: "52px", color: "var(--color-accent-dark)" }}>
            = <span style={{ color: "var(--color-accent)" }}>sum(n - 1)</span> + n
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Formula ④</div>
      </div>
    </section>
  );
}
