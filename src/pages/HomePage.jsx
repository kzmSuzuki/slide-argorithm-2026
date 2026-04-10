import { Link } from 'react-router-dom'
import { lessons } from '../lessons'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Algorithm Lectures</h1>
          <p className={styles.subtitle}>
            全{lessons.length}回 / アルゴリズムとデータ構造
          </p>
        </header>

        <div className={styles.grid}>
          {lessons.map((lesson, idx) => (
            <Link
              key={idx}
              to={`/${idx + 1}`}
              className={styles.card}
            >
              <span className={styles.cardNumber}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{lesson.title}</h3>
              <span className={styles.cardMeta}>
                {lesson.slides.length} slides
              </span>
            </Link>
          ))}
        </div>

        <footer className={styles.footer}>
          <Link to="/styles" className={styles.footerLink}>
            Style Guide
          </Link>
        </footer>
      </div>
    </div>
  )
}
