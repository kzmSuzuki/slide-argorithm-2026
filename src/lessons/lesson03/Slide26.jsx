import '../lesson02/lesson02Slides.css'

// Slide 26 — Check 1: question

export default function Slide26() {
  return (
    <section className="lesson02-slide" data-label="Check 1 - question">
      <div className="slide-eyebrow">29 / CHECK ①</div>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "32px" }}>“</div>
        <div style={{ fontSize: "88px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1500px", letterSpacing: "-0.02em" }}>
          <span className="text-accent-dark">「再帰」</span>の概念を<br />説明してください
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Check ①</div>
      </div>
    </section>
  );
}
