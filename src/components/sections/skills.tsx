'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Brain, Database, Cloud, Terminal, Sparkles } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-5 h-5" />,
      skills: ['Python', 'JavaScript', 'C/C++', 'TypeScript'],
      color: 'primary',
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-5 h-5" />,
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas'],
      color: 'purple',
    },
    {
      title: 'Web Dev',
      icon: <Cloud className="w-5 h-5" />,
      skills: ['React', 'Next.js', 'Node.js', 'Flask'],
      color: 'green',
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['GitHub', 'VS Code', 'Arduino IDE', 'Jupyter', 'Git'],
      color: 'orange',
    },
    {
      title: 'IoT & Embedded',
      icon: <Sparkles className="w-5 h-5" />,
      skills: ['ESP32', 'Arduino', 'Blynk IoT', 'C/C++'],
      color: 'pink',
    },
  ]

  return (
    <section id="skills" className="py-8 sm:py-12 bg-muted/30 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase mb-2 text-left md:text-center">
            ⚡ What I Know
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left md:text-center">
            Technical <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span> 💻
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background border rounded-lg p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
