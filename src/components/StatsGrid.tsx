import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface StatsCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
  color: string
  delay?: number
  onClick?: () => void
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color, delay = 0, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay,
          ease: 'power2.out' 
        }
      )
    }
  }, [delay])

  return (
    <div 
      ref={cardRef}
      onClick={onClick}
      className={`flex flex-col items-center p-4 ${color} rounded-lg hover:scale-105 transition-transform cursor-pointer${onClick ? ' hover:shadow-lg' : ''}`}
    >
      <div className="mb-2">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-gray-800">{value}</div>
        <div className="text-sm text-gray-600">{title}</div>
      </div>
    </div>
  )
}

interface StatsGridProps {
  stats: Array<{
    title: string
    value: number | string
    icon: React.ReactNode
    color: string
    onClick?: () => void
  }>
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={stat.title}
          {...stat}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}

export { StatsCard, StatsGrid }
