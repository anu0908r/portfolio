'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-background px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            🚀 Get to know me
          </p>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span> 🎯
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              CS & Data Science student at CMRIT, Bengaluru. Building AI/ML applications, full-stack web solutions, and IoT systems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              CGPA 8.9 | Passionate about solving real-world problems with technology.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail-Oriented'].map((trait) => (
                <div key={trait} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="p-6 bg-muted/30 rounded-2xl border">
              <MapPin size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border">
              <Mail size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">uananya324@gmail.com</p>
              <p className="text-muted-foreground text-sm">anu23csds@cmrit.ac.in</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-2xl border">
              <Phone size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 8618989199</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
