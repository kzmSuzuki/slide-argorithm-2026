import SlideLayout from '../../components/SlideLayout/SlideLayout'

const points = [
  { text: 'アルゴリズム ＝ 問題を解くための、曖昧さのない手順' },
  { text: 'プログラム ＝ アルゴリズムを計算機に載せるための表現方法' },
  { text: '計算量はO記法で「nが増えたときの増え方」として表す' },
  { text: 'アルゴリズムの選択が、パフォーマンスを桁違いに変える' },
]

export default function Slide13() {
  return (
    <SlideLayout variant="title" lessonTag="01" title="まとめ">
      <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '780px' }}>
        {points.map((p, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '18px 28px',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-raised-sm)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'left',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '2.2rem',
              color: 'var(--color-accent)',
              opacity: 0.5,
              minWidth: '44px',
            }}>{String(i + 1).padStart(2, '0')}</span>
            <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>{p.text}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '28px', fontSize: '1.8rem', color: 'var(--color-text-tertiary)' }}>
        次回：基本的なデータ構造
      </p>
    </SlideLayout>
  )
}
