import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Swappable image slot — drop a real screenshot path into `src` when ready
function MockupFrame({ gradient, label, tag }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-surface-2 border border-white/10 shadow-card group-hover:shadow-card-hover transition-all duration-300">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-black/20">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-4">
          <div className="h-4 rounded bg-white/5 border border-white/8 w-48 mx-auto" />
        </div>
      </div>
      {/* Mockup content area */}
      <div
        className="h-48 md:h-56 w-full flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-xs text-white/60 font-medium">
            {tag}
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <ExternalLink size={20} className="text-white/50" />
          </div>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    label: 'Business Website',
    description: 'Modern corporate website focused on credibility and conversions.',
    tag: 'Concept — Corporate Web',
    gradient: 'linear-gradient(135deg, #1b2e22 0%, #0d1611 100%)', // Forest dark green
    category: 'Web Development',
  },
  {
    label: 'Restaurant Ordering Platform',
    description: 'Complete online ordering experience with payment integration.',
    tag: 'Concept — Restaurant Tech',
    gradient: 'linear-gradient(135deg, #2b271d 0%, #15130e 100%)', // Moss brown
    category: 'E-Commerce',
  },
  {
    label: 'Gym Management Platform',
    description: 'Membership management and digital customer engagement.',
    tag: 'Concept — Gym Platform',
    gradient: 'linear-gradient(135deg, #162a26 0%, #0b1513 100%)', // Deep teal
    category: 'Custom Software',
  },
  {
    label: 'School ERP',
    description: 'Student management, attendance, and administrative operations.',
    tag: 'Concept — Education ERP',
    gradient: 'linear-gradient(135deg, #202a1e 0%, #10150f 100%)', // Sage gray-green
    category: 'Custom Software',
  },
]

export default function FeaturedWork() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])
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
    if (reducedMotion || !containerRef.current || !cardsRef.current.length) return

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="work"
      className="section-padding"
      aria-label="Featured work"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Work
          </span>
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            Featured <span className="font-serif italic font-normal text-accent-secondary">Solutions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            A glimpse at the types of digital products we design and build for our clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {projects.map((project, index) => (
            <article
              key={project.label}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-2xl bg-surface border border-white/8 overflow-hidden hover:border-white/16 transition-all duration-300 hover:-translate-y-1"
            >
              <MockupFrame
                gradient={project.gradient}
                label={project.label}
                tag={project.tag}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-heading font-semibold text-text-primary text-lg leading-snug">
                    {project.label}
                  </h3>
                  <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-accent/15 border border-accent/25 text-accent text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-text-muted text-sm mt-10"
        >
          Concept mockups shown — real client screenshots will be added upon project delivery.
        </motion.p>
      </div>
    </section>
  )
}
