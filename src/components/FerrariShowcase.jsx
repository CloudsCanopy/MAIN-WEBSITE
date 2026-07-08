import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function FerrariShowcase() {
  const containerRef = useRef(null)
  const imageContainerRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Track prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(motionQuery.matches)
    const handleQueryChange = () => setReducedMotion(motionQuery.matches)
    motionQuery.addEventListener('change', handleQueryChange)
    return () => motionQuery.removeEventListener('change', handleQueryChange)
  }, [])

  // Track mouse coordinates for spotlight glow and 3D tilt
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return
    const rect = imageContainerRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Scroll parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const rotateImage = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5])

  return (
    <section
      ref={containerRef}
      id="work"
      className="py-24 relative overflow-hidden bg-black border-t border-white/5"
      aria-label="Ferrari Redesign Showcase"
    >
      {/* Red ambient branding glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] bg-[#6B8F71]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold uppercase tracking-[0.2em] text-red-500 mb-6 w-fit"
            >
              <Sparkles size={12} className="animate-pulse text-red-400" />
              Featured Concept Case Study
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-medium text-section text-text-primary tracking-tight mb-6"
            >
              Ferrari <span className="font-serif italic font-normal text-red-500">Redesign</span> Concept
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 font-light"
            >
              A high-performance digital re-engineering of the legendary automotive experience. 
              Designed for speed, luxury, and premium user immersion with responsive layouts, 
              cinematic hardware-accelerated animations, and optimized asset delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {['Vite', 'React 18', 'TailwindCSS', 'Framer Motion', 'Custom Mockup', 'Responsive UI'].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-text-muted hover:border-red-500/30 hover:text-text-primary transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://ferrariredesign.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_30px_rgba(220,38,38,0.45)] hover:-translate-y-0.5"
              >
                Launch Live Experience
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Interactive Mockup Showcase */}
          <div className="lg:col-span-7 relative group">
            {/* Glowing red accent behind mockup */}
            <div className="absolute -inset-4 bg-red-600/10 rounded-3xl blur-3xl pointer-events-none -z-10 group-hover:bg-red-600/15 transition-all duration-500" />

            <motion.div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                y: reducedMotion ? 0 : yImage, 
                rotateZ: reducedMotion ? 0 : rotateImage,
                perspective: 1500
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden bg-[#0a0f0b] border border-white/10 shadow-3xl hover:border-red-500/30 transition-all duration-500"
            >
              {/* Spotlight background hover glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(220, 38, 38, 0.12), transparent 80%)`,
                }}
              />

              {/* Spotlight border hover glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent transition-colors duration-500 z-20"
                style={{
                  maskImage: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
                  borderWidth: '1px',
                  borderColor: '#DC2626',
                }}
              />

              {/* Browser chrome header bar */}
              <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-white/8 bg-black/40 relative z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded bg-white/5 border border-white/8 w-56 mx-auto flex items-center justify-center text-[10px] text-text-muted font-mono tracking-wider truncate">
                    ferrariredesign.vercel.app
                  </div>
                </div>
              </div>

              {/* Interactive Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black z-10">
                <div className="absolute inset-0 bg-grid opacity-10" />
                
                {/* 3D tilt container for image */}
                <motion.div
                  style={{
                    rotateY: !reducedMotion && isHovered ? (coords.x / (imageContainerRef.current?.clientWidth || 1) - 0.5) * 8 : 0,
                    rotateX: !reducedMotion && isHovered ? -(coords.y / (imageContainerRef.current?.clientHeight || 1) - 0.5) * 8 : 0,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                  className="w-full h-full"
                >
                  <img
                    src="/ferrari.jpeg"
                    alt="Ferrari Redesign F1 Mockup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] drop-shadow-2xl"
                  />
                </motion.div>
                
                {/* Immersive gradient shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
