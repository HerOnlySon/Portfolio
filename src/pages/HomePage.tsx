import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const projects = [
  {
    name: 'FlexSure',
    label: 'Marketplace platform / 2026',
    description:
      'A gadget insurance marketplace that connects clients with insurers, allowing customers to submit insurance requests, compare offers, manage policies, and file claims through a full-stack workflow.',
    techStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/The-DigitalAcademy/FlexSure',
    liveUrl: 'https://github.com/The-DigitalAcademy/FlexSure',
  },
  {
    name: 'NuAgeBiskop',
    label: 'Angular app / 2025',
    description:
      'An Angular movie-box style clone focused on homepage layout, hero presentation, sidebar interactions, and overall entertainment-platform styling.',
    techStack: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/The-DigitalAcademy/NuAgeBiskop',
    liveUrl: 'https://github.com/The-DigitalAcademy/NuAgeBiskop',
  },
  {
    name: 'Makwenzeke',
    label: 'Reminder app / 2025',
    description:
      'A to-do list and reminder type application focused on organizing daily tasks, tracking completion, and improving personal productivity with a simple user-friendly flow.',
    techStack: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/The-DigitalAcademy/Makwenzeke',
    liveUrl: 'https://github.com/The-DigitalAcademy/Makwenzeke',
  },
  {
    name: 'Portfolio Website',
    label: 'Personal build / 2026',
    description:
      'A personal developer portfolio focused on clean presentation, responsive layouts, and modern frontend interaction design.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SASS', 'Figma'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
  {
    name: 'Java Practice Apps',
    label: 'Learning projects / 2025',
    description:
      'A growing collection of small Java and web development practice apps built to strengthen problem-solving, backend thinking, and responsive design skills.',
    techStack: ['Java', 'Spring Boot', 'Bootstrap', 'MySQL', 'Git'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
  {
    name: 'Data Dashboard Concepts',
    label: 'Analytics-inspired work / 2025',
    description:
      'Frontend and analytics-oriented concepts influenced by consulting and data analysis experience, with a focus on clarity, reporting, and useful interfaces.',
    techStack: ['Angular', 'Python', 'PostgreSQL', 'Power BI', 'Jira'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
]

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
