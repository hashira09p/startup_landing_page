import { useEffect, useRef } from 'react'

const CursorSpotlight = () => {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const spotlight = spotlightRef.current
    if (!spotlight || !window.matchMedia('(pointer: fine)').matches) return

    const handleMouseMove = (e) => {
      spotlight.style.left = e.clientX + 'px'
      spotlight.style.top = e.clientY + 'px'
      spotlight.classList.add('active')
    }

    const handleMouseLeave = () => {
      spotlight.classList.remove('active')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <div className="cursor-spotlight" ref={spotlightRef} aria-hidden="true"></div>
}

export default CursorSpotlight