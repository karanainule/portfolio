import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data'

const SectionTitle = ({ children, subtitle }) => (
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
    {subtitle && <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">{subtitle}</p>}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-3"
    />
  </div>
)

const contactItems = [
  {
    label: 'Email',
    value: 'karanainule@gmail.com',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    label: 'Phone',
    value: '+91 9322390030',
    href: `tel:+919322390030`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    label: 'LinkedIn',
    value: 'karan-ainule',
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: 'text-blue-500',
    bg: 'bg-blue-600/10 border-blue-600/20',
  },
  {
    label: 'GitHub',
    value: 'karanainule',
    href: personalInfo.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: 'text-gray-300',
    bg: 'bg-gray-500/10 border-gray-500/20',
  },
  {
    label: 'WhatsApp',
    value: '+91 9322390030',
    href: personalInfo.whatsapp,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank')
    setStatus('sent')
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
      setStatus(null)
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-950/50">
      <div className="container-max">
        <SectionTitle subtitle="Open to opportunities, collaborations, and interesting conversations">
          Get In Touch
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3"
          >
            <h3 className="text-white font-bold text-lg mb-5">Let's connect</h3>
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl border ${item.bg} ${item.color} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate font-medium">{item.value}</p>
                </div>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 bg-gray-900/60 border border-gray-800/60 rounded-2xl">
              <h3 className="text-white font-bold text-lg mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 rounded-xl text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 rounded-xl text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 rounded-xl text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  {status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
