'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'Analysis and Design of Algorithms',
    issuer: 'Coursera',
    platform: 'Online',
    description: 'Algorithm design paradigms and complexity analysis.',
    skills: ['Algorithms', 'Complexity Analysis', 'Problem Solving']
  },
  {
    title: 'Data Structures',
    issuer: 'Udemy',
    platform: 'Online',
    description: 'Fundamental data structures and applications.',
    skills: ['Arrays', 'Trees', 'Graphs', 'Hash Tables']
  },
  {
    title: 'Python Programming',
    issuer: 'Udemy',
    platform: 'Online',
    description: 'Python fundamentals and OOP concepts.',
    skills: ['Python', 'OOP', 'Data Structures']
  }
]

export function Achievements() {
  return (
    <section id="achievements" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center mb-3 sm:mb-4">
            Achievements & <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Certifications</span> 🏆
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-left md:text-center max-w-2xl mx-auto px-4">
            Badges I've collected 📚✨
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background border rounded-lg p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="line-clamp-2">{cert.title}</span>
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.platform}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
              
              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">Skills Acquired</h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
