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
    <section id="education" className="py-12 sm:py-20 bg-muted/30 px-4 sm:px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Academic journey showcasing consistent excellence and passion for technology
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {edu.field}
                      </CardDescription>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <div className="font-medium">{edu.institution}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="mt-2 text-lg font-bold text-primary">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map(highlight => (
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
