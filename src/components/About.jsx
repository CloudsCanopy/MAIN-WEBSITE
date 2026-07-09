import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section
      id="about"
      className="pt-10 pb-20 md:pt-14 md:pb-28 relative overflow-hidden"
      aria-label="About CloudScanopy"
    >


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — label + heading + placeholder visual blueprint */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
              About Us
            </span>
            <h2 className="font-heading font-medium text-section text-white tracking-tight leading-tight mb-0">
              Building More Than{' '}
              <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Software.</span>
            </h2>

            {/* Subtle luxury thin-line canopy architectural diagram */}
            <div className="mt-12 hidden lg:block opacity-20 relative w-full max-w-[340px] aspect-[16/9] border border-white/5 bg-black/10 rounded-2xl overflow-hidden p-6">
              <div className="absolute inset-0 bg-grid opacity-10" />
              <svg className="w-full h-full text-accent" viewBox="0 0 300 120" fill="none" stroke="currentColor" strokeWidth="0.75">
                <path d="M10,110 C80,30 220,30 290,110" />
                <path d="M10,110 C90,50 210,50 290,110" />
                <path d="M10,110 C100,70 200,70 290,110" />
                <path d="M10,110 L290,110" />
                <line x1="50" y1="110" x2="50" y2="72" />
                <line x1="100" y1="110" x2="100" y2="48" />
                <line x1="150" y1="110" x2="150" y2="40" />
                <line x1="200" y1="110" x2="200" y2="48" />
                <line x1="250" y1="110" x2="250" y2="72" />
                <circle cx="150" cy="40" r="2" fill="currentColor" />
                <circle cx="100" cy="48" r="2" fill="currentColor" />
                <circle cx="200" cy="48" r="2" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          {/* Right — body text (Luxury glassmorphic container ensures AAA readability over the bright moon) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15 } } }}
            className="space-y-5 bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10"
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
              CloudScanopy designs and develops technology that simplifies operations, accelerates
              growth, and creates meaningful customer experiences.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
              From high-performance websites to custom software and AI-powered solutions, every
              product we build is engineered with performance, security, and long-term scalability
              in mind.
            </p>
            <p className="text-text-primary text-base md:text-lg leading-relaxed font-medium">
              We don&rsquo;t just deliver projects — we build digital products that create lasting
              business value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
