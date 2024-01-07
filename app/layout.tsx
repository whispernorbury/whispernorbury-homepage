import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WhisperNorbury',
  description: 'Homepage of Sunwoo Jeong (2024)',
}

// const myFont = localFont({
//   src: [
//     {
//       path: '@/styles/fonts/YonseiLight.TTF',
//       weight: 'normal',
//       style: 'normal'
//     },
//     {
//       path: '@/styles/fonts/YonseiBold.TTF',
//       weight: 'bold',
//       style: 'normal'
//     }
//   ]
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
