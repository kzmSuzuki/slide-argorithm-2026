// Slide 13 — CRUD - basic data operations
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'
import cImg from './imgs/C.png'
import rImg from './imgs/R.png'
import uImg from './imgs/U.png'
import dImg from './imgs/D.png'


export default function Slide12() {
  return (
    <section className="lesson02-slide" data-label="CRUD - basic data operations">
      <div className="slide-eyebrow">13 / CONCEPT</div>
        <h1 className="slide-title">基本となるデータ操作 — <span className="text-accent">CRUD</span></h1>
        <div className="slide-body-wrap" style={{"marginTop": "64px", "justifyContent": "center"}}>
          <div className="crud-grid">
            <div className="crud-card">
              <div className="cc-letter">C</div>
              <div className="cc-en">Create</div>
              <div className="cc-jp">作成する</div>
              <img src={cImg} style={{"width": "80%"}} alt="CREATE illustration"/>
            </div>
            <div className="crud-card">
              <div className="cc-letter">R</div>
              <div className="cc-en">Read</div>
              <div className="cc-jp">読み出す</div>
              <img src={rImg} style={{"width": "80%"}} alt="READ illustration"/>
            </div>
            <div className="crud-card">
              <div className="cc-letter">U</div>
              <div className="cc-en">Update</div>
              <div className="cc-jp">更新する</div>
              <img src={uImg} style={{"width": "80%"}} alt="UPDATE illustration"/>
            </div>
            <div className="crud-card">
              <div className="cc-letter">D</div>
              <div className="cc-en">Delete</div>
              <div className="cc-jp">削除する</div>
              <img src={dImg} style={{"width": "80%"}} alt="DELETE illustration"/>
            </div>
          </div>
        </div>
        <div className="slide-footer">
          <div className="sf-left"><span className="sf-dot"></span> CRUD</div>
        </div>
    </section>
  );
}
