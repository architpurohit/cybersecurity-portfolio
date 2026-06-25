'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    cat: 'Malware Analysis',
    catColor: 'text-accent',
    title: 'Anatomy of WannaCry: Static Analysis Deep Dive with IDA Pro',
    excerpt: 'Tracing CryptoAPI call chains, helper binary drop patterns, and embedded ransom resource notes in the WannaCry ransomware PE binary.',
  },
  {
    cat: 'Network Security',
    catColor: 'text-secondary',
    title: 'ARP Poisoning in 2024: Attack Mechanics and Detection with Arpwatch',
    excerpt: 'A lab-driven walkthrough of executing MITM attacks with Ettercap and building passive monitoring defenses using Arpwatch on Ubuntu.',
  },
  {
    cat: 'Incident Response',
    catColor: 'text-primary',
    title: 'Building an Open-Source SOC on Azure: Wazuh + OpenCTI + TheHive',
    excerpt: 'How to integrate five open-source tools into a production-grade incident detection and response platform on Microsoft Azure VMs.',
  },
  {
    cat: 'Threat Intelligence',
    catColor: 'text-accent',
    title: 'Automating IoC Enrichment with OpenCTI and TheHive Integration',
    excerpt: 'Connecting OpenCTI threat intelligence feeds to TheHive case management for automated IoC correlation and MITRE ATT&CK mapping.',
  },
  {
    cat: 'Cloud Security',
    catColor: 'text-secondary',
    title: 'Azure Security Posture: Misconfigurations and How to Detect Them',
    excerpt: 'Identifying and remediating the most common Azure security misconfigurations using Wazuh compliance checks and Splunk dashboards.',
  },
  {
    cat: 'Detection Engineering',
    catColor: 'text-primary',
    title: 'Writing Wazuh Rules for Lateral Movement Detection in Windows Environments',
    excerpt: 'Custom Wazuh rule development for detecting Pass-the-Hash, Kerberoasting, and privilege escalation attempts in Windows AD environments.',
  },
  {
    cat: 'Forensics',
    catColor: 'text-accent',
    title: 'CyberChef for Incident Responders: Practical Decoding Recipes',
    excerpt: 'A practical guide to using CyberChef for deobfuscating malicious payloads, extracting embedded files, and building forensic analysis pipelines.',
  },
  {
    cat: 'Offensive Security',
    catColor: 'text-secondary',
    title: 'Capturing Credentials with tcpdump: Why Telnet and HTTP Must Die',
    excerpt: 'Demonstrating how easily plaintext credentials are captured on unencrypted protocols, with lab evidence from a controlled network environment.',
  },
  {
    cat: 'Blue Team',
    catColor: 'text-primary',
    title: 'MITRE ATT&CK Mapping in Practice: From Alert to TTP',
    excerpt: 'A step-by-step workflow for mapping Wazuh alerts to MITRE ATT&CK techniques using OpenCTI and building actionable threat intelligence.',
  },
  {
    cat: 'Reverse Engineering',
    catColor: 'text-accent',
    title: 'Understanding Ransomware Persistence: Drop-and-Execute Patterns',
    excerpt: 'How ransomware families use CopyFileA and CreateProcessA to establish persistence, with disassembly evidence from real static analysis sessions.',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 06 — Research & Writing</p>
          <h2 className="text-4xl font-bold mb-3">
            Security <span className="text-primary">Research</span>
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Topics I&apos;m actively researching, writing about, and building labs around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-[var(--border)] rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group cursor-pointer glow-border"
            >
              <div className={`text-xs font-medium tracking-widest uppercase mb-2 ${a.catColor}`}>
                {a.cat}
              </div>
              <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-3">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs text-muted group-hover:text-primary transition-colors">
                Read more <ArrowRight size={11} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
