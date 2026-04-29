import '../lesson02/lesson02Slides.css'

// Slide 25 — Summary cover

export default function Slide25() {
  return (
    <section className="lesson02-slide section-cover" data-label="Summary so far">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="sc-num">PART · 02</div>
        <div className="sc-title">ここまでの<br />まとめ</div>
        <div className="sc-sub">— Recap: Recursion</div>
      </div>
      <div className="slide-eyebrow" style={{ position: "absolute", top: "40px", left: "80px", zIndex: 2 }}>28 / RECAP</div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Recap</div>
      </div>
    </section>
  );
}
