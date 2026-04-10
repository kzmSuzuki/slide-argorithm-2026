import { useRef, useState, useEffect } from 'react'
import styles from './SlideCanvas.module.css'

export default function SlideCanvas({ children, onClick }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      setScale(Math.min(vw / 1920, vh / 1080))
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const handleClick = (e) => {
    if (!onClick) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const half = rect.width / 2
    if (x > half) {
      onClick('next')
    } else {
      onClick('prev')
    }
  }

  return (
    <div className={styles.viewport} ref={containerRef} onClick={handleClick}>
      <div
        className={styles.canvas}
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  )
}
