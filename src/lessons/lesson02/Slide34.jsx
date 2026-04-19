// Slide 34 — Stack and Queue explained
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide34() {
  return (
    <section className="lesson02-slide" data-label="Stack and Queue explained">
      <div className="slide-eyebrow">35 / STACK &amp; QUEUE</div>
        <h1 className="slide-title">スタックとキュー</h1>
        <div className="slide-body-wrap" style={{"marginTop": "48px", "justifyContent": "center"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "18%"}}/><col style={{"width": "41%"}}/><col style={{"width": "41%"}}/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th style={{"textAlign": "center", "fontSize": "32px", "color": "var(--color-accent)"}}>スタック — Stack</th>
                  <th style={{"textAlign": "center", "fontSize": "32px", "color": "var(--color-accent)"}}>キュー — Queue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell">別名</td>
                  <td style={{"textAlign": "center"}}><span className="code-inline">LIFO</span> 後入れ先出し</td>
                  <td style={{"textAlign": "center"}}><span className="code-inline">FIFO</span> 先入れ先出し</td>
                </tr>
                <tr>
                  <td className="label-cell">追加</td>
                  <td style={{"textAlign": "center"}}>上から入れる （<span className="text-accent-dark">push</span>）</td>
                  <td style={{"textAlign": "center"}}>後ろから入れる （<span className="text-accent-dark">enqueue</span>）</td>
                </tr>
                <tr>
                  <td className="label-cell">取り出し</td>
                  <td style={{"textAlign": "center"}}>上から取り出す （<span className="text-accent-dark">pop</span>）</td>
                  <td style={{"textAlign": "center"}}>前から取り出す （<span className="text-accent-dark">dequeue</span>）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Stack &amp; Queue</div>
        </div>
    </section>
  );
}
