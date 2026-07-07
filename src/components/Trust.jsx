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
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            Trusted Technology{' '}
            <span className="font-serif italic font-normal text-accent-secondary">Partner</span>{' '}
            for Modern Businesses
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with startups, growing businesses, and organizations to transform
            ideas into secure, scalable, and user-focused digital products.
          </p>
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
