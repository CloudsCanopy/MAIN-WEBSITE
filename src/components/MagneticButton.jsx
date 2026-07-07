import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, range = 35 }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(reducedMotionQuery.matches)
    
    const handleChange = () => setReducedMotion(reducedMotionQuery.matches)
    reducedMotionQuery.addEventListener('change', handleChange)
    return () => reducedMotionQuery.removeEventListener('change', handleChange)
  }, [])

  const handleMouseMove = (e) => {
    if (reducedMotion || !ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Scale calculation based on distance range
    const distance = Math.hypot(distanceX, distanceY)
    
    if (distance < range) {
      // Pull strength proportional to proximity
      const strength = 0.4
      setPosition({ x: distanceX * strength, y: distanceY * strength })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  if (reducedMotion) {
    return <span className="inline-block">{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}
