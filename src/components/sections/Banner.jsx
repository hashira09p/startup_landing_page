{/* CTA Banner */}
const Banner = () => {
    return (
         <section className="cta-banner" data-aos="fade-in">
          <h2>
            "Building a better digital world, by <span className="text-gradient">Empowering communities</span> through innovative, purpose-driven technology, one ethical project at a time."
          </h2>
          <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '2rem' }}>— Septabyte Webworks</p>
          <a href="#contact" className="btn btn-primary">Start a Project With Us</a>
        </section>
    )
} 

export default Banner;