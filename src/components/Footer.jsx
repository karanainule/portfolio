import { motion } from 'framer-motion'
import { personalInfo } from '../data'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

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

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              KA
            </a>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-xs">
              Full Stack Developer building intelligent web applications. Open to new opportunities.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-800 text-gray-500 hover:text-white hover:border-gray-600 transition-all">
                <GithubIcon />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-800 text-gray-500 hover:text-blue-400 hover:border-blue-500/40 transition-all">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-800 text-gray-500 hover:text-indigo-400 hover:border-indigo-500/40 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Karan Ainule. Built with React + Vite + Tailwind CSS.
          </p>
          <a
            href="#home"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
