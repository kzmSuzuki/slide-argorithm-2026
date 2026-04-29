import '../lesson02/lesson02Slides.css'

// from algo04 slide11.jsx
export default function Slide12() {
  const Choice = ({ letter, text, highlight }) => (
    <div className="row" style={{
      gap: '28px',
      alignItems: 'flex-start',
      padding: '28px 32px',
      background: highlight ? 'rgba(91,122,157,0.08)' : 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: highlight ? 'var(--shadow-raised)' : 'var(--shadow-raised-sm)',
    }}
    >
      <div className="neu-num-badge" style={{ width: '60px', height: '60px', fontSize: '30px', color: highlight ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}>{letter}</div>
      <div className="slide-body" style={{ flex: 1, paddingTop: '10px', fontSize: '34px', lineHeight: 1.5 }}>{text}</div>
    </div>
  )
  return (
    <section className="lesson02-slide" data-label="Quiz - choices">
      <div className="slide-eyebrow">13 / QUIZ · CHOICES</div>
      <h1 className="slide-title">どれが正しい？</h1>
      <div className="slide-body-wrap" style={{ marginTop: '32px', gap: '20px', maxWidth: '1700px' }}>
        <Choice letter="A" text="レコードは検索のために使われる重複しない情報で、キーは個々のデータのまとまりである。" />
        <Choice letter="B" text="レコードは個々のデータのまとまりであり、キーは検索に使われる一意の情報である。" />
        <Choice letter="C" text="レコードはデータベース全体の名前であり、キーはその表示順を示す番号である。" />
        <Choice letter="D" text="レコードは画面に表示されるタイトルのことであり、キーは入力された順番を記録する番号である。" />
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Choices</div>
        <div className="sf-right">13 / 33</div>
      </div>
    </section>
  )
}
