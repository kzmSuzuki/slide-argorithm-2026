import '../lesson02/lesson02Slides.css'

// Slide 08 — Formula expansion 1

export default function Slide08() {
  return (
    <section className="lesson02-slide" data-label="Formula 1">
      <div className="slide-eyebrow">11 / FORMULA ①</div>
      <h1 className="slide-title">数式の展開</h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="neu-inset" style={{ padding: "80px 96px", fontFamily: "var(--font-mono)", fontSize: "64px", color: "var(--color-text-primary)", fontWeight: 700, letterSpacing: "0.02em" }}>
          <span style={{ color: "var(--color-accent)" }}>sum(n)</span> = 1 + 2 + … + (n-1) + n
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Formula ①</div>
      </div>
    </section>
  );
}
