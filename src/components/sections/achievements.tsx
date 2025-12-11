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
    <section id="achievements" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Achievements & <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Certifications</span> 🏆
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Badges I've collected on my learning journey 📚✨
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-2">
                        <span className="font-medium text-foreground">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.platform}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{cert.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
