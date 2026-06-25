'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, FileText, Send, MapPin } from 'lucide-react'

const opportunities = [
  'SOC Analyst (L1 / L2)',
  'Cybersecurity Analyst Intern',
  'Threat Intelligence Analyst',
  'Incident Response Engineer',
  'Cloud Security Intern (Azure)',
  'Security Research Intern',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire up to Formspree or similar
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@gmail.com',
      href: 'mailto:your.email@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/archit-purohit',
      href: 'https://linkedin.com/in/archit-purohit',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/archit-purohit',
      href: 'https://github.com/archit-purohit',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 07 — Get in Touch</p>
          <h2 className="text-4xl font-bold mb-3">
            Contact & <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Open to cybersecurity internships, SOC analyst roles, and security research collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: links + opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {contacts.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card border border-[var(--border)] rounded-xl p-4 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">{c.label}</div>
                    <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              )
            })}

            <div className="bg-card border border-[var(--border)] rounded-xl p-5 mt-2">
              <div className="text-xs text-primary tracking-widest uppercase mb-3">Ideal Opportunities</div>
              <div className="flex flex-col gap-2">
                {opportunities.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-secondary">›</span> {o}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted mt-4 pt-4 border-t border-[var(--border)]">
                <MapPin size={11} /> Jaipur, Rajasthan, India · Open to Remote
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-card border border-[var(--border)] rounded-xl p-6">
              <div className="text-sm font-bold mb-5">Send a Message</div>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">✅</div>
                  <div className="font-bold text-secondary mb-1">Message Sent!</div>
                  <div className="text-muted text-sm">Your email client should have opened. I&apos;ll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-bg border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-bg border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the opportunity..."
                      className="w-full bg-bg border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-bg font-bold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all"
                  >
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
