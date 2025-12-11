'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Education Portal',
    description: 'An AI-powered education platform that provides personalized learning experiences using the Gemini API.',
    tech: ['Python', 'Flask', 'Gemini API', 'SQLite', 'HTML/CSS', 'JavaScript'],
    features: [
      'AI-powered content generation',
      'Personalized learning paths',
      'Interactive quizzes and assessments',
      'Progress tracking and analytics'
    ]
  },
  {
    title: 'Heart Disease Prediction System',
    description: 'Machine learning application that predicts heart disease risk based on patient health metrics.',
    tech: ['Python', 'Scikit-learn', 'Logistic Regression', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Predictive ML model with high accuracy',
      'Interactive data visualization',
      'Risk assessment reports',
      'User-friendly interface'
    ]
  },
  {
    title: 'Home Automation System',
    description: 'IoT-based home automation system enabling remote control of home appliances.',
    tech: ['ESP32', 'C/C++', 'Blynk IoT', 'Arduino IDE'],
    features: [
      'Remote device control via mobile app',
      'Real-time monitoring',
      'Automated scheduling',
      'Voice control integration'
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in AI, machine learning, and IoT development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
