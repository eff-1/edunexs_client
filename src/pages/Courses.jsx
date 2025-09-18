import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, Clock, Users, BookOpen } from 'lucide-react'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  // Mock data for now
  const mockCourses = [
    {
      _id: '1',
      title: 'Full-Stack Web Development',
      shortDescription: 'Learn to build modern web applications with React, Node.js, and MongoDB',
      thumbnail: 'https://via.placeholder.com/400x225/4F46E5/white?text=Web+Dev',
      instructor: { name: 'John Doe', avatar: 'JD' },
      category: 'Web Development',
      level: 'Intermediate',
      price: 99,
      rating: { average: 4.8, count: 1250 },
      totalDuration: 2400, // minutes
      enrolledStudents: ['1', '2', '3']
    },
    {
      _id: '2',
      title: 'React for Beginners',
      shortDescription: 'Master React fundamentals and build your first interactive applications',
      thumbnail: 'https://via.placeholder.com/400x225/14B8A6/white?text=React',
      instructor: { name: 'Jane Smith', avatar: 'JS' },
      category: 'Web Development',
      level: 'Beginner',
      price: 79,
      rating: { average: 4.9, count: 890 },
      totalDuration: 1800,
      enrolledStudents: ['1', '2']
    },
    {
      _id: '3',
      title: 'Data Science with Python',
      shortDescription: 'Analyze data and build machine learning models with Python',
      thumbnail: 'https://via.placeholder.com/400x225/F59E0B/white?text=Data+Science',
      instructor: { name: 'Dr. Mike Johnson', avatar: 'MJ' },
      category: 'Data Science',
      level: 'Advanced',
      price: 149,
      rating: { average: 4.7, count: 567 },
      totalDuration: 3600,
      enrolledStudents: ['1']
    }
  ]

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Design',
    'Business',
    'Marketing'
  ]

  const levels = ['Beginner', 'Intermediate', 'Advanced']

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(mockCourses)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    return `${hours}h ${minutes % 60}m`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover world-class courses taught by industry experts. Start learning today!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="input-field"
          >
            <option value="all">All Levels</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course._id} className="card hover:shadow-lg transition-shadow duration-300">
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-medium">
                    ${course.price}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary-500 font-medium">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {course.shortDescription}
                </p>

                {/* Instructor */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                    {course.instructor.avatar}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {course.instructor.name}
                  </span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{course.rating.average}</span>
                    <span className="ml-1">({course.rating.count})</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{formatDuration(course.totalDuration)}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.enrolledStudents.length}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/courses/${course._id}`}
                  className="btn-primary w-full text-center"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria or browse all courses.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses