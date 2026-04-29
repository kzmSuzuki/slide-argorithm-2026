import '../lesson02/lesson02Slides.css'

// Slide 07 — sum(n) "can be simpler"

export default function Slide07() {
  const code = `int sum(int n)
{
    int sum = 0;
    for(int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}`;
  return (
    <section className="lesson02-slide" data-label="sum(n) - simpler hint">
      <div className="slide-eyebrow">10 / HINT</div>
      <h1 className="slide-title">実はもっと簡単に書ける</h1>
      <div className="slide-body-wrap" style={{ marginTop: "48px", gap: "40px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ maxWidth: "1500px", width: "100%", fontSize: "36px" }}>{code}</pre>
        <div className="callout" style={{ fontSize: "40px", padding: "36px 48px", textAlign: "center" }}>
          簡単にかける方法を考えてみよう
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Hint</div>
      </div>
    </section>
  );
}
