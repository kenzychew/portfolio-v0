import type React from "react"
import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "kenzychew",
  description: "Kenneth Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
          suppressHydrationWarning
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
