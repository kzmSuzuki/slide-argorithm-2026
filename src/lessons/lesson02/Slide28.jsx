// Slide 28 — Linked List - C code

import './lesson02Slides.css'

export default function Slide28() {
  const code = `typedef struct Node {
    char data;
    struct Node *next;
} Node;`;
  return (
    <section className="lesson02-slide" data-label="Linked List - C code">
      <div className="slide-eyebrow">29 / IMPLEMENTATION</div>
      <h1 className="slide-title">リストのコーディング例</h1>
      <div className="slide-body-wrap" style={{ marginTop: "64px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ fontSize: "48px", minWidth: "900px" }}>{code}</pre>
        <div className="slide-small" style={{ fontSize: "30px", fontWeight: "bold", marginTop: "48px", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
          データ（char） ＋ 次のノードへのポインタ（Node *）
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Implementation</div>
      </div>
    </section>
  );
}
