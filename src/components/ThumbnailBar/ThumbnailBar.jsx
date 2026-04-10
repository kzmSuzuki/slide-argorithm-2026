import { useState } from 'react'
import styles from './ThumbnailBar.module.css'

export default function ThumbnailBar({ slides, currentSlide, onSelect }) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className={styles.trigger}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className={`${styles.bar} ${visible ? styles.barVisible : ''}`}>
        <div className={styles.inner}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.thumb} ${idx === currentSlide ? styles.active : ''}`}
              onClick={(e) => { e.stopPropagation(); onSelect(idx) }}
            >
              <span className={styles.thumbNumber}>{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
