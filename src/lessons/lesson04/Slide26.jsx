import '../lesson02/lesson02Slides.css'

// from algo04 slide25.jsx
export default function Slide26() {
  return (

        <section className="lesson02-slide" data-label="Binary search complexity">
          <div className="slide-eyebrow">27 / COMPLEXITY · DERIVE</div>
          <h1 className="slide-title">2分探索の計算量</h1>
          <div className="slide-body-wrap" style={{ marginTop: "32px", gap: "32px" }}>
            <div className="callout" style={{ fontSize: "40px", padding: "24px 36px" }}>
              <span className="text-accent-dark">基本的な考え方:</span> 1回比較すると <span className="text-accent-dark">n が半分</span>になる
            </div>
            <div className="row" style={{ gap: "40px", alignItems: "center", justifyContent: "center" }}>
              <table className="neu-table" style={{ fontSize: "40px", maxWidth: "640px" }}>
                <thead>
                  <tr>
                    <th>回数</th>
                    <th style={{ textAlign: "right" }}>残り候補数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 回め</td><td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>n / 2¹</td></tr>
                  <tr><td>2 回め</td><td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>n / 2²</td></tr>
                  <tr><td>3 回め</td><td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>n / 2³</td></tr>
                  <tr><td style={{ color: "var(--color-text-tertiary)" }}>⋮</td><td style={{ textAlign: "right", color: "var(--color-text-tertiary)" }}>⋮</td></tr>
                  <tr>
                    <td style={{ color: "var(--color-accent-dark)", fontWeight: 700 }}>m 回め</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--color-accent-dark)", fontWeight: 700 }}>n / 2ᵐ</td>
                  </tr>
                </tbody>
              </table>

              <div className="col" style={{ gap: "20px", alignItems: "stretch", minWidth: "560px" }}>
                <div className="slide-small" style={{ fontSize: "28px", fontFamily: "var(--font-mono)", color: "var(--color-text-tertiary)", letterSpacing: "0.06em" }}>
                  n / 2ᵐ = 1 となる m を求める
                </div>
                <div className="neu-inset" style={{ padding: "24px 36px", fontFamily: "var(--font-mono)", fontSize: "36px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.6 }}>
                  n = 2ᵐ<br />
                  <span style={{ color: "var(--color-accent)" }}>m = log₂(n)</span>
                </div>
                <div style={{
                  padding: "32px 40px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-raised)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "60px",
                  fontWeight: 700,
                  color: "var(--color-accent-dark)",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}>
                  → O(log n)
                </div>
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Derive</div>
            <div className="sf-right">27 / 33</div>
          </div>
        </section>
  )
}
