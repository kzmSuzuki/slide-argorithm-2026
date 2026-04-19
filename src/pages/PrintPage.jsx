import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { lessons } from '../lessons'
import styles from './PrintPage.module.css'

const SLIDE_W = 1920
const SLIDE_H = 1080
const CTRL_H = 60 // コントロールバーの高さ（px）

export default function PrintPage() {
  const { lessonId } = useParams()
  const lesson = lessons[parseInt(lessonId, 10) - 1]
  const [ready, setReady] = useState(false)
  const [scale, setScale] = useState(0.5)
  const slidesRef = useRef(null)

  // 画面幅に合わせたスケールを計算
  useEffect(() => {
    const calcScale = () => {
      const availW = window.innerWidth - 64 // 左右余白
      const availH = window.innerHeight - CTRL_H - 32
      setScale(Math.min(availW / SLIDE_W, availH / SLIDE_H, 0.65))
    }
    calcScale()
    window.addEventListener('resize', calcScale)
    return () => window.removeEventListener('resize', calcScale)
  }, [])

  // print-mode クラスを body に付与（印刷 CSS の判定に使う）
  useEffect(() => {
    document.body.classList.add('print-mode')
    return () => document.body.classList.remove('print-mode')
  }, [])

  useEffect(() => {
    if (!lesson) return
    const t = setTimeout(() => {
      setReady(true)
      window.print()
    }, 800)
    return () => clearTimeout(t)
  }, [lesson])

  if (!lesson) {
    return (
      <div className={styles.error}>
        <p>レッスンが見つかりません</p>
        <Link to="/">ホームに戻る</Link>
      </div>
    )
  }

  return (
    <>
      {/* 画面表示用のコントロール（印刷時は非表示） */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <span className={styles.lessonTitle}>
            Lesson {lessonId} — {lesson.title}
            <span className={styles.slideCount}> ({lesson.slides.length} slides)</span>
          </span>
          <div className={styles.actions}>
            <button
              className={styles.printBtn}
              onClick={() => window.print()}
            >
              <span>🖨</span> 印刷 / PDF で保存
            </button>
            <Link to={`/${lessonId}`} className={styles.backBtn}>
              ✕ 閉じる
            </Link>
          </div>
        </div>
        {!ready && (
          <div className={styles.loading}>スライドを読み込んでいます…</div>
        )}
      </div>

      {/* スライド一覧 */}
      <div className={styles.slides} ref={slidesRef}>
        {lesson.slides.map((Slide, i) => (
          /* pageWrapper: scale後の実サイズをラッパーに持たせてレイアウト崩れを防ぐ */
          <div
            key={i}
            className={styles.pageWrapper}
            style={{
              width: `${SLIDE_W * scale}px`,
              height: `${SLIDE_H * scale}px`,
            }}
          >
            <div
              className={styles.page}
              style={{ transform: `scale(${scale})` }}
            >
              <Slide />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
