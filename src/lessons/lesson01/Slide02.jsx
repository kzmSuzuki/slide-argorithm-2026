import SlideLayout from '../../components/SlideLayout/SlideLayout'

const themes = [
  {
    label: '基本概念',
    color: '#5b7a9d',
    items: ['①アルゴリズムの基礎', '②基本的なデータ構造', '③再帰'],
  },
  {
    label: 'データを探す',
    color: '#4a8c6a',
    items: ['④探索：基礎', '⑤探索：木構造', '⑥探索：ハッシュテーブル'],
  },
  {
    label: '並び替える',
    color: '#7a6b5a',
    items: ['⑦単純なソート', '⑧クイックソート', '⑨ヒープソート', '⑩マージソート'],
  },
  {
    label: 'グラフ（応用）',
    color: '#8c4a4a',
    items: ['⑫グラフ探索', '⑬最短経路（ダイクストラ法）', '⑭最短経路（ベルマン・フォード法）'],
  },
]

export default function Slide02() {
  return (
    <SlideLayout title="前期の授業設計" lessonTag="01">
      <div style={{ marginBottom: '12px', fontSize: '2rem', color: 'var(--color-text-secondary)' }}>
        基礎 → 活用2大テーマ → 応用
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px' }}>
        {themes.map((theme) => (
          <div
            key={theme.label}
            style={{
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-raised-sm)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <div style={{
              background: theme.color,
              padding: '12px 18px',
              fontWeight: 600,
              fontSize: '2rem',
              color: '#fff',
              letterSpacing: '0.02em',
            }}>
              {theme.label}
            </div>
            <ul style={{ margin: 0, padding: '14px 18px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {theme.items.map((item) => (
                <li key={item} style={{
                  fontSize: '1.8rem',
                  color: 'var(--color-text-secondary)',
                  paddingLeft: '10px',
                  borderLeft: `3px solid ${theme.color}`,
                  lineHeight: 1.5,
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
