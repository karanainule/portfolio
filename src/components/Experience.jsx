import { motion } from 'framer-motion'
import { experience, education } from '../data'

const SectionTitle = ({ children }) => (
  <div className="text-center mb-14">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl sm:text-4xl font-black text-white mb-3"
    >
      {children}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
    />
  </div>
)

function TimelineItem({ item, index, isEducation }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Dot */}
      <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-indigo-400 shadow-lg shadow-indigo-500/40 z-10" />

      <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 group">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
              {isEducation ? item.degree : item.role}
            </h3>
            <p className="text-indigo-400 font-semibold text-sm mt-0.5">
              {isEducation ? item.institution : item.company}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className="text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full">
              {item.period}
            </span>
            {item.duration && (
              <span className="text-xs text-gray-600">{item.duration}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {item.location}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-950">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <SectionTitle>Experience</SectionTitle>
            <div className="relative space-y-5">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent" />
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} isEducation={false} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="relative space-y-5">
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent" />
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} isEducation={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
