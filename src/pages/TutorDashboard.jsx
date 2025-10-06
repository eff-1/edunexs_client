import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp,
  Calendar,
  MessageCircle,
  Star,
  Clock,
  DollarSign,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  AlertCircle,
  Brain,
  Target,
  Zap
} from 'lucide-react'

const TutorDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    totalSessions: 0,
    averageRating: 0,
    totalEarnings: 0,
    thisMonthEarnings: 0,
    completedLessons: 0,
    upcomingLessons: 0
  })
  const [students, setStudents] = useState([])
  const [recentSessions, setRecentSessions] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for tutor dashboard - Set to 0 for new tutors
  const mockStats = {
    totalStudents: 0,
    activeStudents: 0,
    totalSessions: 0,
    averageRating: 0,
    totalEarnings: 0,
    thisMonthEarnings: 0,
    completedLessons: 0,
    upcomingLessons: 0
  }

  const mockStudents = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      targetExam: 'JAMB',
      subjects: ['Mathematics', 'Physics'],
      progress: 78,
      lastSession: '2025-01-03',
      status: 'active',
      sessionsCompleted: 12
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      targetExam: 'WAEC',
      subjects: ['Chemistry', 'Biology'],
      progress: 65,
      lastSession: '2025-01-02',
      status: 'active',
      sessionsCompleted: 8
    },
    {
      _id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      targetExam: 'SAT',
      subjects: ['Mathematics'],
      progress: 92,
      lastSession: '2025-01-01',
      status: 'completed',
      sessionsCompleted: 20
    }
  ]

  const mockRecentSessions = [
    {
      _id: '1',
      studentName: 'John Doe',
      subject: 'Mathematics',
      topic: 'Quadratic Equations',
      date: '2025-01-03',
      duration: 60,
      rating: 5,
      status: 'completed'
    },
    {
      _id: '2',
      studentName: 'Jane Smith',
      subject: 'Chemistry',
      topic: 'Organic Chemistry',
      date: '2025-01-02',
      duration: 45,
      rating: 4,
      status: 'completed'
    }
  ]

  useEffect(() => {
    fetchTutorStats()
  }, [])

  const fetchTutorStats = async () => {
    try {
      // In production, fetch from API
      // const response = await axios.get('/api/tutor/stats')
      
      // For now, use mock data
      setStats(mockStats)
      setStudents(mockStudents)
      setRecentSessions(mockRecentSessions)
    } catch (error) {
      console.error('Error fetching tutor stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500'
      case 'completed': return 'text-blue-500'
      case 'inactive': return 'text-gray-500'
      default: return 'text-gray-500'
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
      case 'completed': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
      case 'inactive': return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
      default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
    }
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {getGreeting()}, {user?.name}! 👨‍🏫
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Teaching {user?.specialization} • {stats.totalStudents} students under your guidance
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <Brain className="h-8 w-8 mr-3" />
                  Tutor Control Center
                </h2>
                <p className="text-white/90">
                  Manage your students, track progress, and grow your teaching impact
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Student
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalStudents}
                </p>
                <p className="text-xs text-green-500 font-medium">
                  {stats.activeStudents} active
                </p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Sessions
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalSessions}
                </p>
                <p className="text-xs text-blue-500 font-medium">
                  {stats.completedLessons} completed
                </p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <BookOpen className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Rating
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.averageRating}
                </p>
                <p className="text-xs text-yellow-500 font-medium flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Excellent
                </p>
              </div>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Award className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  This Month
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₦{(stats.thisMonthEarnings / 1000).toFixed(0)}k
                </p>
                <p className="text-xs text-green-500 font-medium">
                  +15% from last month
                </p>
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Students List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Students
              </h2>
              <button className="text-primary-500 hover:text-primary-600 font-medium">
                View All
              </button>
            </div>

            <div className="card">
              {students.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Students Yet
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Start building your student base by adding your first student
                  </p>
                  <button className="btn-primary inline-flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add First Student
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {students.map((student) => (
                    <div key={student._id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                              {student.name}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(student.status)}`}>
                              {student.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {student.targetExam} • {student.subjects.join(', ')}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                              <span>{student.sessionsCompleted} sessions</span>
                              <span>Last: {new Date(student.lastSession).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                <div 
                                  className="bg-primary-500 h-2 rounded-full" 
                                  style={{ width: `${student.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {student.progress}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 flex items-center space-x-2">
                          <button className="p-1 text-gray-400 hover:text-primary-500">
                            <MessageCircle className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-primary-500">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions & Recent Sessions */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Profile Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Specialization</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.specialization}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Experience</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.experience}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Country</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.country}
                  </span>
                </div>
                <button className="w-full mt-4 text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center justify-center">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Sessions
              </h3>
              <div className="space-y-3">
                {recentSessions.map((session) => (
                  <div key={session._id} className="border-l-4 border-primary-500 pl-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {session.studentName}
                      </h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {session.subject} • {session.topic}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(session.date).toLocaleDateString()} • {session.duration}min
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
                  <Calendar className="h-5 w-5 text-primary-500 mr-3" />
                  <span className="text-gray-900 dark:text-white">Schedule Session</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
                  <Plus className="h-5 w-5 text-primary-500 mr-3" />
                  <span className="text-gray-900 dark:text-white">Add New Student</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
                  <BookOpen className="h-5 w-5 text-primary-500 mr-3" />
                  <span className="text-gray-900 dark:text-white">Create Lesson Plan</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary-500 mr-3" />
                  <span className="text-gray-900 dark:text-white">View Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorDashboard