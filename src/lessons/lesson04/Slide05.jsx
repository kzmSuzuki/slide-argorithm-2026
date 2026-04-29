import '../lesson02/lesson02Slides.css'

// from algo04 slide03.jsx
export default function Slide05() {
  const Step = ({ n, text }) => (
    <div className="row" style={{ gap: '28px', alignItems: 'flex-start' }}>
      <div className="neu-num-badge" style={{ width: '72px', height: '72px', fontSize: '40px' }}>{n}</div>
      <div className="slide-body" style={{ flex: 1, paddingTop: '8px', fontSize: '40px' }}>{text}</div>
    </div>
  )
  return (
    <section className="lesson02-slide" data-label="Marubo flow - overview">
      <div className="slide-eyebrow">06 / FLOW</div>
      <h1 className="slide-title">利用の流れ — 概要</h1>
      <div className="slide-body-wrap" style={{ marginTop: '48px', gap: '28px', maxWidth: '1500px'}}>
        <Step n="①" text={<>「〇〇について復習がしたい」と<span className="text-accent-dark">まる子に話しかける</span></>} />
        <Step n="②" text={<>理解度確認のための<span className="text-accent-dark">質問がくる</span>ので回答する</>} />
        <Step n="③" text={<>理解度が <span className="text-accent">☆☆☆</span> で評価される</>} />
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Flow · Overview</div>
        <div className="sf-right">06 / 33</div>
      </div>
    </section>
  )
}
