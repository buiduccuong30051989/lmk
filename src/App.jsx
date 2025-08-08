import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import IntroPage from '@/components/IntroPage'
import BackgroundVideo from '@/components/BackgroundVideo'
import MainApp from '@/components/MainApp'
import About from '@/pages/About'
import './styles/globals.scss'

function App() {
  const [currentView, setCurrentView] = useState('loading')

  // Auto chuyển từ loading sang intro sau 5 giây
  useEffect(() => {
    if (currentView === 'loading') {
      const timer = setTimeout(() => {
        setCurrentView('intro')
      }, 5000) // 5 giây
      
      return () => clearTimeout(timer)
    }
  }, [currentView])

  const handleVideoLoaded = () => {
    setCurrentView('intro')
  }

  const handleEnterApp = () => {
    setCurrentView('main')
  }

  const handleGoToAbout = () => {
    setCurrentView('about')
  }

  const handleGoToMain = () => {
    setCurrentView('main')
  }

  const handleBackToIntro = () => {
    setCurrentView('intro')
  }

  return (
    <>
      {/* Background Video - render sẵn từ đầu, chỉ hiện khi intro */}
      <BackgroundVideo isVisible={currentView === 'intro'} />

      {/* Loading Screen */}
      {currentView === 'loading' && (
        <LoadingScreen />
      )}
      
      {/* Intro Page - render sau khi loading xong */}
      {currentView === 'intro' && (
        <IntroPage 
          onEnter={handleEnterApp} 
          onGoToAbout={handleGoToAbout}
          onVideoLoaded={handleVideoLoaded}
        />
      )}

      {/* Main App */}
      {currentView === 'main' && (
        <MainApp />
      )}
      
      {/* About Page */}
      {currentView === 'about' && (
        <About 
          onGoToMain={handleGoToMain}
          onBackToIntro={handleBackToIntro}
        />
      )}
    </>
  )
}

export default App
