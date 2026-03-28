import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { projects } from '../data/portfolio'

function HomePage() {
  return (
    <div className="bg-stone-50 text-stone-950 selection:bg-emerald-700 selection:text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
