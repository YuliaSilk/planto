import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import Image from 'next/image'

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
      <body className="p-20">
        <Image
          src="/images/bg-plants.webp" // можна JPG або WebP
          alt=""
          fill
          quality={75}
          priority
          className="object-cover -z-10"
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
