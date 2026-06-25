'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Target } from 'lucide-react'

const focusAreas = [
  { label: 'SOC Operations', color: 'primary' },
  { label: 'Incident Response', color: 'primary' },
  { label: 'Threat Intelligence', color: 'secondary' },
  { label: 'Malware Analysis', color: 'secondary' },
  { label: 'Cloud Security', color: 'accent' },
  { label: 'Penetration Testing', color: 'accent' },
  { label: 'Network Security', color: 'primary' },
  { label: 'Detection Engineering', color: 'secondary' },
]

const colorMap: Record<string, string> = {
  primary: 'bg-primary/10 border-primary/20 text-primary',
  secondary: 'bg-secondary/10 border-secondary/20 text-secondary',
  accent: 'bg-accent/10 border-accent/20 text-accent',
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="border-t border-[var(--border)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-primary tracking-widest uppercase mb-2">// 01 — Who I Am</p>
          <h2 className="text-4xl font-bold mb-10">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted leading-relaxed mb-4 text-sm">
              I&apos;m a cybersecurity practitioner and third-year B.Tech student specializing in
              detection engineering, incident response, and offensive security research. I design and
              operate security systems that mirror enterprise SOC environments — integrating SIEM,
              threat intelligence platforms, and case management tools into cohesive, automated pipelines.
            </p>
            <p className="text-muted leading-relaxed mb-4 text-sm">
              My work spans the full incident lifecycle: from deploying Wazuh agents and building Splunk
              dashboards for real-time visibility, to performing static malware analysis on ransomware
              samples with IDA Pro, to executing and detecting ARP poisoning attacks in controlled lab
              environments. Every project is documented with the rigor of a professional security report.
            </p>
            <p className="text-muted leading-relaxed text-sm">
              I also produce professional cybersecurity training content for ASD Academy (Kota, Rajasthan),
              translating complex offensive and defensive concepts into structured learning materials across
              Linux administration, network security, and secure coding domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-card border border-[var(--border)] rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs text-primary tracking-widest uppercase mb-4">
                <GraduationCap size={14} /> Education
              </div>
              <div className="font-bold text-base">B.Tech — Cybersecurity</div>
              <div className="text-secondary text-sm mt-1">Poornima University, Jaipur</div>
              <div className="flex items-center gap-1.5 text-muted text-xs mt-2">
                <MapPin size={11} /> Jaipur, Rajasthan · Batch 2027
              </div>
            </div>

            <div className="bg-card border border-[var(--border)] rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs text-primary tracking-widest uppercase mb-4">
                <Target size={14} /> Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f.label}
                    className={`text-xs px-2.5 py-1 rounded border ${colorMap[f.color]}`}
                  >
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
