import '../lesson02/lesson02Slides.css'

// Slide 16 — sum(n) recursive complete

export default function Slide16() {
  const code = `int sum(int n)
{
    if (n == 1) { return 1; }  // ← 追記
    return sum(n-1) + n;
}`;
  return (
    <section className="lesson02-slide" data-label="sum(n) recursive - complete">
      <div className="slide-eyebrow">19 / RECURSIVE · COMPLETE</div>
      <h1 className="slide-title"><span className="code-inline">sum(n)</span> — 再帰版（完成）</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ fontSize: "40px", maxWidth: "1500px", width: "100%" }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Recursive · Complete</div>
      </div>
    </section>
  );
}
