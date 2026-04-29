import '../lesson02/lesson02Slides.css'

// Slide 21 — Recursion cons

export default function Slide21() {
  return (
    <section className="lesson02-slide" data-label="Recursion cons">
      <div className="slide-eyebrow">24 / CONS</div>
      <h1 className="slide-title">再帰の<span style={{ color: "#a66666" }}>悪い点</span></h1>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="row" style={{ gap: "40px", alignItems: "center", padding: "60px 80px", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-raised)" }}>
          <div className="neu-num-badge" style={{ color: "#a66666", fontSize: "48px", width: "120px", height: "120px" }}>!</div>
          <div style={{ fontSize: "64px", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>
            <span style={{ color: "#a66666" }}>メモリ</span>を多く消費する
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Cons</div>
      </div>
    </section>
  );
}
