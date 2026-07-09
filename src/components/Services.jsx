import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    index: '01',
    title: 'Enterprise Web Platforms',
    problem: 'Slow page speeds and generic template code cause user drop-offs, directly losing valuable customer leads.',
    whatWeBuild: 'Bespoke Next.js & React architectures optimized for sub-second load speeds, clean content API links, and SEO rankings.',
    businessImpact: 'Designed to maximize visitor retention, boost search visibility, and simplify internal content updates.',
  },
  {
    index: '02',
    title: 'Custom Software Systems',
    problem: 'Manual spreadsheets and disconnected legacy tools create administrative bottlenecks and slow down workflows.',
    whatWeBuild: 'Tailor-made backend databases, automated operational pipelines, custom CRM modules, and admin panels.',
    businessImpact: 'Built to eliminate repetitive workflow manual steps and synchronize multi-office transactions in real time.',
  },
  {
    index: '03',
    title: 'Scalable Commerce Engines',
    problem: 'Clunky digital shopping carts, poor mobile layout designs, and high checkout friction restrict checkout conversions.',
    whatWeBuild: 'Custom online checkouts, Stripe payment pipeline configurations, real-time inventory systems, and fulfillment alerts.',
    businessImpact: 'Optimized for high transaction completion rates and clean, secure credit card transactions.',
  },
  {
    index: '04',
    title: 'Intelligent Automation',
    problem: 'Wasted hours sorting data entries manually and replying to repetitive common user support requests.',
    whatWeBuild: 'Custom RAG document indexing models, secure internal database query endpoints, and business workflow integrations.',
    businessImpact: 'Designed to shorten operational response cycles and automate data ingestion pipelines.',
  },
  {
    index: '05',
    title: 'Outcome-Focused Design',
    problem: 'Confusing visual navigation layouts and generic styling push potential clients to competitors.',
    whatWeBuild: 'Bespoke visual branding systems, high-fidelity Figma blueprints, and interactive interface prototypes.',
    businessImpact: 'Crafted to streamline customer interactions and project a trustworthy brand reputation.',
  },
  {
    index: '06',
    title: 'Organic Growth Pipelines',
    problem: 'Relying solely on expensive paid ad campaigns drains capital without building sustainable business assets.',
    whatWeBuild: 'Technical SEO audits, high-intent keywords target setups, and digital conversion funnels.',
    businessImpact: 'Optimized to attract ready-to-buy customers organically and decrease customer acquisition costs.',
  },
  {
    index: '07',
    title: 'Cinematic Media Assets',
    problem: 'Dry, text-only explanations fail to quickly capture attention or explain complex software value.',
    whatWeBuild: 'Corporate promotional videos, commercial advertisements, logo animations, and post-production scripts.',
    businessImpact: 'Designed to increase user attention spans and retention on main digital landing platforms.',
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
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit px-6 py-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <span className="relative z-10 inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
              How We Help
            </span>
            <h2 className="relative z-10 font-heading font-medium text-section text-white tracking-tight mb-6 text-left">
              Architecting High-Value Systems to Power Business{' '}
              <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Growth</span>
            </h2>
            <p className="relative z-10 text-text-secondary text-base leading-relaxed mb-8 max-w-sm text-left">
              We design custom software engines focused on resolving operational bottlenecks, increasing digital conversions, and building long-term equity.
            </p>
            <div className="relative z-10 hidden lg:block w-full h-px bg-white/10" />
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
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative py-8 md:py-10 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all duration-300 cursor-default overflow-hidden px-4 -mx-4 rounded-xl hover:bg-white/[0.02]"
                >
                  {/* Left part of row: Index + Title */}
                  <div className="flex items-start gap-4 md:w-[35%] flex-shrink-0 text-left">
                    <span className="font-serif italic text-2xl md:text-3xl text-text-muted select-none group-hover:text-accent transition-colors duration-300">
                      {service.index}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg md:text-xl text-white group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                        {service.title}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-accent-secondary" />
                      </h3>
                    </div>
                  </div>

                  {/* Middle/Right part: Problem -> What We Build -> Business Impact Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow md:w-[65%] text-left">
                    {/* Problem */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-white/40">
                        Problem
                      </span>
                      <p className="text-text-secondary text-xs leading-relaxed font-semibold">
                        {service.problem}
                      </p>
                    </div>

                    {/* What We Build */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-accent">
                        What We Build
                      </span>
                      <p className="text-white text-xs leading-relaxed font-semibold">
                        {service.whatWeBuild}
                      </p>
                    </div>

                    {/* Business Impact */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-accent-secondary">
                        Business Impact
                      </span>
                      <p className="text-text-secondary text-xs leading-relaxed font-semibold">
                        {service.businessImpact}
                      </p>
                    </div>
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
