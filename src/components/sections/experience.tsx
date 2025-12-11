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
    <section id="experience" className="py-8 sm:py-12 bg-muted/30 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <p className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase mb-2 text-left md:text-center">
            🎪 Where I've Been Active
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center mb-2">
            Experience & <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Involvement</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-left md:text-center max-w-2xl mx-auto">
            Coding, learning & having fun! 🎉
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Calendar className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="text-xs font-medium text-muted-foreground border px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <div className="text-primary font-medium">{exp.organization}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
