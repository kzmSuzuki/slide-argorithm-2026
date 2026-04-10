import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SlideProvider, useSlideContext } from '../../context/SlideContext'
import { useSlideNavigation } from '../../hooks/useSlideNavigation'
import SlideCanvas from '../SlideCanvas/SlideCanvas'
import ThumbnailBar from '../ThumbnailBar/ThumbnailBar'
import { lessons } from '../../lessons'
import styles from './SlideViewer.module.css'

function SlideViewerInner() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const slideContext = useSlideContext()
  const [showThumbnails, setShowThumbnails] = useState(false)

  const lessonIndex = parseInt(lessonId, 10) - 1
  const lesson = lessons[lessonIndex]

  if (!lesson) {
    return (
      <div className={styles.notFound}>
        <p>Lesson not found</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  const { slides } = lesson
  const nav = useSlideNavigation(slides, slideContext)
  const CurrentSlide = slides[nav.currentSlide]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setShowThumbnails(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className={styles.viewer}>
      <SlideCanvas onClick={(dir) => dir === 'next' ? nav.goNext() : nav.goPrev()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={nav.currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </SlideCanvas>

      <div className={styles.slideCounter}>
        <span className={styles.counterText}>
          {nav.currentSlide + 1} / {nav.totalSlides}
        </span>
      </div>

      <ThumbnailBar
        slides={slides}
        currentSlide={nav.currentSlide}
        onSelect={nav.goToSlide}
      />
    </div>
  )
}

export default function SlideViewer() {
  return (
    <SlideProvider>
      <SlideViewerInner />
    </SlideProvider>
  )
}
