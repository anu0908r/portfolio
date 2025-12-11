'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Brain, Database, Cloud, Terminal, Sparkles } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'primary',
    },
    {
      title: 'AI/ML & Data Science',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'purple',
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'SQLite'],
      color: 'blue',
    },
    {
      title: 'Frameworks',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Flask', 'React', 'Tailwind CSS', 'Next.js'],
      color: 'green',
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['GitHub', 'VS Code', 'Arduino IDE', 'Jupyter', 'Git'],
      color: 'orange',
    },
    {
      title: 'IoT & Embedded',
      icon: <Sparkles className="w-6 h-6" />,
      skills: ['ESP32', 'Arduino', 'Blynk IoT', 'C/C++'],
      color: 'pink',
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-24 bg-muted/30 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            What I Know
          </p>
          <h2 className="text-4xl font-bold">
            Technical <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
