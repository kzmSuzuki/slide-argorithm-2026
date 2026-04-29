import '../lesson02/lesson02Slides.css'

// from algo04 slide19.jsx
export default function Slide20() {
  return (

        <section className="lesson02-slide" data-label="Linear complexity - analysis">
          <div className="slide-eyebrow">21 / COMPLEXITY · ANALYSIS</div>
          <h1 className="slide-title">線形探索の計算量</h1>
          <div className="slide-body-wrap" style={{ marginTop: "40px", gap: "32px", maxWidth: "1600px" }}>
            <div className="slide-body" style={{ fontSize: "40px" }}>
              配列の要素数を <span className="code-inline" style={{ fontSize: "40px", color: "var(--color-accent-dark)" }}>n</span> とする。
            </div>
            <table className="neu-table" style={{ fontSize: "36px" }}>
              <thead>
                <tr>
                  <th>ケース</th>
                  <th style={{ textAlign: "right", color: "var(--color-accent)" }}>ループ回数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>値が含まれないとき（最悪）</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#a66666" }}>n 回</td>
                </tr>
                <tr>
                  <td>値が含まれるとき（平均）</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent-dark)" }}>n / 2 回</td>
                </tr>
              </tbody>
            </table>
            <div className="slide-small" style={{ textAlign: "center", marginTop: "12px", fontSize: "40px", color: "var(--color-text-secondary)" }}>
              → どちらにしろ…
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Analysis</div>
            <div className="sf-right">21 / 33</div>
          </div>
        </section>
  )
}
