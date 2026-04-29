import '../lesson02/lesson02Slides.css'

// Slide 20 — factorial(n) solution

export default function Slide20() {
  const code = `int factorial(int n)
{
    if (n == 1) { return 1; }
    return factorial(n-1) * n;
}`;
  return (
    <section className="lesson02-slide" data-label="factorial(n) - solution">
      <div className="slide-eyebrow">23 / SOLUTION</div>
      <h1 className="slide-title"><span className="code-inline">factorial(n)</span> — 解答例</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ fontSize: "40px", maxWidth: "1500px", width: "100%" }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Solution</div>
      </div>
    </section>
  );
}
