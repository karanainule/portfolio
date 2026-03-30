import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../App'
import { personalInfo } from '../data'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggle } = useContext(ThemeContext)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/60 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="relative text-2xl font-black tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-200"
            >
              KA
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === link.href.slice(1)
                        ? 'text-indigo-400'
                        : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Resume button */}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-200"
              >
                View Resume ↗
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 lg:hidden bg-gray-950/98 backdrop-blur-xl border-b border-gray-800/60"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-800">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
