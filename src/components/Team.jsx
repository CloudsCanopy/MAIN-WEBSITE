import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react'

const techTeam = [
  {
    name: 'ADITYA KUMAR SAHOO',
    role: '',
    photo: '/team/aditya.jpg',
    initials: 'AS',
    social: { linkedin: 'https://www.linkedin.com/in/aditya-kumar-sahoo03/', instagram: 'https://www.instagram.com/adi.tya_.03/', github: 'https://github.com/aditya030706' },
  },
  {
    name: 'ARYAN CHOUHAN',
    role: '',
    photo: '/team/aryan.jpg',
    initials: 'AC',
    social: { linkedin: 'https://www.linkedin.com/in/aryan-chouhan-b67799324/', instagram: 'https://www.instagram.com/aryanchouhan001/', github: 'https://github.com/aryanchouhan22' },
  },
  {
    name: 'BHARGODEB PANIGRAHI',
    role: '',
    photo: '/team/bhargodeb.jpg',
    initials: 'BP',
    social: { linkedin: 'https://www.linkedin.com/in/bhargodeb-panigrahi-6b36a2323/', instagram: 'https://www.instagram.com/mr______panigrahi/', github: 'https://github.com/panigrahibhargodeb65-cloud' },
  },
  {
    name: 'SEETANSU SATYA PRAJNA',
    role: '',
    photo: '/team/seetansu.jpg',
    initials: 'SP',
    social: { linkedin: 'https://www.linkedin.com/in/seetansusatya/', instagram: 'https://www.instagram.com/nexus5654/', github: 'https://github.com/Nexus5308' },
  },
]

const nonTechTeam = [
  {
    name: 'RAHUL PANI',
    role: '',
    photo: '/team/rahul.jpg',
    initials: 'RP',
    social: { instagram: 'https://www.instagram.com/' },
  },
  {
    name: 'LALIT MISHRA',
    role: '',
    photo: '/team/lalit.jpg',
    initials: 'LM',
    social: { instagram: 'https://www.instagram.com/_lalit.mishra_/' },
  },
  {
    name: 'S ARYAN',
    role: '',
    photo: '/team/s-aryan.jpg',
    initials: 'SA',
    social: { instagram: 'https://www.instagram.com/mostly.aryaan/' },
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Team() {
  const [colorPhotos, setColorPhotos] = useState({})

  const togglePhotoColor = (name) => {
    setColorPhotos((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const renderMemberCard = (member) => {
    const isColor = !!colorPhotos[member.name]
    return (
      <motion.div
        key={member.name}
        variants={cardVariants}
        onClick={() => togglePhotoColor(member.name)}
        className="group relative bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-2xl hover:shadow-card-hover flex flex-col lg:flex-row cursor-pointer"
      >
        {/* Widescreen Portrait Area (Left on Desktop, Top on Mobile) */}
        <div className="relative w-full lg:w-5/12 h-[420px] sm:h-[500px] lg:h-auto min-h-[460px] bg-neutral-950 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Photo Image */}
          <img
            src={member.photo}
            alt={member.name}
            onError={(e) => {
              e.target.style.display = 'none'
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
            }}
            className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
            style={{
              filter: isColor
                ? 'grayscale(0%) contrast(100%) brightness(100%)'
                : 'grayscale(100%) contrast(115%) brightness(90%)',
            }}
          />

          {/* Luxury Avatar Fallback (Shown before user drops in photos) */}
          <div className="hidden absolute inset-0 bg-gradient-to-br from-[#121613] via-[#0A0A0A] to-[#1B201C] flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-glow-green/30 border border-white/10">
              <span className="font-heading font-bold text-3xl text-white tracking-wider">
                {member.initials}
              </span>
            </div>
            <span className="text-xs font-mono text-accent-secondary uppercase tracking-widest font-medium">
              Place photo in public{member.photo}
            </span>
          </div>

          {/* Gradient Overlay for Smooth Blending */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Line-by-Line Executive Dossier (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full lg:w-7/12 p-8 sm:p-12 lg:p-14 relative z-10 flex flex-col justify-between flex-grow bg-[#0A0A0A]">
          <div>
            {/* Line 1: Indicator & Name */}
            <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8 group-hover:border-accent/40 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-glow-green" />
                <h3
                  className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-accent transition-colors duration-200 tracking-tight uppercase"
                  style={{ color: '#FFFFFF' }}
                >
                  {member.name}
                </h3>
              </div>
              <ArrowUpRight size={28} className="text-accent-secondary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>

          {/* Line 3: Footer & Socials */}
          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/CloudsCanopy-logo.png" alt="" className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest group-hover:text-white transition-colors font-medium">
                CloudsCanopy STUDIO
              </span>
            </div>
            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-accent hover:bg-accent/15 hover:shadow-glow-green transition-all duration-200"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.social.instagram && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-accent hover:bg-accent/15 hover:shadow-glow-green transition-all duration-200"
                  aria-label={`${member.name} Instagram`}
                >
                  <Instagram size={18} />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-accent hover:bg-accent/15 hover:shadow-glow-green transition-all duration-200"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden bg-surface/30 border-t border-white/5"
      aria-label="Our Team"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,1)] flex flex-col items-center gap-3 sm:gap-4"
            style={{ color: '#FFFFFF' }}
          >
            <span className="uppercase tracking-wide">Meet Our Team Behind</span>
            <span className="inline-block px-7 py-2 rounded-2xl bg-[#131b15] border border-accent/30 text-accent font-semibold shadow-glow-green/20">
              CloudsCanopy
            </span>
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" style={{ color: '#FFFFFF' }}>
            A multidisciplinary collective of engineers, designers, and strategists dedicated to engineering digital excellence.
          </p>
        </motion.div>

        {/* SECTION 1: TECH */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-10 flex items-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0e1610] border border-accent/40 shadow-glow-green/20">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#6B8F71]" />
            <h2 className="font-heading font-extrabold text-lg sm:text-xl md:text-2xl text-white tracking-[0.25em] uppercase">
              TECH <span className="text-accent/80 font-mono text-sm sm:text-base">// CORE ENGINEERING & AI</span>
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent/50 via-white/10 to-transparent flex-grow" />
        </motion.div>

        {/* Tech Team Cards (Before Aditya) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 max-w-5xl mx-auto gap-12 lg:gap-16 mb-20 lg:mb-28"
        >
          {techTeam.map(renderMemberCard)}
        </motion.div>

        {/* SECTION 2: NON TECH */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-10 flex items-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#141816] border border-accent-secondary/40 shadow-glow-green/20">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-secondary animate-pulse shadow-[0_0_10px_#9fb3a6]" />
            <h2 className="font-heading font-extrabold text-lg sm:text-xl md:text-2xl text-white tracking-[0.25em] uppercase">
              NON TECH <span className="text-accent-secondary/80 font-mono text-sm sm:text-base">// DESIGN & OPERATIONS</span>
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-secondary/50 via-white/10 to-transparent flex-grow" />
        </motion.div>

        {/* Non-Tech Team Cards (Before Lalit) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 max-w-5xl mx-auto gap-12 lg:gap-16"
        >
          {nonTechTeam.map(renderMemberCard)}
        </motion.div>
      </div>
    </section>
  )
}
