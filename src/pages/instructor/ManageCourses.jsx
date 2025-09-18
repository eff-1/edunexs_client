import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Edit, Eye, Trash2, Plus, MoreVertical } from 'lucide-react'

const ManageCourses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock data
  const mockCourses = [
    {
      _id: '1',
      title: 'Full-Stack Web Development Masterclass',
      thumbnail: 'https://via.placeholder.com/300x200/4F46E5/white?text=Web+Dev',
      category: 'Web Development',
      level: 'Intermediate',
      price: 99,
      enrolledStudents: 450,
      rating: { average: 4.9, count: 89 },
      isPublished: true,
      isApproved: true,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-15')
    },
    {
      _id: '2',
      title: 'Advanced React Patterns',
      thumbnail: 'https://via.placeholder.com/300x200/14B8A6/white?text=React',
      category: 'Web Development',
      level: 'Advanced',
      price: 79,
      enrolledStudents: 320,
      rating: { average: 4.7, count: 65 },
      isPublished: true,
      isApproved: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-20')
    },
    {
      _id: '3',
      title: 'Node.js Masterclass',
      thumbnail: 'https://via.placeholder.com/300x200/F59E0B/white?text=Node.js',
      category: 'Web Development',
      level: 'Intermediate',
      price: 89,
      enrolledStudents: 0,
      rating: { average: 0, count: 0 },
      isPublished: false,
      isApproved: false,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(mockCourses)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'published' && course.isPublished) ||
      (statusFilter === 'draft' && !course.isPublished) ||
      (statusFilter === 'pending' && course.isPublished && !course.isApproved)
    
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (course) => {
    if (!course.isPublished) {
      return <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Draft</span>
    }
    if (!course.isApproved) {
      return <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">Pending Review</span>
    }
    return <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">Published</span>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Manage Courses
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Create, edit, and manage your course content
            </p>
          </div>
          <Link to="/instructor/create-course" className="btn-primary">
            <Plus className="h-5 w-5 mr-2" />
            Create Course
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
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
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending Review</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course._id} className="card hover:shadow-lg transition-shadow duration-300">
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(course)}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white/90 transition-colors">
                      <MoreVertical className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary-500 font-medium">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{course.enrolledStudents} students</span>
                  <span>${course.price}</span>
                  {course.rating.count > 0 && (
                    <span>⭐ {course.rating.average}</span>
                  )}
                </div>

                {/* Course Meta */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div>Level: {course.level}</div>
                  <div>Updated: {course.updatedAt.toLocaleDateString()}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/courses/${course._id}`}
                    className="flex-1 btn-outline text-center text-sm py-2"
                  >
                    <Eye className="h-4 w-4 mr-1 inline" />
                    View
                  </Link>
                  <Link
                    to={`/instructor/courses/${course._id}/edit`}
                    className="flex-1 btn-primary text-center text-sm py-2"
                  >
                    <Edit className="h-4 w-4 mr-1 inline" />
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search criteria'
                : 'You haven\'t created any courses yet'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <Link to="/instructor/create-course" className="btn-primary">
                <Plus className="h-5 w-5 mr-2" />
                Create Your First Course
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageCourses