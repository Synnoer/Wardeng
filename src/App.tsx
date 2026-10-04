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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-800 focus:shadow-lg"
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
