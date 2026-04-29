import '../lesson02/lesson02Slides.css'

// from algo04 slide04.jsx
export default function Slide06() {
  return (

        <section className="lesson02-slide" data-label="Marubo flow - operation">
          <div className="slide-eyebrow">07 / FLOW · STEPS</div>
          <h1 className="slide-title">利用の流れ — 操作手順</h1>
          <div className="slide-body-wrap" style={{ marginTop: "56px", gap: "32px", maxWidth: "1500px" }}>
            <div className="row" style={{ gap: "28px", alignItems: "center", padding: "32px 40px", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-raised-sm)" }}>
              <div className="neu-num-badge" style={{ width: "72px", height: "72px", fontSize: "32px" }}>1</div>
              <div className="slide-body" style={{ fontSize: "40px" }}>Classroom の <span className="code-inline">URL</span> からアクセスする</div>
            </div>
            <div className="row" style={{ gap: "28px", alignItems: "center", padding: "32px 40px", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-raised-sm)" }}>
              <div className="neu-num-badge" style={{ width: "72px", height: "72px", fontSize: "40px" }}>2</div>
              <div className="slide-body" style={{ fontSize: "34px" }}>
                <span className="text-accent-dark">「再帰について復習したい」</span>と話しかける
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Flow · Steps</div>
            <div className="sf-right">07 / 33</div>
          </div>
        </section>
  )
}
