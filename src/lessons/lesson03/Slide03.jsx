import '../lesson02/lesson02Slides.css'

// Slide 03 — Hanoi solution → Recursion

export default function Slide03() {
  return (
    <section className="lesson02-slide" data-label="Hanoi solution">
      <div className="slide-eyebrow">06 / SOLUTION</div>
      <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: "72px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.4, letterSpacing: "-0.01em", maxWidth: "1500px" }}>
          ハノイの塔の解法は、<br />今日のトピック
        </div>
        <div style={{ marginTop: "72px", fontFamily: "var(--font-mono)", fontSize: "200px", fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.04em", lineHeight: 1 }}>
          「再帰」
        </div>
        <div style={{ marginTop: "40px", fontFamily: "var(--font-mono)", fontSize: "40px", color: "var(--color-text-tertiary)", letterSpacing: "0.08em" }}>
          — Recursion —
        </div>
        <div style={{ marginTop: "48px", fontSize: "44px", color: "var(--color-text-secondary)", fontWeight: 500 }}>
          を使います。
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Solution</div>
      </div>
    </section>
  );
}
