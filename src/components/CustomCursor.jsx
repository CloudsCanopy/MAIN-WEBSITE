import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [isTouch, setIsTouch] = useState(true)
  const cursorRef = useRef(null)

  // Keep position tracking in refs to avoid triggering React component updates on mousemove
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // 1. Detect touch devices (window.matchMedia('(pointer: coarse)'))
    const touchMediaQuery = window.matchMedia('(pointer: coarse)')
    const checkTouchDevice = () => {
      setIsTouch(touchMediaQuery.matches)
    }

    checkTouchDevice()
    touchMediaQuery.addEventListener('change', checkTouchDevice)

    // 2. Detect prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotionQuery.matches) {
      setIsTouch(true)
    }

    return () => {
      touchMediaQuery.removeEventListener('change', checkTouchDevice)
    }
  }, [])

  useEffect(() => {
    if (isTouch) {
      document.body.classList.remove('custom-cursor-active')
      return
    }

    document.body.classList.add('custom-cursor-active')

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
      if (hidden) setHidden(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseEnter = () => {
      setHidden(false)
    }

    // Add listeners to detect cursor over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'INPUT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card-glow') ||
        target.closest('.interactive-hover')

      setHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    // Animate coordinates using a requestAnimationFrame loop with inertia interpolation (Lerp)
    let animationFrameId
    const updatePosition = () => {
      const ease = 0.16 // cursor trailing weight factor
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * ease
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * ease

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate3d(-50%, -50%, 0)`
      }

      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [isTouch, hidden])

  if (isTouch || hidden) return null

  return (
    <div
      ref={cursorRef}
      className={`cursor-dot ${hovered ? 'hovered' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        willChange: 'transform',
        transform: 'translate3d(0px, 0px, 0) translate3d(-50%, -50%, 0)',
      }}
    />
  )
}
