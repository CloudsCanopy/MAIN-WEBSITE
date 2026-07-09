import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Mail, Phone, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react'
import siteConfig from '../config/siteConfig'

const inputClass =
  'w-full px-4 py-3.5 rounded-xl bg-surface border border-white/10 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = 'A valid email address is required.'
    if (!form.message.trim()) e.message = 'Please include a message.'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Mailto fallback — replace with Formspree or backend when ready
    const subject = encodeURIComponent(`[${siteConfig.agencyName}] New inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const socialLinks = [
    { icon: Mail, label: 'Email', href: `mailto:${siteConfig.contact.email}`, value: siteConfig.contact.email },
    { icon: Phone, label: 'Phone', href: `tel:${siteConfig.contact.phone}`, value: `+91 ${siteConfig.contact.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/91${siteConfig.contact.whatsapp}`, value: `+91 ${siteConfig.contact.whatsapp}` },
    { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram, value: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin, value: 'LinkedIn' },
    { icon: Github, label: 'GitHub', href: siteConfig.social.github, value: 'GitHub' },
  ]

  return (
    <section
      id="contact"
      className="section-padding border-t border-white/5 relative"
      aria-label="Contact"
    >


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Start the Conversation
          </span>
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            Get in <span className="font-serif italic font-normal text-accent-secondary">Touch</span>
          </h2>
          <div className="max-w-xl mx-auto px-6 py-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40">
            {/* Soft accent gradient glow inside box on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed relative z-10">
              Tell us about your project and we&rsquo;ll get back to you within one business day.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary text-xl">Message Sent!</h3>
                <p className="text-text-secondary text-sm max-w-xs">
                  Your email client should have opened. We&rsquo;ll respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-text-secondary mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder=""
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-text-secondary mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder=""
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-medium text-text-secondary mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service…</option>
                    <option>Web Development</option>
                    <option>Custom Software</option>
                    <option>E-Commerce</option>
                    <option>AI Solutions</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Other / Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-text-secondary mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-2xl btn-gradient shadow-glow-green focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base"
                  id="contact-submit"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="p-7 rounded-2xl bg-surface border border-white/8">
              <h3 className="font-heading font-semibold text-text-primary mb-1.5">
                Response Time
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We respond to all inquiries within one business day. For urgent projects, mention
                your timeline in the message.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-surface border border-white/8">
              <h3 className="font-heading font-semibold text-text-primary mb-5">
                Contact &amp; Connect
              </h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map(({ icon: Icon, label, href, value }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    aria-label={`${label}: ${value}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-200">
                      <Icon size={16} className="text-text-secondary group-hover:text-accent transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-0.5">{label}</div>
                      <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200 break-all">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
