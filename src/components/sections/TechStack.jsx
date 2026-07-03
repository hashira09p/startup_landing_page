const TechStack = () => {
  const techItems = [
    { icon: 'fa-brands fa-html5', name: 'HTML5' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
    { icon: 'fa-brands fa-js', name: 'JavaScript' },
    { icon: 'fa-brands fa-react', name: 'React' },
    { icon: 'fa-brands fa-node', name: 'Node.js' },
    { icon: 'fa-solid fa-database', name: 'Firebase' },
    { icon: 'fa-brands fa-git-alt', name: 'Git' },
    { icon: 'fa-brands fa-figma', name: 'Figma' },
    { icon: 'fa-brands fa-aws', name: 'AWS' }
  ]

  return (
    <section className="section-padding">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="section-title">Our Tech Stack</h2>
        <p className="section-subtitle" style={{ marginBottom: '2rem' }}>We utilize modern, robust technologies to build scalable solutions.</p>
      </div>
      
      <div className="tech-marquee-container" data-aos="fade-up">
        <div className="tech-marquee">
          {/* Double the items for seamless loop */}
          {[...techItems, ...techItems].map((tech, index) => (
            <div key={index} className="tech-item">
              <i className={tech.icon}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack