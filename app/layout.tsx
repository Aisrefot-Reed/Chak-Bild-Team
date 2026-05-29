import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chak Bild | DevSecOps Tools for Small Teams",
  description:
    "Chak Bild builds automated security tools for development teams. SecureCI scans every Pull Request for vulnerabilities — no Security Engineer required.",
  openGraph: {
    title: "Chak Bild | DevSecOps Tools for Small Teams",
    description:
      "Automated security tools for development teams. SecureCI scans every Pull Request for vulnerabilities — no Security Engineer required.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="light">
          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
