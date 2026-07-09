import { motion } from 'framer-motion'
import {
  Globe,
  Code2,
  ShoppingCart,
  Bot,
  Palette,
  TrendingUp,
  ArrowUpRight,
  Video,
} from 'lucide-react'

const services = [
  {
    index: '01',
    icon: Globe,
    title: 'Web Development',
    description:
      'Professional websites engineered for speed, responsiveness, and business growth.',
    capabilities: ['Next.js / React', 'SEO Optimization', 'Headless CMS', 'High-Performance Coding'],
  },
  {
    index: '02',
    icon: Code2,
    title: 'Custom Software',
    description:
      'Tailor-made business applications including ERP, CRM, inventory, and operational platforms.',
    capabilities: ['SaaS Architectures', 'API Custom Integrations', 'Legacy Migration', 'Cloud Systems'],
  },
  {
    index: '03',
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Modern online stores and ordering platforms with secure payments and seamless customer experiences.',
    capabilities: ['Custom Storefronts', 'Stripe Payments', 'Inventory Automations', 'Order Despatch systems'],
  },
  {
    index: '04',
    icon: Bot,
    title: 'AI Solutions',
    description:
      'AI chatbots, intelligent automation, predictive analytics, recommendation engines, and custom AI integrations.',
    capabilities: ['OpenAI Integrations', 'Custom RAG Architectures', 'Workflow Automation', 'Predictive Models'],
  },
  {
    index: '05',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-focused interfaces that combine modern aesthetics with intuitive experiences.',
    capabilities: ['Figma Prototyping', 'Design Systems', 'Interactive Mockups', 'User Journeys'],
  },
  {
    index: '06',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'SEO, Google Business Profile optimization, paid advertising, and digital growth strategies.',
    capabilities: ['Performance Marketing', 'SEO Content Strategy', 'Funnel Optimization', 'Growth Analytics'],
  },
  {
    index: '07',
    icon: Video,
    title: 'Videography & Motion',
    description:
      'Cinematic videos, advertisements, brand shoots, and premium motion design to tell your story.',
    capabilities: ['Video Production', 'Commercial Ads', 'Motion Graphics', 'Post-Production Editing'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-surface/10 relative"
      aria-label="Services"
    >


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column — Section Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit">
            <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
              What We Do
            </span>
            <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-6 moon-text-blend">
              Solutions We <span className="font-serif italic font-normal text-accent-secondary">Build</span>
            </h2>
            <p 
              className="text-white text-base leading-relaxed font-semibold mb-8 max-w-sm drop-shadow-[0_2px_10px_rgba(0,0,0,1)] moon-text-blend"
              style={{ color: '#FFFFFF' }}
            >
              From initial concept to deployment — every digital solution is engineered for longevity, security, and real business impact.
            </p>
            <div className="hidden lg:block w-full h-px bg-white/10" />
          </div>

          {/* Right Column — Asymmetric List-Table */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-8 divide-y divide-white/10"
          >
            {services.map((service) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative py-8 md:py-10 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all duration-300 cursor-default overflow-hidden px-4 -mx-4 rounded-xl hover:bg-white/[0.02]"
                >
                  {/* Left part of row: Index + Title */}
                  <div className="flex items-start gap-6 md:w-1/2">
                    <span className="font-serif italic text-2xl md:text-3xl text-text-muted select-none group-hover:text-accent transition-colors duration-300 moon-text-blend">
                      {service.index}
                    </span>
                    <div>
                      <h3 
                        className="font-heading font-semibold text-lg md:text-xl text-white group-hover:text-accent transition-colors duration-200 flex items-center gap-2 drop-shadow-[0_2px_10px_rgba(0,0,0,1)] moon-text-blend"
                        style={{ color: '#FFFFFF' }}
                      >
                        {service.title}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-accent-secondary" />
                      </h3>
                      {/* Sub-capabilities list in translucent background container */}
                      <div className="flex flex-wrap gap-x-2.5 gap-y-2 mt-4 px-4 py-3 rounded-xl bg-black/30 border border-white/5 backdrop-blur-md">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[10px] font-bold font-mono uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right part of row: Icon + Description */}
                  <div className="flex items-start gap-4 md:w-1/2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary group-hover:scale-105 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <p 
                      className="text-white text-sm md:text-base leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,1)] moon-text-blend"
                      style={{ color: '#FFFFFF' }}
                    >
                      {service.description}
                    </p>
                  </div>

                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
