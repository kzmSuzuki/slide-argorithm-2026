import '../lesson02/lesson02Slides.css'

// from algo04 slide07.jsx
export default function Slide08() {
  return (

        <section className="lesson02-slide" data-label="Goals">
          <div className="slide-eyebrow">09 / GOALS</div>
          <h1 className="slide-title">今日のゴールイメージ</h1>
          <div className="slide-body-wrap" style={{ marginTop: "72px", justifyContent: "center", gap: "32px", maxWidth: "1400px" }}>
            <div className="goal-item">
              <div className="goal-check">◇</div>
              <div>探索の概念を説明できる</div>
            </div>
            <div className="goal-item">
              <div className="goal-check">◇</div>
              <div>探索アルゴリズムの計算量を見積もることができる</div>
            </div>
            <div className="goal-item">
              <div className="goal-check">◇</div>
              <div>代表的な探索アルゴリズムを実装できる</div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Goals</div>
            <div className="sf-right">09 / 33</div>
          </div>
        </section>
  )
}
