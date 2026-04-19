// Slide 35 — Stack and Queue - operations
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide35() {
  return (
    <section className="lesson02-slide" data-label="Stack and Queue - operations">
      <div className="slide-eyebrow">36 / STACK &amp; QUEUE · OPERATIONS</div>
        <h1 className="slide-title">スタック・キューの各データ操作</h1>
        <div className="slide-body-wrap" style={{"marginTop": "48px", "justifyContent": "center"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "28%"}}/><col style={{"width": "22%"}}/><col style={{"width": "50%"}}/></colgroup>
              <thead>
                <tr><th>操作</th><th style={{"textAlign": "center"}}>評価</th><th>備考</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell"><span className="text-accent">C</span> · 挿入</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span> 簡単</td>
                  <td>入れるところが<span className="text-accent-dark">決まっている</span></td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">R</span> · 読み出す</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span> 簡単</td>
                  <td>見れるところが<span className="text-accent-dark">決まっている</span></td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">U</span> · 更新</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--na">✕</span> 不可</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">D</span> · 削除</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span> 簡単</td>
                  <td>消せるものが<span className="text-accent-dark">決まっている</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Operations</div>
        </div>
    </section>
  );
}
