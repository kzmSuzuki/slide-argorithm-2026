// Slide 20 — Exercise - insert function
// (Auto-generated from Algorithm 02 - Data Structures.html)

import './lesson02Slides.css'

const exampleCode = `#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[100] = "SUZUKI";
    printf("%s", str);           /* 初期の文字列 */
    insert(str, 'X', 3); /* インデックス 3 に 'X' を挿入 */
    printf("%s", str);           /* 挿入後の文字列 */
    return 0;
}`

const exampleOutput = `SUZUKI
SUZXUKI`

export default function Slide19() {
  return (
    <section className="lesson02-slide" data-label="Exercise - insert function">
      <div className="slide-eyebrow">20 / EXERCISE</div>
      <h1 className="slide-title">課題 — 配列への挿入関数</h1>
      <div
        className="slide-body-wrap"
        style={{
          marginTop: '32px',
          gap: 'clamp(16px, 2vh, 28px)',
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          className="callout"
          style={{
            fontSize: 'clamp(26px, 2.2vw, 32px)',
            padding: 'clamp(20px, 2vh, 28px) clamp(24px, 2vw, 36px)',
            flexShrink: 0,
          }}
        >
          C言語の文字配列にて、指定位置への挿入関数
          <span className="code-inline" style={{ fontSize: '0.95em' }}>
            insert(char *str, char c, int n)
          </span>
          を定義せよ。
        </div>
        <div style={{ flexShrink: 0 }}>
          <div
            className="slide-small"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              color: 'var(--color-accent-dark)',
              marginBottom: '16px',
            }}
          >
            REQUIREMENTS
          </div>
          <div className="col gap-md">
            <div className="row" style={{ gap: '20px', alignItems: 'flex-start' }}>
              <div className="neu-num-badge" style={{ width: '52px', height: '52px', fontSize: '26px' }}>
                1
              </div>
              <div className="slide-body" style={{ flex: 1, paddingTop: '8px', fontSize: '1.85rem' }}>
                プログラムが実行されたら、<span className="text-accent-dark">初期の文字列を表示</span>させること
              </div>
            </div>
            <div className="row" style={{ gap: '20px', alignItems: 'flex-start' }}>
              <div className="neu-num-badge" style={{ width: '52px', height: '52px', fontSize: '26px' }}>
                2
              </div>
              <div className="slide-body" style={{ flex: 1, paddingTop: '8px', fontSize: '1.85rem' }}>
                ユーザーに<span className="text-accent-dark">挿入位置と挿入する文字入力を促す</span>こと（何も知らない実行者が次のアクションを起こせる必要がある）
              </div>
            </div>
            <div className="row" style={{ gap: '20px', alignItems: 'flex-start' }}>
              <div className="neu-num-badge" style={{ width: '52px', height: '52px', fontSize: '26px' }}>
                3
              </div>
              <div className="slide-body" style={{ flex: 1, paddingTop: '8px', fontSize: '1.85rem' }}>
                最後に<span className="text-accent-dark">挿入後の文字列</span>を示すこと
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 auto', minHeight: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            className="slide-small"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              color: 'var(--color-accent-dark)',
              flexShrink: 0,
            }}
          >
            使用例（挿入後の文字列のイメージ）
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
              gap: '20px',
              alignItems: 'stretch',
              minHeight: 0,
              flex: 1,
            }}
          >
            <pre
              className="code-block"
              style={{
                margin: 0,
                fontSize: 'clamp(18px, 1.6vw, 24px)',
                padding: '16px 20px',
                lineHeight: 1.4,
                overflow: 'auto',
              }}
            >
              {exampleCode}
            </pre>
            <div
              className="neu-inset"
              style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                minHeight: 0,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.35rem',
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.06em',
                }}
              >
                実行結果（想定）
              </div>
              <pre
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(20px, 1.8vw, 28px)',
                  color: 'var(--color-text-primary)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {exampleOutput}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Exercise
        </div>
      </div>
    </section>
  )
}
