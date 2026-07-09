import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function FinalCTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden"
      aria-label="Contact call to action"
    >

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-6">
            Let&rsquo;s Work Together
          </span>
          <h2
            className="font-heading font-bold text-text-primary tracking-tight leading-tight mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Let&rsquo;s Build Something{' '}
            <span className="gradient-text">Exceptional Together.</span>
          </h2>
          <div className="max-w-2xl mx-auto px-6 py-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden mb-10 text-center transition-all duration-350 hover:border-white/10 hover:shadow-black/40">
            {/* Soft accent gradient glow inside box on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed relative z-10">
              Whether you&rsquo;re launching a startup, modernizing your business, or creating the
              next digital product, CloudScanopy is ready to help turn your vision into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton range={40}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl btn-gradient shadow-glow-green focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base"
                id="cta-book-consultation"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </a>
            </MagneticButton>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-text-primary rounded-2xl border border-white/15 hover:border-white/25 hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-base"
              id="cta-get-in-touch"
            >
              <MessageSquare size={18} className="opacity-70" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
