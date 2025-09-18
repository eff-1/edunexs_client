import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { 
  Users, 
  BookOpen, 
  Clock, 
  Star, 
  TrendingUp, 
  MessageCircle,
  Phone,
  Award,
  Calendar,
  DollarSign,
  Target,
  BarChart3,
  CheckCircle,
  AlertCircle,
  User,
  Mail
} from 'lucide-react'
import toast from 'react-hot-toast'

const TutorDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    totalSessions: 0,
    averageRating: 0,
    totalEarnings: 0,
    thisMonthEarnings: 0,
    completedSessions: 0,
    upcomingSessions: 0
  })
  const [recentStudents, setRecentStudents] = useState([])
  const [upcomingSessions, setUpcomingSessions] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration
  const mockStats = {
    totalStudents: 24,
    activeStudents: 18,
    totalSessions: 156,
    averageRating: 4.8,
    totalEarnings: 2400,
    thisMonthEarnings: 480,
    completedSessions: 142,
    upcomingSessions: 8
  }

  const mockRecentStudents = [
    {
      id: 1,
      name: 'Adebayo Johnson',
      email: 'adebayo@email.com',
      subject: 'Mathematics',
      progress: 85,
      lastSession: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Fatima Ahmed',
      email: 'fatima@email.com',
      subject: 'Physics',
      progress: 72,
      lastSession: '2024-01-14',
      status: 'active'
    },
    {
      id: 3,
      name: 'Kwame Asante',
      email: 'kwame@email.com',
      subject: 'Chemistry',
      progress: 91,
      lastSession: '2024-01-13',
      status: 'completed'
    }
  ]

  const mockUpcomingSessions = [
    {
      id: 1,
      student: 'Adebayo Johnson',
      subject: 'Mathematics',
      date: '2024-01-16',
      time: '14:00',
      duration: 60,
      type: 'JAMB Preparation'
    },
    {
      id: 2,
      student: 'Fatima Ahmed',
      subject: 'Physics',
      date: '2024-01-16',
      time: '16:00',
      duration: 90,
      type: 'WAEC Preparation'
    }
  ]

  useEffect(() => {
    fetchTutorStats()
  }, [])

  const fetchTutorStats = async () => {
    try {
      // In a real app, this would be an API call
      // const response = await axios.get('/api/tutor/stats')
      
      // For now, use mock data
      setStats(mockStats)
      setRecentStudents(mockRecentStudents)
      setUpcomingSessions(mockUpcomingSessions)
    } catch (error) {
      console.error('Failed to fetch tutor stats:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const contactHR = () => {
    const message = `Hello! I'm ${user?.name}, a tutor on Edunexs LearnSphere. I'd like to discuss opportunities for getting fully hired and recruiting students personally. My specialization is ${user?.specialization} with ${user?.experience} of experience.`
    const whatsappUrl = `https://wa.me/2348128653553?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-500'
    if (progress >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getProgressBg = (progress) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
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
            Welcome back, {user?.name}! 👨‍🏫
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your tutoring progress and help students achieve their goals
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Students
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalStudents}
                </p>
                <p className="text-xs text-green-500 font-medium">
                  {stats.activeStudents} active 🎯
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
                  {stats.completedSessions} completed ✅
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
                <p className="text-xs text-yellow-500 font-medium">
                  Excellent! ⭐
                </p>
              </div>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Earnings
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₦{stats.thisMonthEarnings.toLocaleString()}
                </p>
                <p className="text-xs text-green-500 font-medium">
                  This month 💰
                </p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Students */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Students
              </h2>
              <button
                onClick={contactHR}
                className="btn-primary text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact HR
              </button>
            </div>

            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div key={student.id} className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {student.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {student.subject} • Last session: {new Date(student.lastSession).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${getProgressColor(student.progress)}`}>
                        {student.progress}%
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Progress
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressBg(student.progress)}`}
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${student.email}`}
                        className="btn-outline text-sm py-1 px-3 flex items-center"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                      <a
                        href={`https://wa.me/2348128653553?text=Hello ${student.name}, this is your tutor from Edunexs LearnSphere. Let's schedule our next ${student.subject} session!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-1 px-3 flex items-center"
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {session.student}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {session.subject} • {session.type}
                    </p>
                    <p className="text-xs text-primary-500 font-medium">
                      {new Date(session.date).toLocaleDateString()} at {session.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutor Profile */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Your Profile
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Specialization:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user?.specialization || 'Mathematics'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user?.experience || '3-5 years'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    Active Tutor
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={contactHR}
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Contact HR Team</span>
                  </div>
                </button>
                <button className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Schedule Session</span>
                  </div>
                </button>
                <button className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">View Analytics</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Hiring Status */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Get Fully Hired! 🚀
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Ready to become a full-time tutor? Contact our HR team to discuss opportunities.
              </p>
              <button
                onClick={contactHR}
                className="btn-primary w-full text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact HR Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorDashboard