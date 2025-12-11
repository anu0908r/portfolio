import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ananya U | Portfolio - Computer Science & Data Science Student',
  description: 'Portfolio of Ananya U - Computer Science & Data Science Student at CMR Institute of Technology. Specializing in AI/ML, Python, and Full-Stack Development. CGPA: 8.9/10.',
  keywords: ['Ananya U', 'Portfolio', 'Computer Science', 'Data Science', 'Machine Learning', 'Python Developer', 'Full Stack Developer', 'CMRIT', 'Web Development', 'React', 'Next.js'],
  authors: [{ name: 'Ananya U' }],
  creator: 'Ananya U',
  openGraph: {
    title: 'Ananya U | Computer Science & Data Science Portfolio',
    description: 'Computer Science & Data Science Student at CMR Institute of Technology. Specializing in AI/ML, Python, and Full-Stack Development. CGPA: 8.9/10.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={cn('antialiased min-h-screen bg-background flex flex-col')} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full bg-background">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
