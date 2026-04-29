import '../lesson02/lesson02Slides.css'

// Slide 13 — Recap: sum(n) loop

export default function Slide13() {
  const code = `int sum(int n)
{
    int sum = 0;
    for(int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}`;
  return (
    <section className="lesson02-slide" data-label="Recap - sum(n) loop">
      <div className="slide-eyebrow">16 / RECAP</div>
      <h1 className="slide-title">再掲 — <span className="code-inline">sum(n)</span> ループ版</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ maxWidth: "1500px", width: "100%", fontSize: "40px" }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Recap</div>
      </div>
    </section>
  );
}
