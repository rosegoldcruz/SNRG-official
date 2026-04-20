import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'System Native Revenue Growth | SNRG Labs',
  description:
    'We don\'t build websites. We build revenue growth systems — CRM automation, dialers, lead capture, and conversion infrastructure for businesses done leaving money on the table.',
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://snrglabs.com',
    title: 'System Native Revenue Growth | SNRG Labs',
    description:
      'Stop leaking revenue. SNRG Labs builds the automation, telephony, and conversion infrastructure behind real business growth.',
    siteName: 'SNRG Labs',
    images: [
      {
        url: 'https://snrglabs.com/og-image.png',
        width: 512,
        height: 512,
        alt: 'SNRG Labs — System Native Revenue Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'System Native Revenue Growth | SNRG Labs',
    description:
      'Stop leaking revenue. SNRG Labs builds the automation, telephony, and conversion infrastructure behind real business growth.',
    images: ['https://snrglabs.com/og-image.png'],
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
      <body className={`font-sans antialiased ${inter.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
