import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Layers, Zap, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Cpu,
    title: 'Engineering Quality',
    description: 'We follow strict programming design patterns and enforce rigorous test coverage, ensuring a clean and reliable codebase.',
    iconColor: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Data encryption, secure authentication pipelines, and protection against common vulnerability vectors are built in from day one.',
    iconColor: 'text-accent-secondary',
    bgColor: 'bg-accent-secondary/10',
  },
  {
    icon: Layers,
    title: 'Horizontal Scalability',
    description: 'We build decoupled cloud-native architectures that dynamically handle traffic surges and process high data volume without slowing down.',
    iconColor: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Every interface is optimized for rapid load cycles, edge caching, and lightweight resource compilation to guarantee responsive pages.',
    iconColor: 'text-accent-secondary',
    bgColor: 'bg-accent-secondary/10',
  },
  {
    icon: CheckCircle2,
    title: 'Code Maintainability',
    description: 'Thorough developer documentation and modular file structures guarantee that your internal tech teams can take over easily.',
    iconColor: 'text-accent',
    bgColor: 'bg-accent/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding relative"
      aria-label="Why choose CloudScanopy"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto px-6 py-6 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative z-10 inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Why CloudScanopy
          </span>
          <h2 className="relative z-10 font-heading font-medium text-section text-white tracking-tight leading-tight text-center">
            Engineered for Operational Scale, Built for{' '}
            <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Market Leadership</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isLast = index === reasons.length - 1

            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className={`flex gap-5 p-7 rounded-2xl bg-surface border border-white/8 group hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300 text-left ${
                  isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl ${reason.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon size={20} className={reason.iconColor} />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-text-primary mb-1.5 text-base md:text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
