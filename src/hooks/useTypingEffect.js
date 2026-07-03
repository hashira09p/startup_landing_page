import { useState, useEffect } from 'react'

const useTypingEffect = (phrases, typingSpeed = 50, deletingSpeed = 30, pauseTime = 2500) => {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1))
      } else {
        setText(currentPhrase.substring(0, text.length + 1))
      }

      let delay = isDeleting ? deletingSpeed : typingSpeed

      if (!isDeleting && text === currentPhrase) {
        delay = pauseTime
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        delay = 400
      }

      timeout = setTimeout(type, delay)
    }

    timeout = setTimeout(type, 100)
    return () => clearTimeout(timeout)
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default useTypingEffect