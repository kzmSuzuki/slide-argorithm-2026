import '../lesson02/lesson02Slides.css'

// from algo04 slide08.jsx
export default function Slide09() {
  return (

        <section className="lesson02-slide" data-label="What is search">
          <div className="slide-eyebrow">10 / DEFINITION</div>
          <h1 className="slide-title">探索とは？</h1>
          <div className="slide-body-wrap" style={{ marginTop: "-156px", justifyContent: "center", gap: "48px", alignItems: "center", maxWidth: "1600px" }}>
            <div className="quote-block" style={{ textAlign: "center", fontSize: "52px", padding: "56px 72px" }}>
              蓄えられた情報の中から、<br />
              <span className="text-accent-dark">必要なデータを取り出す</span>操作
            </div>
            <div className="row" style={{ gap: "28px", alignItems: "stretch", width: "100%" }}>
              <div className="neu-card" style={{ flex: 1, padding: "36px 40px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "12px" }}>UBIQUITY</div>
                <div className="slide-body" style={{ fontSize: "40px", lineHeight: 1.5 }}>
                  大きなプログラムでは、<br />
                  探索を<span className="text-accent-dark">使わないことのほうが稀</span>
                </div>
              </div>
              <div className="neu-card" style={{ flex: 1, padding: "36px 40px", borderLeft: "4px solid var(--color-accent)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "12px" }}>IMPORTANCE</div>
                <div className="slide-body" style={{ fontSize: "40px", lineHeight: 1.5 }}>
                  実用的な応用という面では、<br />
                  <span className="text-accent-dark">最重要トピック</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Definition</div>
            <div className="sf-right">10 / 33</div>
          </div>
        </section>
  )
}
