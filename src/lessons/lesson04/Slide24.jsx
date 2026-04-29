import '../lesson02/lesson02Slides.css'

// from algo04 slide23.jsx
export default function Slide24() {
  const Req = ({ text }) => (
    <div className="row" style={{ gap: '24px', alignItems: 'flex-start', padding: '24px 32px', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-raised-sm)' }}>
      <div style={{ color: 'var(--color-accent)', fontSize: '36px', lineHeight: 1, paddingTop: '4px' }}>◆</div>
      <div className="slide-body" style={{ flex: 1, fontSize: '36px', lineHeight: 1.5 }}>{text}</div>
    </div>
  )
  return (
    <section className="lesson02-slide" data-label="Work - research binary search">
      <div className="slide-eyebrow">25 / WORK</div>
      <h1 className="slide-title">調査ワーク — 2分探索</h1>
      <div className="slide-body-wrap" style={{ marginTop: '32px', gap: '28px', maxWidth: '1700px' }}>
        <div className="callout" style={{ fontSize: '40px', padding: '28px 40px' }}>
          <span className="text-accent-dark">2分探索について調べ、動画で説明せよ</span>
        </div>
        <div>
          <div className="slide-eyebrow" style={{fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--color-accent-dark)', marginBottom: '20px' }}>REQUIREMENTS</div>
          <div className="col" style={{ gap: '16px' }}>
            <Req text={<>2分探索について<span className="text-accent-dark">分かりやすくデモ</span>すること</>} />
            <Req text={<>どんな<span className="text-accent-dark">データ構造</span>が必要なのかを示すこと</>} />
            <Req text={<><span className="text-accent-dark">計算量とその根拠</span>を示すこと</>} />
            <Req text={<>動画は<span className="text-accent-dark">全員が見る</span>想定で作成すること</>} />
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Work</div>
        <div className="sf-right">25 / 33</div>
      </div>
    </section>
  )
}
