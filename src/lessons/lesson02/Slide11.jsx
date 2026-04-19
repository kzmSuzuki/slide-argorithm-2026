// Slide 12 — Insertion difficulty comparison
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide11() {
  return (
    <section className="lesson02-slide" data-label="Insertion difficulty comparison">
      <div className="slide-eyebrow">12 / COMPARISON</div>
        <h1 className="slide-title">挿入の難易度比較</h1>
        <div className="slide-body-wrap" style={{"marginTop": "48px", "gap": "48px"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "40%"}}/><col style={{"width": "30%"}}/><col style={{"width": "30%"}}/></colgroup>
              <thead>
                <tr><th></th><th style={{"textAlign": "center"}}>探索</th><th style={{"textAlign": "center"}}>挿入</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell">氏名の五十音順</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span></td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--bad">△</span></td>
                </tr>
                <tr>
                  <td className="label-cell">バラバラ</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--bad">△</span></td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="callout" style={{"fontSize": "38px", "padding": "40px 48px", "textAlign": "center"}}>
            すべてのデータ操作において、<span className="text-accent-dark">優れているとは限らない</span>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Comparison</div>
        </div>
    </section>
  );
}
