import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const techGroups = [
  {
    label: 'Frontend',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Zustand / Redux',
      'Framer Motion',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Backend',
    color: 'text-accent-secondary',
    borderColor: 'border-accent-secondary/20',
    items: [
      'Python / FastAPI',
      'Go (Golang)',
      'Node.js / NestJS',
      'Rust',
      'GraphQL',
      'REST APIs',
    ],
  },
  {
    label: 'Databases',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Supabase',
      'MySQL',
      'Prisma ORM',
    ],
  },
  {
    label: 'Cloud',
    color: 'text-accent-secondary',
    borderColor: 'border-accent-secondary/20',
    items: [
      'AWS (Amazon Web Services)',
      'Serverless Architectures',
      'Cloudflare Pages/Workers',
      'Vercel',
      'Firebase',
    ],
  },
  {
    label: 'DevOps',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    items: [
      'Docker',
      'Kubernetes',
      'Terraform (IaC)',
      'CI/CD Pipelines',
      'GitHub Actions',
    ],
  },
  {
    label: 'AI & ML',
    color: 'text-accent-secondary',
    borderColor: 'border-accent-secondary/20',
    items: [
      'Custom RAG Pipelines',
      'OpenAI APIs / LLMs',
      'Vector Databases',
      'Python / PyTorch',
      'Machine Learning Models',
    ],
  },
]

const techDescriptions = {
  // Frontend
  'Next.js': 'The premier full-stack React framework enabling server-side rendering (SSR), static site generation (SSG), and superior SEO for high-performance enterprise web applications.',
  'React': 'The industry-standard JavaScript library for building dynamic, interactive user interfaces with reusable, component-driven architecture and lightning-fast virtual DOM rendering.',
  'TypeScript': 'A strongly typed superset of JavaScript that enhances code quality, developer productivity, and scalability for large-scale enterprise applications.',
  'Zustand / Redux': 'Predictable state containers that organize data flow in complex React web interfaces.',
  'Framer Motion': 'A production-ready motion library for React that powers declarative animations, fluid gestures, and cinematic UI transitions.',
  'Tailwind CSS': 'A utility-first CSS framework that enables rapid, maintainable UI development with atomic styling, consistent design tokens, and optimized production bundles.',

  // Backend
  'Python / FastAPI': 'A modern, high-performance web framework for building APIs with Python, utilizing type hints for automated documentation and extreme execution speed.',
  'Go (Golang)': "Google's statically typed, compiled programming language engineered for extreme concurrency, cloud-native microservices, and high-speed execution.",
  'Node.js / NestJS': 'Modular, highly scalable server architectures configured to manage high volumes of concurrent requests.',
  'Rust': 'A systems programming language guaranteeing memory safety, zero-cost abstractions, and blazing-fast performance for mission-critical services.',
  'GraphQL': 'A query language for APIs that enables clients to request exactly the data they need, reducing over-fetching and simplifying multi-source integrations.',
  'REST APIs': 'Architectural standard for designing networked applications, ensuring stateless, interoperable, and scalable communication across web services.',

  // Databases
  'PostgreSQL': 'An advanced, enterprise-class open-source relational database featuring robust extensibility, complex relational integrity, and superior analytics performance.',
  'MongoDB': 'A flexible, document-oriented NoSQL database designed for high availability, horizontal scaling, and rapid iteration of complex data schemas.',
  'Redis': 'An ultra-fast, in-memory data structure store used as a distributed cache, message broker, and real-time streaming database.',
  'Supabase': 'The open-source Firebase alternative powered by PostgreSQL, providing real-time subscriptions, instant APIs, and robust row-level security.',
  'MySQL': "The world's most popular open-source relational database management system, delivering ACID compliance, robust data integrity, and high-speed transactional querying.",
  'Prisma ORM': 'A next-generation type-safe ORM for Node.js and TypeScript that simplifies database workflows, migrations, and complex data querying.',

  // Cloud
  'AWS (Amazon Web Services)': 'Cloud infrastructure framework supporting auto-scaling, isolated VPC networks, and high-performance server clusters.',
  'Serverless Architectures': 'Event-driven serverless systems that run execution queries on-demand, reducing baseline runtime costs.',
  'Cloudflare Pages/Workers': 'Edge-computed execution routines that serve assets instantly from regional nodes close to the user.',
  'Vercel': 'Modern hosting workflow platform serving fast static sites and dynamic frontend modules.',
  'Firebase': "Google's comprehensive cloud platform providing real-time NoSQL databases, secure authentication, cloud functions, and instant serverless scaling.",

  // DevOps
  'Docker': 'Containerization platforms that automate deployment, scaling, and high-availability management of cloud-native microservices.',
  'Kubernetes': 'Container orchestration engine that coordinates automated scale adjustments and handles container routing under network load.',
  'Terraform (IaC)': 'Infrastructure as Code language allowing configuration, hosting, and tracking of server setups via git control.',
  'CI/CD Pipelines': 'Continuous Integration and Continuous Deployment cycles executing security linters and unit test runners on every commit.',
  'GitHub Actions': 'Automated action runners executing deployment scripts, builds, and code checks instantly.',

  // AI & ML
  'Custom RAG Pipelines': 'Retrieval-Augmented Generation architectures that search private documents to supply context to AI models.',
  'OpenAI APIs / LLMs': 'Large language engine APIs integrated directly into custom software to process natural reasoning tasks.',
  'Vector Databases': 'Specialized databases (e.g. pgvector, Pinecone) optimized for indexing and searching high-dimensional semantic search vectors.',
  'Python / PyTorch': 'Advanced deep learning platform used to write, train, and test custom business prediction models.',
  'Machine Learning Models': 'Data-driven statistical tools trained to execute predictive analysis, category sorting, and automated reasoning.',
}

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState(null)

  return (
    <section
      id="technologies"
      className="section-padding relative"
      aria-label="Technologies we use"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto px-6 py-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all duration-350 hover:border-white/10 hover:shadow-black/40"
        >
          {/* Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative z-10 inline-block px-3.5 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent rounded-full bg-black/60 border border-accent/30 backdrop-blur-md shadow-[0_0_15px_rgba(107,143,113,0.1)] mb-4">
            Our Stack
          </span>
          <h2 className="relative z-10 font-heading font-medium text-section text-white tracking-tight mb-4">
            <span className="font-serif italic font-normal text-accent brightness-125 drop-shadow-[0_0_15px_rgba(107,143,113,0.4)]">Technology Stack</span>
          </h2>
          <p className="relative z-10 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Reliable, modern, and battle-tested — built to scale with your business. Click any technology to learn more.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              className="p-6 rounded-3xl bg-surface border border-white/8 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 text-left"
            >
              <div className={`flex items-center gap-2 mb-5 pb-4 border-b ${group.borderColor}`}>
                <span className={`w-2 h-2 rounded-full bg-current ${group.color}`} />
                <span className={`font-heading font-semibold text-sm uppercase tracking-wider ${group.color}`}>
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech({ name: tech, group: group.label, color: group.color })}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-text-secondary text-xs font-medium hover:text-text-primary hover:bg-accent/15 hover:border-accent/40 hover:shadow-glow-green/10 transition-all duration-200 cursor-pointer text-left"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Info Drawer */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 z-50 pointer-events-auto"
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="max-w-md w-full rounded-3xl bg-[#0c120e] border border-white/10 p-6 sm:p-8 shadow-2xl relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full bg-current ${selectedTech.color}`} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted">
                    {selectedTech.group}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {selectedTech.name}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                  {techDescriptions[selectedTech.name] || 'Enterprise-grade software stack integration.'}
                </p>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  Close Specification
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
