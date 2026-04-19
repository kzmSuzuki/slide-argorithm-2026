import SlideLayout from '../../components/SlideLayout/SlideLayout'
import graph from './imgs/graph.png'
import llm from './imgs/llm.png'

const items = [
  {
    title: '計算速度の向上',
    example: '例：よりメモリが少なく計算できるようになる',
    effect: '→ 大量に並列計算できる',
    color: '#5b7a9d',
    image: graph,
  },
  {
    title: '新たな価値創造',
    example: '例：大規模言語モデル（ChatGPT）',
    effect: '→ 新たな産業・サービスの誕生',
    color: '#4a8c6a',
    image: llm,
  },
]

export default function Slide08() {
  return (
    <SlideLayout title="アルゴリズムとテクノロジー" lessonTag="01">
      {/* 列ごとに上：ラベル／下：画像（高さ 1:3 — ラベルは従来比で低く、画像を広く） */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
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
                padding: '16px 24px',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-raised-sm)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: `6px solid ${item.color}`,
                overflow: 'auto',
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '2.6rem', color: item.color }}>{item.title}</h3>
              <p style={{ margin: '0 0 6px 0', fontSize: '2rem', color: 'var(--color-text-secondary)' }}>{item.example}</p>
              <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-primary)', fontWeight: 700 }}>{item.effect}</p>
            </div>

            <div
              style={{
                flex: '3 1 0',
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
                src={item.image}
                alt={item.title}
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
    </SlideLayout>
  )
}
