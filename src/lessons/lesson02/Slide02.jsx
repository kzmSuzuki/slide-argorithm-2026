// 前期の授業設計
import './lesson02Slides.css'
import basic from './imgs/basic.png'
import search from './imgs/search.png'
import sort from './imgs/sort.png'
import soccer from './imgs/soccer.png'
import text from './imgs/text.png'

const themes = [
  {
    label: '基本概念',
    color: '#5b7a9d',
    items: ['①アルゴリズムの基礎', '②基本的なデータ構造', '③再帰'],
    image: basic,
  },
  {
    label: 'データを探す',
    color: '#4a8c6a',
    items: ['④探索：基礎', '⑤探索：木構造', '⑥探索：ハッシュテーブル'],
    image: search,
  },
  {
    label: '並び替える',
    color: '#7a6b5a',
    items: ['⑦単純なソート', '⑧クイックソート', '⑨ヒープソート', '⑩マージソート'],
    image: sort,
  },
  {
    label: 'サッカーでのデータ分析（応用）',
    color: '#4a6a8c',
    items: ['⑪対戦相手のデータ分析', '⑫自分たちの強みの分析', '⑬実践'],
    image: soccer,
  },
  {
    label: '文字列のアルゴリズム',
    color: '#8c4a4a',
    items: ['⑭KMP法', '⑮BM法'],
    image: text,
  },
]

export default function Slide02() {
  return (
    <section className="lesson02-slide" data-label="Course plan">
      <div className="slide-eyebrow">03 / COURSE PLAN</div>
      <h1 className="slide-title">前期の授業設計</h1>
      <div
        className="slide-body-wrap"
        style={{ marginTop: '32px', flex: 1, minHeight: 0 }}
      >
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            alignItems: 'stretch',
          }}
        >
          {themes.map((theme) => (
            <div
              key={theme.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                minHeight: 0,
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--color-surface)',
                  boxShadow: 'var(--shadow-raised-sm)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'auto',
                }}
              >
                <div
                  style={{
                    background: theme.color,
                    padding: '12px 16px',
                    fontWeight: 700,
                    fontSize: '1.7rem',
                    color: '#fff',
                    lineHeight: 1.4,
                    flexShrink: 0,
                    borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                  }}
                >
                  {theme.label}
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: '12px 16px',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {theme.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '1.7rem',
                        color: 'var(--color-text-secondary)',
                        paddingLeft: '10px',
                        borderLeft: `3px solid ${theme.color}`,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  borderRadius: 'var(--radius-lg)',
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-raised-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={theme.image}
                  alt={theme.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Algorithm #02 · Course plan</div>
      </div>
    </section>
  )
}
