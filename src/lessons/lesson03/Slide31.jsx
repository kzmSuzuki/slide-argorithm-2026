import '../lesson02/lesson02Slides.css'

// Slide 31 — Goals recap

export default function Slide31() {
  return (
    <section className="lesson02-slide" data-label="Goals recap">
      <div className="slide-eyebrow">34 / GOALS · RECAP</div>
      <h1 className="slide-title">今日のゴールイメージ — 振り返り</h1>
      <div className="slide-body-wrap" style={{ marginTop: "72px", justifyContent: "center", gap: "32px", maxWidth: "1500px" }}>
        <div className="goal-item">
          <div className="goal-check goal-check--done">✓</div>
          <div>再帰の概念を説明できる</div>
        </div>
        <div className="goal-item">
          <div className="goal-check goal-check--done">✓</div>
          <div>再帰の良い点・悪い点を説明できる</div>
        </div>
        <div className="goal-item">
          <div className="goal-check goal-check--done">✓</div>
          <div>再帰アルゴリズムのプログラムを実装できる</div>
        </div>
        <div style={{ marginTop: "56px", display: "flex", justifyContent: "flex-end" }}>
          <div className="neu-pill" style={{ fontSize: "30px" }}>
            <span className="text-accent">◆</span> 次回 — 探索アルゴリズム
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Algorithm #03 · Recap</div>
      </div>
    </section>
  );
}
