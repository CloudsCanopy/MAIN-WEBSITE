import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import IntroAnimation from './components/IntroAnimation'
import CustomCursor from './components/CustomCursor'
import Moon from './components/Moon'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [introSeen, setIntroSeen] = useState(false)

  useEffect(() => {
    // Detect prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hasReducedMotion = reducedMotionQuery.matches

    // If intro has not been seen and no reduced motion is active, we wait for it
    if (!introSeen && !hasReducedMotion) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: !hasReducedMotion,
      wheelMultiplier: 1.0,
    })

    // Connect Lenis scroll events to GSAP ScrollTrigger updates
    lenis.on('scroll', ScrollTrigger.update)

    // Synchronize Lenis raf loop with GSAP's ticker
    const tickCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickCallback)
    gsap.ticker.lagSmoothing(0)

    // Control Lenis scrolling state based on intro progress
    if (!introSeen && !hasReducedMotion) {
      lenis.stop()
    } else {
      lenis.start()
    }

    // Clean up
    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickCallback)
      document.body.style.overflow = ''
    }
  }, [introSeen])

  const handleIntroComplete = () => {
    setIntroSeen(true)
    document.body.style.overflow = ''
  }

  return (
    <BrowserRouter>
      {!introSeen && <IntroAnimation onComplete={handleIntroComplete} />}
      <CustomCursor />
      <Moon />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
