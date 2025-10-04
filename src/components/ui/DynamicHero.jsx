import { useState, useEffect } from 'react'
import { heroImages, videos } from '../../assets'

const DynamicHero = ({ 
  children, 
  className = "", 
  imageKey = "mainHero", 
  videoKey = "heroVideo",
  interval = 10000, // 10 seconds
  mobileVideoOnly = false // New prop for mobile video-only mode
}) => {
  const [useVideo, setUseVideo] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // On mobile with mobileVideoOnly, always use video
    if (isMobile && mobileVideoOnly) {
      setUseVideo(true)
      return
    }

    // Desktop: Alternate between image and video every interval
    const timer = setInterval(() => {
      setUseVideo(prev => !prev)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, isMobile, mobileVideoOnly])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setIsVideoLoaded(false)
    if (!(isMobile && mobileVideoOnly)) {
      setUseVideo(false) // Fallback to image if video fails (except mobile-only mode)
    }
  }

  return (
    <section className={`relative overflow-hidden ${className} ${isMobile ? 'min-h-screen' : ''}`}>
      {/* Video Background */}
      {useVideo && (
        <video
          key={videoKey}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } ${
            isMobile 
              ? 'object-cover object-center' // Mobile: full cover
              : 'object-cover' // Desktop: normal cover
          }`}
        >
          <source src={videos[videoKey]} type="video/mp4" />
        </video>
      )}

      {/* Image Background - Hidden on mobile when mobileVideoOnly is true */}
      {!(isMobile && mobileVideoOnly && useVideo) && (
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            useVideo && isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${heroImages[imageKey]})`
          }}
        />
      )}

      {/* Gradient Overlay - Lighter on mobile for cleaner look */}
      <div className={`absolute inset-0 ${
        isMobile 
          ? 'bg-gradient-to-br from-black/30 via-black/20 to-black/40' // Lighter overlay on mobile
          : 'bg-gradient-to-br from-primary-500/80 via-primary-600/80 to-secondary-500/80' // Original overlay on desktop
      }`} />

      {/* Content */}
      <div className={`relative z-10 ${
        isMobile ? 'flex items-center justify-center min-h-screen px-4' : ''
      }`}>
        {children}
      </div>

      {/* Loading indicator for video */}
      {useVideo && !isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
    </section>
  )
}

export default DynamicHero