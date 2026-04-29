import '../lesson02/lesson02Slides.css'

// Slide 22 — Normal function memory (physical area)

export default function Slide22() {
  const TOTAL_SLOTS = 10;
  const usedSlots = [
    { label: "main( )", color: "var(--color-accent-dark)" },
    { label: "func( )", color: "var(--color-accent)" },
  ];

  return (
    <section className="lesson02-slide" data-label="Normal function memory">
      <div className="slide-eyebrow">25 / MEMORY · NORMAL</div>
      <h1 className="slide-title">通常の関数呼び出し時のメモリ</h1>
      <div className="slide-body-wrap" style={{ marginTop: "32px" }}>
        <div className="row" style={{ gap: "72px", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div className="col" style={{ alignItems: "center", gap: "20px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "24px", color: "var(--color-text-tertiary)", letterSpacing: "0.12em" }}>MEMORY</div>
            <div style={{
              position: "relative",
              width: "280px",
              height: "600px",
              background: "var(--color-surface)",
              borderRadius: "20px",
              boxShadow: "var(--shadow-inset)",
              padding: "16px",
              display: "flex",
              flexDirection: "column-reverse",
              gap: "10px",
            }}>
              {Array.from({ length: TOTAL_SLOTS - usedSlots.length }).map((_, i) => (
                <div key={"e" + i} style={{
                  height: `${100 / TOTAL_SLOTS}%`,
                  background: "repeating-linear-gradient(-45deg, transparent 0 8px, rgba(91,122,157,0.06) 8px 10px)",
                  borderRadius: "10px",
                  border: "1.5px dashed rgba(91,122,157,0.18)",
                }} />
              ))}
              {usedSlots.map((s, i) => (
                <div key={"u" + i} style={{
                  height: `${100 / TOTAL_SLOTS}%`,
                  background: s.color,
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "var(--font-mono)",
                  fontSize: "26px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}>{s.label}</div>
              ))}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-text-tertiary)", letterSpacing: "0.08em", marginTop: "4px" }}>
              used: 2 / {TOTAL_SLOTS}
            </div>
          </div>

          <div className="col" style={{ gap: "18px", alignItems: "stretch", minWidth: "520px" }}>
            <div style={{
              padding: "24px 36px",
              background: "var(--color-accent-dark)",
              color: "white",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-raised)",
              fontFamily: "var(--font-mono)",
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
            }}>main の部分</div>
            <div className="col" style={{ alignItems: "center", gap: "4px" }}>
              <div style={{ fontSize: "30px", color: "var(--color-accent)", lineHeight: 1 }}>↓</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", color: "var(--color-text-tertiary)" }}>関数呼び出し</div>
            </div>
            <div style={{
              padding: "24px 36px",
              background: "var(--color-accent)",
              color: "white",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-raised)",
              fontFamily: "var(--font-mono)",
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
            }}>関数の部分</div>
            <div className="col" style={{ alignItems: "center", gap: "4px" }}>
              <div style={{ fontSize: "30px", color: "var(--color-accent)", lineHeight: 1 }}>↓</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", color: "var(--color-text-tertiary)" }}>計算終了 → 解放</div>
            </div>
            <div style={{
              padding: "24px 36px",
              background: "var(--color-surface)",
              color: "var(--color-text-primary)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-raised-sm)",
              fontFamily: "var(--font-mono)",
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
            }}>main に戻る</div>
          </div>
        </div>
        <div className="slide-small" style={{ fontSize: "36px", textAlign: "center", marginTop: "24px", color: "var(--color-text-secondary)" }}>
          関数が終わるとメモリは<span className="text-accent-dark">解放</span>される — 使用量は<span className="text-accent-dark">一定</span>
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Memory · Normal</div>
      </div>
    </section>
  );
}
