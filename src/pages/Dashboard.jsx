import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getPerformanceStats, getRecentSessions, getPerformanceData } from '../utils/performanceTracker'
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Play,
  Calendar,
  Target,
  Users,
  BarChart3,
  Timer,
  CheckCircle,
  AlertCircle,
  Trophy,
  Brain,
  Zap
} from 'lucide-react'
import axios from 'axios'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    practiceSessionsCompleted: 0,
    totalQuestionsAnswered: 0,
    averageScore: 0,
    studyStreak: 0,
    weakTopics: [],
    strongTopics: []
  })
  const [recentSessions, setRecentSessions] = useState([])
  const [upcomingExams, setUpcomingExams] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for exam preparation dashboard
  const mockStats = {
    practiceSessionsCompleted: 24,
    totalQuestionsAnswered: 1250,
    averageScore: 78,
    studyStreak: 7,
    weakTopics: ['Algebra', 'Organic Chemistry'],
    strongTopics: ['English Language', 'Physics']
  }

  const mockRecentSessions = [
    {
      _id: '1',
      examCode: 'JAMB',
      subject: 'Mathematics',
      score: 85,
      totalQuestions: 40,
      timeSpent: 2400, // 40 minutes
      completedAt: new Date('2024-01-15'),
      difficulty: 'Medium'
    },
    {
      _id: '2',
      examCode: 'JAMB',
      subject: 'Physics',
      score: 72,
      totalQuestions: 40,
      timeSpent: 2700, // 45 minutes
      completedAt: new Date('2024-01-14'),
      difficulty: 'Hard'
    },
    {
      _id: '3',
      examCode: 'JAMB',
      subject: 'Chemistry',
      score: 90,
      totalQuestions: 40,
      timeSpent: 2100, // 35 minutes
      completedAt: new Date('2024-01-13'),
      difficulty: 'Medium'
    }
  ]

  const mockUpcomingExams = [
    {
      examCode: 'JAMB',
      name: 'JAMB UTME 2024',
      date: new Date('2024-04-15'),
      daysLeft: 89,
      registrationDeadline: new Date('2024-03-01'),
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'English Language']
    },
    {
      examCode: 'WAEC',
      name: 'WAEC WASSCE 2024',
      date: new Date('2024-05-20'),
      daysLeft: 124,
      registrationDeadline: new Date('2024-03-15'),
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'English Language', 'Biology']
    }
  ]

  useEffect(() => {
    fetchUserStats()
  }, [])

  // Refresh stats when component becomes visible (user returns from practice)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchUserStats()
      }
    }

    const handlePerformanceUpdate = () => {
      console.log('Performance updated event received, refreshing dashboard...')
      fetchUserStats()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('performanceUpdated', handlePerformanceUpdate)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('performanceUpdated', handlePerformanceUpdate)
    }
  }, [])

  const fetchUserStats = async () => {
    try {
      // Try to fetch from API first
      const response = await axios.get('/api/practice/stats')
      const data = response.data.data
      
      setStats({
        practiceSessionsCompleted: data.practiceSessionsCompleted,
        totalQuestionsAnswered: data.totalQuestionsAnswered,
        averageScore: data.averageScore,
        studyStreak: data.studyStreak,
        weakTopics: data.weakTopics,
        strongTopics: data.strongTopics
      })
      
      setRecentSessions(data.recentSessions)
      setUpcomingExams(mockUpcomingExams)
    } catch (error) {
      console.error('API not available, using local performance tracking:', error)
      
      // Use local performance tracking
      const performanceStats = getPerformanceStats()
      const recentSessionsData = getRecentSessions(5)
      
      // Debug: Log performance data
      console.log('Performance Stats:', performanceStats)
      console.log('Recent Sessions:', recentSessionsData)
      console.log('Full Performance Data:', getPerformanceData())
      
      setStats({
        practiceSessionsCompleted: performanceStats.practiceSessionsCompleted,
        totalQuestionsAnswered: performanceStats.totalQuestionsAnswered,
        averageScore: performanceStats.averageScore,
        studyStreak: performanceStats.studyStreak,
        weakTopics: performanceStats.weakTopics,
        strongTopics: performanceStats.strongTopics
      })
      
      setRecentSessions(recentSessionsData)
      setUpcomingExams(mockUpcomingExams)
    } finally {
      setLoading(false)
    }
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes}m`
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBadge = (score) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
    return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
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
            {getGreeting()}, {user?.name}! 🎯
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ready to ace your {user?.targetExams?.map(exam => exam.examCode).join(', ')} exams?
          </p>
        </div>

        {/* Stats Cards - Compact & Engaging */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Sessions
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.practiceSessionsCompleted}
                </p>
                {stats.practiceSessionsCompleted > 0 && (
                  <p className="text-xs text-green-500 font-medium">
                    +{stats.practiceSessionsCompleted > 5 ? 'Expert' : 'Getting Started'} 🎯
                  </p>
                )}
              </div>
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Timer className="h-5 w-5 text-primary-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Questions
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalQuestionsAnswered.toLocaleString()}
                </p>
                {stats.totalQuestionsAnswered > 0 && (
                  <p className="text-xs text-blue-500 font-medium">
                    {stats.totalQuestionsAnswered > 100 ? 'Champion' : 'Building'} 💪
                  </p>
                )}
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Target className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Avg Score
                </p>
                <p className={`text-2xl font-bold ${getScoreColor(stats.averageScore)}`}>
                  {stats.averageScore}%
                </p>
                {stats.averageScore > 0 && (
                  <p className={`text-xs font-medium ${
                    stats.averageScore >= 80 ? 'text-green-500' : 
                    stats.averageScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {stats.averageScore >= 80 ? 'Excellent! 🌟' : 
                     stats.averageScore >= 60 ? 'Good Progress 📈' : 'Keep Going! 💪'}
                  </p>
                )}
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Streak
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.studyStreak}
                  <span className="text-sm text-gray-500 ml-1">days</span>
                </p>
                {stats.studyStreak > 0 && (
                  <p className="text-xs text-yellow-500 font-medium">
                    {stats.studyStreak >= 7 ? 'On Fire! 🔥' : 
                     stats.studyStreak >= 3 ? 'Great Habit! ⚡' : 'Keep Going! 🎯'}
                  </p>
                )}
              </div>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Zap className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Practice Sessions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recent Practice Sessions
              </h2>
              <Link
                to="/practice"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Start New Practice
              </Link>
            </div>

            <div className="space-y-4">
              {recentSessions.length === 0 ? (
                <div className="card p-8 text-center">
                  <div className="text-gray-400 dark:text-gray-500 mb-4">
                    <BookOpen className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      No Practice Sessions Yet
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Start your first CBT practice session to see your progress here
                    </p>
                    <Link
                      to="/practice"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="btn-primary inline-flex items-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start First Practice
                    </Link>
                  </div>
                </div>
              ) : (
                recentSessions.map((session) => (
                  <div key={session._id} className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {session.examCode} - {session.subject}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {session.totalQuestions} questions • {formatTime(session.timeSpent)} • {session.difficulty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBadge(session.score)}`}>
                        {session.score}%
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {session.completedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${session.score >= 80 ? 'bg-green-500' : session.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${session.score}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link
                      to="/practice"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="btn-outline text-sm py-1 px-3 flex items-center"
                    >
                      <Play className="h-3 w-3 mr-1" />
                      Practice Again
                    </Link>
                  </div>
                </div>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Exams */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Exams
              </h3>
              <div className="space-y-4">
                {upcomingExams.map((exam, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {exam.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exam.date.toLocaleDateString()}
                    </p>
                    <p className="text-xs text-primary-500 font-medium">
                      {exam.daysLeft} days left
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Analysis */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                Performance Analysis
              </h3>
              
              {/* Strong Topics */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Strong Topics
                </h4>
                <div className="space-y-1">
                  {stats.strongTopics.map((topic, index) => (
                    <span key={index} className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs mr-2 mb-1">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weak Topics */}
              <div>
                <h4 className="text-sm font-medium text-red-600 dark:text-red-400 mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Needs Improvement
                </h4>
                <div className="space-y-1">
                  {stats.weakTopics.map((topic, index) => (
                    <span key={index} className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs mr-2 mb-1">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link
                  to="/practice"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Start CBT Practice</span>
                  </div>
                </Link>
                <Link
                  to="/practice"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Take Mock Exam</span>
                  </div>
                </Link>
                <a
                  href="https://wa.me/2348128653553?text=Hello%20from%20Edunexs!%20I%20need%20a%20tutor%20now%20for%20my%20exam%20preparation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">Find a Tutor</span>
                  </div>
                </a>
                <Link
                  to="/dashboard"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-900 dark:text-white">View Analytics</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Study Reminder */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Daily Study Goal
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                You're on a {stats.studyStreak}-day streak! Keep it up!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Today's Progress</span>
                <span className="text-sm font-medium text-primary-500">2/3 sessions</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '66%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard