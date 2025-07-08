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
    icon: [
      { url: '/abhi-trip-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/abhi-trip-logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/abhi-trip-logo.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/abhi-trip-logo.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/abhi-trip-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/abhi-trip-logo.png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/abhi-trip-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/abhi-trip-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/abhi-trip-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-TileImage" content="/abhi-trip-logo.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
