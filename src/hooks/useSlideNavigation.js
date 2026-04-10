import { useState, useCallback, useEffect } from 'react'

export function useSlideNavigation(slides, slideContext) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { nextStep, prevStep, resetSteps, goToLastStep, currentStep, totalSteps } = slideContext

  const totalSlides = slides.length

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
      resetSteps()
    }
  }, [totalSlides, resetSteps])

  const goNext = useCallback(() => {
    const stepped = nextStep()
    if (!stepped && currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
      resetSteps()
    }
  }, [nextStep, currentSlide, totalSlides, resetSteps])

  const goPrev = useCallback(() => {
    const stepped = prevStep()
    if (!stepped && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
      resetSteps()
      setTimeout(() => goToLastStep(), 0)
    }
  }, [prevStep, currentSlide, resetSteps, goToLastStep])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  return {
    currentSlide,
    totalSlides,
    goToSlide,
    goNext,
    goPrev,
    isFirst: currentSlide === 0 && currentStep === 0,
    isLast: currentSlide === totalSlides - 1 && currentStep >= totalSteps,
  }
}
