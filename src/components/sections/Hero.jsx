import useTypingEffect from '../../hooks/useTypingEffect'
import ParticleCanvas from '../ui/ParticleCanvas'

const Hero = () => {
  const phrases = [
    'We craft scalable and innovative web applications that empower your business.',
    'Let\'s build something amazing together.',
    'Modern solutions. Ethical practices. Real impact.',
    'From concept to launch — we\'ve got you covered.'
  ]
  
  const typingText = useTypingEffect(phrases)

  return (
    <header id="home" className="hero">
      <ParticleCanvas />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content text-center" data-aos="fade-up">
          <p style={{ 
            color: 'var(--primary)', 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1rem', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            marginBottom: '1rem' 
          }}>
            Welcome to SeptaByte Webworks
          </p>
          <h1>We Build, <span className="text-gradient">You Decide</span></h1>
          <p style={{ minHeight: '1.8em' }}>{typingText}</p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn btn-primary">
              <i className="fa-solid fa-eye" style={{ fontSize: '0.9rem' }}></i> View Our Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.9rem' }}></i> Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero