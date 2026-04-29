import '../lesson02/lesson02Slides.css'

// from algo04 slide16.jsx
export default function Slide17() {
  const code = `int array[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

void search_array(int n)
{
    for (int i = 0; i <= n; i++) {
        if (array[i] == n) {
            printf("見つけました\\n");
            return;
        }
    }
    printf("見つかりませんでした\\n");
}`
  return (
    <section className="lesson02-slide" data-label="Linear search - code">
      <div className="slide-eyebrow">18 / IMPLEMENTATION</div>
      <h1 className="slide-title">線形探索 — 解答例</h1>
      <div className="slide-body-wrap" style={{ marginTop: '32px', justifyContent: 'center', alignItems: 'center' }}>
        <pre className="code-block" style={{ fontSize: '36px', maxWidth: '1500px', width: '100%' }}>{code}</pre>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Implementation</div>
        <div className="sf-right">18 / 33</div>
      </div>
    </section>
  )
}
