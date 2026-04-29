import '../lesson02/lesson02Slides.css'

// Slide 14 — sum(n) recursive basic

export default function Slide14() {
  const code = `int sum(int n)
{
    return sum(n-1) + n;
}`;
  return (
    <section className="lesson02-slide" data-label="sum(n) recursive basic">
      <div className="slide-eyebrow">17 / RECURSIVE · BASIC</div>
      <h1 className="slide-title"><span className="code-inline">sum(n)</span> — 再帰版（基本形）</h1>
      <div className="slide-body-wrap" style={{ marginTop: "64px", justifyContent: "center", alignItems: "center", gap: "48px" }}>
        <pre className="code-block" style={{ fontSize: "52px", minWidth: "900px" }}>{code}</pre>
        <div className="slide-small" style={{ fontSize: "40px", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
          再帰式 <span className="text-accent">sum(n) = sum(n - 1) + n</span> をそのままコードへ
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Recursive · Basic</div>
      </div>
    </section>
  );
}
