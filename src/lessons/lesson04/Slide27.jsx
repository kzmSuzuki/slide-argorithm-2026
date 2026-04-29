import '../lesson02/lesson02Slides.css'

export default function Slide27() {
  const W = 600, H = 380, P = 48
  // Y軸 = 実際のステップ数（O(n) の最大値を基準に共通スケール）
  const N_MAX  = 100   // x 軸の最大 n
  const Y_MAX  = 50    // y 軸の最大ステップ数

  const toX = n     => P + (n / N_MAX) * (W - 2 * P)
  const toY = steps => H - P - (steps / Y_MAX) * (H - 2 * P)  // 共通スケール

  // パス生成
  const NPTS = 400
  const linPts = [], logPts = []
  for (let i = 0; i <= NPTS; i++) {
    const n  = Math.max((i / NPTS) * N_MAX, 1)
    const xv = toX(n).toFixed(1)
    linPts.push(`${xv},${toY(n).toFixed(1)}`)
    logPts.push(`${xv},${toY(Math.log2(n)).toFixed(1)}`)
  }
  const linearPath = `M ${linPts.join(' L ')}`
  const logPath    = `M ${logPts.join(' L ')}`

  // 軸 tick
  const xTicks = [0, 25, 50, 75, 100]
  const yTicks = [0, 10, 20, 30, 40, 50]

  // O(log n) の n=100 時の実ステップ数 ≈ 6.64
  const logMaxSteps = Math.log2(N_MAX)   // ≈ 6.64
  const logLineY    = toY(logMaxSteps)   // グラフ内の y 座標

  return (
    <section className="lesson02-slide" data-label="Complexity comparison">
      <div className="slide-eyebrow">28 / COMPARE</div>
      <h1 className="slide-title">計算量の比較</h1>
      <div className="slide-body-wrap" style={{ marginTop: '28px', gap: '28px' }}>
        <div className="row" style={{ gap: '36px', alignItems: 'center' }}>

          {/* ── グラフ ── */}
          <div className="neu-card" style={{ padding: '20px 20px 32px', flex: '0 0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '17px',
              color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', marginBottom: '4px',
            }}>
              ステップ数の比較（縦軸共通スケール）
            </div>
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>

              {/* グリッド横線 */}
              {yTicks.slice(1).map(v => {
                const gy = toY(v)
                return (
                  <line key={v}
                    x1={P} y1={gy} x2={W - P} y2={gy}
                    stroke="rgba(91,122,157,0.12)" strokeWidth="1" strokeDasharray="5,4"
                  />
                )
              })}

              {/* Y 軸ラベル */}
              {yTicks.map(v => (
                <text key={v}
                  x={P - 8} y={toY(v) + 5}
                  textAnchor="end" fontFamily="JetBrains Mono" fontSize="13"
                  fill="rgba(91,122,157,0.6)">{v}</text>
              ))}

              {/* 軸タイトル (y) */}
              <text x={14} y={H / 2} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="13" fill="rgba(91,122,157,0.5)"
                transform={`rotate(-90, 14, ${H / 2})`}>ステップ数</text>

              {/* 軸 */}
              <line x1={P} y1={H - P} x2={W - P} y2={H - P} stroke="rgba(91,122,157,0.35)" strokeWidth="2" />
              <line x1={P} y1={P}     x2={P}     y2={H - P} stroke="rgba(91,122,157,0.35)" strokeWidth="2" />

              {/* X 軸 tick & ラベル */}
              {xTicks.map(v => (
                <g key={v}>
                  <line x1={toX(v)} y1={H - P} x2={toX(v)} y2={H - P + 6}
                    stroke="rgba(91,122,157,0.45)" strokeWidth="1.5" />
                  <text x={toX(v)} y={H - P + 20} textAnchor="middle"
                    fontFamily="JetBrains Mono" fontSize="13" fill="rgba(91,122,157,0.6)">{v}</text>
                </g>
              ))}

              {/* 軸タイトル (x) */}
              <text x={W - P + 10} y={H - P + 5}
                fontFamily="JetBrains Mono" fontSize="15" fill="rgba(91,122,157,0.55)">n</text>

              {/* O(n) パス */}
              <path d={linearPath} fill="none" stroke="#b87070" strokeWidth="3.5" strokeLinecap="round" />

              {/* O(log n) パス */}
              <path d={logPath} fill="none" stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" />

              {/* O(log n) の上限を示す水平破線 */}
              <line
                x1={P} y1={logLineY} x2={W - P} y2={logLineY}
                stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45"
              />

              {/* O(n) ラベル */}
              <text x={toX(82)} y={toY(82) - 14} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="21" fill="#b87070" fontWeight="700">O(n)</text>

              {/* O(log n) ラベル */}
              <text x={toX(50)} y={logLineY - 12} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="21" fill="var(--color-accent)" fontWeight="700">O(log n)</text>

              {/* O(log n) の値を注記 */}
              <text x={W - P - 4} y={logLineY - 7} textAnchor="end"
                fontFamily="JetBrains Mono" fontSize="14" fill="var(--color-accent)" opacity="0.8">
                ≈ {logMaxSteps.toFixed(1)} ステップ
              </text>
            </svg>
          </div>

          {/* ── テーブル ── */}
          <div style={{ flex: 1 }}>
            <table className="neu-table" style={{ fontSize: '34px', width: '100%' }}>
              <thead>
                <tr>
                  <th>アルゴリズム</th>
                  <th style={{ textAlign: 'right' }}>n = 1,000</th>
                  <th style={{ textAlign: 'right' }}>n = 1,000,000</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>線形探索 <span style={{ fontFamily: 'var(--font-mono)', color: '#b87070', fontWeight: 700 }}>O(n)</span></td>
                  <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: '#b87070', fontWeight: 700 }}>1,000</td>
                  <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: '#b87070', fontWeight: 700 }}>1,000,000</td>
                </tr>
                <tr>
                  <td>2分探索 <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-dark)', fontWeight: 700 }}>O(log n)</span></td>
                  <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-dark)', fontWeight: 700 }}>10</td>
                  <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-dark)', fontWeight: 700 }}>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="quote-block" style={{ textAlign: 'center', fontSize: '36px', padding: '18px 36px' }}>
          データ量が <span className="text-accent-dark">1,000倍</span> になっても、2分探索のステップ数は <span className="text-accent-dark">10 → 20（2倍）</span> にしか増えない
        </div>
      </div>

      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot" /> Compare</div>
        <div className="sf-right">28 / 33</div>
      </div>
    </section>
  )
}
