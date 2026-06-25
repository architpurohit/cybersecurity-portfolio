'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Terminal } from 'lucide-react'

const stats = [
  { num: '4+', label: 'Security Projects' },
  { num: '10+', label: 'Security Tools' },
  { num: '95%', label: 'Detection Accuracy' },
  { num: '3+', label: 'Labs Built' },
]

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 max-w-6xl mx-auto"
    >
      <ParticleCanvas />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-xs text-primary tracking-widest uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
          Available for Cybersecurity Roles & Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-5"
        >
          Archit Purohit
          <br />
          <span className="gradient-text">Cybersecurity</span>
          <br />
          Analyst
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-lg leading-relaxed max-w-xl mb-8"
        >
          B.Tech Cybersecurity student at Poornima University with hands-on
          experience in incident response, threat intelligence, malware analysis,
          and Azure cloud security operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-bg font-bold px-7 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-3 rounded-lg text-sm hover:bg-primary/10 transition-all"
          >
            <Download size={15} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[var(--border)] text-muted px-7 py-3 rounded-lg text-sm hover:border-primary/40 hover:text-white transition-all"
          >
            <Terminal size={15} /> Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-[var(--border)] rounded-xl p-5 text-center glow-border"
            >
              <div className="text-3xl font-bold text-primary mb-1">{s.num}</div>
              <div className="text-xs text-muted tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
