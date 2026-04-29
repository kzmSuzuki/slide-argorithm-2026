import '../lesson02/lesson02Slides.css'

// Slide 01 — Cover

export default function Slide01() {
  return (
    <section className="lesson02-slide" data-label="Cover">
      <div className="cover-wrap">
        <div className="cover-meta">KAMIYAMA — ALGORITHM COURSE · 2026</div>
        <div className="cover-title-en">Algorithm #03</div>
        <div className="cover-title-jp">アルゴリズム</div>
        <div className="cover-subtitle">基本的なデータ構造 ＃03</div>
        <div style={{ marginTop: "72px", display: "flex", gap: "28px", flexWrap: "wrap" }}>
          <span className="neu-pill">再帰</span>
          <span className="neu-pill">Recursion</span>
          <span className="neu-pill">ハノイの塔</span>
          <span className="neu-pill">factorial</span>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Algorithm #03</div>
      </div>
    </section>
  );
}
