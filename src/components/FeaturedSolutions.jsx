import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  Utensils,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Layers,
  Briefcase,
  Cpu,
  Video,
  ArrowRight,
} from 'lucide-react'

const solutions = [
  {
    title: 'Business Websites',
    icon: Globe,
    description: 'High-conversion corporate web platforms engineered for lightning speed, responsive interfaces, animations, and custom SEO setups.',
  },
  {
    title: 'Restaurant Ordering Platform',
    icon: Utensils,
    description: 'Custom booking and ordering systems with secure Stripe payments, interactive digital menus, real-time ticket alerts, and inventory sync.',
  },
  {
    title: 'Gym Management System',
    icon: Dumbbell,
    description: 'Comprehensive membership portals featuring automated recurring subscription billings, member check-ins, and trainer schedule pipelines.',
  },
  {
    title: 'Educational ERP',
    icon: GraduationCap,
    description: 'Unified administrative software for schools, colleges, and academies managing students, digital grading, fee invoicing, and course scheduling.',
  },
  {
    title: 'Hospital Management System',
    icon: HeartPulse,
    description: 'Secure, HIPAA-compliant patient portals handling online doctor appointments, Electronic Health Records (EHR), pharmacy stock management, and medical billings.',
  },
  {
    title: 'Inventory Management',
    icon: Layers,
    description: 'Real-time multi-warehouse stock level tracking platforms with barcode scanning support, automated replenishment alerts, and supplier invoicing.',
  },
  {
    title: 'Corporate Portfolio',
    icon: Briefcase,
    description: 'Bespoke high-impact showcases presenting agency case studies, executive team biographies, brand statements, and services list.',
  },
  {
    title: 'Custom Business Software',
    icon: Cpu,
    description: 'Tailor-made backend business suites including custom CRM/ERP models, data visualization dashboards, and legacy database migrations.',
  },
  {
    title: 'Videography & Motion',
    icon: Video,
    description: 'Cinematic promotional videos, advertising shoots, post-production editing, logo animations, and social content graphics configured to showcase your brand narrative.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}
const pillVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
}

export default function FeaturedSolutions() {
  const [activeTitle, setActiveTitle] = useState(null)

  const activeSol = solutions.find((s) => s.title === activeTitle)

  return (
    <section
      id="solutions"
      className="py-16 border-y border-white/5 bg-surface/40 relative overflow-hidden"
      aria-label="Featured Solutions"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Solution Types We Deliver
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap justify-center gap-3"
        >
          {solutions.map((sol) => {
            const isActive = activeTitle === sol.title
            return (
              <motion.button
                key={sol.title}
                variants={pillVariants}
                onClick={() => setActiveTitle(isActive ? null : sol.title)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white border border-accent shadow-glow-green scale-[1.03]'
                    : 'text-white/70 border border-white/10 bg-black/20 hover:border-accent/40 hover:text-white hover:bg-accent/5'
                }`}
              >
                {sol.title}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Short interface details drawer */}
        <div className="relative overflow-visible">
          <AnimatePresence mode="wait">
            {activeSol && (
              <motion.div
                key={activeSol.title}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="mt-8 max-w-2xl mx-auto px-6 py-6 sm:p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10"
              >
                {/* Soft ambient background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-start gap-5 relative z-10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/8 text-accent shadow-glow-green/5">
                    <activeSol.icon size={22} />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 tracking-tight">
                      {activeSol.title}
                    </h4>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                      {activeSol.description}
                    </p>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      <span>Inquire About This Solution</span>
                      <ArrowRight size={12} className="animate-pulse" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
