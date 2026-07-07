import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Each tech group has a label, a sage-toned color class, and its stack items
const techGroups = [
  {
    label: 'Frontend',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Nuxt.js',
      'SvelteKit',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Redux / Zustand',
      'Framer Motion',
      'Three.js / WebGL',
    ],
  },
  {
    label: 'Backend',
    color: 'text-accent-secondary',
    borderColor: 'border-accent-secondary/20',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Python / FastAPI',
      'Django',
      'Go (Golang)',
      'Rust',
      'GraphQL',
      'Java',
      'Spring Boot',
      'Docker & K8s',
      'REST APIs',
    ],
  },
  {
    label: 'Database',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    items: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Supabase',
      'Prisma ORM',
      'Firebase',
      'DynamoDB',
      'Elasticsearch',
      'Cassandra',
    ],
  },
  {
    label: 'AI & ML',
    color: 'text-accent-secondary',
    borderColor: 'border-accent-secondary/20',
    items: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'OpenAI APIs',
      'Deep Learning',
      'Neural Networks',
      'Artificial Intelligence',
      'Machine Learning',
      'LLM',
    ],
  },
]

const techDescriptions = {
  // Frontend
  'React': "The industry-standard JavaScript library for building dynamic, interactive user interfaces with reusable, component-driven architecture and lightning-fast virtual DOM rendering.",
  'Next.js': "The premier full-stack React framework enabling server-side rendering (SSR), static site generation (SSG), and superior SEO for high-performance enterprise web applications.",
  'TypeScript': "A strongly typed superset of JavaScript that enhances code quality, developer productivity, and scalability for large-scale enterprise applications.",
  'Vue.js': "A progressive, approachable JavaScript framework renowned for its flexibility, reactivity, and exceptional performance in building modern user interfaces.",
  'Nuxt.js': "The intuitive full-stack framework for Vue.js, providing robust server-side rendering, static site generation, and modular architecture.",
  'SvelteKit': "A revolutionary compile-time web framework that builds ultra-fast, lightweight web applications with zero runtime overhead and exceptional developer ergonomics.",
  'HTML5': "The core semantic backbone of modern web architecture, ensuring accessibility, cross-platform compatibility, and robust structural integrity across all devices.",
  'CSS3': "Advanced styling engine enabling responsive layouts, custom animations, glassmorphism aesthetics, and fluid design systems without compromising performance.",
  'JavaScript': "The versatile scripting language that powers complex browser interactivity, real-time data processing, and seamless asynchronous user experiences.",
  'Tailwind CSS': "A utility-first CSS framework that enables rapid, maintainable UI development with atomic styling, consistent design tokens, and optimized production bundles.",
  'Redux / Zustand': "Modern state management libraries providing predictable, scalable, and centralized data stores for complex frontend applications.",
  'Framer Motion': "A production-ready motion library for React that powers declarative animations, fluid gestures, and cinematic UI transitions.",
  'Three.js / WebGL': "Advanced 3D graphics libraries that render immersive, hardware-accelerated 3D animations and interactive spatial experiences directly in the browser.",

  // Backend
  'Node.js': "A high-performance asynchronous JavaScript runtime built on Chrome's V8 engine, ideal for scalable backend services, real-time APIs, and microservices architecture.",
  'Express.js': "A fast, unopinionated web framework for Node.js, providing robust RESTful routing, middleware integration, and secure backend API development.",
  'NestJS': "A progressive Node.js framework built with TypeScript, offering enterprise-grade modular architecture inspired by Angular and Spring.",
  'Python / FastAPI': "A modern, high-performance web framework for building APIs with Python, utilizing type hints for automated documentation and extreme execution speed.",
  'Django': "The high-level Python web framework that encourages rapid development, clean pragmatic design, and enterprise-grade built-in security.",
  'Go (Golang)': "Google's statically typed, compiled programming language engineered for extreme concurrency, cloud-native microservices, and high-speed execution.",
  'Rust': "A systems programming language guaranteeing memory safety, zero-cost abstractions, and blazing-fast performance for mission-critical services.",
  'GraphQL': "A query language for APIs that enables clients to request exactly the data they need, reducing over-fetching and simplifying multi-source integrations.",
  'Java': "An enterprise-grade, object-oriented programming language renowned for its unmatched scalability, multi-threading reliability, and robust cross-platform security.",
  'Spring Boot': "The industry-leading Java framework for building production-grade, standalone, and cloud-ready microservices with minimal configuration.",
  'Docker & K8s': "Containerization and Kubernetes orchestration platforms that automate deployment, scaling, and high-availability management of cloud-native microservices.",
  'REST APIs': "Architectural standard for designing networked applications, ensuring stateless, interoperable, and scalable communication across web services.",

  // Database
  'MongoDB': "A flexible, document-oriented NoSQL database designed for high availability, horizontal scaling, and rapid iteration of complex data schemas.",
  'PostgreSQL': "An advanced, enterprise-class open-source relational database featuring robust extensibility, complex relational integrity, and superior analytics performance.",
  'MySQL': "The world's most popular open-source relational database management system, delivering ACID compliance, robust data integrity, and high-speed transactional querying.",
  'Redis': "An ultra-fast, in-memory data structure store used as a distributed cache, message broker, and real-time streaming database.",
  'Supabase': "The open-source Firebase alternative powered by PostgreSQL, providing real-time subscriptions, instant APIs, and robust row-level security.",
  'Prisma ORM': "A next-generation type-safe ORM for Node.js and TypeScript that simplifies database workflows, migrations, and complex data querying.",
  'Firebase': "Google's comprehensive cloud platform providing real-time NoSQL databases, secure authentication, cloud functions, and instant serverless scaling.",
  'DynamoDB': "AWS's fully managed, serverless key-value NoSQL database designed for single-digit millisecond performance at any scale.",
  'Elasticsearch': "A distributed, RESTful search and analytics engine capable of solving complex search requirements and real-time data exploration.",
  'Cassandra': "A highly scalable, distributed NoSQL database engineered for continuous availability and linear scale across multiple datacenters with zero downtime.",

  // AI & ML
  'Python': "The global standard language for artificial intelligence and data science, powering complex neural networks, data pipelines, and algorithmic modeling.",
  'TensorFlow': "An end-to-end open-source machine learning framework developed by Google, used to train and deploy deep neural networks for computer vision and NLP.",
  'Scikit-learn': "The industry benchmark library for classical machine learning, providing robust algorithms for classification, regression, clustering, and predictive data analysis.",
  'OpenAI APIs': "State-of-the-art generative AI and large language models integrated directly into applications to power intelligent automation, natural language reasoning, and dynamic copilots.",
  'Deep Learning': "Advanced artificial intelligence architectures utilizing multi-layered neural networks to extract high-level features from raw data, enabling human-like pattern recognition.",
  'Neural Networks': "Biologically inspired computational models that process complex data patterns, enabling adaptive learning, speech recognition, and autonomous decision-making.",
  'Artificial Intelligence': "The overarching discipline of engineering autonomous, self-learning systems capable of reasoning, problem-solving, and executing complex cognitive tasks.",
  'Machine Learning': "Data-driven algorithmic models that continuously improve and adapt their predictive accuracy through experience without being explicitly programmed.",
  'LLM': "Large Language Models trained on vast datasets, capable of advanced reasoning, natural language understanding, automated content generation, and semantic search.",
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
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Stack
          </span>
          <h2 className="font-heading font-medium text-section text-text-primary tracking-tight mb-4">
            <span className="font-serif italic font-normal text-accent-secondary">Technologies</span> We Master
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Reliable, modern, and battle-tested — built to scale with your business. Click any technology to learn more.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              className="p-6 rounded-2xl bg-surface border border-white/8 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300"
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
      </div>

      {/* Detail Popover Modal */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 bg-[#0c100d] border border-accent/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_0_50px_rgba(107,143,113,0.25)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider ${selectedTech.color}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {selectedTech.group}
                </span>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                {selectedTech.name}
              </h3>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                {techDescriptions[selectedTech.name] || "A core technology utilized by CloudsCanopy to architect resilient, scalable, and high-performance digital solutions."}
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-text-tertiary uppercase tracking-widest font-mono">
                  CloudsCanopy Stack
                </span>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-5 py-2 rounded-xl bg-accent/15 hover:bg-accent/25 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
