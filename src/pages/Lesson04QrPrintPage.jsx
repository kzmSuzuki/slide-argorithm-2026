import { useEffect } from 'react'
import group1 from '../lessons/lesson04/qrcode/group1.png'
import group2 from '../lessons/lesson04/qrcode/group2.png'
import group3 from '../lessons/lesson04/qrcode/group3.png'
import group4 from '../lessons/lesson04/qrcode/group4.png'
import group5 from '../lessons/lesson04/qrcode/group5.png'
import group6 from '../lessons/lesson04/qrcode/group6.png'
import group7 from '../lessons/lesson04/qrcode/group7.png'
import group8 from '../lessons/lesson04/qrcode/group8.png'
import group9 from '../lessons/lesson04/qrcode/group9.png'
import group10 from '../lessons/lesson04/qrcode/group10.png'
import styles from './Lesson04QrPrintPage.module.css'

const GROUPS = [
  { no: 1, src: group1 },
  { no: 2, src: group2 },
  { no: 3, src: group3 },
  { no: 4, src: group4 },
  { no: 5, src: group5 },
  { no: 6, src: group6 },
  { no: 7, src: group7 },
  { no: 8, src: group8 },
  { no: 9, src: group9 },
  { no: 10, src: group10 },
]

export default function Lesson04QrPrintPage() {
  useEffect(() => {
    document.body.classList.add('print-mode')
    return () => document.body.classList.remove('print-mode')
  }, [])

  return (
    <main className={styles.page}>
      <header className={styles.toolbar}>
        <h1>Lesson 04 QRコード（グループ別）</h1>
        <button type="button" onClick={() => window.print()} className={styles.printButton}>
          印刷
        </button>
      </header>

      <section className={styles.sheet}>
        {GROUPS.map((group) => (
          <article key={group.no} className={styles.card}>
            <div className={styles.label}>グループ {group.no}</div>
            <img src={group.src} alt={`グループ ${group.no} QRコード`} className={styles.qr} />
          </article>
        ))}
      </section>
    </main>
  )
}
