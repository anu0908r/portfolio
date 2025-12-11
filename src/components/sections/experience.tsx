'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Users } from 'lucide-react'

const experiences = [
  {
    role: 'Participant',
    organization: 'GeeksforGeeks Club',
    period: '2024',
    location: 'CMR Institute of Technology',
    description: 'Active member of the GFG student chapter, participating in coding events, workshops, and technical discussions.',
    highlights: [
      'Participate in weekly coding challenges',
      'Collaborate on group projects',
      'Attend technical workshops and seminars',
      'Contribute to peer learning initiatives'
    ]
  },
  {
    role: 'Participant',
    organization: 'Smart India Hackathon 2025',
    period: '2025',
    location: 'National Level Hackathon',
    description: 'Competed in India\'s largest hackathon, working on innovative solutions for real-world problems.',
    highlights: [
      'Developed innovative tech solutions',
      'Collaborated with cross-functional team',
      'Presented project to industry judges',
      'Enhanced problem-solving skills'
    ]
  },
  {
    role: 'Participant',
    organization: 'AISIRI Flash-Mob',
    period: '2024',
    location: 'CMR Institute of Technology',
    description: 'Participated in the AISIRI Flash-Mob event, showcasing creativity and teamwork.',
    highlights: [
      'Engaged in creative performance',
      'Collaborated with diverse team members',
      'Demonstrated leadership and coordination',
      'Contributed to event success'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-muted/30 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase mb-3 sm:mb-4">
            🎪 Where I've Been Active
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Involvement</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Coding, learning & having fun! 🎉
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">
                        {exp.organization}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map(highlight => (
                      <li key={highlight} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
