// Slide 31 — Check 2 - Array vs Linked List
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

export default function Slide31() {
  return (
    <section className="lesson02-slide" data-label="Check 2 - Array vs Linked List">
      <div className="slide-eyebrow">32 / CHECK ②</div>
        <h1 className="slide-title">配列とリストの得意・不得意</h1>
        <div className="slide-body-wrap" style={{"marginTop": "40px", "justifyContent": "center"}}>
          <div className="neu-table">
            <table>
              <colgroup><col style={{"width": "22%"}}/><col style={{"width": "39%"}}/><col style={{"width": "39%"}}/></colgroup>
              <thead>
                <tr><th></th><th style={{"textAlign": "center"}}>配列 — Array</th><th style={{"textAlign": "center"}}>リスト — Linked List</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell"><span className="text-accent">C</span> · 挿入</td>
                  <td><span className="eval eval--bad">△</span> 手間 — 全要素をずらす</td>
                  <td><span className="eval eval--good">◎</span> 簡単 — ポインタ付け替え</td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">R</span> · 読み出す</td>
                  <td><span className="eval eval--good">◎</span> 簡単 — インデックス直接</td>
                  <td><span className="eval eval--bad">△</span> 手間 — 先頭から辿る</td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">U</span> · 更新</td>
                  <td><span className="eval eval--good">◎</span> 簡単 — インデックス直接</td>
                  <td><span className="eval eval--bad">△</span> 手間 — 先頭から辿る</td>
                </tr>
                <tr>
                  <td className="label-cell"><span className="text-accent">D</span> · 削除</td>
                  <td><span className="eval eval--bad">△</span> 手間 — 全要素をずらす</td>
                  <td><span className="eval eval--good">◎</span> 簡単 — ポインタ付け替え</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> Check ②</div>
        </div>
    </section>
  );
}
