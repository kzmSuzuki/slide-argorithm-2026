// Slide 25 — Linked List - operations answer
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide24() {
  return (
    <section className="lesson02-slide" data-label="Linked List - operations answer">
      <div className="slide-eyebrow">25 / LINKED LIST · ANSWER</div>
        <h1 className="slide-title">リストの各データ操作</h1>
        <div className="slide-body-wrap" style={{"marginTop": "48px", "justifyContent": "center"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "24%"}}/><col style={{"width": "22%"}}/><col style={{"width": "54%"}}/></colgroup>
              <thead>
                <tr><th>操作</th><th style={{"textAlign": "center"}}>評価</th><th>理由</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell"><span className="text-accent">C</span> · 挿入</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span> 簡単</td>
                  <td>ポインタを<span className="text-accent-dark">指定し直せば良い</span></td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">R</span> · 読み出す</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--bad">△</span> 手間</td>
                  <td>その番号まで<span className="text-accent-dark">最初から辿らないといけない</span></td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">U</span> · 更新</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--bad">△</span> 手間</td>
                  <td>その番号まで<span className="text-accent-dark">最初から辿らないといけない</span></td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">D</span> · 削除</td>
                  <td style={{"textAlign": "center"}}><span className="eval eval--good">◎</span> 簡単</td>
                  <td>ポインタを<span className="text-accent-dark">指定し直せば良い</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Linked List · Answer</div>
        </div>
    </section>
  );
}
