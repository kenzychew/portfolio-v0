"use client"

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { NavHeader } from "@/app/components/nav-header"

const skills = [
  "React", "Vite", "Next.js", "JavaScript", "TypeScript", "Material UI", 
  "Shadcn UI", "Tailwind", "CSS", "HTML", "Node.js", "Express", "MongoDB", 
  "PostgreSQL", "Git", "Bruno", "Postman", "Vercel", "Netlify", "Render", 
  "CI/CD", "Windows", "Ubuntu", "Slack", "Zoom", "Jira", "Trello"
]

export default function Portfolio() {
  return (
    <>
      <NavHeader />
      
      {/* Hero Section */}
      <section id="home" className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I&apos;m Kenneth</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8 flex items-center justify-center gap-3">
            Full Stack Developer @kenzychew
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/kenzychew", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/kenzychew", label: "GitHub" },
                { icon: Mail, href: "mailto:kenzychew@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </p>
          <Button className="px-6 py-3 text-lg" asChild>
            <a href="#about">Get to know me</a>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-background py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-secondary/20 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-center text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-background py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Furkids",
                description: "Full-stack pet grooming appointment booking application featuring scheduling and time slot management, ensuring overlapping or conflicting appointments are avoided and including cancellations and rescheduling of appointments. Dual user login interface for groomers and pet owners. Frontend (React) deployed on Vercel. Backend (Node, Express, MongoDB) deployed on Render.",
                github: "https://github.com/kenzychew/pet-app",
                live: "https://furkids.vercel.app",
                tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render"]
              },
              {
                title: "Maskoff",
                description: "Full-stack social platform featuring job searching, community and messaging. Team project completed utilizing Git.",
                github: "https://github.com/manxzo/MaskOFF-Sandbox",
                live: "https://maskup.space",
                tech: ["React", "Node.js", "Git", "Team Collaboration"]
              },
              {
                title: "AnimeList",
                description: "React app that fetches anime data from Jikan API, featuring anime titles for user to browse, search and save to watchlist (Airtable). Deployed on Netlify.",
                github: "https://github.com/kenzychew/anime-list",
                live: "https://anime-list-987.netlify.app",
                tech: ["React", "Airtable", "REST API", "Netlify"]
              },
              {
                title: "WordleJS",
                description: "Browser-based clone of the popular Wordle game built using Javascript, HTML and CSS. Deployed on Github Pages.",
                github: "https://github.com/kenzychew/wordle-js",
                live: "https://kenzychew.github.io/wordle-js",
                tech: ["JavaScript", "HTML", "CSS", "GitHub Pages"]
              }
            ].map((project) => (
              <motion.div 
                key={project.title} 
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kenneth Chew. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
