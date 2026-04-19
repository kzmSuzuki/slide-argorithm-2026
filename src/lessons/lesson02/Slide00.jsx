// Slide 01 — Attendance (座席確認)
import './lesson02Slides.css'
import qrUrl from './imgs/QR_2.png'

const SEAT_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

const subtitle = 'QRコードから進むフォーム提出で表示された数字のテーブルに着席してください'

export default function Slide00() {
  return (
    <section className="lesson02-slide" data-label="Attendance">
      <div className="cover-meta">ALGORITHM / LESSON #02</div>
      <div
        className="slide-body-wrap"
        style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
      >
        <div className="cover-title-en" style={{ marginBottom: '16px' }}>Check-in</div>
        <p style={{ fontSize: '1.85rem', color: 'var(--color-text-tertiary)', marginBottom: '40px' }}>
          {subtitle}
        </p>
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
          <img
            src={qrUrl}
            alt="QRコード"
            style={{
              width: '360px',
              height: '360px',
              flexShrink: 0,
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-inset-sm)',
            }}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(4, minmax(100px, auto))',
              gap: '20px',
              flex: '1 1 480px',
              minWidth: 'min(100%, 480px)',
              maxWidth: '840px',
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
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Algorithm #02</div>
      </div>
    </section>
  )
}
