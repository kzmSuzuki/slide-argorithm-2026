import '../lesson02/lesson02Slides.css'

// Slide 19 — Exercise: factorial(n)

export default function Slide19() {
  const usageCode = `int main(void)
{
    int n;
    printf("整数 n を入力してください: ");
    scanf("%d", &n);
    printf("%d! = %d\\n", n, factorial(n));
    return 0;
}`;
  const runExample = `整数 n を入力してください: 5
5! = 120`;

  return (
    <section className="lesson02-slide" data-label="Exercise - factorial(n)">
      <div className="slide-eyebrow">22 / EXERCISE</div>
      <h1 className="slide-title">演習課題 — <span className="code-inline">factorial(n)</span></h1>
      <div className="slide-body-wrap" style={{ marginTop: "32px", gap: "28px", minHeight: 0 }}>
        <div className="row" style={{ gap: "36px", alignItems: "flex-start", flex: 1, minHeight: 0 }}>
          <div className="col" style={{ flex: 1, minWidth: 0, gap: "28px" }}>
            <div className="callout" style={{ fontSize: "34px", padding: "28px 40px" }}>
              C言語にて、<span className="text-accent-dark">n の階乗を計算する関数</span>
              <span className="code-inline" style={{ fontSize: "32px" }}>factorial(int n)</span>
              を定義し、階乗の計算結果を示すプログラムを作成せよ。
            </div>
            <div className="slide-small" style={{ fontSize: "24px", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", color: "var(--color-accent-dark)" }}>REQUIREMENTS</div>
            <div className="col gap-md">
              <div className="row" style={{ gap: "28px", alignItems: "flex-start" }}>
                <div className="neu-num-badge" style={{ width: "64px", height: "64px", fontSize: "30px" }}>1</div>
                <div className="slide-body" style={{ flex: 1, paddingTop: "12px" }}>
                  プログラムが実行されたら、<span className="text-accent-dark">整数 n の入力を促す</span>こと
                </div>
              </div>
              <div className="row" style={{ gap: "28px", alignItems: "flex-start" }}>
                <div className="neu-num-badge" style={{ width: "64px", height: "64px", fontSize: "30px" }}>2</div>
                <div className="slide-body" style={{ flex: 1, paddingTop: "12px" }}>
                  <span className="code-inline">factorial</span> 関数は<span className="text-accent-dark">再帰関数</span>とする
                </div>
              </div>
              <div className="row" style={{ gap: "28px", alignItems: "flex-start" }}>
                <div className="neu-num-badge" style={{ width: "64px", height: "64px", fontSize: "30px" }}>3</div>
                <div className="slide-body" style={{ flex: 1, paddingTop: "12px" }}>最後に<span className="text-accent-dark">階乗の計算結果</span>を示すこと</div>
              </div>
            </div>
          </div>
          <div className="col" style={{ flex: "0 0 60%", maxWidth: "800px", gap: "14px" }}>
            <div className="slide-small" style={{ fontSize: "24px",fontFamily: "var(--font-mono)", letterSpacing: "0.08em", color: "var(--color-accent-dark)" }}>使用例（<span className="code-inline">main</span> 側）</div>
            <pre className="code-block" style={{ fontSize: "30px", padding: "22px 28px", lineHeight: 1.4 }}>{usageCode}</pre>
            <div className="slide-small" style={{ fontSize: "24px",fontFamily: "var(--font-mono)", letterSpacing: "0.08em", color: "var(--color-accent-dark)" }}>実行例</div>
            <pre className="code-block" style={{ fontSize: "30px", padding: "22px 28px", lineHeight: 1.45, minHeight: "auto" }}>{runExample}</pre>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Exercise</div>
      </div>
    </section>
  );
}
