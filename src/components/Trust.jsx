import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const principles = [
  {
    title: 'Test-Driven Implementation',
    description: 'Every codebase is covered by automated unit and integration tests to ensure software behaves predictably under load.',
    icon: ShieldCheck,
  },
  {
    title: 'API-First Architecture',
    description: 'Backend logic is kept decoupled from frontends. Your system remains modular, scalable, and ready to link with third-party networks.',
    icon: Zap,
  },
  {
    title: 'CI/CD Automated Deliveries',
    description: 'We run automated build and testing checks on every commit, shipping incremental updates with zero downtime.',
    icon: Activity,
  },
  {
    title: 'Maintainable Blueprints',
    description: 'Code is written following clean practices and thoroughly documented, so your internal tech teams can take over easily.',
    icon: CheckCircle2,
  },
]

export default function Trust() {
  return (
    <section
      id="trust"
      className="section-padding border-t border-white/5"
      aria-label="Trust"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14 max-w-3xl mx-auto px-6 py-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h2 className="relative z-10 font-heading font-medium text-section text-white tracking-tight mb-6">
            Designed for Businesses That Plan to{' '}
            <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Grow</span>
          </h2>
          <p className="relative z-10 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We write clean, modular, and maintainable code engineered to adapt as your team and transaction volume expand. No legacy shortcuts. No developer lock-in.
          </p>
        </motion.div>

        {/* Cohesive Translucent Container for Engineering Principles */}
        <div className="max-w-5xl mx-auto mt-12 p-8 sm:p-10 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-center gap-2.5 mb-10 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#6B8F71]" />
            <h3 className="text-text-primary text-xs font-mono font-bold uppercase tracking-[0.25em]">
              Trusted Engineering Practices
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, index) => {
              const Icon = pr.icon
              return (
                <motion.div
                  key={pr.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-accent group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-350 h-fit">
                    <Icon size={18} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-semibold text-white text-sm tracking-tight mb-1">
                      {pr.title}
                    </h4>
                    <p className="text-text-secondary text-xs leading-relaxed font-semibold">
                      {pr.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
