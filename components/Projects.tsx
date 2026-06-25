'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Server, Bug, Network, BookOpen, FolderLock } from 'lucide-react'

const projects = [
  {
    badge: 'Azure · Blue Team',
    badgeColor: 'text-primary bg-primary/10',
    icon: Server,
    title: 'Azure Incident Response Platform',
    desc: 'Designed and implemented a comprehensive IR and forensic analysis system on Azure VMs, integrating five enterprise tools into a unified detection-to-response pipeline. Achieved 95% accuracy in incident detection and management.',
    tech: ['Wazuh', 'OpenCTI', 'TheHive', 'IRIS', 'Splunk', 'CyberChef', 'Azure VMs'],
    metrics: [
      { num: '95%', label: 'Detection Accuracy' },
      { num: '5', label: 'Tools Integrated' },
    ],
    highlights: [
      'Real-time endpoint & network monitoring via Wazuh',
      'Automated IoC enrichment with OpenCTI + MITRE ATT&CK mapping',
      'Streamlined case management through TheHive & IRIS integration',
      'Centralized Splunk dashboards for SOC visibility',
    ],
    github: 'https://github.com/archit-purohit',
  },
  {
    badge: 'Malware Analysis · RE',
    badgeColor: 'text-accent bg-accent/10',
    icon: Bug,
    title: 'Ransomware Static Analysis Lab',
    desc: 'Performed deep static analysis on a WannaCry-variant ransomware PE binary using IDA Pro inside an isolated, network-disabled VM. Identified CryptoAPI call chains, ransom resource strings, persistence helpers, and Bitcoin payment artifacts.',
    tech: ['IDA Pro', 'Ghidra', 'Windows PE', 'CryptoAPI', 'Isolated VM', 'x86 Assembly'],
    metrics: [
      { num: '8', label: 'Analysis Tasks' },
      { num: 'High', label: 'Threat Impact' },
    ],
    highlights: [
      'Traced CryptAcquireContext → CryptGenKey → CryptEncrypt call chain',
      'Confirmed hybrid encryption pattern (symmetric + asymmetric)',
      'Identified drop-and-execute persistence via tasksche.exe',
      'Located embedded ransom notes and Bitcoin wallet address',
    ],
    github: 'https://github.com/archit-purohit',
  },
  {
    badge: 'Network Security · Lab',
    badgeColor: 'text-secondary bg-secondary/10',
    icon: Network,
    title: 'ARP Poisoning Attack & Detection Lab',
    desc: 'Built a three-VM network lab to execute ARP poisoning MITM attacks using Ettercap and arpspoof. Intercepted HTTP credentials in plaintext. Deployed Arpwatch for real-time spoofing detection — triggering flip-flop MAC change alerts.',
    tech: ['Ettercap', 'Arpwatch', 'arpspoof', 'tcpdump', 'Kali Linux', 'Ubuntu Server', 'VMware'],
    metrics: [
      { num: '3', label: 'VM Lab Setup' },
      { num: '100%', label: 'Attack Detected' },
    ],
    highlights: [
      'MITM attack executed: captured HTTP plaintext credentials via Ettercap',
      'Demonstrated Telnet insecurity with full credential capture via tcpdump',
      'Arpwatch triggered flip-flop alert on MAC address change within seconds',
      'Full attack + detection cycle documented for report deliverable',
    ],
    github: 'https://github.com/archit-purohit',
  },
  {
    badge: 'Content Creation',
    badgeColor: 'text-secondary bg-secondary/10',
    icon: BookOpen,
    title: 'ASD Academy — Cybersecurity Training Modules',
    desc: 'Authored 15+ professional cybersecurity training modules for ASD Academy covering web application penetration testing, network security, Linux administration, malware analysis, and secure coding practices.',
    tech: ['WAPT', 'CEH v13', 'Linux', 'Wireshark', 'Ettercap', 'MAC Changer', 'Secure Coding'],
    metrics: [
      { num: '15+', label: 'Modules Created' },
      { num: 'Multi', label: 'Format Output' },
    ],
    highlights: [
      'WAPT Field Guide: Business Logic Vulnerabilities, HTTP Host Header Attacks',
      'CEH v13 Handbook: Modules 10–12 covering advanced attack techniques',
      'Network Security Tools: Wireshark, Ettercap, macof, XArp reference guide',
      'Linux Fundamentals: 19-slide deck + Day 1 & Day 2 assessment docs',
    ],
    github: 'https://github.com/archit-purohit',
  },
  {
    badge: 'Active Directory',
    badgeColor: 'text-accent bg-accent/10',
    icon: FolderLock,
    title: 'Active Directory Security Hardening',
    desc: 'Researched Active Directory attack vectors including privilege escalation, Kerberoasting, lateral movement, and Pass-the-Hash. Developed a security hardening guide aligned with CIS benchmarks and the MITRE ATT&CK Enterprise matrix.',
    tech: ['Active Directory', 'MITRE ATT&CK', 'CIS Benchmarks', 'Windows Server', 'Kerberoasting'],
    metrics: [
      { num: 'AD', label: 'Domain Focus' },
      { num: 'CIS', label: 'Benchmark Aligned' },
    ],
    highlights: [
      'Mapped attack techniques to MITRE ATT&CK Enterprise tactics',
      'Documented Kerberoasting, Pass-the-Hash, and LDAP enumeration vectors',
      'Hardening checklist covering GPO, password policy, and privilege tiers',
      'Detection rules mapped to Wazuh for AD monitoring',
    ],
    github: 'https://github.com/archit-purohit',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 03 — Featured Projects</p>
          <h2 className="text-4xl font-bold mb-3">
            Security <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Enterprise-grade security projects spanning cloud incident response, malware reverse engineering,
            network threat detection, and training content development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-card border border-[var(--border)] rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col glow-border"
              >
                {/* Header */}
                <div className="p-5 border-b border-[var(--border)]">
                  <span className={`text-xs px-2 py-0.5 rounded font-medium tracking-wider uppercase ${p.badgeColor} mb-3 inline-block`}>
                    {p.badge}
                  </span>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-snug mb-2">{p.title}</h3>
                      <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Tech */}
                <div className="px-5 py-3 border-b border-[var(--border)]">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="px-5 py-3 flex-1">
                  <ul className="space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-secondary mt-0.5 flex-shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics + links */}
                <div className="p-5 pt-3">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="bg-black/20 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-primary">{m.num}</div>
                        <div className="text-xs text-muted mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                  >
                    <Github size={13} /> View on GitHub <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
