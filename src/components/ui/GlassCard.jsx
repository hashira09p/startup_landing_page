const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`glass-card ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {children}
    </div>
  )
}

export default GlassCard