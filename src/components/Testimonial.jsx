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
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-glow-green">
              <Quote size={26} className="text-base" />
            </div>
          </div>

          <blockquote>
            <p
              className="font-heading font-medium text-text-primary leading-snug text-balance"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}
            >
              &ldquo;Great partnerships begin with great conversations. We&rsquo;re building
              success stories with businesses ready to embrace digital transformation.&rdquo;
            </p>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-text-secondary text-sm font-medium">CloudScanopy Studio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
