import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './Providers'
import Navbar from '@/components/Navbar/Navbar'
import { Montserrat } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets:["latin"]
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  )
}
