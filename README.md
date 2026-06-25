# Archit Purohit — Cybersecurity Portfolio

A production-ready cybersecurity portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to look like a professional SOC dashboard.

## Tech Stack

- **Next.js 15** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/cybersecurity-portfolio.git
cd cybersecurity-portfolio

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize Before Deploying

Before pushing to production, update these:

### 1. Personal Info — `components/Contact.tsx`
Replace email and social links:
```tsx
{ label: 'Email', value: 'your.email@gmail.com', href: 'mailto:your.email@gmail.com' },
{ label: 'LinkedIn', value: 'linkedin.com/in/YOUR-USERNAME', href: 'https://linkedin.com/in/YOUR-USERNAME' },
{ label: 'GitHub', value: 'github.com/YOUR-USERNAME', href: 'https://github.com/YOUR-USERNAME' },
```

### 2. GitHub Links — `components/Projects.tsx`
Update the `github` field in each project object to point to your actual repos.

### 3. Resume — `public/resume.pdf`
Add your resume PDF to the `/public` folder. The download button is already wired to `/resume.pdf`.

### 4. SEO Metadata — `app/layout.tsx`
Update the `url` field in OpenGraph metadata:
```tsx
url: 'https://your-actual-domain.com',
```

### 5. Certifications — `components/Certifications.tsx`
Update status and dates as you earn certifications.

## Deploy to Vercel (Recommended)

### Option A: One-click deploy
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option C: GitHub Pages
The `next.config.js` already has `output: 'export'` configured.

```bash
npm run build
# Outputs to /out folder — deploy that to GitHub Pages
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout, SEO metadata
│   ├── page.tsx        # Main page (assembles sections)
│   └── globals.css     # Global styles, CSS variables
├── components/
│   ├── Navbar.tsx      # Sticky nav with mobile menu
│   ├── Hero.tsx        # Animated particle canvas + stats
│   ├── About.tsx       # Bio + education + focus areas
│   ├── Skills.tsx      # 6-category skill dashboard
│   ├── Projects.tsx    # 5 featured projects with metrics
│   ├── Experience.tsx  # Timeline experience section
│   ├── Certifications.tsx  # 8 cert cards with status
│   ├── Blog.tsx        # 10 research article cards
│   ├── Contact.tsx     # Contact form + links
│   └── Footer.tsx      # Footer
├── public/
│   └── resume.pdf      # ADD YOUR RESUME HERE
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#071A2E` | Page background |
| Card | `#0B2239` | Card surfaces |
| Primary | `#00D4FF` | Cyan — main accent |
| Secondary | `#00FFA3` | Green — highlights |
| Accent | `#7B61FF` | Purple — tertiary |
| Muted | `#8BA3BE` | Body text |

## License

MIT — feel free to fork and use as a template.
