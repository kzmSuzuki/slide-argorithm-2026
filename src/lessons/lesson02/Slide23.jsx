// Slide 24 — Linked List - business card analogy（名刺入れ＋付箋を div で表現）
import './lesson02Slides.css'

const POCKETS = [
  {
    rot: 'analogy-sticky--a',
    text: (
      <>
        次はこのページ
        <br />
        ④ 番目
      </>
    ),
  },
  {
    rot: 'analogy-sticky--b',
    text: (
      <>
        次はこのページ
        <br />
        ③ 番目
      </>
    ),
  },
  {
    rot: 'analogy-sticky--c',
    text: (
      <>
        次はこのページ
        <br />
        ⑤ 番目
      </>
    ),
  },
  {
    rot: 'analogy-sticky--d',
    text: (
      <>
        次は 8 ページ
        <br />
        ① 番目
      </>
    ),
  },
  {
    rot: 'analogy-sticky--e',
    text: (
      <>
        次はこのページ
        <br />
        ⑥ 番目 …
      </>
    ),
  },
  {
    rot: 'analogy-sticky--f',
    text: (
      <>
        次は 10 ページ
        <br />
        ① 番目
      </>
    ),
  },
]

export default function Slide23() {
  return (
    <section className="lesson02-slide" data-label="Linked List - business card analogy">
      <div className="slide-eyebrow">24 / ANALOGY</div>
      <h1 className="slide-title">リスト — 名刺入れでのアナロジー</h1>

      <div
        className="slide-body-wrap"
        style={{
          marginTop: '36px',
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: '48px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            flex: '0 0 38%',
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '40px',
            minWidth: 0,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(2rem, 2.3vw, 2.6rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.65,
            }}
          >
            名刺管理で言えば、
            <br />
            付箋で次のものが
            <br />
            指定されているイメージ
          </p>
        </div>

        <div
          style={{
            flex: '1 1 0',
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="analogy-binder" aria-hidden>
            <div className="analogy-binder__spine" />
            <div className="analogy-binder__inner">
              <div className="analogy-binder__rings">
                <span className="analogy-binder__ring" />
                <span className="analogy-binder__ring" />
                <span className="analogy-binder__ring" />
              </div>
              <div className="analogy-binder__grid">
                {POCKETS.map((p, i) => (
                  <div key={i} className="analogy-pocket">
                    <div className={`analogy-sticky ${p.rot}`}>{p.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-footer">
        <div className="sf-left">
          <span className="sf-dot" />
          Analogy
        </div>
      </div>
    </section>
  )
}
