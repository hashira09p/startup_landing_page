import { useEffect, useRef } from 'react'

const useCounters = (ref) => {
  const hasAnimated = useRef(false)

  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number')
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target')
        const increment = target / (2000 / 16) // 2000ms duration, 60fps => ~16ms per frame
        let current = 0
        
        const updateCounter = () => {
          current += increment
          if (current < target) {
            counter.innerText = Math.ceil(current) + (target > 50 ? '+' : '')
            requestAnimationFrame(updateCounter)
          } else {
            counter.innerText = target + (target > 50 ? '+' : '')
          }
        }
        
        updateCounter()
      })
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        animateCounters()
        hasAnimated.current = true
      }
    }, { threshold: 0.5 })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])
}

export default useCounters