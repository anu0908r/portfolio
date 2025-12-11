'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    features: [
      'Real-time weather data',
      'Location-based forecasts'
    ],
    link: 'https://github.com/anu0908r/weather'
  },
  {
    title: 'Distributor Connect',
    description: 'Platform connecting distributors with retailers for streamlined operations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Inventory management',
      'Order tracking system'
    ]
  },
  {
    title: 'Education Portal',
    description: 'AI-powered platform for personalized learning using Gemini API.',
    tech: ['Python', 'Flask', 'Gemini API', 'SQLite'],
    features: [
      'AI content generation',
      'Personalized learning paths'
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center mb-3 sm:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span> 🚀
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-left md:text-center max-w-2xl mx-auto px-4">
            Cool stuff I've built 🛠️✨
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background border rounded-lg p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <div className="pt-2">
                      <Button asChild size="sm" variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          <span>View Source</span>
                          <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
