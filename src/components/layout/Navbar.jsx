import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = document.querySelectorAll('section[id], header[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'services', label: 'Services' },
    { href: 'about', label: 'About Us' },
    { href: 'portfolio', label: 'Portfolio' },
    { href: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-container">
        <a href="#home" className="logo" aria-label="SeptaByte Webworks - Home">
          <img 
            src="/logo.png" 
            alt="SeptaByte Logo" 
            className="tw-drop-shadow-[0_0_8px_rgba(127,255,212,0.5)]"
            onError={(e) => {
              e.target.onerror = null
              e.target.outerHTML = '<i class="fa-solid fa-code text-gradient"></i>'
            }}
          />
          <span>SeptaByte</span>
        </a>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks" role="menubar">
          {navLinks.map(link => (
            <li key={link.href} role="none">
              <a 
                href={`#${link.href}`}
                className={activeSection === link.href ? 'active' : ''}
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary nav-btn">Get in Touch</a>
        
        <button 
          className="mobile-menu-btn" 
          id="mobileMenuBtn" 
          aria-label="Toggle navigation menu" 
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar