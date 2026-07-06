import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: 'Moiwak Outdoor Supply',
  description: 'Opening in Järvsö and online this summer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
