import GlassCard from '../ui/GlassCard'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Septabyte delivered our platform ahead of schedule. Their attention to scalability and clean code gave us the confidence to launch to thousands of users on day one."
    },
    {
      quote: "Working with this remote team was incredibly smooth. They communicate clearly, write fantastic React code, and truly care about the ethical impact of the project."
    },
    {
      quote: "The e-commerce site they built is blazingly fast. We saw an immediate uptick in our conversion rates. Highly recommend Septabyte for any serious web application."
    }
  ]

  return (
    <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={(index + 1) * 100} className="testimonial-card">
              <div className="stars" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
                <i className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
                <i className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
                <i className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
                <i className="fa-solid fa-star" style={{ marginRight: '4px' }}></i>
              </div>
              <p style={{ margin: 0 }}>"{testimonial.quote}"</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials