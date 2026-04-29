import '../lesson02/lesson02Slides.css'

// from algo04 slide01.jsx
export default function Slide01() {
  return (

        <section className="lesson02-slide" data-label="Cover">
          <div className="cover-wrap">
            <div className="cover-meta">KAMIYAMA — ALGORITHM COURSE · 2026</div>
            <div className="cover-title-en">Algorithm #04</div>
            <div className="cover-title-jp">アルゴリズム</div>
            <div className="cover-subtitle">探索 ① 基礎</div>
            <div style={{ marginTop: "72px", display: "flex", gap: "28px", flexWrap: "wrap" }}>
              <span className="neu-pill">Search</span>
              <span className="neu-pill">線形探索</span>
              <span className="neu-pill">2分探索</span>
              <span className="neu-pill">O記法</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Algorithm #04</div>
            <div className="sf-right">02 / 33</div>
          </div>
        </section>
  )
}
