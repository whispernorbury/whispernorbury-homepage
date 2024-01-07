import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'
import Title from '@/components/Title'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WhisperNorbury',
  description: 'Homepage of Sunwoo Jeong (2024)',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Title/>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
