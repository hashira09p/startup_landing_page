import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    document.getElementById('copyright-year').textContent = new Date().getFullYear()
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const button = e.target.querySelector('button')
    const input = e.target.querySelector('input')
    button.textContent = 'Subscribed!'
    input.value = ''
    setTimeout(() => {
      button.textContent = 'Subscribe'
    }, 3000)
  }

  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo" aria-label="SeptaByte Webworks">
              <img 
                src="/logo.png" 
                alt="SeptaByte Logo" 
                onError={(e) => {
                  e.target.onerror = null
                  e.target.outerHTML = '<i class="fa-solid fa-code text-gradient"></i>'
                }}
              />
              <span>SeptaByte</span>
            </a>
            <p>Crafting scalable, innovative, and ethical web applications that empower businesses and communities globally.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Your email for updates" required aria-label="Email for newsletter" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; <span id="copyright-year"></span> SeptaByte Webworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer