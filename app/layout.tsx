import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhi Trip - Explore. Experience. Escape.",
  description:
    "Your trusted travel partner for weekend escapes and thrilling adventures across Karnataka and South India. Book one-day and two-day trips from Bangalore.",
  keywords: "travel, trips, Karnataka, South India, Bangalore, weekend getaway, trekking, adventure",
  generator: 'v0.dev',
  icons: {
    icon: '/abhi-trip-logo.png',
    apple: '/abhi-trip-logo.png',
    shortcut: '/abhi-trip-logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
