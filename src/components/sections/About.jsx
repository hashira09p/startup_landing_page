import { useRef } from 'react'
import useCounters from '../../hooks/useCounters'
import GlassCard from '../ui/GlassCard'

const About = () => {
  const statsRef = useRef(null)
  useCounters(statsRef)

  const values = [
    { icon: 'fa-solid fa-lightbulb', title: 'Innovation', description: 'Pushing technological boundaries.' },
    { icon: 'fa-solid fa-scale-balanced', title: 'Integrity', description: 'Honest, transparent partnerships.' },
    { icon: 'fa-solid fa-earth-asia', title: 'Impact', description: 'Creating meaningful change.' },
    { icon: 'fa-solid fa-users', title: 'Collaboration', description: 'Succeeding together.' }
  ]

  const team = [
    { name: 'Jerome Abelida', role: 'Data Engineer / Co-Founder' },
    { name: 'Glenn Lloyd Ybanez', role: 'Software Engineer / Co-Founder'},
    { name: 'Paul John Pitogo', role: 'AI Engineer / Co-Founder' },
  ]

  const timeline = [
    { year: '2024', title: 'Septabyte Founded', description: 'Started as a small group of passionate developers with a vision for ethical tech solutions.' },
    { year: '2025', title: 'First Major Product Launch', description: 'Successfully delivered a scalable web application for businesses and school projects.' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-content">
          <div data-aos="fade-right">
            <h2 className="section-title">Who We Are</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              <strong>Septabyte Webworks</strong> is a passionate, remote startup based in the Philippines, with seven dedicated members. We provide comprehensive IT solutions, crafting both static and dynamic websites, web applications, and mobile apps tailored for the modern digital landscape.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-gradient">Our Mission</h3>
              <p style={{ color: 'var(--text-muted)' }}>To build a better world, one project at a time, by leveraging technology to uplift and inspire, delivering exceptional digital experiences that make a real, ethical impact.</p>
            </div>
            <div>
              <h3 className="text-gradient">Our Vision</h3>
              <p style={{ color: 'var(--text-muted)' }}>A future where web development prioritizes not just functionality, but also positive change in the communities we serve.</p>
            </div>
          </div>
          
          <div className="values-grid" data-aos="fade-left">
            {values.map((value, index) => (
              <GlassCard key={index} style={{ padding: '1.5rem', textAlign: 'center' }}>
                <i className={value.icon} style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '10px' }}></i>
                <h4 style={{ marginBottom: '5px' }}>{value.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Stats Counter */}
        <div className="stats-container" data-aos="fade-up" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number" data-target="4">0</div>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="3">0</div>
            <p>Team Members</p>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="99">0</div>
            <p>Client Satisfaction %</p>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="24">0</div>
            <p>Hour Support</p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center" style={{ marginTop: '5rem' }} data-aos="fade-up">
          <h2 className="section-title">Meet The Core Team</h2>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <GlassCard key={index} delay={(index + 1) * 100} className="team-card">
              <div className="team-avatar"><i className="fa-solid fa-user"></i></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </GlassCard>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up">
              <div className="timeline-dot"></div>
              <GlassCard className="timeline-content">
                <h4 className="text-gradient">{item.year}</h4>
                <h3>{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About