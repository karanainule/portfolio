import { useState, useEffect, createContext } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ThemeContext = createContext({ isDark: true, toggle: () => {} })

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Always default to dark; only switch to light if user explicitly chose it
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light') {
      setIsDark(false)
    } else {
      // Ensure dark class is set on first load
      document.documentElement.classList.add('dark')
      localStorage.setItem('portfolio-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div className="bg-gray-950 dark:bg-gray-950 text-gray-100 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
