import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Sparkles } from 'lucide-react'
import AboutContent from '@/data/about.jsx'

interface AboutProps {
  onGoToMain: () => void
  onBackToIntro: () => void
}

const About = ({ onGoToMain, onBackToIntro }: AboutProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const exploreButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const content = contentRef.current
    const backButton = backButtonRef.current
    const exploreButton = exploreButtonRef.current

    if (!content || !backButton || !exploreButton) return

    // Initial state
    gsap.set([content, backButton, exploreButton], { opacity: 0, y: 30 })

    // Animation timeline
    const tl = gsap.timeline()
    tl.to([backButton, exploreButton], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.2)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 p-4 relative">
      
      {/* Fixed Corner Buttons */}
      <Button 
        ref={backButtonRef}
        variant="outline" 
        onClick={onBackToIntro}
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại
      </Button>

      <Button 
        ref={exploreButtonRef}
        onClick={onGoToMain}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Khám phá
      </Button>

      <div ref={containerRef} className="pt-20 pb-16">
        
        {/* Content */}
        <div ref={contentRef}>
          <AboutContent />
        </div>
      </div>
    </div>
  )
}

export default About