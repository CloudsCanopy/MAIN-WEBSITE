import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Figma, Code2, CheckCircle, Rocket, HeartHandshake } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    icon: Search,
    label: 'Discover',
    description: 'Understanding your business goals and requirements.',
    color: 'from-accent/70 to-accent',
    glow: 'rgba(107,143,113,0.25)',
  },
  {
    icon: Figma,
    label: 'Design',
    description: 'Creating intuitive user experiences and modern interfaces.',
    color: 'from-accent to-accent-secondary',
    glow: 'rgba(159,179,166,0.3)',
  },
  {
    icon: Code2,
    label: 'Develop',
    description: 'Building scalable, secure, and maintainable software.',
    color: 'from-accent-secondary to-accent',
    glow: 'rgba(107,143,113,0.3)',
  },
  {
    icon: CheckCircle,
    label: 'Test',
    description: 'Ensuring quality, security, and performance.',
    color: 'from-accent/80 to-accent-secondary/60',
    glow: 'rgba(107,143,113,0.2)',
  },
  {
    icon: Rocket,
    label: 'Launch',
    description: 'Deploying your product with confidence.',
    color: 'from-accent-secondary/90 to-accent/90',
    glow: 'rgba(159,179,166,0.25)',
  },
  {
    icon: HeartHandshake,
    label: 'Support',
    description: 'Continuous improvements and technical assistance.',
    color: 'from-accent to-accent-secondary',
    glow: 'rgba(107,143,113,0.3)',
  },
]

export default function Process() {
  const processRef = useRef(null)
  const stepsContainerRef = useRef(null)
  const stepsRefs = useRef([])
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(motionQuery.matches)

    const handleQueryChange = () => setReducedMotion(motionQuery.matches)
    motionQuery.addEventListener('change', handleQueryChange)

    return () => {
      motionQuery.removeEventListener('change', handleQueryChange)
    }
  }, [])

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (reducedMotion || !isDesktop || !processRef.current || !stepsRefs.current.length) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top top',
          end: '+=700',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Set initial state for all items
      gsap.set(stepsRefs.current, { opacity: 0.25, y: 15, scale: 0.93 })

      // Reveal step-by-step
      stepsRefs.current.forEach((step, idx) => {
        tl.to(step, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
        }, idx * 1.5) // delay step staggered reveal
      })
      // Add buffer scroll room at the end of pin
      tl.to({}, { duration: 1 })
    })

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={processRef}
      id="process"
      className="section-padding bg-surface/30 flex items-center justify-center min-h-screen"
      aria-label="Development process"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto px-6 py-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative z-10 inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            How We Work
          </span>
          <h2 className="relative z-10 font-heading font-medium text-section text-white tracking-tight mb-4">
            Our <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Development Process</span>
          </h2>
          <p className="relative z-10 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            A transparent, structured approach that keeps you informed at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(107,143,113,0.2) 10%, rgba(107,143,113,0.5) 50%, rgba(159,179,166,0.2) 90%, transparent)',
            }}
            aria-hidden="true"
          />

          <div
            ref={stepsContainerRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.label}
                  ref={(el) => (stepsRefs.current[index] = el)}
                  className="flex flex-col items-center text-center group transition-transform duration-300"
                >
                  {/* Step number bubble */}
                  <div className="relative mb-5">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      style={{ boxShadow: `0 8px 32px ${step.glow}` }}
                    >
                      <Icon size={28} className="text-base" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                      <span className="text-xs font-bold gradient-text">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary text-base mb-2 moon-text-blend">
                    {step.label}
                  </h3>
                  <p className="text-white text-xs leading-relaxed max-w-[140px] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)] moon-text-blend">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
