"use client"

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { ThemeProvider } from "@/app/components/theme-provider"

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">Hi, I&apos;m Kenneth.</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8 flex items-center justify-center gap-3">
          Full Stack Developer @kenzychew
          <a
            href="https://linkedin.com/in/kenzychew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/kenzychew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </p>
        <Button className="px-6 py-3 text-lg">Get to know me</Button>
      </motion.div>
    </div>
  )
}
