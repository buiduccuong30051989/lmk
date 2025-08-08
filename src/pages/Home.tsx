import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center"
      >
        Welcome to React + Vite
      </h1>
      
      <Card ref={cardRef} className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Getting Started</CardTitle>
          <CardDescription className="text-center">
            This project includes all the tools you need
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-2 bg-blue-50 rounded">✓ Vite</div>
            <div className="p-2 bg-green-50 rounded">✓ React Router</div>
            <div className="p-2 bg-purple-50 rounded">✓ Tailwind CSS</div>
            <div className="p-2 bg-yellow-50 rounded">✓ SCSS</div>
            <div className="p-2 bg-pink-50 rounded">✓ Biome</div>
            <div className="p-2 bg-indigo-50 rounded">✓ Prettier</div>
            <div className="p-2 bg-red-50 rounded">✓ GSAP</div>
            <div className="p-2 bg-gray-50 rounded">✓ shadcn/ui</div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button asChild className="flex-1">
              <Link to="/about">About Page</Link>
            </Button>
            <Button variant="outline" className="flex-1">
              Get Started
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
