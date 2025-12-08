import type React from "react"
import type { Metadata } from "next"
import { Inter, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "Talha & Muskan Wedding | January 1-2, 2026",
  description: "Join us in celebrating the wedding of M. Talha Yousaf & Muskan Kashan. January 1-2, 2026 in Karachi.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Talha & Muskan Wedding",
    description: "Save the Date - January 1-2, 2026",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body
        className={`font-sans antialiased`}
        style={{
          backgroundImage: "url('/background-peacocks.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
