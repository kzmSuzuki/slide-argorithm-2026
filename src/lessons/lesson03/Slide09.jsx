import '../lesson02/lesson02Slides.css'

// Slide 09 — Formula 2

export default function Slide09() {
  return (
    <section className="lesson02-slide" data-label="Formula 2">
      <div className="slide-eyebrow">12 / FORMULA ②</div>
      <h1 className="slide-title">数式の展開</h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="neu-inset" style={{ padding: "72px 88px", fontFamily: "var(--font-mono)", fontSize: "52px", color: "var(--color-text-primary)", fontWeight: 700, lineHeight: 1.8 }}>
          <div><span style={{ color: "var(--color-accent)" }}>sum(n)</span> = 1 + 2 + … + (n-1) + n</div>
          <div style={{ paddingLeft: "4.2em" }}>
            = <span style={{ color: "var(--color-accent-dark)" }}>{"{ 1 + 2 + … + (n-1) }"}</span> + n
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Formula ②</div>
      </div>
    </section>
  );
}
