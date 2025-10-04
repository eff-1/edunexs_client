// Asset Management for Edunexs LearnSphere
// This file manages all static assets (images, videos, etc.)

// Hero Images
export const heroImages = {
  // Main hero background
  mainHero: '/assets/images/heroes/main-hero.jpeg',
  
  // CBT Practice hero
  cbtHero: '/assets/images/heroes/cbt-hero.jpeg',
  
  // About page hero (using contact-hero as fallback since about-hero is missing)
  aboutHero: '/assets/images/heroes/contact-hero.jpg',
  
  // Contact page hero
  contactHero: '/assets/images/heroes/contact-hero.jpg'
}

// Team Images
export const teamImages = {
  // CEO
  ceo: '/assets/images/team/ceo.jpg',
  
  // CTO
  cto: '/assets/images/team/cto.jpg',
  
  // Head of Education
  headOfEducation: '/assets/images/team/head-education.jpeg',
  
  // Lead Developer
  leadDeveloper: '/assets/images/team/lead-developer.jpeg'
}

// Background Images
export const backgroundImages = {
  // Gradient backgrounds
  gradientBlue: '/assets/images/backgrounds/gradient-blue.jpg',
  gradientPurple: '/assets/images/backgrounds/gradient-purple.jpeg',
  
  // Pattern backgrounds
  geometricPattern: '/assets/images/backgrounds/geometric-pattern',
  wavePattern: '/assets/images/backgrounds/wave-pattern.jpeg',
  
  // Education themed (using available images as fallbacks)
  studentsStudying: '/assets/images/backgrounds/gradient-blue.jpg',
  libraryBackground: '/assets/images/backgrounds/gradient-purple.jpeg'
}

// Videos
export const videos = {
  // Hero video
  heroVideo: '/assets/videos/hero-video.mp4',
  
  // CBT Demo
  cbtDemo: '/assets/videos/cbt-demo.mp4',
  
  // Platform overview
  platformOverview: '/assets/videos/platform-overview.mp4'
}

// Placeholder images (for development)
export const placeholders = {
  hero: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  ceo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  cto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  headOfEducation: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  leadDeveloper: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  studentsStudying: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  cbtPractice: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
}

// Helper function to get image with fallback
export const getImageWithFallback = (imagePath, fallbackKey) => {
  // In production, you would check if the image exists
  // For now, return placeholder
  return placeholders[fallbackKey] || imagePath
}

// Asset paths for easy reference
export const assetPaths = {
  images: {
    heroes: '/src/assets/images/heroes/',
    team: '/src/assets/images/team/',
    backgrounds: '/src/assets/images/backgrounds/'
  },
  videos: '/src/assets/videos/'
}

export default {
  heroImages,
  teamImages,
  backgroundImages,
  videos,
  placeholders,
  getImageWithFallback,
  assetPaths
}