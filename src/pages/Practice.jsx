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
        country: 'Nigeria',
        flag: '🇳🇬',
        departments: {
          'Science': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language'],
          'Commercial': ['Mathematics', 'Economics', 'Accounting', 'Commerce', 'English Language'],
          'Art': ['Mathematics', 'Literature in English', 'Government', 'History', 'English Language', 'Geography', 'Christian Religious Studies', 'Islamic Religious Studies']
        }
      },
      {
        code: 'WAEC',
        name: 'West African Examinations Council',
        country: 'Nigeria',
        flag: '🇳🇬',
        departments: {
          'Science': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'Further Mathematics', 'Agricultural Science', 'Geography'],
          'Commercial': ['Mathematics', 'Economics', 'Accounting', 'Commerce', 'English Language', 'Business Management', 'Marketing', 'Office Practice'],
          'Art': ['Mathematics', 'Literature in English', 'Government', 'History', 'English Language', 'Geography', 'Christian Religious Studies', 'Islamic Religious Studies', 'Fine Arts', 'Music']
        }
      },
      {
        code: 'NECO',
        name: 'National Examinations Council',
        country: 'Nigeria',
        flag: '🇳🇬',
        departments: {
          'Science': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'Further Mathematics', 'Agricultural Science', 'Geography'],
          'Commercial': ['Mathematics', 'Economics', 'Accounting', 'Commerce', 'English Language', 'Business Management', 'Marketing', 'Office Practice'],
          'Art': ['Mathematics', 'Literature in English', 'Government', 'History', 'English Language', 'Geography', 'Christian Religious Studies', 'Islamic Religious Studies', 'Fine Arts']
        }
      },
      {
        code: 'WASSCE',
        name: 'West African Senior School Certificate Examination',
        country: 'Ghana',
        flag: '🇬🇭',
        departments: {
          'Science': ['Core Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'Elective Mathematics', 'Geography', 'Agricultural Science'],
          'Commercial': ['Core Mathematics', 'Economics', 'Accounting', 'Business Management', 'English Language', 'Management in Living', 'Geography'],
          'Art': ['Core Mathematics', 'Literature', 'Government', 'History', 'English Language', 'Geography', 'Christian Religious Studies', 'Islamic Studies', 'French', 'Visual Arts']
        }
      },
      {
        code: 'BECE',
        name: 'Basic Education Certificate Examination',
        country: 'Ghana',
        flag: '🇬🇭',
        departments: {
          'General': ['Mathematics', 'English Language', 'Integrated Science', 'Social Studies', 'Ghanaian Language', 'French', 'Information Communication Technology', 'Religious and Moral Education', 'Creative Arts']
        }
      },
      {
        code: 'GCSE',
        name: 'General Certificate of Secondary Education',
        country: 'United Kingdom',
        flag: '🇬🇧',
        departments: {
          'Science': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'English Literature', 'Computer Science', 'Geography'],
          'Business': ['Mathematics', 'Business Studies', 'Economics', 'Accounting', 'English Language', 'Geography', 'Psychology'],
          'Humanities': ['Mathematics', 'English Literature', 'History', 'Geography', 'English Language', 'Religious Studies', 'Philosophy', 'Art & Design', 'Modern Foreign Languages']
        }
      },
      {
        code: 'A-LEVEL',
        name: 'Advanced Level',
        country: 'United Kingdom',
        flag: '🇬🇧',
        departments: {
          'Science': ['Mathematics', 'Further Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
          'Business': ['Mathematics', 'Business Studies', 'Economics', 'Accounting', 'Psychology'],
          'Humanities': ['English Literature', 'History', 'Geography', 'Philosophy', 'Art & Design', 'Modern Foreign Languages', 'Religious Studies']
        }
      },
      {
        code: 'SAT',
        name: 'Scholastic Assessment Test',
        country: 'United States',
        flag: '🇺🇸',
        departments: {
          'General': ['Evidence-Based Reading and Writing', 'Mathematics']
        }
      },
      {
        code: 'ACT',
        name: 'American College Testing',
        country: 'United States',
        flag: '🇺🇸',
        departments: {
          'General': ['English', 'Mathematics', 'Reading', 'Science', 'Writing (Optional)']
        }
      }
    ]
    
    // Set mock data immediately
    setAvailableExams(mockExams)
    console.log('Mock exams loaded:', mockExams.length)
    
    // Handle retry configuration or auto-select
    if (retryConfig) {
      // Set up retry configuration
      setSelectedExam(retryConfig.examCode)
      setSelectedDepartment(retryConfig.department)
      setSelectedSubjects(retryConfig.subjects)
      setQuestionCount(retryConfig.questionCount || 40)
      console.log('Applied retry configuration:', retryConfig)
      toast.info('Retry configuration loaded!')
    } else if (focusTopics && focusTopics.length > 0) {
      // Set up focus topics configuration
      toast.info(`Focusing on weak topics: ${focusTopics.join(', ')}`)
    } else {
      // Auto-select user's country exams if available
      if (user?.country && mockExams.length > 0) {
        const userCountryExams = mockExams.filter(exam => exam.country === user.country)
        if (userCountryExams.length > 0) {
          setSelectedExam(userCountryExams[0].code)
          console.log('Auto-selected exam:', userCountryExams[0].code)
        } else {
          // If no country match, select first exam
          setSelectedExam(mockExams[0].code)
          console.log('Selected first exam:', mockExams[0].code)
        }
      } else {
        // If no user country, select first exam
        setSelectedExam(mockExams[0].code)
        console.log('Selected default exam:', mockExams[0].code)
      }
    }
    
    // Try to fetch real data from API (optional)
    try {
      const response = await axios.get('/api/practice/exams')
      if (response.data.data && response.data.data.length > 0) {
        setAvailableExams(response.data.data)
        console.log('Real exams loaded from API:', response.data.data.length)
        toast.success('Connected to server - real exam data loaded')
      }
    } catch (error) {
      console.log('API not available, using mock data')
      toast.info('Using demo mode - practice with sample questions')
    } finally {
      setLoading(false)
    }
  }

  const handleExamChange = (examCode) => {
    setSelectedExam(examCode)
    setSelectedDepartment('')
    setSelectedSubjects([])
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
    console.log('Starting practice with:', {
      selectedExam,
      selectedDepartment,
      selectedSubjects,
      questionCount,
      timeLimit
    })

    if (!selectedExam || !selectedDepartment || selectedSubjects.length === 0) {
      toast.error('Please select exam, department, and at least one subject')
      return
    }

    setStarting(true)
    
    // Always use mock mode for now since API might not be available
    console.log('Creating mock practice session...')
    
    // Generate questions with subject-by-subject progression
    const totalQuestions = questionCount * selectedSubjects.length
    const mockQuestions = generateMockQuestions(selectedSubjects, questionCount)
    const mockSessionId = 'mock-' + Date.now()
    
    console.log('Generated mock questions:', mockQuestions.length)
    
    toast.success('Starting practice session...')
    
    try {
      console.log('Navigating to practice session...')
      const navigationState = {
        questions: mockQuestions,
        timeLimit: timeLimit * 60,
        totalQuestions: mockQuestions.length,
        examCode: selectedExam,
        department: selectedDepartment,
        subjects: selectedSubjects,
        isMockSession: true
      }
      
      console.log('Navigation state:', navigationState)
      
      navigate(`/practice-session/${mockSessionId}`, {
        state: navigationState
      })
      
      console.log('Navigation completed successfully')
    } catch (navError) {
      console.error('Navigation error:', navError)
      toast.error('Failed to start practice session')
    }
    
    setStarting(false)
  }

  // Generate mock questions with subject-by-subject progression
  const generateMockQuestions = (subjects, questionsPerSubject) => {
    console.log('Generating mock questions for subjects:', subjects, 'questions per subject:', questionsPerSubject)
    
    const allQuestions = []
    
    // Generate questions subject by subject (not mixed)
    subjects.forEach((subject, subjectIndex) => {
      console.log(`Generating ${questionsPerSubject} questions for ${subject}`)
      
      // Get questions from database for this subject
      const subjectQuestions = getQuestionsForSubject(subject, questionsPerSubject)
      
      // Add subject section header info
      subjectQuestions.forEach((question, questionIndex) => {
        question.subjectIndex = subjectIndex
        question.questionInSubject = questionIndex + 1
        question.totalInSubject = questionsPerSubject
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
    // Comprehensive question sets for each subject
    const questionSets = {
      'Mathematics': [
        // Algebra Questions (10)
        {
          _id: 'math_001',
          questionText: 'Solve for x: 2x + 5 = 13',
          options: [
            { label: 'A', text: 'x = 3' },
            { label: 'B', text: 'x = 4' },
            { label: 'C', text: 'x = 5' },
            { label: 'D', text: 'x = 6' }
          ],
          correctAnswer: 'B',
          explanation: '2x + 5 = 13, so 2x = 8, therefore x = 4',
          subject: subject,
          topic: 'Algebra',
          timeAllocation: 90
        },
        {
          _id: 'math_002',
          questionText: 'If 3x - 7 = 2x + 5, find x',
          options: [
            { label: 'A', text: 'x = 10' },
            { label: 'B', text: 'x = 12' },
            { label: 'C', text: 'x = 14' },
            { label: 'D', text: 'x = 16' }
          ],
          correctAnswer: 'B',
          explanation: '3x - 7 = 2x + 5, so 3x - 2x = 5 + 7, therefore x = 12',
          subject: subject,
          topic: 'Algebra',
          timeAllocation: 90
        },
        {
          _id: 'math_003',
          questionText: 'Factor: x² - 9',
          options: [
            { label: 'A', text: '(x - 3)(x + 3)' },
            { label: 'B', text: '(x - 9)(x + 1)' },
            { label: 'C', text: '(x - 1)(x + 9)' },
            { label: 'D', text: 'Cannot be factored' }
          ],
          correctAnswer: 'A',
          explanation: 'This is a difference of squares: x² - 9 = x² - 3² = (x - 3)(x + 3)',
          subject: subject,
          topic: 'Algebra',
          timeAllocation: 90
        },
        {
          _id: 'math_004',
          questionText: 'Simplify: 3x + 2x - x',
          options: [
            { label: 'A', text: '4x' },
            { label: 'B', text: '5x' },
            { label: 'C', text: '6x' },
            { label: 'D', text: '2x' }
          ],
          subject: subject,
          topic: 'Algebra',
          timeAllocation: 60
        },
        {
          _id: 'math_005',
          questionText: 'If f(x) = 2x + 3, find f(5)',
          options: [
            { label: 'A', text: '10' },
            { label: 'B', text: '11' },
            { label: 'C', text: '13' },
            { label: 'D', text: '15' }
          ],
          subject: subject,
          topic: 'Algebra',
          timeAllocation: 90
        },
        // Geometry Questions (10)
        {
          _id: 'math_006',
          questionText: 'What is the area of a rectangle with length 8cm and width 5cm?',
          options: [
            { label: 'A', text: '13 cm²' },
            { label: 'B', text: '26 cm²' },
            { label: 'C', text: '40 cm²' },
            { label: 'D', text: '80 cm²' }
          ],
          subject: subject,
          topic: 'Geometry',
          timeAllocation: 60
        },
        {
          _id: 'math_007',
          questionText: 'Find the circumference of a circle with radius 7cm (π = 22/7)',
          options: [
            { label: 'A', text: '22 cm' },
            { label: 'B', text: '44 cm' },
            { label: 'C', text: '154 cm' },
            { label: 'D', text: '308 cm' }
          ],
          subject: subject,
          topic: 'Geometry',
          timeAllocation: 90
        },
        {
          _id: 'math_008',
          questionText: 'What is the area of a triangle with base 10cm and height 6cm?',
          options: [
            { label: 'A', text: '30 cm²' },
            { label: 'B', text: '60 cm²' },
            { label: 'C', text: '16 cm²' },
            { label: 'D', text: '32 cm²' }
          ],
          subject: subject,
          topic: 'Geometry',
          timeAllocation: 90
        },
        {
          _id: 'math_009',
          questionText: 'How many sides does a hexagon have?',
          options: [
            { label: 'A', text: '5' },
            { label: 'B', text: '6' },
            { label: 'C', text: '7' },
            { label: 'D', text: '8' }
          ],
          subject: subject,
          topic: 'Geometry',
          timeAllocation: 60
        },
        {
          _id: 'math_010',
          questionText: 'What is the sum of interior angles of a pentagon?',
          options: [
            { label: 'A', text: '360°' },
            { label: 'B', text: '540°' },
            { label: 'C', text: '720°' },
            { label: 'D', text: '900°' }
          ],
          subject: subject,
          topic: 'Geometry',
          timeAllocation: 90
        },
        // Statistics Questions (10)
        {
          _id: 'math_011',
          questionText: 'Find the mean of: 2, 4, 6, 8, 10',
          options: [
            { label: 'A', text: '5' },
            { label: 'B', text: '6' },
            { label: 'C', text: '7' },
            { label: 'D', text: '8' }
          ],
          subject: subject,
          topic: 'Statistics',
          timeAllocation: 60
        },
        {
          _id: 'math_012',
          questionText: 'Find the median of: 3, 7, 2, 9, 5, 1, 8',
          options: [
            { label: 'A', text: '5' },
            { label: 'B', text: '6' },
            { label: 'C', text: '7' },
            { label: 'D', text: '8' }
          ],
          subject: subject,
          topic: 'Statistics',
          timeAllocation: 90
        },
        {
          _id: 'math_013',
          questionText: 'What is the mode of: 2, 3, 3, 4, 5, 5, 5, 6?',
          options: [
            { label: 'A', text: '3' },
            { label: 'B', text: '4' },
            { label: 'C', text: '5' },
            { label: 'D', text: '6' }
          ],
          subject: subject,
          topic: 'Statistics',
          timeAllocation: 90
        },
        {
          _id: 'math_014',
          questionText: 'Find the range of: 12, 8, 15, 3, 9',
          options: [
            { label: 'A', text: '9' },
            { label: 'B', text: '12' },
            { label: 'C', text: '15' },
            { label: 'D', text: '18' }
          ],
          subject: subject,
          topic: 'Statistics',
          timeAllocation: 90
        },
        // Trigonometry Questions (10)
        {
          _id: 'math_015',
          questionText: 'What is the value of sin 30°?',
          options: [
            { label: 'A', text: '1/2' },
            { label: 'B', text: '√3/2' },
            { label: 'C', text: '1' },
            { label: 'D', text: '√2/2' }
          ],
          subject: subject,
          topic: 'Trigonometry',
          timeAllocation: 90
        },
        {
          _id: 'math_016',
          questionText: 'What is the value of cos 60°?',
          options: [
            { label: 'A', text: '1/2' },
            { label: 'B', text: '√3/2' },
            { label: 'C', text: '1' },
            { label: 'D', text: '0' }
          ],
          subject: subject,
          topic: 'Trigonometry',
          timeAllocation: 90
        },
        {
          _id: 'math_017',
          questionText: 'What is the value of tan 45°?',
          options: [
            { label: 'A', text: '0' },
            { label: 'B', text: '1' },
            { label: 'C', text: '√3' },
            { label: 'D', text: '∞' }
          ],
          subject: subject,
          topic: 'Trigonometry',
          timeAllocation: 90
        },
        {
          _id: 'math_018',
          questionText: 'If cos θ = 3/5, find sin θ (θ is acute)',
          options: [
            { label: 'A', text: '3/5' },
            { label: 'B', text: '4/5' },
            { label: 'C', text: '5/3' },
            { label: 'D', text: '5/4' }
          ],
          subject: subject,
          topic: 'Trigonometry',
          timeAllocation: 120
        }
      ],
      'Physics': [
        {
          _id: 'phys_001',
          questionText: 'What is the SI unit of force?',
          options: [
            { label: 'A', text: 'Joule' },
            { label: 'B', text: 'Newton' },
            { label: 'C', text: 'Watt' },
            { label: 'D', text: 'Pascal' }
          ],
          subject: subject,
          topic: 'Mechanics',
          timeAllocation: 60
        },
        {
          _id: 'phys_002',
          questionText: 'What is the SI unit of electric current?',
          options: [
            { label: 'A', text: 'Volt' },
            { label: 'B', text: 'Ampere' },
            { label: 'C', text: 'Ohm' },
            { label: 'D', text: 'Coulomb' }
          ],
          subject: subject,
          topic: 'Electricity',
          timeAllocation: 60
        },
        {
          _id: 'phys_003',
          questionText: 'What is the speed of light in vacuum?',
          options: [
            { label: 'A', text: '3 × 10⁶ m/s' },
            { label: 'B', text: '3 × 10⁸ m/s' },
            { label: 'C', text: '3 × 10¹⁰ m/s' },
            { label: 'D', text: '3 × 10¹² m/s' }
          ],
          subject: subject,
          topic: 'Waves and Optics',
          timeAllocation: 60
        },
        {
          _id: 'phys_004',
          questionText: 'At what temperature does water boil at standard atmospheric pressure?',
          options: [
            { label: 'A', text: '0°C' },
            { label: 'B', text: '50°C' },
            { label: 'C', text: '100°C' },
            { label: 'D', text: '273°C' }
          ],
          subject: subject,
          topic: 'Thermodynamics',
          timeAllocation: 60
        }
      ],
      'Chemistry': [
        {
          _id: 'chem_001',
          questionText: 'What is the atomic number of carbon?',
          options: [
            { label: 'A', text: '4' },
            { label: 'B', text: '6' },
            { label: 'C', text: '8' },
            { label: 'D', text: '12' }
          ],
          subject: subject,
          topic: 'Atomic Structure',
          timeAllocation: 60
        },
        {
          _id: 'chem_002',
          questionText: 'What type of bond is formed between sodium and chlorine in NaCl?',
          options: [
            { label: 'A', text: 'Covalent bond' },
            { label: 'B', text: 'Ionic bond' },
            { label: 'C', text: 'Metallic bond' },
            { label: 'D', text: 'Hydrogen bond' }
          ],
          subject: subject,
          topic: 'Chemical Bonding',
          timeAllocation: 90
        },
        {
          _id: 'chem_003',
          questionText: 'What is the pH of pure water at 25°C?',
          options: [
            { label: 'A', text: '0' },
            { label: 'B', text: '7' },
            { label: 'C', text: '14' },
            { label: 'D', text: '1' }
          ],
          subject: subject,
          topic: 'Acids and Bases',
          timeAllocation: 60
        },
        {
          _id: 'chem_004',
          questionText: 'What is the molecular formula of methane?',
          options: [
            { label: 'A', text: 'CH₂' },
            { label: 'B', text: 'CH₃' },
            { label: 'C', text: 'CH₄' },
            { label: 'D', text: 'C₂H₆' }
          ],
          subject: subject,
          topic: 'Organic Chemistry',
          timeAllocation: 60
        }
      ],
      'Biology': [
        {
          _id: 'bio_001',
          questionText: 'What is the basic unit of life?',
          options: [
            { label: 'A', text: 'Tissue' },
            { label: 'B', text: 'Organ' },
            { label: 'C', text: 'Cell' },
            { label: 'D', text: 'Organism' }
          ],
          subject: subject,
          topic: 'Cell Biology',
          timeAllocation: 60
        },
        {
          _id: 'bio_002',
          questionText: 'What does DNA stand for?',
          options: [
            { label: 'A', text: 'Deoxyribonucleic Acid' },
            { label: 'B', text: 'Dinitrogen Acid' },
            { label: 'C', text: 'Deoxyribose Acid' },
            { label: 'D', text: 'Dinucleotide Acid' }
          ],
          subject: subject,
          topic: 'Genetics',
          timeAllocation: 60
        },
        {
          _id: 'bio_003',
          questionText: 'What is a food chain?',
          options: [
            { label: 'A', text: 'A sequence of eating relationships' },
            { label: 'B', text: 'A type of plant' },
            { label: 'C', text: 'A chemical process' },
            { label: 'D', text: 'A cellular structure' }
          ],
          subject: subject,
          topic: 'Ecology',
          timeAllocation: 60
        },
        {
          _id: 'bio_004',
          questionText: 'How many chambers does the human heart have?',
          options: [
            { label: 'A', text: '2' },
            { label: 'B', text: '3' },
            { label: 'C', text: '4' },
            { label: 'D', text: '5' }
          ],
          subject: subject,
          topic: 'Human Physiology',
          timeAllocation: 60
        }
      ],
      'English Language': [
        {
          _id: 'eng_001',
          questionText: 'Choose the correct form: "She _____ to school every day."',
          options: [
            { label: 'A', text: 'go' },
            { label: 'B', text: 'goes' },
            { label: 'C', text: 'going' },
            { label: 'D', text: 'gone' }
          ],
          subject: subject,
          topic: 'Grammar',
          timeAllocation: 60
        },
        {
          _id: 'eng_002',
          questionText: 'What is the meaning of "ubiquitous"?',
          options: [
            { label: 'A', text: 'Rare' },
            { label: 'B', text: 'Present everywhere' },
            { label: 'C', text: 'Ancient' },
            { label: 'D', text: 'Mysterious' }
          ],
          subject: subject,
          topic: 'Vocabulary',
          timeAllocation: 60
        },
        {
          _id: 'eng_003',
          questionText: 'What is the purpose of a thesis statement in an essay?',
          options: [
            { label: 'A', text: 'To conclude the essay' },
            { label: 'B', text: 'To introduce the topic' },
            { label: 'C', text: 'To state the main argument' },
            { label: 'D', text: 'To provide examples' }
          ],
          subject: subject,
          topic: 'Essay Writing',
          timeAllocation: 90
        },
        {
          _id: 'eng_004',
          questionText: 'Identify the type of sentence: "Although it was raining, we went for a walk."',
          options: [
            { label: 'A', text: 'Simple sentence' },
            { label: 'B', text: 'Compound sentence' },
            { label: 'C', text: 'Complex sentence' },
            { label: 'D', text: 'Compound-complex sentence' }
          ],
          subject: subject,
          topic: 'Grammar',
          timeAllocation: 90
        }
      ]
    }

    const subjectQuestions = questionSets[subject] || []
    
    // If no questions available for this subject, create generic ones
    if (subjectQuestions.length === 0) {
      const genericQuestions = []
      for (let i = 0; i < count; i++) {
        genericQuestions.push({
          _id: `generic_${subject.replace(/\s+/g, '_').toLowerCase()}_${i + 1}`,
          questionText: `${subject} Practice Question ${i + 1}: Which of the following best describes a fundamental concept in ${subject}?`,
          options: [
            { label: 'A', text: `Basic principle of ${subject} - Option A` },
            { label: 'B', text: `Advanced concept in ${subject} - Option B` },
            { label: 'C', text: `Intermediate theory of ${subject} - Option C` },
            { label: 'D', text: `Complex application in ${subject} - Option D` }
          ],
          subject: subject,
          topic: `${subject} Fundamentals`,
          timeAllocation: 90
        })
      }
      return genericQuestions
    }
    
    // Return only unique questions, no variations
    return subjectQuestions.slice(0, count)
  }

  const selectedExamData = availableExams.find(exam => exam.code === selectedExam)
  const availableDepartments = selectedExamData?.departments || {}
  const availableSubjects = selectedDepartment ? availableDepartments[selectedDepartment] || [] : []

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dynamic Hero Section */}
      <DynamicHero 
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white py-16"
        imageKey="cbtHero"
        videoKey="cbtDemo"
        interval={12000}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CBT Practice Session
          </h1>
          <p className="text-xl text-gray-100 mb-6">
            Choose your exam, department, and subjects to start practicing
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Timer className="h-4 w-4 mr-2" />
              <span>Timed Sessions</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>Real Exam Simulation</span>
            </div>
            <div className="flex items-center">
              <Brain className="h-4 w-4 mr-2" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </DynamicHero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Exam Selection */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Select Examination
              </h2>
              {availableExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableExams.map(exam => (
                    <button
                      key={exam.code}
                      onClick={() => handleExamChange(exam.code)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                        selectedExam === exam.code
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{exam.flag}</span>
                        <div className="font-bold text-lg text-gray-900 dark:text-white">
                          {exam.code}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {exam.country}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                        {exam.name}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    No exams available. Loading...
                  </p>
                  <button 
                    onClick={fetchAvailableExams}
                    className="btn-primary"
                  >
                    Retry Loading Exams
                  </button>
                </div>
              )}
            </div>

            {/* Department Selection */}
            {selectedExam && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Select Department
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.keys(availableDepartments).map(department => (
                    <button
                      key={department}
                      onClick={() => handleDepartmentChange(department)}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        selectedDepartment === department
                          ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-secondary-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {department}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {availableDepartments[department]?.length || 0} subjects
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subject Selection */}
            {selectedDepartment && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  Select Subjects
                </h2>
                <div className="space-y-3">
                  {availableSubjects.map(subject => (
                    <label
                      key={subject}
                      className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject)}
                        onChange={() => handleSubjectToggle(subject)}
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-gray-900 dark:text-white font-medium">
                        {subject}
                      </span>
                      {selectedSubjects.includes(subject) && (
                        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
                {selectedSubjects.length > 0 && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      ✅ {selectedSubjects.length} subject{selectedSubjects.length > 1 ? 's' : ''} selected
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Practice Settings */}
            {selectedSubjects.length > 0 && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Timer className="h-5 w-5 mr-2" />
                  Practice Settings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Questions per Subject
                    </label>
                    <CustomSelect
                      value={questionCount}
                      onChange={(value) => setQuestionCount(parseInt(value))}
                      options={[
                        { value: 10, label: '10 Questions per Subject' },
                        { value: 20, label: '20 Questions per Subject' },
                        { value: 30, label: '30 Questions per Subject' },
                        { value: 40, label: '40 Questions per Subject (Recommended)' }
                      ]}
                      placeholder="Select question count"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Total: {questionCount * selectedSubjects.length} questions
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Time Limit
                    </label>
                    <CustomSelect
                      value={timeLimit}
                      onChange={(value) => setTimeLimit(parseInt(value))}
                      options={[
                        { value: 15, label: '15 Minutes' },
                        { value: 30, label: '30 Minutes' },
                        { value: 45, label: '45 Minutes' },
                        { value: 60, label: '60 Minutes' },
                        { value: 90, label: '90 Minutes' },
                        { value: 120, label: '120 Minutes' }
                      ]}
                      placeholder="Select time limit"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      ~{Math.round(timeLimit / (questionCount * selectedSubjects.length) * 60)} seconds per question
                    </p>
                  </div>
                </div>
                
                {/* Question Distribution Preview */}
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    📊 Question Distribution
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {selectedSubjects.map((subject, index) => (
                      <div key={subject} className="flex justify-between text-blue-800 dark:text-blue-200">
                        <span>{subject}:</span>
                        <span className="font-medium">{questionCount} questions</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-blue-200 dark:border-blue-700 flex justify-between text-sm font-semibold text-blue-900 dark:text-blue-100">
                    <span>Total Questions:</span>
                    <span>{questionCount * selectedSubjects.length}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Practice Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Exam:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedExam || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Department:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedDepartment || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subjects:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedSubjects.length || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Questions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {questionCount * selectedSubjects.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Per Subject:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {questionCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Time Limit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {timeLimit} minutes
                  </span>
                </div>
              </div>

              {selectedSubjects.length > 0 && (
                <div className="space-y-3">
                  <button
                    onClick={startPractice}
                    disabled={starting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {starting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Play className="h-5 w-5 mr-2" />
                    )}
                    {starting ? 'Starting...' : 'Start Practice'}
                  </button>
                  

                </div>
              )}
            </div>

            {/* Tips */}
            <div className="card p-6 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                💡 Practice Tips
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                <li>• Start with fewer questions to build confidence</li>
                <li>• Focus on your weak subjects first</li>
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