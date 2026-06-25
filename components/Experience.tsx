'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    date: '2024 — Present',
    role: 'Cybersecurity Content Developer',
    org: 'ASD Academy',
    location: 'Kota, Rajasthan',
    desc: 'Developed 15+ professional cybersecurity training modules covering web application penetration testing, network security, Linux administration, malware analysis, and secure coding practices. Created PPTX presentation decks, DOCX handbooks, and PDF e-books used in live training programs. Designed content aligned with CEH v13, WAPT, and industry-standard frameworks including MITRE ATT&CK.',
    tags: ['CEH v13', 'WAPT', 'Linux Security', 'Network Security', 'Secure Coding'],
  },
  {
    date: '2024 — Present',
    role: 'Security Research & Lab Engineer',
    org: 'Poornima University',
    location: 'Jaipur, Rajasthan',
    desc: 'Designed and executed multiple hands-on security labs: deployed an Azure-based incident response platform integrating Wazuh, OpenCTI, TheHive, IRIS, and Splunk achieving 95% detection accuracy; performed static malware analysis on a ransomware PE binary using IDA Pro; built an ARP poisoning detection lab using Ettercap and Arpwatch across a 3-VM VMware environment.',
    tags: ['Incident Response', 'Malware Analysis', 'Network Security', 'Azure', 'Detection Engineering'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 04 — Experience</p>
          <h2 className="text-4xl font-bold mb-3">
            Professional <span className="text-primary">Background</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Practical experience in security research, training content development, and enterprise tool deployment.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-transparent ml-0.5" />

          <div className="space-y-10 pl-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-bg" />

                <div className="bg-card border border-[var(--border)] rounded-xl p-6 hover:border-primary/30 transition-all duration-300 glow-border">
                  <div className="text-xs text-primary tracking-widest uppercase mb-1">{exp.date}</div>
                  <h3 className="text-base font-bold mb-0.5">{exp.role}</h3>
                  <div className="text-secondary text-sm mb-1">{exp.org}</div>
                  <div className="text-muted text-xs mb-3">{exp.location}</div>
                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-primary/8 border border-primary/15 rounded text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
