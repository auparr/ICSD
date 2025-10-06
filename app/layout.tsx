import type React from "react"
import type { Metadata } from "next"
import { Poppins, Nunito, Playfair_Display } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Salam ICSD - Sekolah Alam Insan Cendekia Sunan Drajat",
  description:
    "Belajar Bersama Alam, Tumbuh dengan Iman - Membangun karakter, rasa ingin tahu, dan kepemimpinan melalui alam dan nilai-nilai Islam",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${nunito.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
