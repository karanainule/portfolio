import { motion } from 'framer-motion'
import { projects } from '../data'

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex flex-col bg-gray-900/60 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-600/90 text-white rounded-md">
          Featured
        </div>
      )}

      {/* Image with hover overlay */}
      <div className="relative overflow-hidden aspect-video bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-indigo-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold rounded-xl backdrop-blur-sm transition-all">
            <GitHubIcon /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600/80 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl backdrop-blur-sm transition-all">
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1.5">{project.tagline}</p>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.emoji} {project.title}
          </h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="px-2.5 py-1 text-[11px] font-semibold bg-gray-800/80 border border-gray-700/60 text-gray-300 rounded-lg">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 flex-1 justify-center py-2.5 text-sm font-semibold border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-xl transition-all duration-200">
            <GitHubIcon /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 flex-1 justify-center py-2.5 text-sm font-semibold bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-500 text-indigo-300 hover:text-white rounded-xl transition-all duration-200">
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white mb-3"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-500 text-sm mt-2">A selection of things I've built</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
