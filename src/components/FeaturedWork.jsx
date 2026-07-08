import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// Sub-Mockup 1: Enterprise Performance Dashboard
function BusinessWebsiteMockup() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6 overflow-hidden">
      {/* Grid structure */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      {/* Radial soft glow */}
      <div className="absolute top-6 left-8 w-24 h-24 rounded-full bg-[#6B8F71]/10 blur-xl group-hover:bg-[#6B8F71]/20 transition-colors duration-500" />
      
      {/* Main glass card */}
      <div className="w-56 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-4 shadow-2xl relative z-10 transform group-hover:translate-y-[-8px] group-hover:rotate-1 transition-all duration-500">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6B8F71] animate-pulse" />
            <span className="text-[8px] text-text-secondary font-mono uppercase tracking-wider">Enterprise Performance</span>
          </div>
          <span className="text-[9px] text-[#6B8F71] font-semibold bg-[#6B8F71]/10 px-1.5 py-0.5 rounded">+24.8%</span>
        </div>
        {/* Animated glowing SVG chart line */}
        <svg className="w-full h-16" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6B8F71" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#6B8F71" stopOpacity="0.0"/>
            </linearGradient>
          </defs>
          <path
            d="M0,32 Q20,10 40,28 T80,8 T100,5"
            fill="none"
            stroke="#6B8F71"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0,32 Q20,10 40,28 T80,8 T100,5 L100,40 L0,40 Z"
            fill="url(#chartGrad)"
          />
          <circle cx="100" cy="5" r="3" fill="#6B8F71" className="animate-ping" />
        </svg>
      </div>

      {/* Secondary statistics panel */}
      <div className="absolute right-6 top-8 w-24 rounded-lg bg-black/60 border border-white/5 p-2 text-center transform group-hover:translate-x-3 group-hover:translate-y-[-4px] transition-all duration-500">
        <div className="text-[8px] text-text-muted mb-0.5">Global Speed Index</div>
        <div className="text-[11px] font-semibold text-white">0.42s</div>
      </div>
    </div>
  )
}

// Sub-Mockup 2: Gourmet Ordering Dashboard
function RestaurantMockup() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-6 right-8 w-24 h-24 rounded-full bg-amber-500/5 blur-xl group-hover:bg-amber-500/10 transition-colors duration-500" />
      
      {/* Main product card */}
      <div className="w-44 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-3 shadow-2xl relative z-10 transform group-hover:translate-y-[-10px] group-hover:-rotate-1 transition-all duration-500">
        {/* Abstract food photo display area */}
        <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-amber-500/10 to-orange-500/10 border border-white/5 relative overflow-hidden mb-3">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating dish wireframe */}
            <div className="w-12 h-12 rounded-full border border-dashed border-amber-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
              <div className="w-8 h-8 rounded-full bg-amber-500/20" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold text-white">Truffle Tagliatelle</div>
            <div className="text-[8px] text-text-muted">Gourmet Italian</div>
          </div>
          <div className="text-[10px] font-bold text-amber-400">$24.00</div>
        </div>
      </div>

      {/* Floating cart dialog bubble */}
      <div className="absolute left-6 top-8 rounded-xl bg-black/70 border border-white/5 p-2.5 flex items-center gap-2 transform group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-500">
        <div className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center text-[9px] text-emerald-400 font-bold">✓</div>
        <div>
          <div className="text-[7px] text-text-muted">Added to Cart</div>
          <div className="text-[9px] font-semibold text-white font-mono">1 Item • $24.00</div>
        </div>
      </div>
    </div>
  )
}

// Sub-Mockup 3: Fitness Target Activity Hub
function GymMockup() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-6 right-8 w-24 h-24 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
      
      {/* Activity Ring Panel */}
      <div className="w-44 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-4 shadow-2xl relative z-10 flex items-center gap-4 transform group-hover:translate-y-[-8px] transition-all duration-500">
        {/* Progress Circle wireframe */}
        <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" fill="transparent" />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#6B8F71"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray="125"
              strokeDashoffset="28"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-[9px] font-semibold text-white font-mono">78%</div>
        </div>
        <div>
          <div className="text-[8px] text-text-muted uppercase tracking-wider">Target Activity</div>
          <div className="text-xs font-semibold text-white">8,420 / 10k</div>
          <div className="text-[8px] text-[#6B8F71] mt-0.5 font-medium">Steps achieved</div>
        </div>
      </div>

      {/* Floating graph bars */}
      <div className="absolute left-8 bottom-6 rounded-lg bg-black/50 border border-white/5 p-2 flex gap-1 items-end h-10 transform group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-all duration-500">
        <div className="w-1.5 bg-[#6B8F71]/30 rounded-t h-4 group-hover:h-6 transition-all duration-500" />
        <div className="w-1.5 bg-[#6B8F71]/50 rounded-t h-6 group-hover:h-8 transition-all duration-500" />
        <div className="w-1.5 bg-[#6B8F71] rounded-t h-8 group-hover:h-10 transition-all duration-500" />
      </div>
    </div>
  )
}

