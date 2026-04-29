import '../lesson02/lesson02Slides.css'

// from algo04 slide06.jsx
export default function Slide07() {
  return (

        <section className="lesson02-slide" data-label="Number guessing game">
          <div className="slide-eyebrow">08 / ACTIVITY</div>
          <h1 className="slide-title">数字当てゲーム</h1>
          <div className="slide-body-wrap" style={{ marginTop: "32px", gap: "32px" }}>
            <div className="callout" style={{ fontSize: "44px", padding: "32px 40px" }}>
              スタッフが設定した数字を当てる   
              <span className="text-accent-dark"> - 数字は 1〜100 のどれか - </span>
            </div>
            <div className="row" style={{ gap: "36px", alignItems: "stretch" }}>
              {/* Step 1 */}
              <div className="neu-card" style={{ flex: 1, padding: "32px" }}>
                <div className="neu-num-badge" style={{ width: "60px", height: "60px", fontSize: "26px", marginBottom: "16px" }}>1</div>
                <div className="slide-body" style={{ fontSize: "36px", lineHeight: 1.5 }}>
                  グループごとに 1つの数字を<span className="text-accent-dark">「送信」</span>
                </div>
              </div>
              {/* Step 2 */}
              <div className="neu-card" style={{ flex: 1.4, padding: "32px" }}>
                <div className="neu-num-badge" style={{ width: "60px", height: "60px", fontSize: "26px", marginBottom: "16px" }}>2</div>
                <div className="slide-body" style={{ fontSize: "36px", lineHeight: 1.5 }}>
                  管理者の合図で <span className="text-accent-dark">「更新」</span> すると、
                </div>
                <div className="row" style={{ gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
                  <span className="neu-pill" style={{ fontSize: "30px" }}>大きい ↑</span>
                  <span className="neu-pill" style={{ fontSize: "30px" }}>小さい ↓</span>
                  <span className="neu-pill" style={{ fontSize: "30px", color: "var(--color-accent)" }}>同じ ◎</span>
                </div>
                <div className="slide-small" style={{ fontSize: "36px", fontWeight: "bold", marginTop: "12px" }}>と返ってくる</div>
              </div>
              {/* Step 3 */}
              <div className="neu-card" style={{ flex: 1, padding: "32px" }}>
                <div className="neu-num-badge" style={{ width: "60px", height: "60px", fontSize: "26px", marginBottom: "16px" }}>3</div>
                <div className="slide-body" style={{ fontSize: "36px", lineHeight: 1.5 }}>
                  再度数字を <span className="text-accent-dark">「送信」</span> する
                </div>
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Activity</div>
            <div className="sf-right">08 / 33</div>
          </div>
        </section>
  )
}
