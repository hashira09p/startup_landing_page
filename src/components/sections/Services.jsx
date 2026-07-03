import GlassCard from '../ui/GlassCard'

const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Custom Websites',
      description: 'We design and develop high-quality websites that align with your brand and business goals. Whether you need a professional business site, a personal portfolio, or a fully functional e-commerce store, we create visually stunning and responsive websites that provide an excellent user experience.'
    },
    {
      icon: 'fa-solid fa-layer-group',
      title: 'Web Applications',
      description: 'We build dynamic and interactive web applications using modern frameworks like React to deliver seamless user experiences. From business dashboards to internal tools, we create scalable and intuitive solutions tailored to your workflow.'
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Frontend & Backend',
      description: 'We develop robust, high-performance applications with a strong frontend and backend foundation. Whether it\'s building APIs, databases, or scalable server-side architectures, we ensure your application runs smoothly and securely.'
    }
  ]

  const process = [
    { icon: 'fa-solid fa-magnifying-glass', title: 'Discover' },
    { icon: 'fa-solid fa-pen-nib', title: 'Design' },
    { icon: 'fa-solid fa-code', title: 'Build' },
    { icon: 'fa-solid fa-rocket', title: 'Launch' }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            From sleek websites to powerful web applications, we craft scalable, high-performance solutions tailored to your needs. Our expertise ensures fast, secure, and user-friendly platforms designed for growth and efficiency.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <GlassCard key={index} delay={(index + 1) * 100} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="process-row" data-aos="fade-up">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-icon">
                <i className={step.icon}></i>
              </div>
              <h4>{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services