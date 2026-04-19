// Slide 27 — Linked List - insertion steps
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide27() {
  return (
    <section className="lesson02-slide" data-label="Linked List - insertion steps">
      <div className="slide-eyebrow">28 / INSERTION · STEPS</div>
        <h1 className="slide-title">挿入の手順</h1>
        <div className="slide-body-wrap" style={{"marginTop": "72px", "justifyContent": "center", "gap": "40px", "maxWidth": "1500px"}}>
          <div className="row" style={{"gap": "32px", "alignItems": "flex-start"}}>
            <div className="neu-num-badge">1</div>
            <div className="col" style={{"flex": "1", "paddingTop": "8px"}}>
              <div style={{"fontSize": "44px", "fontWeight": "700", "color": "var(--color-text-primary)"}}>S のポインタを H に向ける</div>
              <div style={{"fontFamily": "var(--font-mono)", "fontSize": "28px", "color": "var(--color-text-tertiary)", "marginTop": "12px"}}>S.next = &amp;H;</div>
            </div>
          </div>
          <div className="row" style={{"gap": "32px", "alignItems": "flex-start"}}>
            <div className="neu-num-badge">2</div>
            <div className="col" style={{"flex": "1", "paddingTop": "8px"}}>
              <div style={{"fontSize": "44px", "fontWeight": "700", "color": "var(--color-text-primary)"}}>H のポインタを U に向ける</div>
              <div style={{"fontFamily": "var(--font-mono)", "fontSize": "28px", "color": "var(--color-text-tertiary)", "marginTop": "12px"}}>H.next = &amp;U;</div>
            </div>
          </div>
          <div className="callout" style={{"fontSize": "36px", "padding": "32px 48px", "marginTop": "16px"}}>
            ずらす必要なし — <span className="text-accent-dark">ポインタの付け替えだけ</span>で完了
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Insertion · Steps</div>
        </div>
    </section>
  );
}
