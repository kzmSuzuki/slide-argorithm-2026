// Slide 21 — Solution - insert function

import './lesson02Slides.css'

export default function Slide20() {
  const code = `void insert(char *str, char c, int n)
{
    int len = strlen(str);

    // 右にずらす（末尾から）
    for (int i = len; i >= n; i--) {
        str[i + 1] = str[i];
    }
    // 挿入
    str[n] = c;
}`;
  return (
    <section className="lesson02-slide" data-label="Solution - insert function">
      <div className="slide-eyebrow">21 / SOLUTION</div>
      <h1 className="slide-title">解答例 — 指定位置への挿入関数</h1>
      <div className="slide-body-wrap" style={{ marginTop: "48px", justifyContent: "center", alignItems: "center" }}>
        <pre className="code-block" style={{ maxWidth: "1500px", width: "100%", fontSize: "36px" }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Solution</div>
      </div>
    </section>
  );
}
