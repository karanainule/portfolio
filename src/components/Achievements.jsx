import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../data'

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

function AchievementCarousel({ achievement, index }) {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef(null)
  const images = achievement.images

  const next = () => setCurrent(c => (c + 1) % images.length)
  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(next, 3000)
    }
    return () => clearInterval(timerRef.current)
  }, [isPlaying, images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900/60 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
    >
      {/* Carousel */}
      <div className="relative aspect-video bg-gray-800 overflow-hidden">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={img.alt}
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ))}

        {/* Counter */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
          {current + 1} / {images.length}
        </div>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(p => !p)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-indigo-600/80 transition-all text-xs"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-indigo-600/80 transition-all"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-indigo-600/80 transition-all"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-4 h-1.5 bg-indigo-400' : 'w-1.5 h-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-base font-bold text-white">{achievement.title}</h3>
        </div>
        <p className="text-indigo-400 text-sm font-semibold mb-1">{achievement.organization}</p>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {achievement.date}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{achievement.description}</p>
        <div className="flex flex-wrap gap-2">
          {achievement.badges.map(badge => (
            <span
              key={badge}
              className="px-2.5 py-1 text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-gray-950">
      <div className="container-max">
        <SectionTitle>Achievements & Events</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <AchievementCarousel key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
