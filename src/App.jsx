import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Banner from './components/sections/Banner'
// UI Components
import Preloader from './components/common/Preloader.jsx'
import CursorSpotlight from './components/common/CursorSpotlight'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <>
      <Preloader />
      <CursorSpotlight />
      
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Banner/>
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App