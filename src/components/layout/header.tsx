'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4 mx-auto max-w-7xl">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 via-primary to-cyan-600 flex items-center justify-center font-bold text-white text-lg transition-transform group-hover:scale-110">
              A
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-violet-600 via-primary to-cyan-600 bg-clip-text text-transparent">Ananya U</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild size="sm" className="hidden md:flex gap-2 bg-gradient-to-r from-violet-600 to-primary hover:from-violet-700 hover:to-primary/90">
            <Link href="/1CR23CD007_ANANYA.U_RESUME1.pdf" target="_blank">
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t">
              <Button asChild size="sm" className="w-full gap-2 bg-gradient-to-r from-violet-600 to-primary hover:from-violet-700 hover:to-primary/90">
                <Link href="/1CR23CD007_ANANYA.U_RESUME1.pdf" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