// Sub-Mockup 4: Administration ERP Console
function SchoolERPMockup() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-6 left-8 w-24 h-24 rounded-full bg-teal-500/5 blur-xl group-hover:bg-teal-500/10 transition-colors duration-500" />
      
      {/* Student Profile Card */}
      <div className="w-48 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-3.5 shadow-2xl relative z-10 transform group-hover:translate-y-[-8px] transition-all duration-500">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-6 h-6 rounded-full bg-[#6B8F71]/20 border border-white/10 flex items-center justify-center text-[9px] text-[#6B8F71] font-semibold">
            AJ
          </div>
          <div>
            <div className="text-[10px] font-semibold text-white leading-tight">Alex Johnson</div>
            <div className="text-[8px] text-text-muted leading-tight">Grade 11 - Section A</div>
          </div>
        </div>
        
        {/* Attendance stats */}
        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/5">
          <div>
            <div className="text-[7px] text-text-muted uppercase">Attendance</div>
            <div className="text-[9px] font-semibold text-emerald-400">96.4%</div>
          </div>
          <div>
            <div className="text-[7px] text-text-muted uppercase">GPA Grade</div>
            <div className="text-[9px] font-semibold text-white">3.92 / 4.0</div>
          </div>
        </div>
      </div>

      {/* Floating mini calendar element */}
      <div className="absolute right-6 top-8 rounded-xl bg-black/60 border border-white/5 p-2 flex flex-col items-center justify-center w-10 transform group-hover:translate-x-3 group-hover:translate-y-[-2px] transition-all duration-500">
        <div className="text-[6px] text-red-400 uppercase font-bold">Oct</div>
        <div className="text-xs font-bold text-white font-mono leading-none mt-0.5">14</div>
        <div className="text-[6px] text-text-muted font-light mt-0.5">Exam</div>
      </div>
    </div>
  )
}

// Swappable image slot — drop a real screenshot path into `src` when ready
function MockupFrame({ gradient, label, tag }) {
  const renderDashboard = () => {
    switch (label) {
      case 'Business Website':
        return <BusinessWebsiteMockup />
      case 'Restaurant Ordering Platform':
        return <RestaurantMockup />
      case 'Gym Management Platform':
        return <GymMockup />
      case 'School ERP':
        return <SchoolERPMockup />
      default:
        return (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-xs text-white/60 font-medium">
              {tag}
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <ExternalLink size={20} className="text-white/50" />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="rounded-t-2xl overflow-hidden bg-surface border-b border-white/5 relative">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-black/20 relative z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-4">
          <div className="h-4.5 rounded bg-white/5 border border-white/8 w-44 mx-auto flex items-center justify-center text-[8px] text-text-muted font-mono tracking-wider">
            {label.toLowerCase().replace(/\s+/g, '')}.cloudscanopy.in
          </div>
        </div>
      </div>
      
      {/* Mockup content area */}
      <div
        className="h-48 md:h-52 w-full flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        {renderDashboard()}
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

// Spotlight Card component to manage local hover coordinates and spotlight glow
function SpotlightCard({ project, variants, reducedMotion }) {
  const cardRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.article
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-[#070b08] border border-white/8 overflow-hidden hover:border-accent/30 transition-colors duration-500 hover:-translate-y-1.5 shadow-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Real-time spotlight background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(107, 143, 113, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Real-time spotlight border glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent transition-colors duration-500 z-10"
        style={{
          maskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
          borderWidth: '1px',
          borderColor: '#6B8F71',
        }}
      />

      <div className="relative z-10">
        <MockupFrame
          gradient={project.gradient}
          label={project.label}
          tag={project.tag}
        />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-heading font-semibold text-text-primary text-lg leading-snug group-hover:text-accent transition-colors duration-300">
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
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  // Professional 3D Perspective Slide-Up Reveal
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: reducedMotion ? 0 : 65, 
      rotateX: reducedMotion ? 0 : 8,
      scale: 0.96 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // premium easeOutQuart
      },
    },
  }

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

        {/* Cards container with Perspective */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ perspective: 1200 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {projects.map((project) => (
            <SpotlightCard
              key={project.label}
              project={project}
              variants={cardVariants}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.div>

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
