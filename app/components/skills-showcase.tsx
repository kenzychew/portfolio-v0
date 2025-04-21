"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Settings } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

// Skill type definition
type Skill = {
  name: string
  category: "frontend" | "backend" | "devops" | "database" | "tools"
}

// Skills data
const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "Shadcn UI", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "HTML", category: "frontend" },
  
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  
  // Database
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  
  // DevOps
  { name: "Git", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Netlify", category: "devops" },
  { name: "Render", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Windows", category: "devops" },
  { name: "Ubuntu", category: "devops" },
  
  // Tools
  { name: "Bruno", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Slack", category: "tools" },
  { name: "Zoom", category: "tools" },
  { name: "Jira", category: "tools" },
  { name: "Trello", category: "tools" },
]

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all" ? skillsData : skillsData.filter((skill) => skill.category === activeCategory)

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Globe className="h-4 w-4" />
      case "backend":
        return <Server className="h-4 w-4" />
      case "database":
        return <Database className="h-4 w-4" />
      case "devops":
        return <Settings className="h-4 w-4" />
      case "tools":
        return <Code2 className="h-4 w-4" />
      default:
        return <Code2 className="h-4 w-4" />
    }
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
      <p className="text-lg text-muted-foreground mb-10">
        A comprehensive overview of my technical expertise across various technologies and domains.
      </p>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeCategory} className="mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="capitalize">
                        {getCategoryIcon(skill.category)}
                        <span className="ml-1">{skill.category}</span>
                      </Badge>
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
} 
