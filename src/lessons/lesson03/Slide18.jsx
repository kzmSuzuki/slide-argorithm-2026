import '../lesson02/lesson02Slides.css'

// Slide 18 — Recursion pros

export default function Slide18() {
  return (
    <section className="lesson02-slide" data-label="Recursion pros">
      <div className="slide-eyebrow">21 / PROS</div>
      <h1 className="slide-title">再帰の<span className="text-accent">良い点</span></h1>
      <div className="slide-body-wrap" style={{ marginTop: "80px", justifyContent: "center", gap: "32px", maxWidth: "1500px" }}>
        <div className="row" style={{ gap: "32px", alignItems: "center", padding: "40px 48px", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-raised)" }}>
          <div className="neu-num-badge" style={{ color: "var(--color-accent)" }}>✓</div>
          <div className="slide-body slide-body--lg" style={{ color: "var(--color-text-primary)" }}>定義がそのままコードに表すことができる</div>
        </div>
        <div className="row" style={{ gap: "32px", alignItems: "center", padding: "40px 48px", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-raised)" }}>
          <div className="neu-num-badge" style={{ color: "var(--color-accent)" }}>✓</div>
          <div className="slide-body slide-body--lg" style={{ color: "var(--color-text-primary)" }}>コードの記述量が少なくなる</div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Pros</div>
      </div>
    </section>
  );
}
