import '../lesson02/lesson02Slides.css'

// Slide 30 — Work / skill check

export default function Slide30() {
  return (
    <section className="lesson02-slide" data-label="Work - skill check">
      <div className="slide-eyebrow">33 / WORK</div>
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
            <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>フィボナッチ数列の計算</div>
          </div>
          <div className="neu-card" style={{ padding: "40px 36px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>LEVEL · 02</div>
            <div style={{ fontSize: "40px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "20px" }}>応用</div>
            <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>ユークリッドの互除法</div>
          </div>
          <div className="neu-card" style={{ padding: "40px 36px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-accent)", letterSpacing: "0.1em" }}>LEVEL · 03</div>
            <div style={{ fontSize: "40px", fontWeight: 700, color: "var(--color-text-primary)", marginTop: "20px" }}>発展</div>
            <div style={{ fontSize: "26px", color: "var(--color-text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>ハノイの塔に挑戦</div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Work</div>
      </div>
    </section>
  );
}
