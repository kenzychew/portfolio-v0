"use client"

import { useEffect, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"

export function NavHeader() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Add section detection logic here
      const sections = ["home", "about", "skills", "projects"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex gap-6">
          {["Home", "About", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item}
            </a>
          ))}
        </div>
        <ModeToggle />
      </nav>
    </header>
  )
} 
