import '../lesson02/lesson02Slides.css'

// from algo04 slide30.jsx
export default function Slide31() {
  return (

        <section className="lesson02-slide" data-label="Work - skill check">
          <div className="slide-eyebrow">32 / WORK</div>
          <h1 className="slide-title">ワーク — 習得度チェック</h1>
          <div className="slide-body-wrap" style={{ marginTop: "64px", justifyContent: "center", gap: "48px", maxWidth: "1500px" }}>
            <div className="slide-body slide-body--lg" style={{ color: "var(--color-text-primary)" }}>
              レベル別でいくつか問題を用意しているので、<br />
              問題を選択してトライしてみてください。
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginTop: "24px" }}>
              <div className="neu-card" style={{ padding: "40px 36px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>LEVEL · 01</div>
                <div style={{ fontSize: "40px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "20px" }}>基礎</div>
                <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>用語と概念の確認</div>
              </div>
              <div className="neu-card" style={{ padding: "40px 36px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>LEVEL · 02</div>
                <div style={{ fontSize: "40px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "20px" }}>応用</div>
                <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>線形・2分探索の実装</div>
              </div>
              <div className="neu-card" style={{ padding: "40px 36px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>LEVEL · 03</div>
                <div style={{ fontSize: "40px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "20px" }}>発展</div>
                <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>計算量の見積もり</div>
              </div>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Work</div>
            <div className="sf-right">32 / 33</div>
          </div>
        </section>
  )
}
