import '../lesson02/lesson02Slides.css'

// from algo04 slide09.jsx
export default function Slide10() {
  return (

        <section className="lesson02-slide" data-label="Terminology">
          <div className="slide-eyebrow">11 / TERMS</div>
          <h1 className="slide-title">用語解説</h1>
          <div className="slide-body-wrap" style={{ marginTop: "32px", gap: "28px" }}>
            <div className="row" style={{ gap: "28px", alignItems: "stretch" }}>
              <div className="neu-card" style={{ flex: 1, padding: "32px 36px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>TERM · 01</div>
                <div style={{ fontSize: "44px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "12px", marginBottom: "16px" }}>レコード</div>
                <div className="slide-body" style={{ fontSize: "36px", lineHeight: 1.5 }}>データベースに蓄えられている<br /><span className="text-accent-dark">個々のデータのまとまり</span></div>
              </div>
              <div className="neu-card" style={{ flex: 1, padding: "32px 36px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>TERM · 02</div>
                <div style={{ fontSize: "44px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "12px", marginBottom: "16px" }}>キー</div>
                <div className="slide-body" style={{ fontSize: "36px", lineHeight: 1.5 }}>探索する際に使用する、<br /><span className="text-accent-dark">被りのないユニークな情報</span></div>
              </div>
            </div>
            <div className="callout" style={{ fontSize: "26px", padding: "20px 32px" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", letterSpacing: "0.08em" }}>EXAMPLE</span> ―
              学籍番号という<span className="text-accent-dark">「キー」</span>を使って、まる子の<span className="text-accent-dark">「レコード」</span>を取得する
            </div>
            <table className="neu-table" style={{ fontSize: "24px" }}>
              <thead>
                <tr>
                  <th style={{ color: "var(--color-accent)" }}>学籍番号（キー）</th>
                  <th>氏名</th>
                  <th>生年月日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-dark)", fontWeight: 700 }}>0000</td>
                  <td>神山まる子</td>
                  <td style={{ fontFamily: "var(--font-mono)" }}>2007/4/2</td>
                </tr>
                <tr>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-dark)", fontWeight: 700 }}>0001</td>
                  <td>神山まるお</td>
                  <td style={{ fontFamily: "var(--font-mono)" }}>2007/5/30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Terms</div>
            <div className="sf-right">11 / 33</div>
          </div>
        </section>
  )
}
