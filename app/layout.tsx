import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hippocampus Consulting',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: '/images/hippocampus-logo-onlget.png',
    shortcut: '/images/hippocampus-logo-onlget.png',
    apple: '/images/hippocampus-logo-onlget.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
