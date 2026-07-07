import { useEffect, useRef, useState } from 'react'

export default function CanopyParticles() {
  const canvasRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(motionQuery.matches)
    
    const handleQueryChange = () => setReducedMotion(motionQuery.matches)
    motionQuery.addEventListener('change', handleQueryChange)
    return () => motionQuery.removeEventListener('change', handleQueryChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Spores/Particles density
    const particleCount = 35
    const particles = []

    class Spore {
      constructor() {
        this.reset()
        // Distribute initially along screen height
        this.y = Math.random() * height
      }

      reset() {
        this.x = Math.random() * width
        this.y = height + 10
        this.size = Math.random() * 2 + 1 // ultra-thin 1px to 3px spores
        this.speedY = Math.random() * 0.2 + 0.1 // very slow drifting upward
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.1 // gentle wave horizontal sway
        this.opacity = Math.random() * 0.35 + 0.05
        this.angle = Math.random() * Math.PI * 2
        this.waveSpeed = Math.random() * 0.01 + 0.002
      }

      update() {
        this.y -= this.speedY
        this.angle += this.waveSpeed
        this.x += Math.sin(this.angle) * 0.15

        // Reset if it goes off top or sides
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        // Soft glowing sage color (#6B8F71) or translucent mist
        ctx.fillStyle = `rgba(107, 143, 113, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize spores
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Spore())
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((spore) => {
        spore.update()
        spore.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
