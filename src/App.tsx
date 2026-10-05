import { ContactForm } from './components/ContactForm'
import { DigitalServices } from './components/DigitalServices'
import { FnB } from './components/FnB'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:border-2 focus:border-cyan-400 focus:bg-night-900 focus:px-4 focus:py-2 focus:font-ui focus:text-sm focus:font-bold focus:uppercase focus:italic focus:text-cyan-300 focus:shadow-lg"
      >
        Loncat ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <FnB />
        <DigitalServices />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
