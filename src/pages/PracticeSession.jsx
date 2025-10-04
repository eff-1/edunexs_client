import { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flag,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const PracticeSession = () => {
  const { sessionId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  
  const { questions, timeLimit, totalQuestions, examCode, department, subjects, isMockSession } = location.state || {}
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(timeLimit || 1800) // seconds
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set())
  const [showExplanation, setShowExplanation] = useState(false)
  
  const timerRef = useRef(null)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    if (!questions || questions.length === 0) {
      toast.error('No questions available')
      navigate('/practice')
      return
    }

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAutoSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [questions, navigate])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionId, answer) => {
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        answer,
        timeSpent: timeSpent - (prev[questionId]?.timeSpent || 0)
      }
    }))
  }

  const toggleFlag = (index) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToQuestion = (index) => {
    setCurrentQuestion(index)
    scrollToTop()
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false) // Reset explanation when moving to next question
      scrollToTop()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(false) // Reset explanation when moving to previous question
      scrollToTop()
    }
  }

  const handleAutoSubmit = async () => {
    if (isSubmitting) return
    toast.info('Time up! Auto-submitting your answers...')
    await submitSession()
  }

  const submitSession = async () => {
    setIsSubmitting(true)
    try {
      if (isMockSession) {
        // Handle mock session locally
        const mockResults = calculateMockResults()
        navigate('/practice-results', {
          state: {
            results: mockResults,
            examCode,
            department,
            subjects,
            isMockSession: true
          }
        })
        return
      }

      const response = await axios.post(`/api/practice/submit/${sessionId}`, {
        answers
      })

      // Navigate to results page
      navigate('/practice-results', {
        state: {
          results: response.data.data,
          examCode,
          department,
          subjects
        }
      })
    } catch (error) {
      console.error('Submit error:', error)
      // Fallback to mock results
      const mockResults = calculateMockResults()
      navigate('/practice-results', {
        state: {
          results: mockResults,
          examCode,
          department,
          subjects,
          isMockSession: true
        }
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateMockResults = () => {
    const totalQuestions = questions.length
    const answeredQuestions = Object.keys(answers).length
    
    // Calculate actual correct answers based on user responses
    let actualCorrectAnswers = 0
    const questionResults = questions.map(q => {
      const userAnswer = answers[q._id]?.answer || null
      // Use a simple correct answer pattern for demo (you can improve this)
      const correctAnswer = q.correctAnswer || 'B' // Default to B if no correct answer specified
      const isCorrect = userAnswer === correctAnswer
      
      if (isCorrect) {
        actualCorrectAnswers++
      }
      
      return {
        questionId: q._id,
        questionText: q.questionText,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        explanation: q.explanation || 'This is a sample explanation for the question.',
        topic: q.topic
      }
    })
    
    const wrongAnswers = answeredQuestions - actualCorrectAnswers
    const skippedQuestions = totalQuestions - answeredQuestions
    const score = totalQuestions > 0 ? Math.round((actualCorrectAnswers / totalQuestions) * 100) : 0
    
    return {
      score,
      correctAnswers: actualCorrectAnswers,
      wrongAnswers,
      skippedQuestions,
      totalTimeSpent: Math.floor((Date.now() - startTimeRef.current) / 1000),
      performance: {
        accuracy: answeredQuestions > 0 ? Math.round((actualCorrectAnswers / answeredQuestions) * 100) : 0,
        speed: totalQuestions > 0 ? Math.round((totalQuestions / (Math.floor((Date.now() - startTimeRef.current) / 1000) / 60)) * 10) / 10 : 0
      },
      results: questionResults
    }
  }

  const handleSubmit = () => {
    setShowConfirmSubmit(true)
  }

  const confirmSubmit = () => {
    setShowConfirmSubmit(false)
    submitSession()
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No questions available
          </h2>
          <button
            onClick={() => navigate('/practice')}
            className="btn-primary"
          >
            Back to Practice
          </button>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / questions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header - Mobile Optimized */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center space-x-2 md:space-x-4">
              <h1 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                {examCode}
              </h1>
              <span className="hidden sm:inline text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {department}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Timer - Always Visible */}
              <div className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm ${
                timeLeft < 300 ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 
                timeLeft < 600 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              }`}>
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-mono font-semibold">
                  {formatTime(timeLeft)}
                </span>
              </div>
              
              {/* Progress - Hidden on small screens */}
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400">
                {answeredCount}/{questions.length}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1">
            <div 
              className="bg-primary-500 h-1 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              {/* Question Header - Mobile Optimized with Subject Progress */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center justify-center mb-3">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                      {currentQuestion + 1}
                    </span>
                  </div>
                  <div className="text-center space-y-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {currentQ.subject}
                    </span>
                    {currentQ.questionInSubject && (
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        Question {currentQ.questionInSubject} of {currentQ.totalInSubject} in {currentQ.subject}
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => toggleFlag(currentQuestion)}
                  className={`p-2 rounded-lg transition-colors ml-4 ${
                    flaggedQuestions.has(currentQuestion)
                      ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400'
                  }`}
                >
                  <Flag className="h-5 w-5" />
                </button>
              </div>

              {/* Question Text */}
              <div className="mb-8">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
                  {currentQ.questionText}
                </h2>
              </div>

              {/* Options - Mobile Optimized */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option) => (
                  <label
                    key={option.label}
                    className={`block w-full p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      answers[currentQ._id]?.answer === option.label
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name={`question-${currentQ._id}`}
                        value={option.label}
                        checked={answers[currentQ._id]?.answer === option.label}
                        onChange={() => handleAnswerSelect(currentQ._id, option.label)}
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 mt-1 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-900 dark:text-white break-words">
                          <span className="font-semibold mr-2 text-primary-600">{option.label}.</span>
                          <span className="leading-relaxed">{option.text}</span>
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Show Answer Button - Mobile Optimized */}
              {!isMockSession && (
                <div className="mb-6 flex justify-center">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                  >
                    {showExplanation ? 'Hide Answer' : 'Show Answer & Explanation'}
                  </button>
                </div>
              )}

              {/* Explanation Panel */}
              {showExplanation && !isMockSession && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-700 dark:text-green-400">
                      Correct Answer: {currentQ.correctAnswer}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Explanation:</strong> {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation - Mobile Optimized */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                {/* Mobile Layout */}
                <div className="block md:hidden space-y-4">
                  {/* Progress and Submit */}
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {currentQuestion + 1} of {questions.length}
                    </span>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm px-4 py-2"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Test'}
                    </button>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                      className="flex items-center justify-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-gray-100 dark:bg-gray-700 rounded-lg min-w-[100px]"
                    >
                      <ChevronLeft className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    
                    <button
                      onClick={nextQuestion}
                      disabled={currentQuestion === questions.length - 1}
                      className="flex items-center justify-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-gray-100 dark:bg-gray-700 rounded-lg min-w-[100px]"
                    >
                      Next
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {currentQuestion + 1} of {questions.length}
                    </span>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Test'}
                    </button>
                  </div>
                  
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Question Navigator - Subject Grouped */}
          <div className="space-y-4">
            <div className="card p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Questions by Subject
              </h3>
              
              {/* Group questions by subject */}
              {subjects && subjects.map((subject, subjectIndex) => {
                const subjectQuestions = questions.filter(q => q.subject === subject)
                const startIndex = questions.findIndex(q => q.subject === subject)
                
                return (
                  <div key={subject} className="mb-4">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 px-1">
                      {subject} ({subjectQuestions.length})
                    </div>
                    <div className="grid grid-cols-8 lg:grid-cols-5 gap-1">
                      {subjectQuestions.map((question, questionIndex) => {
                        const globalIndex = startIndex + questionIndex
                        return (
                          <button
                            key={globalIndex}
                            onClick={() => goToQuestion(globalIndex)}
                            className={`w-8 h-8 rounded-md text-xs font-medium transition-colors relative ${
                              globalIndex === currentQuestion
                                ? 'bg-primary-500 text-white shadow-md'
                                : answers[question._id]
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                            }`}
                          >
                            {questionIndex + 1}
                            {flaggedQuestions.has(globalIndex) && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-100 dark:bg-green-900 rounded mr-2"></div>
                  Answered
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded mr-2"></div>
                  Not answered
                </div>
                <div className="flex items-center">
                  <Flag className="h-3 w-3 text-yellow-500 mr-2" />
                  Flagged
                </div>
              </div>
            </div>

            {/* Session Info */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Session Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Answered:</span>
                  <span className="font-medium">{answeredCount}/{questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Flagged:</span>
                  <span className="font-medium">{flaggedQuestions.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Progress:</span>
                  <span className="font-medium">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Submit Practice Session?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You have answered {answeredCount} out of {questions.length} questions. 
              Are you sure you want to submit your session?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="btn-outline flex-1"
              >
                Continue Practice
              </button>
              <button
                onClick={confirmSubmit}
                className="btn-primary flex-1"
              >
                Submit Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PracticeSession