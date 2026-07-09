import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Sparkles, Compass } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'
import heroVideo from './cloudscanopyhomepage.mp4'

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
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
    if (reducedMotion || !heroRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0,
        y: -50,
        scale: 0.97,
        ease: 'none',
      })
    })

    return () => ctx.revert()
  }, [reducedMotion])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const yOffset = -80
      const targetY = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-base"
      aria-label="Hero"
    >
      {/* Background Video (cloudscanopyhomepage.mp4) placed in this portion background with luxury blur and pattern masking to hide low resolution */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75 mix-blend-screen scale-105"
          style={{ filter: 'blur(3px) brightness(0.8) contrast(1.2) saturate(0.95)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/cloudscanopyhomepage.mp4" type="video/mp4" />
        </video>
        {/* Left, top, and bottom fade gradients so video blends seamlessly into black website background and text */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 30%, transparent 70%), linear-gradient(to top, #000000 0%, transparent 40%), linear-gradient(to bottom, #000000 0%, transparent 30%)'
          }}
        />
      </div>

      {/* Pure black background with subtle grid line texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-28 w-full">
        <div className="max-w-xl lg:max-w-2xl relative z-10">
          {/* Executive Pill Badge */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c120e]/80 border border-accent/40 mb-6 shadow-[0_0_20px_rgba(107,143,113,0.2)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#6B8F71]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent">
              Next-Gen Digital Product Studio
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-bold text-white leading-[1.15] tracking-tight mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_2px_10px_rgba(0,0,0,1)] moon-text-blend"
            style={{ color: '#FFFFFF' }}
          >
            Engineering{' '}
            <span className="font-serif italic font-normal text-accent-secondary">Digital Solutions</span>{' '}
            That Move Businesses{' '}
            <span className="font-serif italic font-normal text-accent">Forward.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-sm md:text-base leading-relaxed mb-10 max-w-5xl font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,1)] moon-text-blend"
            style={{ color: '#FFFFFF' }}
          >
            CloudsCanopy designs and develops modern websites, intelligent software, AI-powered
            applications, and digital experiences that help businesses scale with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <MagneticButton range={40}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-2xl btn-gradient shadow-[0_0_25px_rgba(107,143,113,0.5)] hover:shadow-[0_0_35px_rgba(107,143,113,0.8)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base group"
                id="hero-cta-primary"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </MagneticButton>
            
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); handleScroll('#work') }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-2xl bg-white/5 border border-white/15 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 focus:outline-none shadow-lg backdrop-blur-md"
              id="hero-cta-secondary"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Floating stats block -> Executive Glassmorphism Cards */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 md:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl"
          >
            {[
              { 
                value: 'Web · Software', 
                label: 'Products we build',
                icon: Terminal,
                accent: 'text-accent'
              },
              { 
                value: 'AI · E-Commerce', 
                label: 'And more',
                icon: Sparkles,
                accent: 'text-accent-secondary'
              },
              { 
                value: 'Product Studio', 
                label: 'Digital experiences',
                icon: Compass,
                accent: 'text-accent'
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.value}
                  className="relative overflow-hidden flex items-start gap-4 px-5 py-4.5 rounded-2xl bg-black/40 border border-white/5 hover:border-accent/30 transition-all duration-350 shadow-2xl backdrop-blur-xl group hover:-translate-y-0.5"
                >
                  {/* Subtle hover background sweep gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon with sage green container */}
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/8 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors duration-300 ${item.accent}`}>
                    <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="font-heading font-bold text-white text-sm tracking-tight group-hover:text-accent transition-colors">
                      {item.value}
                    </span>
                    <span className="text-text-muted text-[10px] font-mono uppercase tracking-[0.15em] mt-1 font-semibold">
                      {item.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
        aria-hidden="true"
      />
    </section>
  )
}
