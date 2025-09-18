import { useState, useEffect } from 'react'
import { heroImages, videos } from '../../assets'

const DynamicHero = ({ 
  children, 
  className = "", 
  imageKey = "mainHero", 
  videoKey = "heroVideo",
  interval = 10000 // 10 seconds
}) => {
  const [useVideo, setUseVideo] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Alternate between image and video every interval
    const timer = setInterval(() => {
      setUseVideo(prev => !prev)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setIsVideoLoaded(false)
    setUseVideo(false) // Fallback to image if video fails
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videos[videoKey]} type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          useVideo && isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${heroImages[imageKey]})`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 via-primary-600/80 to-secondary-500/80" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Loading indicator for video */}
      {useVideo && !isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-500/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
    </section>
  )
}

export default DynamicHero