import '../lesson02/lesson02Slides.css'

// from algo04 slide22.jsx
export default function Slide23() {
  return (

        <section className="lesson02-slide section-cover" data-label="Binary search cover">
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="sc-num">PART · 02</div>
            <div className="sc-title">2分探索</div>
            <div className="sc-sub">— Binary Search</div>
            <div style={{ marginTop: "56px", display: "flex", gap: "28px" }}>
              <span className="neu-pill"><span className="text-accent">●</span> O(log n)</span>
              <span className="neu-pill"><span className="text-accent">●</span> 整列されたデータが必要</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Binary Search</div>
            <div className="sf-right">24 / 33</div>
          </div>
        </section>
  )
}
