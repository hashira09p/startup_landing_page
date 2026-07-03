import GlassCard from '../ui/GlassCard'

const Portfolio = () => {
  const projects = [
    {
      image: '/una-sa-trabaho.png',
      tag: 'Web App / Job Portal',
      title: 'Una sa Trabaho',
      problem: 'Job seekers struggle to find verified, local job openings, while employers face difficulties finding qualified talent.',
      solution: 'A centralized job seeker web app that bridges the gap between local job seekers and employers with optimized vacancy listings and resume uploading.',
      tech: ['React', 'Tailwind CSS', 'Vite']
    },
    {
      icon: 'fa-solid fa-lock',
      tag: 'IoT / Security',
      title: 'Anti-Theft Solenoid Lock',
      problem: 'Physical key access systems are vulnerable to tampering and lack real-time monitoring, leading to unauthorized entry.',
      solution: 'Developed a smart solenoid lock integrated with an ESP32 microcontroller, featuring RFID authentication, tamper detection, and real-time security alerts.',
      tech: ['ESP32', 'C++', 'MQTT', 'React']
    },
    {
      icon: 'fa-solid fa-brain',
      tag: 'AI App',
      title: 'AI Engine',
      problem: 'Businesses struggle to extract actionable intelligence and forecast trends from massive volumes of unstructured operational data.',
      solution: 'Developed a high-throughput AI engine leveraging LLMs and predictive neural networks to automate semantic analysis and generate real-time business insights.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'Docker']
    },
    {
      icon: 'fa-solid fa-ticket',
      tag: 'Web App / Gaming',
      title: 'Lottery Website App',
      problem: 'Traditional lottery platforms struggle with transparent draw mechanics, high transaction fees, and delayed winning payouts.',
      solution: 'Developed a fully responsive web application with provably fair random number generation (RNG), secure digital ticketing, and automated instant prize distribution.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL']
    },
  ]

  return (
    <section id="portfolio" className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">A glimpse into the robust applications and seamless experiences we've engineered.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={(index + 1) * 100} className="portfolio-card">
              <div className="portfolio-img">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="portfolio-screenshot" />
                ) : (
                  <i className={project.icon}></i>
                )}
              </div>
              <div className="portfolio-content">
                <span className="tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="ps-format"><span>Problem:</span> {project.problem}</p>
                <p className="ps-format"><span>Solution:</span> {project.solution}</p>
                <div className="tech-stack-badges">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href="#" className="btn btn-outline" style={{ width: '100%' }}>View Case Study</a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio