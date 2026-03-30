import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white mb-3"
          >
            Technical Skills
          </motion.h2>
          <p className="text-gray-500 text-sm mt-2">Technologies I work with every day</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-3"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-gray-800/60 ${category.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-base font-bold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold bg-gray-900/80 border border-gray-700/60 text-gray-300 rounded-lg hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
