import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Placeholder client logo boxes — swap these for real SVG logos when available
const placeholderLogos = Array.from({ length: 6 }, (_, i) => i)

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
          className="text-center mb-14"
        >
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-8">
            Trusted Technology{' '}
            <span className="font-serif italic font-normal text-accent-secondary">Partner</span>{' '}
            for Modern Businesses
          </h2>
          <div className="max-w-2xl mx-auto px-6 py-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40">
            {/* Soft accent gradient glow inside box on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed relative z-10">
              We collaborate with startups, growing businesses, and organizations to transform
              ideas into secure, scalable, and user-focused digital products.
            </p>
          </div>
        </motion.div>

        {/* Placeholder client logo row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Client logos — coming soon"
        >
          {placeholderLogos.map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="h-10 w-28 rounded-lg bg-surface border border-white/8 opacity-40"
              aria-hidden="true"
            />
          ))}
        </motion.div>
        <p className="text-center text-text-muted text-xs mt-6">
          Client logos coming soon
        </p>
      </div>
    </section>
  )
}
