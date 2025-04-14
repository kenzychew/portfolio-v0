"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">Hi, I'm Kenneth.</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
          Full-Stack Developer
        </p>
        <Button className="px-6 py-3 text-lg">Learn More</Button>
      </motion.div>
    </div>
  )
}
