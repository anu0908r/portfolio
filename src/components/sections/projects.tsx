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
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span> 🚀
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Cool stuff I've built 🛠️✨
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.link && (
                    <div className="pt-2">
                      <Button asChild size="sm" variant="outline" className="w-full group">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          View on GitHub
                          <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
