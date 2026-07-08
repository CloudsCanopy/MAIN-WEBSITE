import { motion } from 'framer-motion'
import { Target, Cpu, MousePointer, Zap, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Business-Focused Approach',
    description: 'Every solution is designed to solve real business challenges.',
    iconColor: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Cpu,
    title: 'Modern Technologies',
    description: 'Built using reliable, scalable, industry-standard technologies.',
    iconColor: 'text-accent-secondary',
    bgColor: 'bg-accent-secondary/10',
  },
  {
    icon: MousePointer,
    title: 'User-Centered Design',
    description: 'Interfaces crafted to improve usability and engagement.',
    iconColor: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Fast-loading, responsive, and SEO-friendly digital products.',
    iconColor: 'text-accent-secondary',
    bgColor: 'bg-accent-secondary/10',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We continue supporting your business beyond launch.',
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
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Difference
          </span>
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            Why Choose <span className="font-serif italic font-normal text-accent-secondary">CloudsCanopy</span>
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
                className={`flex gap-5 p-7 rounded-2xl bg-surface border border-white/8 group hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300 ${isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
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
