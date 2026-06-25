'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Brain, Bug, Network, Cloud, Swords } from 'lucide-react'

const skillGroups = [
  {
    icon: Shield,
    title: 'Security Operations',
    color: 'primary',
    skills: ['Wazuh SIEM', 'Splunk', 'TheHive', 'IRIS DFIR', 'Alert Triage', 'MITRE ATT&CK', 'Log Analysis'],
  },
  {
    icon: Brain,
    title: 'Threat Intelligence',
    color: 'secondary',
    skills: ['OpenCTI', 'IoC Enrichment', 'TTP Mapping', 'CyberChef', 'Threat Correlation', 'Threat Feeds'],
  },
  {
    icon: Bug,
    title: 'Malware Analysis',
    color: 'accent',
    skills: ['IDA Pro', 'Static Analysis', 'PE Analysis', 'Ghidra', 'Reverse Engineering', 'CryptoAPI Tracing'],
  },
  {
    icon: Network,
    title: 'Network Security',
    color: 'primary',
    skills: ['Wireshark', 'Ettercap', 'Arpwatch', 'tcpdump', 'ARP Poisoning', 'Packet Analysis', 'MITM Attacks'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    color: 'secondary',
    skills: ['Microsoft Azure', 'Azure VMs', 'Cloud Security', 'Linux Administration', 'VMware', 'Ubuntu Server'],
  },
  {
    icon: Swords,
    title: 'Offensive Security',
    color: 'accent',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Web App Security', 'WAPT', 'Vulnerability Assessment'],
  },
]

const tagColor: Record<string, string> = {
  primary: 'bg-primary/8 border-primary/20 text-primary',
  secondary: 'bg-secondary/8 border-secondary/20 text-secondary',
  accent: 'bg-accent/8 border-accent/20 text-accent',
}
const iconColor: Record<string, string> = {
  primary: 'text-primary bg-primary/10',
  secondary: 'text-secondary bg-secondary/10',
  accent: 'text-accent bg-accent/10',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 02 — Technical Arsenal</p>
          <h2 className="text-4xl font-bold mb-3">
            Skills <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Hands-on proficiency across offensive and defensive cybersecurity domains, cloud platforms,
            and enterprise security tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card border border-[var(--border)] rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group glow-border"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${iconColor[group.color]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-sm mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className={`text-xs px-2 py-0.5 rounded border ${tagColor[group.color]}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
