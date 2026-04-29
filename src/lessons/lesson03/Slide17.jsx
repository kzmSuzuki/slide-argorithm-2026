import '../lesson02/lesson02Slides.css'

// Slide 17 — Recursion caveat: base case

export default function Slide17() {
  return (
    <section className="lesson02-slide" data-label="Recursion caveat - base case">
      <div className="slide-eyebrow">20 / CAVEAT</div>
      <h1 className="slide-title">再帰の注意点</h1>
      <div className="slide-body-wrap" style={{ marginTop: "72px", justifyContent: "center", gap: "56px", alignItems: "center", maxWidth: "1600px" }}>
        <div className="quote-block" style={{ textAlign: "center", fontSize: "56px", padding: "56px 72px" }}>
          <span className="text-accent-dark">終了条件</span>（ベースケース）を<br />
          記載しないと、<span className="text-accent-dark">無限に続く</span>
        </div>
        <div className="col" style={{ gap: "20px", alignItems: "center" }}>
          <div className="slide-small" style={{ fontSize: "30px", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--color-accent)" }}>EXAMPLE</div>
          <pre className="code-block" style={{ fontSize: "40px", padding: "28px 40px" }}>{`if (n == 1) { return 1; }`}</pre>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Caveat</div>
      </div>
    </section>
  );
}
