import SlideLayout from '../../components/SlideLayout/SlideLayout'
import qrUrl from './imgs/QR.png'

/** 左上から右へ 1→2→3 … の順（3列×4行） */
const SEAT_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

const subtitle =
  'QRコードから進むフォーム提出で表示された数字のテーブルに着席してください'

export default function Slide00() {
  return (
    <SlideLayout variant="title" title="アルゴリズム" subtitle={subtitle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '56px',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {/* QRコード（後から画像を貼る用プレースホルダー） */}
        <img src={qrUrl} alt="QRコード"
          style={{
            width: '380px',
            height: '380px',
            flexShrink: 0,
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-surface-inset)',
            boxShadow: 'var(--shadow-inset-sm)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            color: 'var(--color-text-tertiary)',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        />
    

        {/* 座席指定：3列×4行 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gridTemplateRows: 'repeat(4, minmax(112px, auto))',
            gap: '22px',
            width: '100%',
            maxWidth: '920px',
            flex: '1 1 520px',
            minWidth: 'min(100%, 520px)',
          }}
        >
          {SEAT_NUMBERS.map((n) => (
            <div
              key={n}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-raised-sm)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(91, 122, 157, 0.18)',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
