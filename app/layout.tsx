import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Archit Purohit | Cybersecurity Analyst & Security Researcher',
  description:
    'Cybersecurity portfolio of Archit Purohit — B.Tech Cybersecurity student specializing in incident response, threat intelligence, malware analysis, Azure cloud security, and SOC operations.',
  keywords: [
    'Cybersecurity Analyst',
    'SOC Analyst',
    'Incident Response',
    'Threat Intelligence',
    'Malware Analysis',
    'Azure Security',
    'Wazuh',
    'OpenCTI',
    'Splunk',
    'Archit Purohit',
    'Poornima University',
    'Blue Team',
    'ARP Poisoning',
    'MITRE ATT&CK',
    'Security Researcher',
  ],
  authors: [{ name: 'Archit Purohit' }],
  creator: 'Archit Purohit',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://architpurohit.dev',
    title: 'Archit Purohit | Cybersecurity Analyst',
    description:
      'Portfolio of Archit Purohit — Cybersecurity practitioner with hands-on experience in SOC operations, incident response, threat intelligence, and malware analysis.',
    siteName: 'Archit Purohit Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archit Purohit | Cybersecurity Analyst',
    description:
      'Hands-on cybersecurity portfolio: Azure IR Platform, Ransomware Analysis, ARP Detection Labs.',
    creator: '@architpurohit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
