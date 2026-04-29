import '../lesson02/lesson02Slides.css'

// Slide 04 — Goals

export default function Slide04() {
  return (
    <section className="lesson02-slide" data-label="Goals">
      <div className="slide-eyebrow">07 / GOALS</div>
      <h1 className="slide-title">今日のゴールイメージ</h1>
      <div className="slide-body-wrap" style={{ marginTop: "72px", justifyContent: "center", gap: "32px", maxWidth: "1400px" }}>
        <div className="goal-item">
          <div className="goal-check">◇</div>
          <div>再帰の概念を説明できる</div>
        </div>
        <div className="goal-item">
          <div className="goal-check">◇</div>
          <div>再帰の良い点・悪い点を説明できる</div>
        </div>
        <div className="goal-item">
          <div className="goal-check">◇</div>
          <div>再帰アルゴリズムのプログラムを実装できる</div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Goals</div>
      </div>
    </section>
  );
}
