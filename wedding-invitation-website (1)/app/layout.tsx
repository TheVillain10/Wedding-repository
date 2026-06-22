import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes, Marcellus } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif-elegant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const greatVibes = Great_Vibes({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400'],
})

const marcellus = Marcellus({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'The Royal Wedding | Jain Family',
  description:
    'A royal invitation to celebrate the auspicious wedding of the Jain family. Join us for the festivities.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#4a0d14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${marcellus.variable} bg-background`}
    >
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
