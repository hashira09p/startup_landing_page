import { useState } from 'react'
import GlassCard from '../ui/GlassCard'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully! (Frontend Only Demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: 'fa-solid fa-envelope', title: 'Email Us', detail: 'septabytewebworks@gmail.com' },
    { icon: 'fa-solid fa-phone', title: 'Call Us', detail: '+63 976 030 8565' },
    { icon: 'fa-solid fa-location-dot', title: 'Location', detail: 'Philippines (Remote)' }
  ]

  const socialLinks = [
    { icon: 'fa-brands fa-github', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
    { icon: 'fa-brands fa-x-twitter', label: 'X / Twitter' }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's build something amazing together. Reach out to us below.</p>
        </div>

        <div className="contact-container">
          {/* Form */}
          <GlassCard data-aos="fade-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-control" 
                  placeholder="Project Inquiry" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="form-control" 
                  placeholder="Tell us about your project..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
            </form>
          </GlassCard>

          {/* Info Cards */}
          <div className="contact-info-cards" data-aos="fade-left">
            {contactInfo.map((info, index) => (
              <GlassCard key={index} className="info-card">
                <div className="info-icon"><i className={info.icon}></i></div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>{info.title}</h4>
                  <p className="text-muted">{info.detail}</p>
                </div>
              </GlassCard>
            ))}
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="social-link" aria-label={social.label}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact