import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react'
import siteConfig from '../config/siteConfig'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Careers', href: '#contact' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'AI Solutions', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
  ],
}

const socialIcons = [
  { icon: Mail, label: 'Email', href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: 'Phone', href: `tel:${siteConfig.contact.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/91${siteConfig.contact.whatsapp}` },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin },
  { icon: Github, label: 'GitHub', href: siteConfig.social.github },
  { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="border-t border-white/8 bg-surface/40"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/8"
        >
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-1 group-hover:border-accent/60 transition-all duration-300">
                <img src="/CloudsCanopy-logo.png" alt="CloudsCanopy Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-semibold text-base text-text-primary">
                {siteConfig.agencyName}
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-[220px]">
              {siteConfig.positioningStatement}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary text-sm mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary text-sm mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary text-sm mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                >
                  +91 {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-text-muted text-sm">
            &copy; {siteConfig.agencyName} {year}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Designed &amp; built by{' '}
            <span className="gradient-text font-medium">{siteConfig.agencyName}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
