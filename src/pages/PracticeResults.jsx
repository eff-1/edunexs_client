import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { updatePerformanceAfterSession } from '../utils/performanceTracker'
import { 
  Trophy, 
  Target, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  BarChart3,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Home,
  BookOpen,
  Brain,
  Zap,
  Award,
  Eye,
  EyeOff,
  Users
} from 'lucide-react'
import CustomSelect from '../components/ui/CustomSelect'

const PracticeResults = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [showAnswers, setShowAnswers] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('all') // all, correct, wrong, skipped

  const { results, examCode, department, subjects, isMockSession } = location.state || {}

  // Early return if no results
  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No results found
          </h2>
          <Link to="/practice" className="btn-primary">
            Start New Practice
          </Link>
        </div>
      </div>
    )
  }

  // Destructure results first
  const {
    score,
    correctAnswers,
    wrongAnswers,
    skippedQuestions,
    totalTimeSpent,
    performance,
    results: questionResults
  } = results

  useEffect(() => {
    // Update performance tracking
    const sessionResults = {
      examCode,
      department,
      subjects,
      score,
      correctAnswers,
      wrongAnswers,
      skippedQuestions,
      totalQuestions: correctAnswers + wrongAnswers + skippedQuestions,
      timeSpent: totalTimeSpent,
      topicResults: questionResults.map(result => ({
        topic: result.topic,
        isCorrect: result.isCorrect
      }))
    }
    
    console.log('Updating performance with:', sessionResults)
    const updatedData = updatePerformanceAfterSession(sessionResults)
    console.log('Updated performance data:', updatedData)
    
    // Force dashboard refresh by dispatching a custom event
    window.dispatchEvent(new CustomEvent('performanceUpdated', { detail: updatedData }))
    
    toast.success('Performance updated! Check your dashboard for progress.')
  }, [results, navigate, examCode, department, subjects, score, correctAnswers, wrongAnswers, skippedQuestions, totalTimeSpent, questionResults])

  const totalQuestions = correctAnswers + wrongAnswers + skippedQuestions
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const timePerQuestion = totalQuestions > 0 ? Math.round(totalTimeSpent / totalQuestions) : 0

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
    if (score >= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  }

  const getPerformanceMessage = (score) => {
    if (score >= 90) return { message: "Outstanding! You're ready for the real exam!", icon: <Trophy className="h-5 w-5" /> }
    if (score >= 80) return { message: "Excellent work! Keep practicing to maintain this level.", icon: <Award className="h-5 w-5" /> }
    if (score >= 70) return { message: "Good job! A few more practice sessions will boost your confidence.", icon: <Target className="h-5 w-5" /> }
    if (score >= 60) return { message: "You're making progress! Focus on your weak areas.", icon: <TrendingUp className="h-5 w-5" /> }
    if (score >= 50) return { message: "Keep practicing! You're building a solid foundation.", icon: <Brain className="h-5 w-5" /> }
    return { message: "Don't give up! Every practice session makes you stronger.", icon: <Zap className="h-5 w-5" /> }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const filteredResults = questionResults.filter(result => {
    if (selectedFilter === 'correct') return result.isCorrect
    if (selectedFilter === 'wrong') return !result.isCorrect && result.userAnswer
    if (selectedFilter === 'skipped') return !result.userAnswer
    return true
  })

  const performanceMsg = getPerformanceMessage(score)

  // Analyze performance by topic
  const topicAnalysis = questionResults.reduce((acc, result) => {
    const topic = result.topic
    if (!acc[topic]) {
      acc[topic] = { correct: 0, total: 0, accuracy: 0 }
    }
    acc[topic].total++
    if (result.isCorrect) {
      acc[topic].correct++
    }
    acc[topic].accuracy = Math.round((acc[topic].correct / acc[topic].total) * 100)
    return acc
  }, {})

  const topicStats = Object.entries(topicAnalysis)
    .map(([topic, stats]) => ({ topic, ...stats }))
    .sort((a, b) => b.accuracy - a.accuracy)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Practice Results
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {examCode} - {department} • {subjects.join(', ')}
          </p>
          {isMockSession && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg inline-block">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                📝 This was a demo session with sample questions
              </p>
            </div>
          )}
        </div>

        {/* Overall Score Card */}
        <div className={`card p-8 mb-8 border-2 ${getScoreBg(score)}`}>
          <div className="text-center">
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
              {score}%
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className={getScoreColor(score)}>
                {performanceMsg.icon}
              </div>
              <span className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
                {performanceMsg.message}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{correctAnswers}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{wrongAnswers}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Wrong</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{skippedQuestions}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Skipped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{formatTime(totalTimeSpent)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Topic Performance */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Performance by Topic
              </h2>
              <div className="space-y-4">
                {topicStats.map(({ topic, correct, total, accuracy }) => (
                  <div key={topic} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {topic}
                        </span>
                        <span className={`text-sm font-semibold ${
                          accuracy >= 80 ? 'text-green-500' :
                          accuracy >= 60 ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {accuracy}% ({correct}/{total})
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            accuracy >= 80 ? 'bg-green-500' :
                            accuracy >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Question Review */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Question Review
                </h2>
                <div className="flex items-center space-x-4">
                  <CustomSelect
                    value={selectedFilter}
                    onChange={setSelectedFilter}
                    options={[
                      { value: 'all', label: `All Questions (${questionResults.length})` },
                      { value: 'correct', label: `Correct (${correctAnswers})` },
                      { value: 'wrong', label: `Wrong (${wrongAnswers})` },
                      { value: 'skipped', label: `Skipped (${skippedQuestions})` }
                    ]}
                    className="min-w-[200px]"
                  />
                  <button
                    onClick={() => setShowAnswers(!showAnswers)}
                    className="btn-outline text-sm"
                  >
                    {showAnswers ? (
                      <>
                        <EyeOff className="h-4 w-4 mr-2" />
                        Hide Answers
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        Show Answers
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredResults.map((result, index) => (
                  <div key={result.questionId} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm font-medium">
                          Q{questionResults.findIndex(q => q.questionId === result.questionId) + 1}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {result.topic}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {result.userAnswer ? (
                          result.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-gray-900 dark:text-white font-medium">
                        {result.questionText}
                      </p>
                    </div>

                    {showAnswers && (
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600 dark:text-gray-400">Your Answer:</span>
                          <span className={`font-medium ${
                            result.userAnswer 
                              ? result.isCorrect 
                                ? 'text-green-600 dark:text-green-400' 
                                : 'text-red-600 dark:text-red-400'
                              : 'text-yellow-600 dark:text-yellow-400'
                          }`}>
                            {result.userAnswer || 'Not answered'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600 dark:text-gray-400">Correct Answer:</span>
                          <span className="font-medium text-green-600 dark:text-green-400">
                            {result.correctAnswer}
                          </span>
                        </div>
                        {result.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                              <strong>Explanation:</strong> {result.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Session Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{accuracy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Time per Question:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{timePerQuestion}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Speed:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {performance?.speed || 0} q/min
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Questions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {totalQuestions}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recommendations
              </h3>
              <div className="space-y-3 text-sm">
                {score < 60 && (
                  <div className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Focus on understanding basic concepts before attempting more questions
                    </span>
                  </div>
                )}
                {timePerQuestion > 120 && (
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Work on improving your speed - aim for under 2 minutes per question
                    </span>
                  </div>
                )}
                {skippedQuestions > totalQuestions * 0.2 && (
                  <div className="flex items-start">
                    <Target className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Try to attempt all questions - educated guesses can improve your score
                    </span>
                  </div>
                )}
                <div className="flex items-start">
                  <Brain className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Review the explanations for wrong answers to learn from mistakes
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Actions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What's Next?
              </h3>
              <div className="space-y-3">
                {/* Retry Same Configuration */}
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    navigate('/practice', { 
                      state: { 
                        retryConfig: { 
                          examCode, 
                          department, 
                          subjects,
                          questionCount: Math.ceil(questionResults.length / subjects.length)
                        } 
                      } 
                    })
                  }}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry Same Test
                </button>
                
                {/* Practice Weak Topics */}
                {topicStats.filter(topic => topic.accuracy < 70).length > 0 && (
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      navigate('/practice', { 
                        state: { 
                          focusTopics: topicStats
                            .filter(topic => topic.accuracy < 70)
                            .map(topic => topic.topic)
                        } 
                      })
                    }}
                    className="btn-secondary w-full flex items-center justify-center"
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Focus on Weak Topics
                  </button>
                )}
                
                {/* New Practice Session */}
                <Link
                  to="/practice"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn-outline w-full flex items-center justify-center"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  New Practice Session
                </Link>
                
                {/* Back to Dashboard */}
                <Link
                  to="/dashboard"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn-outline w-full flex items-center justify-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
                
                {/* Additional Options */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                  <a
                    href="https://wa.me/2348128653553?text=Hello%20from%20Edunexs!%20I%20need%20a%20tutor%20now%20for%20my%20exam%20preparation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full flex items-center justify-center mb-2"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Find a Tutor
                  </a>
                  
                  {/* Share Results */}
                  <button
                    onClick={() => {
                      const shareText = `I just scored ${score}% on my ${examCode} practice test! 🎯\n\n` +
                        `📊 Results:\n` +
                        `✅ Correct: ${correctAnswers}\n` +
                        `❌ Wrong: ${wrongAnswers}\n` +
                        `⏭️ Skipped: ${skippedQuestions}\n\n` +
                        `Keep practicing with Edunexs LearnSphere! 📚`
                      
                      if (navigator.share) {
                        navigator.share({
                          title: 'My Practice Test Results',
                          text: shareText
                        })
                      } else {
                        navigator.clipboard.writeText(shareText)
                        toast.success('Results copied to clipboard!')
                      }
                    }}
                    className="btn-outline w-full flex items-center justify-center text-sm"
                  >
                    <span className="mr-2">📤</span>
                    Share Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeResults