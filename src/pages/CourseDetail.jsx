import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  BookOpen, 
  Award,
  Download,
  MessageCircle
} from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams()
  const { user, isAuthenticated } = useAuth()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // Mock course data
  const mockCourse = {
    _id: id,
    title: 'Full-Stack Web Development Masterclass',
    description: 'Master modern web development with this comprehensive course covering React, Node.js, MongoDB, and deployment strategies. Build real-world projects and gain the skills needed to become a professional full-stack developer.',
    shortDescription: 'Learn to build modern web applications with React, Node.js, and MongoDB',
    thumbnail: 'https://via.placeholder.com/800x450/4F46E5/white?text=Full-Stack+Course',
    instructor: {
      _id: 'instructor1',
      name: 'John Doe',
      avatar: 'JD',
      bio: 'Senior Full-Stack Developer with 8+ years of experience at top tech companies.',
      rating: 4.9,
      students: 15000
    },
    category: 'Web Development',
    level: 'Intermediate',
    price: 99,
    currency: 'USD',
    language: 'English',
    rating: { average: 4.8, count: 1250 },
    totalDuration: 2400, // minutes
    enrolledStudents: ['student1', 'student2'],
    lessons: [
      {
        _id: 'lesson1',
        title: 'Introduction to Full-Stack Development',
        duration: 45,
        isPreview: true
      },
      {
        _id: 'lesson2',
        title: 'Setting Up Development Environment',
        duration: 30,
        isPreview: false
      },
      {
        _id: 'lesson3',
        title: 'React Fundamentals',
        duration: 90,
        isPreview: false
      },
      {
        _id: 'lesson4',
        title: 'Building REST APIs with Node.js',
        duration: 120,
        isPreview: false
      },
      {
        _id: 'lesson5',
        title: 'Database Design with MongoDB',
        duration: 75,
        isPreview: false
      }
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with programming concepts',
      'A computer with internet connection'
    ],
    whatYouWillLearn: [
      'Build full-stack web applications from scratch',
      'Master React for frontend development',
      'Create REST APIs with Node.js and Express',
      'Work with MongoDB databases',
      'Deploy applications to production',
      'Implement authentication and authorization'
    ],
    reviews: [
      {
        _id: 'review1',
        user: { name: 'Alice Johnson', avatar: 'AJ' },
        rating: 5,
        comment: 'Excellent course! Very comprehensive and well-structured.',
        createdAt: new Date('2024-01-15')
      },
      {
        _id: 'review2',
        user: { name: 'Bob Smith', avatar: 'BS' },
        rating: 4,
        comment: 'Great content, but could use more practical exercises.',
        createdAt: new Date('2024-01-10')
      }
    ],
    isPublished: true,
    completionCertificate: true
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourse(mockCourse)
      setIsEnrolled(user && mockCourse.enrolledStudents.includes(user._id))
      setLoading(false)
    }, 1000)
  }, [id, user])

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  const handleEnroll = () => {
    // TODO: Implement enrollment logic
    setIsEnrolled(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course not found
          </h2>
          <Link to="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-xl mb-6 text-gray-100">
                {course.description}
              </p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">{course.rating.average}</span>
                  <span className="ml-1">({course.rating.count} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.enrolledStudents.length} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{formatDuration(course.totalDuration)}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>{course.lessons.length} lessons</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {course.instructor.avatar}
                </div>
                <div>
                  <p className="font-semibold">Instructor: {course.instructor.name}</p>
                  <p className="text-gray-200 text-sm">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play className="h-12 w-12 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
              <nav className="flex space-x-8">
                {['overview', 'curriculum', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What You'll Learn */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    What you'll learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Course Curriculum
                </h3>
                <div className="space-y-4">
                  {course.lessons.map((lesson, index) => (
                    <div key={lesson._id} className="card p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{formatDuration(lesson.duration)}</span>
                              {lesson.isPreview && (
                                <span className="ml-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                                  Preview
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        {lesson.isPreview && (
                          <button className="text-primary-500 hover:text-primary-600">
                            <Play className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Student Reviews
                </h3>
                <div className="space-y-6">
                  {course.reviews.map((review) => (
                    <div key={review._id} className="card p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {review.user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white mr-4">
                              {review.user.name}
                            </h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            {review.comment}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  ${course.price}
                </div>
                <p className="text-gray-600 dark:text-gray-400">One-time payment</p>
              </div>

              {isAuthenticated ? (
                isEnrolled ? (
                  <div className="space-y-4">
                    <Link
                      to={`/courses/${course._id}/lessons/${course.lessons[0]._id}`}
                      className="btn-primary w-full text-center"
                    >
                      Continue Learning
                    </Link>
                    <Link
                      to={`/courses/${course._id}/chat`}
                      className="btn-outline w-full text-center flex items-center justify-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Join Discussion
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={handleEnroll}
                    className="btn-primary w-full"
                  >
                    Enroll Now
                  </button>
                )
              ) : (
                <div className="space-y-4">
                  <Link to="/register" className="btn-primary w-full text-center">
                    Sign Up to Enroll
                  </Link>
                  <Link to="/login" className="btn-outline w-full text-center">
                    Already have an account?
                  </Link>
                </div>
              )}

              {/* Course Features */}
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  This course includes:
                </h4>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>{formatDuration(course.totalDuration)} on-demand video</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-3" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-3" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-3" />
                    <span>Access to course discussion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail