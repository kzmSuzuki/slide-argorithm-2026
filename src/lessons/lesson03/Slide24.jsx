import '../lesson02/lesson02Slides.css'

// Slide 24 — DEMO

export default function Slide24() {
  return (
    <section className="lesson02-slide section-cover" data-label="Demo">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="sc-num">· LIVE ·</div>
        <div className="sc-title">DEMO</div>
        <div className="sc-sub">— デモンストレーション —</div>
      </div>
      <div className="slide-eyebrow" style={{ position: "absolute", top: "40px", left: "80px", zIndex: 2 }}>27 / DEMO</div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Demo</div>
      </div>
    </section>
  );
}
