import type { Metadata } from 'next'
import { Inter, Cabin } from 'next/font/google'
import '@acme/ui/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const cabin = Cabin({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} font-sans antialiased subpixel-antialiased`}>
        {children}
      </body>
    </html>
  )
}
