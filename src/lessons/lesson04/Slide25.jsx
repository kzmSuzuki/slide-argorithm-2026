import { useState, useEffect } from 'react'
import '../lesson02/lesson02Slides.css'

const TARGET = 8
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const STEPS = [
  { lo: 0,  hi: 10, mid: 5, note: 'mid[5] = 6  <  8  →  右半分を探索', found: false },
  { lo: 6,  hi: 10, mid: 8, note: 'mid[8] = 9  >  8  →  左半分を探索', found: false },
  { lo: 6,  hi: 7,  mid: 6, note: 'mid[6] = 7  <  8  →  右を探索',     found: false },
  { lo: 7,  hi: 7,  mid: 7, note: '8 を発見！　比較わずか 3 回で完了',   found: true  },
]

const STEP_MS = 3400

export default function Slide25() {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const pause = step === STEPS.length - 1 ? STEP_MS * 1.6 : STEP_MS
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        setStep(s => (s + 1) % STEPS.length)
        setVisible(true)
      }, 380)
    }, pause)
    return () => clearTimeout(timer)
  }, [step])

  const { lo, hi, mid, note, found } = STEPS[step]

  return (
    <section
      className="lesson02-slide"
      data-label="Binary search mechanism"
      onClick={() => {
        setVisible(false)
        setTimeout(() => {
          setStep(s => (s + 1) % STEPS.length)
          setVisible(true)
        }, 320)
      }}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <div className="slide-eyebrow">26 / MECHANISM</div>
      <h1 className="slide-title">2分探索の仕組み</h1>

      <div
        className="slide-body-wrap"
        style={{ marginTop: '24px', gap: '20px', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* ── Target badge ── */}
        <div className="row" style={{ alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '24px',
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.08em',
          }}>SEARCHING:</span>
          <span style={{
            display: 'inline-block',
            padding: '8px 26px',
            background: 'var(--color-accent-dark)',
            color: 'white',
            borderRadius: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '30px',
            fontWeight: 700,
          }}>{TARGET}</span>
        </div>

        {/* ── Array cells ── */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
          {VALUES.map((v, i) => {
            const eliminated = i < lo || i > hi
            const isMid = i === mid
            const isFound = found && isMid

            let bg = 'var(--color-surface)'
            let color = 'var(--color-text-primary)'
            let shadow = 'var(--shadow-raised-sm)'
            let transform = 'scale(1)'
            let cellOpacity = eliminated ? 0.18 : 1

            if (isFound) {
              bg = 'rgba(74,222,128,0.25)'
              color = '#16a34a'
              shadow = 'var(--shadow-raised), 0 0 0 3px #4ade80'
              transform = 'scale(1.1)'
            } else if (isMid) {
              bg = 'var(--color-accent)'
              color = 'white'
              shadow = 'var(--shadow-raised), 0 0 0 4px rgba(91,122,157,0.3)'
              transform = 'scale(1.06)'
            } else if (!eliminated && (i === lo || i === hi)) {
              shadow = 'var(--shadow-raised), 0 0 0 2px var(--color-accent)'
            }

            const isLo = i === lo && !eliminated
            const isHi = i === hi && !eliminated

            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                {/* Cell box */}
                <div style={{
                  width: '96px',
                  height: '96px',
                  background: bg,
                  color,
                  opacity: cellOpacity,
                  borderRadius: '14px',
                  boxShadow: shadow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '36px',
                  fontWeight: 700,
                  transform,
                  transition: 'all 0.55s cubic-bezier(.4,0,.2,1)',
                }}>
                  {v}
                </div>

                {/* Marker row */}
                <div style={{
                  height: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1px',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.35s ease',
                }}>
                  {isMid && !eliminated && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: isFound ? '#16a34a' : 'var(--color-accent-dark)',
                      letterSpacing: '0.06em',
                      lineHeight: 1,
                    }}>
                      {isLo && isHi ? 'lo·mid·hi' : isLo ? 'lo·mid' : isHi ? 'mid·hi' : 'mid'}
                    </span>
                  )}
                  {!isMid && (isLo || isHi) && !eliminated && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      letterSpacing: '0.06em',
                      lineHeight: 1,
                    }}>
                      {isLo && isHi ? 'lo·hi' : isLo ? 'lo' : 'hi'}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Step description ── */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '32px',
          color: found ? '#16a34a' : 'var(--color-accent-dark)',
          letterSpacing: '0.04em',
          textAlign: 'center',
          minHeight: '48px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.4s ease',
        }}>
          {note}
        </div>

        {/* ── Step dots ── */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{
              width: i === step ? '28px' : '10px',
              height: '10px',
              borderRadius: '6px',
              background: i === step ? 'var(--color-accent-dark)' : 'var(--color-text-tertiary)',
              opacity: i === step ? 1 : 0.3,
              transition: 'all 0.35s ease',
            }} />
          ))}
        </div>

        {/* ── Condition cards ── */}
        <div className="row" style={{ gap: '20px', alignItems: 'stretch' }}>
          <div className="neu-card" style={{ padding: '16px 24px', maxWidth: '600px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '4px' }}>条件 ①</div>
            <div className="slide-body" style={{ fontSize: '32px', lineHeight: 1.35 }}><span className="text-accent-dark">整列されたデータ構造</span>であること</div>
          </div>
          <div className="neu-card" style={{ padding: '16px 24px', maxWidth: '600px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '4px' }}>条件 ②</div>
            <div className="slide-body" style={{ fontSize: '32px', lineHeight: 1.35 }}>中心と比較 → 大小チェック → <span className="text-accent-dark">小さい側を除外</span></div>
          </div>
        </div>
      </div>

      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Mechanism</div>
        <div className="sf-right">26 / 33</div>
      </div>
    </section>
  )
}
