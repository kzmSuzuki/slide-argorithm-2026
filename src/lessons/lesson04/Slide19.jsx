import '../lesson02/lesson02Slides.css'

// from algo04 slide18.jsx
export default function Slide19() {
  return (

        <section className="lesson02-slide" data-label="O notation recap">
          <div className="slide-eyebrow">20 / RECAP · BIG-O</div>
          <h1 className="slide-title">復習 — <span className="text-accent">O記法</span></h1>
          <div className="slide-body-wrap" style={{ marginTop: "40px", gap: "32px", maxWidth: "1700px" }}>
            <div className="callout" style={{ fontSize: "40px", padding: "32px 40px" }}>
              具体的な計算時間は考えず、扱う<span className="text-accent-dark">データ数 n が増えたら</span><br />
              計算量がどれくらい大きくなるかを <span className="code-inline">引数 n の関数</span> として考える
            </div>
            <div className="row" style={{ gap: "24px", justifyContent: "center" }}>
              {["O(n)", "O(n²)", "O(log n)"].map((label) => (
                <div key={label} style={{
                  padding: "32px 56px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-raised)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "52px",
                  fontWeight: 700,
                  color: "var(--color-accent-dark)",
                  letterSpacing: "0.02em",
                }}>{label}</div>
              ))}
            </div>
            <div className="quote-block" style={{ marginTop: "24px", padding: "32px 40px", fontSize: "40px" }}>
              <span className="text-accent-dark">ポイント:</span> 定数項や比例定数などの<span className="text-accent-dark">細かいことは考えない</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Big-O</div>
            <div className="sf-right">20 / 33</div>
          </div>
        </section>
  )
}
