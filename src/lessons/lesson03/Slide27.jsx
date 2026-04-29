import '../lesson02/lesson02Slides.css'

// Slide 27 — Check 1: answer

export default function Slide27() {
  return (
    <section className="lesson02-slide" data-label="Check 1 - answer">
      <div className="slide-eyebrow">30 / CHECK ① · ANSWER</div>
      <h1 className="slide-title">再帰の概念</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", gap: "48px", alignItems: "center" }}>
        <div className="quote-block" style={{ maxWidth: "1500px", textAlign: "center", fontSize: "52px" }}>
          <span className="text-accent-dark">再帰</span> → あるものの定義に、<br />
          <span className="text-accent-dark">それ自身が含まれていること</span>
        </div>
        <div className="neu-inset" style={{ padding: "44px 64px", fontFamily: "var(--font-mono)", fontSize: "48px", color: "var(--color-accent-dark)", fontWeight: 700 }}>
          sum(n) = sum(n - 1) + n
        </div>
        <div className="slide-small" style={{ fontSize: "30px", fontFamily: "var(--font-sans)", color: "var(--color-text-tertiary)" }}>
          ※ 数学で言う「<span className="text-accent-dark"> 漸化式 </span>」
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Check ① · Answer</div>
      </div>
    </section>
  );
}
