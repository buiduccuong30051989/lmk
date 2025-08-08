import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Loader2 } from 'lucide-react'

interface LoadingProps {
  text?: string
}

const Loading: React.FC<LoadingProps> = ({ text = 'Đang tải...' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center p-8"
    >
      <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}

export default Loading
