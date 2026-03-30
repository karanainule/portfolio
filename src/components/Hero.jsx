import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo, stats } from '../data'

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: 'GitHub', color: 'hover:text-white hover:border-gray-500' },
  { href: personalInfo.linkedin, icon: LinkedInIcon, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400' },
  { href: `mailto:${personalInfo.email}`, icon: EmailIcon, label: 'Email', color: 'hover:text-indigo-400 hover:border-indigo-400' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gray-950">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-base font-medium mb-2 tracking-wide">Hi there, I'm</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[0.9] text-white">
                Karan<br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ainule
                </span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-gray-600 font-mono">{'>'}</span>
              <TypeAnimation
                sequence={personalInfo.typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-400 font-mono"
              />
              <span className="animate-pulse text-indigo-400 font-mono">|</span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
              Building intelligent web applications across the full stack — React frontends, FastAPI backends, and AI integrations that solve real problems.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                View Resume ↗
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl border border-gray-800 text-gray-500 transition-all duration-200 hover:scale-110 ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-2 border-t border-gray-800/50">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse-slow" />

              {/* Ring decoration */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-gray-950" />
              </div>

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <img
                  src={personalInfo.profileImage}
                  alt="Karan Ainule"
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-gray-800"
                  loading="eager"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 z-10 hidden items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
              </div>

              {/* Floating tech pills */}
              {/* Top-right: React */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-6 z-20 px-3 py-1.5 bg-gray-900 border border-gray-700/80 rounded-xl text-xs font-semibold text-indigo-300 shadow-xl shadow-black/40"
              >
                ⚛️ React
              </motion.div>
              {/* Top-left: JavaScript */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-10 top-10 z-20 px-3 py-1.5 bg-gray-900 border border-gray-700/80 rounded-xl text-xs font-semibold text-yellow-300 shadow-xl shadow-black/40"
              >
                🟨 JavaScript
              </motion.div>
              {/* Mid-right: Tailwind CSS */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-8 top-1/2 z-20 px-3 py-1.5 bg-gray-900 border border-gray-700/80 rounded-xl text-xs font-semibold text-cyan-300 shadow-xl shadow-black/40"
              >
                🎨 Tailwind CSS
              </motion.div>
              {/* Bottom-left: Git/GitHub */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -left-8 bottom-16 z-20 px-3 py-1.5 bg-gray-900 border border-gray-700/80 rounded-xl text-xs font-semibold text-orange-300 shadow-xl shadow-black/40"
              >
                🐙 Git/GitHub
              </motion.div>
              {/* Bottom-right: Node.js */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -right-6 bottom-6 z-20 px-3 py-1.5 bg-gray-900 border border-gray-700/80 rounded-xl text-xs font-semibold text-green-300 shadow-xl shadow-black/40"
              >
                🟢 Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
