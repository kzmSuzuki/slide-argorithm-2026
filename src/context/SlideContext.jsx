import { createContext, useContext, useState, useCallback } from 'react'

const SlideContext = createContext(null)

export function SlideProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(0)

  const registerSteps = useCallback((count) => {
    setTotalSteps(count)
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
      return true
    }
    return false
  }, [currentStep, totalSteps])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      return true
    }
    return false
  }, [currentStep])

  const resetSteps = useCallback(() => {
    setCurrentStep(0)
    setTotalSteps(0)
  }, [])

  const goToLastStep = useCallback(() => {
    setCurrentStep(totalSteps)
  }, [totalSteps])

  return (
    <SlideContext.Provider value={{
      currentStep,
      totalSteps,
      registerSteps,
      nextStep,
      prevStep,
      resetSteps,
      goToLastStep,
    }}>
      {children}
    </SlideContext.Provider>
  )
}

export function useSlideContext() {
  const ctx = useContext(SlideContext)
  if (!ctx) throw new Error('useSlideContext must be used within SlideProvider')
  return ctx
}
