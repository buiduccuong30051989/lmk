import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import healthQuotes from '../data/health_quotes.json'

interface IntroPageProps {
  onEnter: () => void
  onGoToAbout: () => void
  onVideoLoaded?: () => void
}

const IntroPage = ({ onEnter, onGoToAbout, onVideoLoaded }: IntroPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const instructionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  // Random quote selection
  const [currentQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * healthQuotes.quotes.length)
    return healthQuotes.quotes[randomIndex]
  })


  useEffect(() => {

    const container = containerRef.current
    const quote = quoteRef.current
    const instruction = instructionRef.current
    const button = buttonRef.current

    if (!container || !quote || !instruction || !button) return

    // Split text into words for animation
    const quoteText = currentQuote.vietnamese
    const words = quoteText.split(' ')
    
    // Clear and populate quote with spans for each word
    quote.innerHTML = ''
    words.forEach((word, index) => {
      const span = document.createElement('span')
      span.textContent = word
      span.className = 'word inline-block opacity-0 mr-2'
      span.style.transform = 'translateY(30px) scale(0.9) rotateX(-15deg)'
      quote.appendChild(span)
    })

    // Initial state - hide everything
    gsap.set([instruction, button], { opacity: 0, y: 30 })
    gsap.set(quote, { opacity: 1 })

    // Animation timeline
    const tl = gsap.timeline()

    // Enhanced split text reveal animation with 3D effects
    tl.to(quote.querySelectorAll('.word'), {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 2,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      ease: 'back.out(1.4)',
      transformOrigin: 'center bottom'
    })
    // Add a subtle glow effect after text appears
    .to(quote, {
      textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)',
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')
    // Button animation
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 2)
    // Instruction animation
    .to(instruction, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 3)

    // Click handler for background
    const handleClick = (e: MouseEvent) => {
      // Don't trigger if clicking on button
      if (button.contains(e.target as Node)) return
      
      gsap.to(container, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: onEnter
      })
    }

    container.addEventListener('click', handleClick)

    return () => {
      container.removeEventListener('click', handleClick)
    }
  }, [ onEnter, currentQuote.vietnamese])

  const handleAboutClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent background click
    onGoToAbout()
  }

  // Intro Screen
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center ">
        {/* Quote */}
        <div style={{letterSpacing: '5px'}} ref={quoteRef} className="mb-12 md:mb-16 text-5xl md:text-6xl lg:text-8xl xl:text-10xl text-white leading-none font-high-spirited letter-space">
          <div className=" mb-6 max-w-5xl mx-auto drop-shadow-2xl">
            "{/* Text will be populated by JavaScript */}"
          </div>
          <div className="text-base md:text-lg text-gray-200 font-medium mb-4 drop-shadow">
            — {currentQuote.author}
          </div>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* About Author Button */}
        <div className="mb-8">
          <Button
            ref={buttonRef}
            onClick={handleAboutClick}
            variant="outline"
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/30 text-white px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
          >
            về tôi
          </Button>
        </div>

        {/* Instruction */}
        <div ref={instructionRef}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl border border-white/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></span>
            <span className="text-white font-medium text-sm md:text-base drop-shadow">Nhấn vào bất cứ đâu để bắt đầu</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPage