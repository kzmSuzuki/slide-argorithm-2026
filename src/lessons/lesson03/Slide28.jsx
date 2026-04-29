import '../lesson02/lesson02Slides.css'

// Slide 28 — Check 2: question

export default function Slide28() {
  return (
    <section className="lesson02-slide" data-label="Check 2 - question">
      <div className="slide-eyebrow">31 / CHECK ②</div>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "32px" }}>“</div>
        <div style={{ fontSize: "78px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1600px", letterSpacing: "-0.02em" }}>
          <span className="text-accent-dark">「再帰」</span>の<br />
          <span className="text-accent">良い点</span>・<span style={{ color: "#a66666" }}>悪い点</span>を<br />
          説明してください
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Check ②</div>
      </div>
    </section>
  );
}
