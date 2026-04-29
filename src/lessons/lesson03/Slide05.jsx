import '../lesson02/lesson02Slides.css'

// Slide 05 — Question: sum(n)

export default function Slide05() {
  return (
    <section className="lesson02-slide" data-label="Question - sum(n)">
      <div className="slide-eyebrow">08 / QUESTION</div>
      <h1 className="slide-title">プログラムで表現してみよう</h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4, marginBottom: "24px" }}>“</div>
        <div style={{ fontSize: "80px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1500px", letterSpacing: "-0.01em" }}>
          <span className="text-accent-dark">n までの整数合計値</span><br />の求め方は？
        </div>
        <div style={{ marginTop: "56px", fontFamily: "var(--font-mono)", fontSize: "44px", color: "var(--color-text-tertiary)" }}>
          1 + 2 + 3 + … + n = ?
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Question</div>
      </div>
    </section>
  );
}
