import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { 
  BookOpen, 
  Clock, 
  Target, 
  Play,
  Users,
  CheckCircle,
  ArrowRight,
  Timer,
  Brain
} from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import CustomSelect from '../components/ui/CustomSelect'
import { heroImages } from '../assets'
import DynamicHero from '../components/ui/DynamicHero'
import { questionsDatabase } from '../data/questionsDatabase'

const Practice = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [availableExams, setAvailableExams] = useState([])
  const [selectedExam, setSelectedExam] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [questionCount, setQuestionCount] = useState(40)
  const [timeLimit, setTimeLimit] = useState(30) // minutes
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)

  // Handle retry configuration from results page
  const retryConfig = location.state?.retryConfig
  const focusTopics = location.state?.focusTopics

  useEffect(() => {
    console.log('Practice component mounted, user:', user)
    fetchAvailableExams()
  }, [user])

  const fetchAvailableExams = async () => {
    console.log('Fetching available exams...')
    
    // Always load mock data first for immediate display
    const mockExams = [
      {
        code: 'JAMB',
        name: 'Joint Admissions and Matriculation Board',
        description: 'University entrance examination for Nigeria',
        departments: [
          {
            name: 'Science',
            subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
          },
          {
            name: 'Commercial',
            subjects: ['Mathematics', 'Economics', 'Accounting', 'Business Studies']
          },
          {
            name: 'Arts',
            subjects: ['Literature in English', 'Government', 'History', 'Geography']
          }
        ]
      },
      {
        code: 'WAEC',
        name: 'West African Examinations Council',
        description: 'Senior Secondary Certificate Examination',
        departments: [
          {
            name: 'Science',
            subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics']
          },
          {
            name: 'Commercial',
            subjects: ['Mathematics', 'Economics', 'Accounting', 'Commerce', 'Business Studies']
          },
          {
            name: 'Arts',
            subjects: ['English Language', 'Literature in English', 'Government', 'History', 'Geography']
          }
        ]
      },
      {
        code: 'SAT',
        name: 'Scholastic Assessment Test',
        description: 'College admission test for US universities',
        departments: [
          {
            name: 'General',
            subjects: ['Mathematics', 'English Language', 'Reading Comprehension', 'Writing']
          }
        ]
      },
      {
        code: 'ACT',
        name: 'American College Testing',
        description: 'College readiness assessment',
        departments: [
          {
            name: 'General',
            subjects: ['Mathematics', 'English Language', 'Reading', 'Science']
          }
        ]
      }
    ]

    setAvailableExams(mockExams)
    setLoading(false)

    // Set default selections if user has target exams
    if (user?.targetExams && user.targetExams.length > 0) {
      const userExam = user.targetExams[0].examCode
      const exam = mockExams.find(e => e.code === userExam)
      if (exam) {
        setSelectedExam(userExam)
        if (exam.departments.length > 0) {
          setSelectedDepartment(exam.departments[0].name)
          setSelectedSubjects(exam.departments[0].subjects.slice(0, 4)) // Default to first 4 subjects
        }
      }
    }

    // Try to fetch from API in background
    try {
      const response = await axios.get('/api/exams')
      if (response.data.success) {
        setAvailableExams(response.data.data)
      }
    } catch (error) {
      console.log('API not available, using mock data')
    }
  }

  const handleExamChange = (examCode) => {
    setSelectedExam(examCode)
    setSelectedDepartment('')
    setSelectedSubjects([])
    
    const exam = availableExams.find(e => e.code === examCode)
    if (exam && exam.departments.length > 0) {
      setSelectedDepartment(exam.departments[0].name)
    }
  }

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department)
    setSelectedSubjects([])
  }

  const handleSubjectToggle = (subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  const startPractice = async () => {
    if (selectedSubjects.length === 0) {
      toast.error('Please select at least one subject')
      return
    }

    setStarting(true)

    try {
      console.log('Starting practice session...')
      console.log('Selected subjects:', selectedSubjects)
      console.log('Question count:', questionCount)
      console.log('Time limit:', timeLimit)

      // Calculate questions per subject to get exact total
      const questionsPerSubject = Math.floor(questionCount / selectedSubjects.length)
      const remainingQuestions = questionCount % selectedSubjects.length

      console.log(`Total requested: ${questionCount}, Subjects: ${selectedSubjects.length}`)
      console.log(`Questions per subject: ${questionsPerSubject}, Remaining: ${remainingQuestions}`)

      const mockQuestions = generateMockQuestions(selectedSubjects, questionsPerSubject, remainingQuestions)

      const mockSessionId = 'mock-' + Date.now()

      console.log('Generated questions:', mockQuestions.length)
      console.log('Navigating to practice session...')

      navigate(`/practice-session/${mockSessionId}`, {
        state: {
          questions: mockQuestions,
          timeLimit: timeLimit * 60, // Convert to seconds
          totalQuestions: mockQuestions.length,
          examCode: selectedExam,
          department: selectedDepartment,
          subjects: selectedSubjects,
          isMockSession: true
        }
      })
    } catch (error) {
      console.error('Error starting practice:', error)
      toast.error('Failed to start practice session. Please try again.')
    } finally {
      setStarting(false)
    }
  }

  // Generate mock questions with subject-by-subject progression
  const generateMockQuestions = (subjects, questionsPerSubject, remainingQuestions = 0) => {
    console.log('Generating mock questions for subjects:', subjects, 'questions per subject:', questionsPerSubject, 'remaining:', remainingQuestions)

    const allQuestions = []

    // Generate questions subject by subject (not mixed)
    subjects.forEach((subject, subjectIndex) => {
      // Add extra question to first few subjects if there are remaining questions
      const questionsForThisSubject = questionsPerSubject + (subjectIndex < remainingQuestions ? 1 : 0)

      console.log(`Generating ${questionsForThisSubject} questions for ${subject}`)

      // Get questions from database for this subject
      const subjectQuestions = getQuestionsForSubject(subject, questionsForThisSubject)

      // Add subject section header info
      subjectQuestions.forEach((question, questionIndex) => {
        question.subjectIndex = subjectIndex
        question.questionInSubject = questionIndex + 1
        question.totalInSubject = questionsForThisSubject
        question.globalIndex = allQuestions.length
      })

      allQuestions.push(...subjectQuestions)
      console.log(`Added ${subjectQuestions.length} questions for ${subject}. Total so far: ${allQuestions.length}`)
    })

    console.log('Total mock questions generated:', allQuestions.length)
    console.log('Question distribution:', subjects.map(subject => 
      `${subject}: ${allQuestions.filter(q => q.subject === subject).length}`
    ).join(', '))

    return allQuestions
  }

  // Helper function to get questions for a specific subject
  const getQuestionsForSubject = (subject, count) => {
    console.log(`Getting ${count} questions for ${subject}`)
    console.log('Available database keys:', Object.keys(questionsDatabase))

    // Map subject names to database keys based on selected exam
    const getSubjectKey = (examCode, subject) => {
      const examMappings = {
        'JAMB': {
          'Mathematics': 'JAMB-NG-Science-Mathematics',
          'Physics': 'JAMB-NG-Science-Physics', 
          'Chemistry': 'JAMB-NG-Science-Chemistry',
          'Biology': 'JAMB-NG-Science-Biology',
          'Economics': 'JAMB-NG-Commercial-Economics',
          'Accounting': 'JAMB-NG-Commercial-Accounting',
          'English Language': 'JAMB-NG-Arts-English Language',
          'Literature in English': 'JAMB-NG-Arts-Literature in English',
          'Government': 'JAMB-NG-Arts-Government',
          'History': 'JAMB-NG-Arts-Government', // Reuse Government questions
          'Geography': 'JAMB-NG-Arts-Geography'
        },
        'WAEC': {
          'Mathematics': 'WAEC-NG-Science-Mathematics',
          'Physics': 'WAEC-NG-Science-Physics',
          'Chemistry': 'WAEC-NG-Science-Chemistry',
          'Biology': 'WAEC-NG-Science-Biology',
          'English Language': 'WAEC-NG-Arts-English Language',
          'Economics': 'WAEC-NG-Commercial-Economics'
        },
        'WASSCE': {
          'Mathematics': 'WASSCE-GH-Science-Mathematics',
          'Physics': 'WASSCE-GH-Science-Physics',
          'Chemistry': 'WASSCE-GH-Science-Chemistry',
          'Biology': 'WASSCE-GH-Science-Biology',
          'English Language': 'WASSCE-GH-Arts-English Language'
        },
        'SAT': {
          'Mathematics': 'SAT-US-General-Mathematics',
          'English Language': 'SAT-US-General-English Language',
          'Reading Comprehension': 'SAT-US-General-Reading Comprehension',
          'Writing': 'SAT-US-General-Writing'
        },
        'ACT': {
          'Mathematics': 'ACT-US-General-Mathematics',
          'English Language': 'ACT-US-General-English Language',
          'Reading': 'ACT-US-General-Reading',
          'Science': 'ACT-US-General-Science'
        },
        'A-Level': {
          'Mathematics': 'A-Level-UK-Science-Mathematics',
          'Physics': 'A-Level-UK-Science-Physics',
          'English Literature': 'A-Level-UK-Arts-English Literature'
        }
      }
      
      return examMappings[examCode]?.[subject] || null
    }

    // Get the correct database key
    const subjectKey = getSubjectKey(selectedExam, subject)
    console.log(`Looking for subject key: ${subjectKey} for ${subject} in ${selectedExam}`)

    // Get questions from comprehensive database
    const availableQuestions = subjectKey ? (questionsDatabase[subjectKey] || []) : []
    console.log(`Found ${availableQuestions.length} available questions for ${subject}`)

    if (availableQuestions.length === 0) {
      console.warn(`No questions found for subject: ${subject}, generating fallback questions`)
      return generateFallbackQuestions(subject, count)
    }

    // Shuffle questions to ensure randomness
    const shuffledQuestions = [...availableQuestions].sort(() => Math.random() - 0.5)

    // Take exactly the requested count (or all available if less than requested)
    const selectedQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length))

    // Add unique IDs and ensure proper structure
    const processedQuestions = selectedQuestions.map((question, index) => ({
      ...question,
      _id: question.id || `${subject.toLowerCase()}_${Date.now()}_${index}`,
      subject: subject,
      questionIndex: index + 1
    }))

    console.log(`Returning ${processedQuestions.length} questions for ${subject}`)
    return processedQuestions
  }

  // Fallback function for subjects not in database - generates REAL-looking questions
  const generateFallbackQuestions = (subject, count) => {
    console.log(`Generating ${count} fallback questions for ${subject}`)
    const fallbackQuestions = []

    // Subject-specific question templates
    const questionTemplates = {
      'Mathematics': [
        'Solve for x: {a}x + {b} = {c}',
        'Find the area of a rectangle with length {a}cm and width {b}cm',
        'What is {a}% of {b}?',
        'Simplify: {a} + {b} - {c}',
        'Find the value of x if {a}x = {b}'
      ],
      'Physics': [
        'A car travels {a}m in {b}s. What is its speed?',
        'Calculate the force when mass = {a}kg and acceleration = {b}m/s²',
        'Find the kinetic energy when mass = {a}kg and velocity = {b}m/s',
        'What is the power when work = {a}J and time = {b}s?',
        'Calculate resistance when voltage = {a}V and current = {b}A'
      ],
      'Chemistry': [
        'What is the atomic number of element with {a} protons?',
        'Balance the equation: H₂ + O₂ → H₂O',
        'Calculate molar mass of compound with {a} atoms',
        'What is the pH of a solution with [{a}] H⁺ ions?',
        'Identify the type of bond in compound {a}'
      ],
      'Biology': [
        'Which organelle is responsible for {a}?',
        'What is the function of {a} in the cell?',
        'Identify the process: {a} → {b} + energy',
        'Which system controls {a} in the body?',
        'What type of tissue is found in {a}?'
      ],
      'English Language': [
        'Choose the correct tense: "She _____ to school yesterday."',
        'Identify the figure of speech in: "{a}"',
        'What is the synonym of "{a}"?',
        'Choose the correct preposition: "The book is _____ the table."',
        'Convert to passive voice: "{a}"'
      ]
    }

    const templates = questionTemplates[subject] || questionTemplates['Mathematics']
    
    for (let i = 0; i < count; i++) {
      const template = templates[i % templates.length]
      const a = Math.floor(Math.random() * 20) + 1
      const b = Math.floor(Math.random() * 20) + 1
      const c = a + b
      
      const questionText = template
        .replace('{a}', a)
        .replace('{b}', b)
        .replace('{c}', c)
      
      fallbackQuestions.push({
        _id: `${subject.toLowerCase()}_fallback_${i + 1}`,
        subject: subject,
        questionText: questionText,
        options: [
          { label: 'A', text: `${c}` },
          { label: 'B', text: `${c + 1}` },
          { label: 'C', text: `${c - 1}` },
          { label: 'D', text: `${c + 2}` }
        ],
        correctAnswer: 'A',
        explanation: `This is a practice question for ${subject}. The correct answer demonstrates the concept being tested.`,
        topic: 'General',
        difficulty: 'medium'
      })
    }

    console.log(`Generated ${fallbackQuestions.length} fallback questions for ${subject}`)
    return fallbackQuestions
  }

  const questionCountOptions = [
    { value: 10, label: '10 Questions (Quick Practice)' },
    { value: 20, label: '20 Questions (Short Session)' },
    { value: 40, label: '40 Questions (Standard)' },
    { value: 60, label: '60 Questions (Extended)' },
    { value: 100, label: '100 Questions (Full Mock)' }
  ]

  const timeLimitOptions = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 45, label: '45 minutes' },
    { value: 60, label: '1 hour' },
    { value: 90, label: '1.5 hours' },
    { value: 120, label: '2 hours' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const selectedExamData = availableExams.find(exam => exam.code === selectedExam)
  const selectedDepartmentData = selectedExamData?.departments.find(dept => dept.name === selectedDepartment)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dynamic Hero Section */}
      <DynamicHero 
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white py-16"
        imageKey="cbtHero"
        videoKey="cbtDemo"
        interval={8000}
        mobileVideoOnly={true}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CBT Practice
              <span className="text-accent-500"> Sessions</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Practice with thousands of real exam questions. Get instant feedback, 
              track your progress, and ace your {selectedExam || 'target'} exams.
            </p>
          </div>
        </div>
      </DynamicHero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary-500" />
                Configure Your Practice Session
              </h2>

              <div className="space-y-6">
                {/* Exam Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Exam Type
                  </label>
                  <CustomSelect
                    value={selectedExam}
                    onChange={handleExamChange}
                    options={availableExams.map(exam => ({
                      value: exam.code,
                      label: `${exam.code} - ${exam.name}`
                    }))}
                    placeholder="Choose your target exam"
                  />
                  {selectedExamData && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {selectedExamData.description}
                    </p>
                  )}
                </div>

                {/* Department Selection */}
                {selectedExam && selectedExamData && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Department/Category
                    </label>
                    <CustomSelect
                      value={selectedDepartment}
                      onChange={handleDepartmentChange}
                      options={selectedExamData.departments.map(dept => ({
                        value: dept.name,
                        label: dept.name
                      }))}
                      placeholder="Choose your department"
                    />
                  </div>
                )}

                {/* Subject Selection */}
                {selectedDepartment && selectedDepartmentData && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Subjects ({selectedSubjects.length} selected)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedDepartmentData.subjects.map(subject => (
                        <label
                          key={subject}
                          className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                            selectedSubjects.includes(subject)
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedSubjects.includes(subject)}
                            onChange={() => handleSubjectToggle(subject)}
                            className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                            {subject}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question Count */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Questions
                  </label>
                  <CustomSelect
                    value={questionCount}
                    onChange={setQuestionCount}
                    options={questionCountOptions}
                    placeholder="Select question count"
                  />
                </div>

                {/* Time Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time Limit
                  </label>
                  <CustomSelect
                    value={timeLimit}
                    onChange={setTimeLimit}
                    options={timeLimitOptions}
                    placeholder="Select time limit"
                  />
                </div>
              </div>

              {selectedSubjects.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Session Summary
                    </h3>
                    <div className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                      <p>• <strong>{questionCount} questions</strong> from {selectedSubjects.length} subjects</p>
                      <p>• <strong>{timeLimit} minutes</strong> to complete</p>
                      <p>• Subjects: {selectedSubjects.join(', ')}</p>
                      <p>• Questions per subject: ~{Math.floor(questionCount / selectedSubjects.length)}</p>
                    </div>
                  </div>

                  <button
                    onClick={startPractice}
                    disabled={starting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {starting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Play className="h-5 w-5 mr-2" />
                    )}
                    {starting ? 'Starting...' : 'Start Practice Session'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Tips & Info Panel */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-primary-500" />
                Practice Benefits
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Real exam questions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Instant feedback</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Detailed explanations</span>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Timer className="h-5 w-5 mr-2 text-primary-500" />
                Practice Tips
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Start with shorter sessions to build confidence</li>
                <li>• Focus on your weakest subjects first</li>
                <li>• Time yourself to simulate real exam conditions</li>
                <li>• Review explanations after each session</li>
                <li>• Practice regularly to improve your speed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice