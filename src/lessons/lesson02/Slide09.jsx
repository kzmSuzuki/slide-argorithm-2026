// Slide 10 — Data structure and search efficiency
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide09() {
  return (
    <section className="lesson02-slide" data-label="Data structure and search efficiency">
      <div className="slide-eyebrow">10 / COMPARISON</div>
        <h1 className="slide-title">データ構造と探索効率</h1>
        <div className="slide-body-wrap" style={{"marginTop": "48px", "gap": "48px"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "42%"}}/><col style={{"width": "58%"}}/></colgroup>
              <thead>
                <tr><th>状態</th><th>効果</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell">氏名の五十音順に並んでいる</td>
                  <td>半分より後から探そう！など、ある程度目星が立てられる</td>
                </tr>
                <tr>
                  <td className="label-cell">バラバラ</td>
                  <td>最悪、全部確認しなければいけない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="callout" style={{"fontSize": "38px", "padding": "40px 48px", "textAlign": "center"}}>
            <span className="text-accent-dark">データ構造</span>によって、より良い<span className="text-accent-dark">アルゴリズム</span>が選択できる
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Comparison</div>
        </div>
    </section>
  );
}
