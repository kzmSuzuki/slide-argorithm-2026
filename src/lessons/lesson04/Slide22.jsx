import '../lesson02/lesson02Slides.css'

// from algo04 slide21.jsx
export default function Slide22() {
  return (

        <section className="lesson02-slide" data-label="Bridge to smarter">
          <div className="slide-eyebrow">23 / BRIDGE</div>
          <div className="slide-body-wrap" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", gap: "40px" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 0.5, color: "var(--color-accent)", opacity: 0.4 }}>“</div>
            <div style={{ fontSize: "76px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.3, maxWidth: "1500px", letterSpacing: "-0.02em" }}>
              もっと<span className="text-accent-dark">賢い方法</span>は<br />ないだろうか？
            </div>
            <div style={{ fontSize: "60px", color: "var(--color-accent)", lineHeight: 1, marginTop: "16px" }}>↓</div>
            <div className="callout" style={{ fontSize: "40px", padding: "32px 48px", maxWidth: "1500px", textAlign: "center" }}>
              <span className="text-accent-dark">データ構造が変われば、取りうる方法が変わる</span>
            </div>
          </div>
          <div className="slide-footer">
            <div className="sf-left"><span className="sf-dot"></span> Bridge</div>
            <div className="sf-right">23 / 33</div>
          </div>
        </section>
  )
}
