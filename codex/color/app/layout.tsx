import type { Metadata } from 'next'
import { Source_Sans_3, Libre_Baskerville, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Academic Portfolio | Researcher & Scholar',
  description: 'Personal academic website showcasing research, publications, and academic achievements.',
  keywords: ['academic', 'research', 'publications', 'portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceSans.variable} ${libreBaskerville.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
