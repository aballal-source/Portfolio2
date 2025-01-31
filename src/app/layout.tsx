//layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from '@/components/Loading/LoadingScreen'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmed's Portfolio",
  description: "Ahmed's Full-Stack Software Engineering Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}