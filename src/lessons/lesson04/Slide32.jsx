import '../lesson02/lesson02Slides.css'

// from algo04 slide31.jsx
export default function Slide32() {
  return (

        <section className="lesson02-slide" data-label="Goals recap">
          <div className="slide-eyebrow">33 / GOALS · RECAP</div>
          <h1 className="slide-title">今日のゴールイメージ — 振り返り</h1>
          <div className="slide-body-wrap" style={{ marginTop: "72px", justifyContent: "center", gap: "32px", maxWidth: "1500px" }}>
            <div className="goal-item">
              <div className="goal-check goal-check--done">✓</div>
              <div>探索の概念を説明できる</div>
            </div>
            <div className="goal-item">
              <div className="goal-check goal-check--done">✓</div>
              <div>探索アルゴリズムの計算量を見積もることができる</div>
            </div>
            <div className="goal-item">
              <div className="goal-check goal-check--done">✓</div>
              <div>代表的な探索アルゴリズムを実装できる</div>
            </div>
            <div style={{ marginTop: "56px", display: "flex", justifyContent: "flex-end" }}>
              <div className="neu-pill" style={{ fontSize: "30px" }}>
                <span className="text-accent">◆</span> 次回 — 探索：木構造
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Algorithm #04 · Recap</div>
            <div className="sf-right">33 / 33</div>
          </div>
        </section>
  )
}
