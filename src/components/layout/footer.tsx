import Link from 'next/link'
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/20 py-12 px-6">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 via-primary to-cyan-600 text-white font-bold text-xl mb-3">
              A
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-primary to-cyan-600 bg-clip-text text-transparent mb-2">
              Ananya U
            </h3>
            <p className="text-muted-foreground">
              Computer Science & Data Science Student
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Github, href: 'https://github.com/anu0908r', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ananya-u-34205530a', label: 'LinkedIn' },
              { icon: Code, href: 'https://leetcode.com/u/anuanya_u/', label: 'LeetCode' },
              { icon: Mail, href: 'mailto:uananya324@gmail.com', label: 'Email' },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-br hover:from-violet-600 hover:to-primary hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Ananya U. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built by Ananya U
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
