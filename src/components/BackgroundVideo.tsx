import { useState } from 'react'
import YouTube from 'react-youtube'

interface BackgroundVideoProps {
  isVisible: boolean
}

const BackgroundVideo = ({ isVisible }: BackgroundVideoProps) => {
  const [currentVideoId] = useState(() => {
    const videoIds = ["TXeMneoWXFw", "7wP1R0_Fv88", "LCUDR_xipNs", "N0JRmr3qLxQ"]
    const randomIndex = Math.floor(Math.random() * videoIds.length)
    return videoIds[randomIndex]
  })

  // YouTube player options
  const youtubeOpts = {
    height: '100vh',
    width: '100vw',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: currentVideoId, // Required for loop to work
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      cc_load_policy: 0,
      playsinline: 1,
      start: 0,
      enablejsapi: 1
    }
  }

  return (
    <div 
      className={`video-container transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="youtube-video">
        <YouTube
          videoId={currentVideoId}
          opts={youtubeOpts}
          onReady={(event) => {
            // Auto loop when video ends
            event.target.playVideo()
          }}
          onEnd={(event) => {
            // Ensure loop by playing again
            event.target.playVideo()
          }}
          className="absolute inset-0"
          style={{ pointerEvents: 'none' }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-[1px]"></div>
    </div>
  )
}

export default BackgroundVideo