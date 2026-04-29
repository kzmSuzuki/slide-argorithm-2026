import '../lesson02/lesson02Slides.css'
import hanoi from './imgs/hanoi.png'

// Slide 02 — Tower of Hanoi intro

export default function Slide02() {
  return (
    <section className="lesson02-slide" data-label="Tower of Hanoi intro">
      <div className="slide-eyebrow">05 / INTRO</div>
      <h1 className="slide-title">「ハノイの塔」で遊ぼう</h1>
      <div className="slide-body-wrap" style={{ marginTop: "48px", gap: "40px" }}>
        <div className="row" style={{ gap: "48px", alignItems: "stretch" }}>
          <div
            style={{
              flex: "0 0 620px",
              width: "620px",
              height: "620px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "var(--shadow-raised)",
            }}
          >
            <img
              src={hanoi}
              alt="ハノイの塔"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="col" style={{ flex: 1, justifyContent: "center", gap: "28px" }}>
            <div className="slide-body">一番端の柱に円盤を積み上げる（上にいくほど小さい順）</div>
            <div className="slide-body">円盤を一回につき一個動かして、他の柱に移動させる</div>
            <div className="neu-card" style={{ padding: "36px 40px" }}>
              <div className="slide-small" style={{ color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "20px" }}>RULES</div>
              <div className="col" style={{ gap: "20px" }}>
                <div className="row" style={{ gap: "20px", alignItems: "flex-start" }}>
                  <div className="neu-num-badge" style={{ width: "56px", height: "56px", fontSize: "26px" }}>1</div>
                  <div className="slide-body" style={{ flex: 1, paddingTop: "8px", fontSize: "32px" }}>円盤は一個ずつしか動かせない</div>
                </div>
                <div className="row" style={{ gap: "20px", alignItems: "flex-start" }}>
                  <div className="neu-num-badge" style={{ width: "56px", height: "56px", fontSize: "26px" }}>2</div>
                  <div className="slide-body" style={{ flex: 1, paddingTop: "8px", fontSize: "32px" }}>大きい円盤を小さい円盤の上に置けない</div>
                </div>
              </div>
            </div>
            <div className="callout" style={{ fontSize: "32px", padding: "28px 36px" }}>
              初めと反対側の端の柱に<span className="text-accent-dark">そっくり移し替えられたら完成！</span>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Intro</div>
      </div>
    </section>
  );
}
