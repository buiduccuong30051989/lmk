import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface AnimatedBoxProps {
  children: React.ReactNode
  className?: string
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, className = '' }) => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = boxRef.current
    if (!element) return

    // Set initial state
    gsap.set(element, { opacity: 0, scale: 0.8, y: 50 })

    // Animate in
    const tl = gsap.timeline()
    tl.to(element, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
      gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={boxRef} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default AnimatedBox
