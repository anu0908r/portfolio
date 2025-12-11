import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Achievements } from '@/components/sections/achievements'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </div>
  )
}
