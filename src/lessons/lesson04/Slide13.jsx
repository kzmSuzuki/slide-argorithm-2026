import '../lesson02/lesson02Slides.css'

// from algo04 slide12.jsx
export default function Slide13() {
  const Choice = ({ letter, text, correct }) => (
    <div className="row" style={{
      gap: '28px',
      alignItems: 'flex-start',
      padding: '28px 32px',
      background: correct ? 'rgba(91,122,157,0.18)' : 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: correct ? 'var(--shadow-raised), 0 0 0 3px var(--color-accent)' : 'var(--shadow-raised-sm)',
      opacity: correct ? 1 : 0.45,
    }}
    >
      <div className="neu-num-badge" style={{ width: '60px', height: '60px', fontSize: '30px', color: correct ? 'var(--color-accent)' : 'var(--color-text-tertiary)' }}>{letter}</div>
      <div className="slide-body" style={{ flex: 1, paddingTop: '10px', fontSize: '34px', lineHeight: 1.5, color: correct ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)' }}>{text}</div>
      {correct && <div style={{ fontSize: '44px', color: 'var(--color-accent)', lineHeight: 1, paddingTop: '8px' }}>✓</div>}
    </div>
  )
  return (
    <section className="lesson02-slide" data-label="Quiz - answer">
      <div className="slide-eyebrow">14 / QUIZ · ANSWER</div>
      <h1 className="slide-title">答え — <span className="text-accent">B</span></h1>
      <div className="slide-body-wrap" style={{ marginTop: '32px', gap: '20px', maxWidth: '1700px' }}>
        <Choice letter="A" text="レコードは検索のために使われる重複しない情報で、キーは個々のデータのまとまりである。" />
        <Choice letter="B" text="レコードは個々のデータのまとまりであり、キーは検索に使われる一意の情報である。" correct />
        <Choice letter="C" text="レコードはデータベース全体の名前であり、キーはその表示順を示す番号である。" />
        <Choice letter="D" text="レコードは画面に表示されるタイトルのことであり、キーは入力された順番を記録する番号である。" />
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Answer</div>
        <div className="sf-right">14 / 33</div>
      </div>
    </section>
  )
}
