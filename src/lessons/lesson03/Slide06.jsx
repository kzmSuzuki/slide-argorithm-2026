import '../lesson02/lesson02Slides.css'

// Slide 06 — sum(n) loop version

export default function Slide06() {
  const code = `int sum(int n)
{
    int sum = 0;
    for(int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}`;
  return (
    <section className="lesson02-slide" data-label="sum(n) - loop version">
      <div className="slide-eyebrow">09 / LOOP VERSION</div>
      <h1 className="slide-title">sum(n) — ループ版</h1>
      <div className="slide-body-wrap" style={{ marginTop: "56px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ maxWidth: "1500px", width: "100%", fontSize: "40px" }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Loop version</div>
      </div>
    </section>
  );
}
