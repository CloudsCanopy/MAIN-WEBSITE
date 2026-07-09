import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="section-padding relative overflow-hidden"
      aria-label="Testimonial"
    >


      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-8 py-10 sm:py-12 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden text-center transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Soft accent gradient glow inside box on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Quote icon */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-glow-green">
              <Quote size={26} className="text-base" />
            </div>
          </div>

          <blockquote className="relative z-10">
            <p
              className="font-heading font-medium text-white leading-snug text-balance"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', letterSpacing: '-0.02em' }}
            >
              &ldquo;Every custom software system we build is designed to eliminate operational friction and create a sustainable technical asset that handles transaction scale. We measure success by the performance and predictability of the code we ship.&rdquo;
            </p>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-text-secondary text-sm font-medium">Engineering Core, CloudScanopy</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
