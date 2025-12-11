'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering (Data Science)',
    institution: 'CMR Institute of Technology',
    location: 'Bangalore, Karnataka',
    period: '2023 - 2027',
    grade: 'CGPA: 8.9',
    highlights: [
      'Data Science & AI specialization',
      'Multiple hackathons'
    ]
  },
  {
    degree: 'Pre-University Course (PUC)',
    field: 'Science Stream',
    institution: 'MES College, Bangalore',
    location: 'Bangalore, Karnataka',
    period: '2021 - 2023',
    grade: 'Percentage: 94.16%',
    highlights: [
      'PCMB stream',
      'Strong STEM foundation'
    ]
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    field: 'General Studies',
    institution: 'G E KAY Convent High School',
    location: 'Bangalore, Karnataka',
    period: '2020 - 2021',
    grade: 'Percentage: 94.56%',
    highlights: [
      'Top academic performance',
      'Co-curricular activities'
    ]
  }
]

export function Education() {
  return (
    <section id="education" className="py-8 sm:py-12 bg-muted/30 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center mb-2">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</span> 🎓
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-left md:text-center max-w-2xl mx-auto">
            My academic journey 📖✨
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-primary/20 pb-8 last:pb-0 last:border-l-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                  <div className="text-primary font-medium">{edu.field}</div>
                </div>
                <div className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded self-start">
                  {edu.period}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-base font-medium">{edu.institution}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {edu.grade}
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map(highlight => (
                    <span key={highlight} className="text-xs text-muted-foreground border px-2 py-1 rounded-full">
                      {highlight}
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
