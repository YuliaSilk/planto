import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'wellcome to planto',
  description: 'The best place to buy plants',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
