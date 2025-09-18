import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  TrendingUp,
  Plus,
  Eye,
  Edit,
  BarChart3
} from 'lucide-react'

const InstructorDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalEarnings: 0,
    avgRating: 0
  })
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data
  const mockStats = {
    totalCourses: 8,
    totalStudents: 1250,
    totalEarnings: 15750,
    avgRating: 4.8
  }

  const mockCourses = [
    {
      _id: '1',
      title: 'Full-Stack Web Development',
      thumbnail: 'https://via.placeholder.com/300x200/4F46E5/white?text=Web+Dev',
      enrolledStudents: 450,
      rating: { average: 4.9, count: 89 },
      price: 99,
      isPublished: true,
      createdAt: new Date('2024-01-01')
    },
    {
      _id: '2',
      title: 'Advanced React Patterns',
      thumbnail: 'https://via.placeholder.com/300x200/14B8A6/white?text=React',
      enrolledStudents: 320,
      rating: { average: 4.7, count: 65 },
      price: 79,
      isPublished: true,
      createdAt: new Date('2024-01-15')
    },
    {
      _id: '3',
      title: 'Node.js Masterclass',
      thumbnail: 'https://via.placeholder.com/300x200/F59E0B/white?text=Node.js',
      enrolledStudents: 0,
      rating: { average: 0, count: 0 },
      price: 89,
      isPublished: false,
      createdAt: new Date('2024-02-01')
    }
  ]

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setStats(mockStats)
      setCourses(mockCourses)
      setLoading(false)
    }, 1000)
  }, [])

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Instructor Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back, {user?.name}! Here's your teaching overview.
            </p>
          </div>
          <Link to="/instructor/create-course" className="btn-primary">
            <Plus className="h-5 w-5 mr-2" />
            Create Course
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Courses
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalCourses}
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalStudents.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Earnings
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg Rating
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.avgRating}⭐
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Courses
              </h2>
              <Link
                to="/instructor/courses"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course._id} className="card p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          course.isPublished
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                        }`}>
                          {course.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{course.enrolledStudents} students</span>
                        <span>${course.price}</span>
                        {course.rating.count > 0 && (
                          <span>⭐ {course.rating.average} ({course.rating.count})</span>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link
                          to={`/courses/${course._id}`}
                          className="btn-outline text-xs py-1 px-3"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Link>
                        <Link
                          to={`/instructor/courses/${course._id}/edit`}
                          className="btn-primary text-xs py-1 px-3"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link
                  to="/instructor/create-course"
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Plus className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Create New Course</span>
                  </div>
                </Link>
                <Link
                  to="/instructor/analytics"
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">View Analytics</span>
                  </div>
                </Link>
                <Link
                  to="/instructor/students"
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Manage Students</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    New student enrolled in "React Course"
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Course "Web Dev" got a 5-star review
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Published "Node.js Basics" course
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboard