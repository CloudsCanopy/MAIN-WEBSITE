import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import siteConfig from '../config/siteConfig'
import MagneticButton from './MagneticButton'

const navLinks = [
  { label: 'Home', href: '/#home', target: '#home' },
  { label: 'Services', href: '/#services', target: '#services' },
  { label: 'Work', href: '/#work', target: '#work' },
  { label: 'About', href: '/#about', target: '#about' },
  { label: 'Team', href: '/team', target: '/team' },
  { label: 'Contact', href: '/#contact', target: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  const handleNavClick = (link) => {
    setSidebarOpen(false)
    const target = typeof link === 'string' ? link : link.target
    if (target === '/team') {
      navigate('/team')
      window.scrollTo(0, 0)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(target)
          if (el) {
            const yOffset = -80
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          } else if (target === '#home') {
            window.scrollTo(0, 0)
          }
        }, 150)
      } else {
        const el = document.querySelector(target)
        if (el) {
          const yOffset = -80
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else if (target === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-base/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  handleNavClick({ target: '#home' })
                } else {
                  setSidebarOpen(false)
                }
              }}
              onDoubleClick={() => {
                sessionStorage.removeItem('cloudscanopy-intro-seen')
                window.location.reload()
              }}
              className="flex items-center gap-2.5 group"
              aria-label={`${siteConfig.agencyName} — Home`}
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-1 group-hover:border-accent/60 group-hover:shadow-glow-green transition-all duration-300">
                <img src="/CloudsCanopy-logo.png" alt="CloudsCanopy Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-semibold text-lg text-text-primary tracking-tight">
                {siteConfig.agencyName}
              </span>
            </Link>

            {/* Right Controls: CTA + Professional Menu Button (All Tabs in Sidebar Only) */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <MagneticButton range={30}>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick({ target: '#contact' }) }}
                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient shadow-glow-green focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base"
                  >
                    Book a Consultation
                  </a>
                </MagneticButton>
              </div>
              
              {/* Clean Professional Sidebar Trigger (3 Lines Only) */}
              <button
                className="w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 rounded-xl focus:outline-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={sidebarOpen}
              >
                <Menu size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Executive Sidebar Drawer Menu */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Minimalist Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Clean Executive Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[400px] bg-[#050705] border-l border-white/10 flex flex-col justify-between p-8 sm:p-12 z-10 shadow-2xl"
            >
              {/* Clean Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img src="/CloudsCanopy-logo.png" alt="CloudsCanopy Logo" className="w-7 h-7 object-contain" />
                  <span className="font-heading font-semibold text-base text-white tracking-tight">
                    {siteConfig.agencyName}
                  </span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Minimalist Navigation Links */}
              <nav className="flex flex-col py-8 my-auto" aria-label="Sidebar navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => {
                      if (link.target === '/team') {
                        setSidebarOpen(false)
                        window.scrollTo(0, 0)
                      } else {
                        e.preventDefault()
                        handleNavClick(link)
                      }
                    }}
                    className="group flex items-center justify-between py-4 border-b border-white/10 text-white/90 hover:text-white transition-all duration-200"
                  >
                    <span 
                      className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight group-hover:translate-x-2 transition-transform duration-300"
                      style={{ color: '#FFFFFF' }}
                    >
                      {link.label}
                    </span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-accent transition-colors">
                      /{link.label.toLowerCase()}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Professional Footer Info */}
              <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-2">Get in touch</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-medium text-white hover:text-accent transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-white/40 font-mono">
                  <span className="flex items-center gap-2">
                    <img src="/CloudsCanopy-logo.png" alt="" className="w-4 h-4 object-contain opacity-70" />
                    © {new Date().getFullYear()} CloudsCanopy
                  </span>
                  <span>All rights reserved.</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
