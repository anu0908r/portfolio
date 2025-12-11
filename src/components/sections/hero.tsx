'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:py-20">
      {/* Unique Animated Background - Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-[60%_40%_30%_70%/30%_60%_70%_40%] blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/10 to-primary/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 via-primary/10 to-cyan-500/10 border border-primary/20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium">✨ Open to Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <motion.span 
                  className="block text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >Hey there! 👋 I'm</motion.span>
                <span className="block mt-2 bg-gradient-to-r from-violet-600 via-primary to-cyan-600 bg-clip-text text-transparent">
                  Ananya U
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <p className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium">
                  Computer Science & Data Science
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Building intelligent solutions with{' '}
              <span className="text-primary font-semibold">AI/ML</span> and{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Full-Stack Dev</span>. BE Student at CMRIT (CGPA 8.9).
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Button size="lg" asChild className="group bg-gradient-to-r from-violet-600 to-primary hover:from-violet-700 hover:to-primary/90 w-full sm:w-auto">
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group border-2 w-full sm:w-auto">
                <Link href="/1CR23CD007_ANANYA.U_RESUME1.pdf" download>
                  <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 pt-4"
            >
              {[
                { icon: Github, href: 'https://github.com/anu0908r', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ananya-u-34205530a', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ananyau2005@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-gradient-to-br hover:from-violet-600 hover:to-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Unique Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 bg-gradient-to-r from-violet-600/20 via-primary/20 to-cyan-600/20 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-gradient-to-br from-violet-600/30 to-cyan-600/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-2xl"
              />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10" />
                <Image
                  src="/ananya.png"
                  alt="Ananya U - Professional Photo"
                  width={500}
                  height={500}
                  className="relative z-10 object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background/90 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-primary flex items-center justify-center text-white font-bold text-xl">
                    8.9
                  </div>
                  <div>
                    <div className="text-sm font-semibold">CGPA</div>
                    <div className="text-xs text-muted-foreground">Academic Excellence</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-background/90 backdrop-blur-sm border rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">3+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
