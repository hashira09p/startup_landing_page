import GlassCard from '../ui/GlassCard'

const Portfolio = () => {
  const projects = [
    {
      icon: 'fa-solid fa-cart-shopping',
      tag: 'E-commerce',
      title: 'NexTrade Storefront',
      problem: 'Legacy system causing high bounce rates due to slow load times.',
      solution: 'Rebuilt with a headless architecture, resulting in a 40% increase in conversions.',
      tech: ['Next.js', 'Node.js', 'Stripe']
    },
    {
      icon: 'fa-solid fa-heart-pulse',
      tag: 'Dashboard / Health',
      title: 'CareSync Portal',
      problem: 'Fragmented patient data across multiple clinic branches.',
      solution: 'A unified, HIPAA-compliant React dashboard for real-time data sync.',
      tech: ['React', 'Firebase', 'Tailwind']
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      tag: 'EdTech',
      title: 'LearnHub Academy',
      problem: 'Low student engagement in remote learning modules.',
      solution: 'Gamified interactive learning platform with real-time progress tracking.',
      tech: ['Vue.js', 'Express', 'MongoDB']
    },
    {
      icon: 'fa-solid fa-truck-fast',
      tag: 'Logistics Web App',
      title: 'TrackFlow',
      problem: 'Blind spots in last-mile delivery tracking.',
      solution: 'Real-time GPS integrated mapping interface for dispatchers.',
      tech: ['React', 'Google Maps API', 'WebSockets']
    },
    {
      icon: 'fa-solid fa-wallet',
      tag: 'Fintech',
      title: 'Aura Wallet Web',
      problem: 'Clunky UI making peer-to-peer transfers confusing.',
      solution: 'Streamlined, mobile-first web app reducing transfer time by 60%.',
      tech: ['React', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: 'fa-solid fa-seedling',
      tag: 'NGO Platform',
      title: 'GreenEarth Initiative',
      problem: 'Low online donation conversion rate.',
      solution: 'Optimized conversion funnel paired with transparent impact tracking UI.',
      tech: ['HTML/CSS', 'JavaScript', 'PHP']
    }
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
              <div className="portfolio-img"><i className={project.icon}></i></div>
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