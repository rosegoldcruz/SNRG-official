import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'System Native Revenue Growth | SNRG Labs',
  description:
    'Your leads are coming in. Your follow-up isn\'t. SNRG Labs builds CRM automation, power dialers, and revenue systems for businesses done leaving money on the table.',
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://snrglabs.com',
    title: 'Your Leads Are Coming In. Your Follow-Up Isn\'t.',
    description:
      'We don\'t build websites — we build the machine behind your revenue. CRM automation, dialers, lead capture, and follow-up systems. Tell me what\'s broken. I\'ll build the fix.',
    siteName: 'SNRG Labs',
    images: [
      {
        url: 'https://snrglabs.com/hero-video-poster.jpg',
        width: 1280,
        height: 700,
        alt: 'SNRG Labs — System Native Revenue Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Leads Are Coming In. Your Follow-Up Isn\'t.',
    description:
      'We don\'t build websites — we build the machine behind your revenue. CRM automation, dialers, lead capture, and follow-up systems. Tell me what\'s broken. I\'ll build the fix.',
    images: ['https://snrglabs.com/hero-video-poster.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/snrg.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/snrg.svg', color: '#000000' }],
  },
  other: {
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/mstile-150x150.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'SNRG Labs',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable} ${syne.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
