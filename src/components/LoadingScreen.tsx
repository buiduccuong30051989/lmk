import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LoadingScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const dots = dotsRef.current
    const text = textRef.current

    if (!container || !dots || !text) return

    // Animate loading dots
    const dotElements = dots.querySelectorAll('.dot')
    gsap.to(dotElements, {
      scale: 1.5,
      opacity: 0.3,
      duration: 0.6,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })

    // Animate text
    gsap.fromTo(text, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900 flex items-center justify-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <span className="text-3xl">🌿</span>
        </div>
        
        <div ref={textRef} className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Sổ tay sức khỏe
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            Đang chuẩn bị nội dung...
          </p>
        </div>

        <div ref={dotsRef} className="flex justify-center space-x-2">
          <div className="dot w-3 h-3 bg-white rounded-full"></div>
          <div className="dot w-3 h-3 bg-white rounded-full"></div>
          <div className="dot w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen