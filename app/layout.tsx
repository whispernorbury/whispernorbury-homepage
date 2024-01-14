import type { Metadata } from 'next'
import localFont from 'next/font/local'
import "@/app/globals.css"
import ThemeProvider from '@/contexts/ThemeProvider'

export const metadata: Metadata = {
  title: 'WhisperNorbury',
  description: 'Homepage of Sunwoo Jeong (2024)',
}

const myFont = localFont({
  src: [
    {
      path: '../styles/fonts/YonseiLight.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../styles/fonts/YonseiBold.ttf',
      weight: 'bold',
      style: 'normal',
    },
  ]
})

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={myFont.className}>
      {children}
    </html>
  )
}
