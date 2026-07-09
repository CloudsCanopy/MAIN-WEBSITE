import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import MagneticButton from './MagneticButton'
import Moon from './Moon'

export default function FinalCTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden bg-black"
      aria-label="Contact call to action"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" aria-hidden="true" />
      
      {/* Signature Moon Graphic Localized */}
      <Moon isAbsolute={true} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-8 py-10 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden mb-10 text-center transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <span className="relative z-10 inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-6">
            Let&rsquo;s Work Together
          </span>
          
          <h2
            className="relative z-10 font-heading font-bold text-white tracking-tight leading-tight mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Let&rsquo;s Solve Your Next{' '}
            <span className="gradient-text brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Business Challenge.</span>
          </h2>
          
          <p className="relative z-10 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We design and build secure, fast, and scalable software to automate manual operations and support your company's growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <MagneticButton range={40}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl btn-gradient shadow-glow-green focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base cursor-pointer"
                id="cta-book-consultation"
              >
                Book a Discovery Call
                <ArrowRight size={18} />
              </a>
            </MagneticButton>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-text-primary rounded-2xl border border-white/15 hover:border-white/25 hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-base cursor-pointer"
              id="cta-get-in-touch"
            >
              <MessageSquare size={18} className="opacity-70" />
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
