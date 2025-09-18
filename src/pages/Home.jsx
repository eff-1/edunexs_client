import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  Star, 
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  TrendingUp,
  Target,
  Timer,
  BarChart3
} from 'lucide-react'
import { heroImages, placeholders } from '../assets'
import DynamicHero from '../components/ui/DynamicHero'

const Home = () => {
  const { isAuthenticated } = useAuth()

  const features = [
    {
      icon: <Timer className="h-8 w-8" />,
      title: "CBT Practice Tests",
      description: "Experience real exam conditions with timed practice sessions and instant feedback"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and identify areas for improvement"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Tutors",
      description: "Connect with qualified tutors specialized in your target exams"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Country Support",
      description: "Comprehensive exam preparation for Nigeria, Ghana, UK, and US students"
    }
  ]

  const stats = [
    { number: "25,000+", label: "Practice Questions" },
    { number: "500+", label: "Expert Tutors" },
    { number: "15,000+", label: "Students Prepared" },
    { number: "95%", label: "Success Rate" }
  ]

  const supportedExams = [
    {
      country: "🇳🇬 Nigeria",
      exams: ["JAMB", "WAEC", "NECO", "NABTEB"],
      color: "bg-green-500"
    },
    {
      country: "🇬🇭 Ghana", 
      exams: ["WASSCE", "BECE"],
      color: "bg-yellow-500"
    },
    {
      country: "🇬🇧 United Kingdom",
      exams: ["GCSE", "A-Level", "BTEC"],
      color: "bg-blue-500"
    },
    {
      country: "🇺🇸 United States",
      exams: ["SAT", "ACT", "AP"],
      color: "bg-red-500"
    }
  ]

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      role: "JAMB 2024 - Score: 310",
      content: "Edunexs LearnSphere helped me achieve my dream score! The CBT practice was exactly like the real exam.",
      rating: 5,
      avatar: "AO",
      exam: "JAMB"
    },
    {
      name: "Akosua Mensah",
      role: "WASSCE 2024 - 8 A's",
      content: "The analytics feature showed me exactly where I was weak. I improved my Mathematics from C to A1!",
      rating: 5,
      avatar: "AM",
      exam: "WASSCE"
    },
    {
      name: "James Wilson",
      role: "SAT 2024 - Score: 1480",
      content: "The tutor matching service connected me with an amazing instructor who helped me boost my score by 200 points.",
      rating: 5,
      avatar: "JW",
      exam: "SAT"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <DynamicHero 
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white py-20"
        imageKey="mainHero"
        videoKey="heroVideo"
        interval={8000}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ace Your 
                <span className="text-accent-500"> Exams</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Master JAMB, WAEC, NECO, WASSCE, GCSE, SAT & ACT with our CBT practice platform. 
                Get real-time analytics, connect with expert tutors, and achieve your academic goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link to="/practice" className="btn-secondary inline-flex items-center justify-center">
                    Start Practicing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <>
                    <Link to="/register" className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                      Start Free Practice
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link to="/exams" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                      Browse Exams
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-12 w-12 text-accent-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">CBT Practice Mode</h3>
                    <p className="text-gray-200">Real exam simulation</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                  <div className="flex items-center">
                    <Timer className="h-4 w-4 mr-2" />
                    <span>Timed Sessions</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    <span>Live Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Instant Feedback</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-accent-500" />
                    <span>Expert Tutors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DynamicHero>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Exams Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Supported Examinations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive preparation for major examinations across four countries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportedExams.map((country, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {country.country}
                </div>
                <div className="space-y-2">
                  {country.exams.map((exam, examIndex) => (
                    <div key={examIndex} className={`${country.color} text-white px-3 py-1 rounded-full text-sm font-medium inline-block mr-2 mb-2`}>
                      {exam}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Edunexs LearnSphere?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced features designed specifically for exam success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get started with Edunexs LearnSphere in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Choose Your Exam
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Select from JAMB, WAEC, NECO, SAT, and more examination types
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Practice with CBT
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience real exam conditions with our timed practice sessions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Track Progress
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get detailed analytics and identify areas for improvement
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Get Expert Help
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with qualified tutors when you need additional support
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/practice"
              className="btn-primary inline-flex items-center text-lg px-8 py-3"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Practicing Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real students, real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                  ))}
                  <span className="ml-2 bg-primary-100 dark:bg-primary-900 text-primary-500 px-2 py-1 rounded text-xs font-medium">
                    {testimonial.exam}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of successful students who achieved their target scores with our platform.
          </p>
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                Start Free Practice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/tutors" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Find a Tutor
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home