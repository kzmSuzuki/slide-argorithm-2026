import '../lesson02/lesson02Slides.css'

// from algo04 slide02.jsx
export default function Slide04() {
  return (

        <section className="lesson02-slide section-cover" data-label="Recap with Marubo">
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="sc-num">PART · 01</div>
            <div className="sc-title">前回の復習</div>
            <div className="sc-sub">— 復習アプリ「神山まる子」</div>
            <div style={{ marginTop: "56px", display: "flex", gap: "28px" }}>
              <span className="neu-pill"><span className="text-accent">●</span> Recursion 復習</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Recap</div>
            <div className="sf-right">05 / 33</div>
          </div>
        </section>
  )
}
