'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle, Clock } from 'lucide-react'

const certs = [
  {
    icon: '🎯',
    name: 'Certified Ethical Hacker (CEH v13)',
    issuer: 'EC-Council',
    status: 'In Training',
    statusColor: 'text-primary bg-primary/10 border-primary/20',
    statusIcon: Clock,
  },
  {
    icon: '☁️',
    name: 'Microsoft Azure Security (AZ-500)',
    issuer: 'Microsoft',
    status: 'Pursuing',
    statusColor: 'text-accent bg-accent/10 border-accent/20',
    statusIcon: Clock,
  },
  {
    icon: '🔐',
    name: 'Web Application Penetration Testing',
    issuer: 'ASD Academy',
    status: 'Completed',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/20',
    statusIcon: CheckCircle,
  },
  {
    icon: '🛡️',
    name: 'Wazuh Certified Analyst',
    issuer: 'Wazuh Training Program',
    status: 'Completed',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/20',
    statusIcon: CheckCircle,
  },
  {
    icon: '🌐',
    name: 'CCNA — Networking Fundamentals',
    issuer: 'Cisco',
    status: 'In Progress',
    statusColor: 'text-primary bg-primary/10 border-primary/20',
    statusIcon: Clock,
  },
  {
    icon: '📊',
    name: 'Splunk Core Certified User',
    issuer: 'Splunk',
    status: 'Pursuing',
    statusColor: 'text-accent bg-accent/10 border-accent/20',
    statusIcon: Clock,
  },
  {
    icon: '🔬',
    name: 'Malware Analysis & Reverse Engineering',
    issuer: 'Self-directed / IDA Pro',
    status: 'Completed',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/20',
    statusIcon: CheckCircle,
  },
  {
    icon: '⚡',
    name: 'Incident Response Professional',
    issuer: 'DFIR-IRIS Platform',
    status: 'Completed',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/20',
    statusIcon: CheckCircle,
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certs" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 05 — Credentials</p>
          <h2 className="text-4xl font-bold mb-3">
            Certifications & <span className="text-primary">Training</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Formal training and certifications aligned with industry-standard cybersecurity frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => {
            const StatusIcon = c.statusIcon
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-[var(--border)] rounded-xl p-4 hover:border-primary/30 transition-all duration-300 glow-border"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs leading-snug mb-1">{c.name}</div>
                    <div className="text-muted text-xs mb-2">{c.issuer}</div>
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border ${c.statusColor}`}>
                      <StatusIcon size={10} />
                      {c.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 bg-card border border-[var(--border)] rounded-xl p-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <Award size={18} className="text-secondary" />
          </div>
          <div>
            <div className="font-bold text-sm">Actively building certification portfolio</div>
            <div className="text-muted text-xs mt-0.5">
              Pursuing CEH v13, AZ-500, CCNA, and Splunk certifications to complement hands-on project experience.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
