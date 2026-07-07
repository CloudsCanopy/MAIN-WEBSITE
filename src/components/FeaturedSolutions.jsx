import { motion } from 'framer-motion'

const solutions = [
  'Business Websites',
  'Restaurant Ordering Platform',
  'Gym Management System',
  'School ERP',
  'Hospital Management System',
  'Inventory Management',
  'Corporate Portfolio',
  'Custom Business Software',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function FeaturedSolutions() {
  return (
    <section
      id="solutions"
      className="py-16 border-y border-white/5 bg-surface/40"
      aria-label="Featured Solutions"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
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
          {solutions.map((sol) => (
            <motion.span
              key={sol}
              variants={pillVariants}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] border border-white/10 bg-surface hover:border-accent/40 hover:text-text-primary hover:bg-accent/5 transition-all duration-200 cursor-default"
            >
              {sol}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
