import { motion } from 'framer-motion'

const industries = [
  'Healthcare',
  'Education',
  'Restaurants',
  'Gyms',
  'Hotels',
  'Retail',
  'Real Estate',
  'Startups',
  'Small & Medium Businesses',
]

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-16 border-y border-white/5 bg-surface/20"
      aria-label="Industries we serve"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Industries We Serve
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-text-secondary border border-white/10 bg-surface hover:border-accent/40 hover:text-text-primary hover:bg-accent/5 transition-all duration-200 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
