import { useEffect, useState } from 'react'

const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader ${isHidden ? 'hidden' : ''}`} aria-hidden="true">
      <img 
        src="/logo.png" 
        alt="" 
        className="preloader-logo"
        onError={(e) => {
          e.target.onerror = null
          e.target.outerHTML = '<div style="font-family:Syne,sans-serif;font-size:2rem;font-weight:800;color:#7FFFD4;">SeptaByte</div>'
        }}
      />
    </div>
  )
}

export default Preloader