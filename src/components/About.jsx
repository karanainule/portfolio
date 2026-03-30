import { motion } from 'framer-motion'
import { personalInfo } from '../data'

const highlights = [
  { icon: '🚀', title: 'Full Stack Engineering', desc: 'End-to-end development from React UIs to FastAPI backends and database architecture.' },
  { icon: '🤖', title: 'AI Integration', desc: 'Building real-world applications powered by OpenAI API, OCR pipelines, and ML models.' },
  { icon: '🔓', title: 'Open Source', desc: 'Passionate about building in the open, contributing to community, and learning collaboratively.' },
  { icon: '📐', title: 'Clean Code', desc: 'Writing maintainable, well-structured code following best practices and design patterns.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white mb-3"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg text-gray-300 leading-relaxed">{personalInfo.bio}</p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, I'm attending fintech conferences, competing in national AI
              challenges, or exploring how emerging technologies can reshape industries. Currently
              seeking full-time or internship opportunities where I can contribute meaningfully and grow rapidly.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map(trait => (
                <span key={trait} className="px-3 py-1 text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800/60 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
