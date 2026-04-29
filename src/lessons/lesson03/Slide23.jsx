import '../lesson02/lesson02Slides.css'

// Slide 23 — Recursive function memory (physical area fills up)

export default function Slide23() {
  const TOTAL_SLOTS = 10;
  const usedSlots = [
    { label: "main( )", color: "var(--color-accent-dark)" },
    { label: "f(n)", color: "var(--color-accent)" },
    { label: "f(n-1)", color: "var(--color-accent)" },
    { label: "f(n-2)", color: "var(--color-accent)" },
    { label: "f(n-3)", color: "var(--color-accent)" },
    { label: "f(n-4)", color: "var(--color-accent)" },
    { label: "f(n-5)", color: "#a66666" },
    { label: "f(n-6)", color: "#a66666" },
    { label: "f(…)", color: "#a66666" },
  ];
  const freeCount = TOTAL_SLOTS - usedSlots.length;

  return (
    <section className="lesson02-slide" data-label="Recursive function memory">
      <div className="slide-eyebrow">26 / MEMORY · RECURSIVE</div>
      <h1 className="slide-title">再帰関数呼び出し時のメモリ</h1>
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
              gap: "6px",
            }}>
              <div style={{
                position: "absolute",
                inset: "4px",
                borderRadius: "18px",
                border: "2px solid rgba(166,102,102,0.35)",
                pointerEvents: "none",
              }} />

              {Array.from({ length: freeCount }).map((_, i) => (
                <div key={"e" + i} style={{
                  height: `${100 / TOTAL_SLOTS}%`,
                  background: "repeating-linear-gradient(-45deg, transparent 0 6px, rgba(166,102,102,0.1) 6px 8px)",
                  borderRadius: "8px",
                  border: "1.5px dashed rgba(166,102,102,0.3)",
                }} />
              ))}

              {usedSlots.map((s, i) => (
                <div key={"u" + i} style={{
                  height: `${100 / TOTAL_SLOTS}%`,
                  background: s.color,
                  borderRadius: "8px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "var(--font-mono)",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}>{s.label}</div>
              ))}
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "22px",
              color: "#a66666",
              letterSpacing: "0.08em",
              marginTop: "4px",
              fontWeight: 700,
            }}>
              used: {usedSlots.length} / {TOTAL_SLOTS} ⚠
            </div>
          </div>

          <div className="col" style={{ gap: "20px", alignItems: "stretch", minWidth: "560px" }}>
            <div className="neu-card" style={{ padding: "28px 36px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: "10px" }}>CALL STACK</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "26px", color: "var(--color-text-primary)", lineHeight: 1.6 }}>
                main → f(n) → f(n-1) →<br />f(n-2) → f(n-3) → …
              </div>
            </div>
            <div style={{
              padding: "24px 32px",
              background: "rgba(166,102,102,0.1)",
              border: "1.5px solid rgba(166,102,102,0.35)",
              borderRadius: "var(--radius-lg)",
              color: "#8a4a4a",
              fontSize: "26px",
              fontWeight: 600,
              lineHeight: 1.5,
            }}>
              <span style={{ fontSize: "30px" }}>⚠</span> 呼び出しが<span style={{ fontWeight: 700 }}>終わるまで</span>、<br />
              各フレームは<span style={{ fontWeight: 700 }}>解放されない</span>
            </div>
            <div style={{
              padding: "20px 32px",
              background: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-inset-sm)",
              color: "var(--color-text-secondary)",
              fontSize: "24px",
              lineHeight: 1.5,
            }}>
              n が大きいほど<span className="text-accent-dark">スタックオーバーフロー</span>のリスク
            </div>
          </div>
        </div>
        <div className="slide-small" style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", color: "var(--color-text-secondary)" }}>
          スタックが積み重なって<span style={{ color: "#a66666", fontWeight: 600 }}>メモリを圧迫</span>する
        </div>
      </div>
      <div className="slide-footer">
        <div className="sf-left"><span className="sf-dot"></span> Memory · Recursive</div>
      </div>
    </section>
  );
}
