import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-sm">
          <Shield size={16} />
          AP//SECURITY
        </div>
        <p className="text-muted text-xs text-center">
          © 2025 Archit Purohit · Cybersecurity Portfolio · Built with Next.js & Framer Motion
        </p>
        <div className="flex gap-5 text-muted text-xs">
          <a href="https://github.com/archit-purohit" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/archit-purohit" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
