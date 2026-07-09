import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Website costs vary based on complexity, features, and design requirements. We offer tailored solutions ranging from professional business websites to fully custom web applications. Contact us for a free consultation and personalized quote.',
  },
  {
    q: 'How long does development take?',
    a: 'Timelines depend on project scope. A standard business website typically takes 4–8 weeks, while custom software projects may range from 2–6 months. We\'ll provide a detailed timeline estimate during the discovery phase.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely. We specialize in modernizing and rebuilding existing digital products. We\'ll audit your current site, understand what\'s working, and deliver a redesign that improves both aesthetics and performance.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes — all our projects include an initial support period, and we offer ongoing maintenance and retainer plans to keep your product secure, up-to-date, and continuously improving after launch.',
  },
  {
    q: 'Will my website appear on Google?',
    a: 'Yes. All websites we build follow SEO best practices — semantic HTML, fast load times, proper meta tags, and mobile responsiveness. We also offer dedicated SEO and Google Business Profile optimization services.',
  },
  {
    q: 'Can you build custom software for my business?',
    a: 'Yes. Custom business software is a core offering — ERP systems, CRM platforms, inventory management, and more. Every solution is engineered specifically for your workflows, not adapted from a generic template.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-accent/30 bg-accent/5'
          : 'border-white/8 bg-surface hover:border-white/14'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${index}`}
        aria-controls={`faq-content-${index}`}
      >
        <span className="font-heading font-semibold text-white text-base md:text-lg pr-4 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-accent/20 text-accent rotate-0'
              : 'bg-white/5 text-text-secondary'
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div 
              className="px-6 pb-5 text-white text-sm md:text-base leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,1)] border-t border-white/10 pt-4"
              style={{ color: '#FFFFFF' }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="section-padding bg-surface/20"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mb-6">
            <Link
              to="/team"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/8 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent hover:text-text-primary hover:bg-accent/15 hover:border-accent/40 shadow-glow-green/5 transition-all duration-300 cursor-pointer"
            >
              <span>WANNA MEET THE TEAM?</span>
              <ArrowRight size={14} className="animate-pulse" />
            </Link>
          </div>
          <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Got Questions?
          </span>
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            Frequently Asked <span className="font-serif italic font-normal text-accent-secondary">Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
