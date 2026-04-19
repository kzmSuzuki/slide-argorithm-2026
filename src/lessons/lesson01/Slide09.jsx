import SlideLayout from '../../components/SlideLayout/SlideLayout'
import responsive from './imgs/responsve.png'

const YT_CREATIVE =
  'https://www.youtube.com/watch?v=-Rxm4Rnm4Qc'

const items = [
  {
    title: 'レスポンシブデザイン',
    desc: '各デバイスサイズで最適化するデザイン',
    color: '#7a6b5a',
    icon: '📱',
    img: responsive,
  },
  {
    title: 'クリエイティブコーディング',
    desc: 'アルゴリズムを表現・造形・音楽・映像へ応用するデザイン手法',
    color: '#8c4a6a',
    icon: '🎨',
    youtubeUrl: YT_CREATIVE,
    youtubeVideoId: '-Rxm4Rnm4Qc',
  },
]

const imagePlaceholderStyle = {
  borderRadius: 'var(--radius-lg)',
  background: 'var(--color-surface-inset)',
  boxShadow: 'var(--shadow-inset-sm)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  color: 'var(--color-text-tertiary)',
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  minHeight: 0,
  height: '100%',
}

export default function Slide09() {
  return (
    <SlideLayout title="アルゴリズムとデザイン" lessonTag="01">
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateRows: 'auto minmax(280px, 1fr)',
          gap: '28px',
        }}
      >
        {/* 上段：ラベル（テキスト）を横並び */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
                padding: '32px 36px',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-raised-sm)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: `6px solid ${item.color}`,
              }}
            >
              <span style={{ fontSize: '4rem', lineHeight: 1, minWidth: '60px' }}>{item.icon}</span>
              <div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '2.6rem', color: item.color }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: '2rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 下段：各列に大きめの画像（クリエイティブコーディングは YouTube サムネイル＋リンク） */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', minHeight: 0 }}>
          {items.map((item) =>
            item.youtubeVideoId ? (
              <a
                key={`${item.title}-image`}
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...imagePlaceholderStyle,
                  padding: 0,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: 'var(--shadow-raised-sm)',
                }}
                aria-label="YouTube で動画を開く（クリエイティブコーディング）"
              >
                <img
                  src={`https://img.youtube.com/vi/${item.youtubeVideoId}/hqdefault.jpg`}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '88px',
                    height: '88px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.55)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.8rem',
                    color: '#fff',
                    pointerEvents: 'none',
                  }}
                  aria-hidden
                >
                  ▶
                </span>
              </a>
            ) : item.img ? (
              <div
                key={`${item.title}-image`}
                style={{
                  minHeight: 0,
                  height: '100%',
                  borderRadius: 'var(--radius-lg)',
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-raised-sm)',
                  padding: '8px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            ) : (
              <div key={`${item.title}-image`} style={imagePlaceholderStyle}>
                <span style={{ fontSize: '4rem', opacity: 0.5 }}>🖼</span>
                IMAGE PLACEHOLDER
              </div>
            ),
          )}
        </div>
      </div>
    </SlideLayout>
  )
}
