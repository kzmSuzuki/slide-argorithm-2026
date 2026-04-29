import '../lesson02/lesson02Slides.css'

// Slide 15 — sum(n) recursive error

export default function Slide15() {
  const code = `int sum(int n)
{
    return sum(n-1) + n;
}`;
  return (
    <section className="lesson02-slide" data-label="sum(n) recursive - error">
      <div className="slide-eyebrow">18 / RECURSIVE · ERROR</div>
      <h1 className="slide-title"><span className="code-inline">sum(n)</span> — 再帰版（エラーあり）</h1>
      <div className="slide-body-wrap" style={{ marginTop: "48px", justifyContent: "center", alignItems: "center", gap: "48px" }}>
        <pre className="code-block" style={{ fontSize: "46px", minWidth: "900px" }}>{code}</pre>
        <div className="callout" style={{ fontSize: "40px", padding: "40px 48px", textAlign: "center", maxWidth: "1400px", background: "rgba(180, 140, 60, 0.12)", color: "#8a6a3a" }}>
          実は、<span style={{ color: "#a66666" }}>エラーになります。</span><br />
          <span className="text-accent-dark">足りない部分を補ってください。</span>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Recursive · Error</div>
      </div>
    </section>
  );
}
