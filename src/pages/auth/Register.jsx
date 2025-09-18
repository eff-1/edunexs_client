import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Globe, BookOpen, Users, UserPlus } from 'lucide-react'
import toast from 'react-hot-toast'
import CustomSelect from '../../components/ui/CustomSelect'
import api from '../../config/api'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    country: '',
    academicLevel: '',
    targetExams: [],
    specialization: '', // For tutors
    experience: '', // For tutors
    qualifications: '' // For tutors
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  // Role options
  const roleOptions = [
    { value: 'student', label: '🎓 Student - I want to practice for exams' },
    { value: 'tutor', label: '👨‍🏫 Tutor - I want to help students learn' }
  ]

  // Country and exam data
  const countries = [
    { value: 'Nigeria', label: '🇳🇬 Nigeria' },
    { value: 'Ghana', label: '🇬🇭 Ghana' },
    { value: 'United Kingdom', label: '🇬🇧 United Kingdom' },
    { value: 'United States', label: '🇺🇸 United States' }
  ]

  // Academic levels
  const academicLevels = [
    { value: 'secondary', label: '🏫 Secondary School' },
    { value: 'undergraduate', label: '🎓 Undergraduate' },
    { value: 'graduate', label: '📚 Graduate' },
    { value: 'professional', label: '💼 Professional' }
  ]

  // Tutor specializations
  const specializations = [
    { value: 'mathematics', label: '🔢 Mathematics' },
    { value: 'physics', label: '⚛️ Physics' },
    { value: 'chemistry', label: '🧪 Chemistry' },
    { value: 'biology', label: '🧬 Biology' },
    { value: 'english', label: '📝 English Language' },
    { value: 'economics', label: '💰 Economics' },
    { value: 'geography', label: '🌍 Geography' },
    { value: 'history', label: '📜 History' },
    { value: 'multiple', label: '📚 Multiple Subjects' }
  ]

  // Experience levels for tutors
  const experienceLevels = [
    { value: '0-1', label: '0-1 years' },
    { value: '1-3', label: '1-3 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ]

  const examsByCountry = {
    'Nigeria': [
      { code: 'JAMB', name: 'JAMB (Joint Admissions and Matriculation Board)', description: 'University entrance exam' },
      { code: 'WAEC', name: 'WAEC (West African Examinations Council)', description: 'Senior Secondary Certificate' },
      { code: 'NECO', name: 'NECO (National Examinations Council)', description: 'Senior Secondary Certificate' },
      { code: 'NABTEB', name: 'NABTEB (National Business and Technical Examinations Board)', description: 'Technical education' }
    ],
    'Ghana': [
      { code: 'WASSCE', name: 'WASSCE (West African Senior School Certificate)', description: 'Senior High School completion' },
      { code: 'BECE', name: 'BECE (Basic Education Certificate Examination)', description: 'Junior High School completion' }
    ],
    'United Kingdom': [
      { code: 'GCSE', name: 'GCSE (General Certificate of Secondary Education)', description: 'Ages 14-16 qualification' },
      { code: 'A-LEVEL', name: 'A-Level (Advanced Level)', description: 'Ages 16-18 qualification' },
      { code: 'BTEC', name: 'BTEC (Business and Technology Education Council)', description: 'Vocational qualification' }
    ],
    'United States': [
      { code: 'SAT', name: 'SAT (Scholastic Assessment Test)', description: 'College admission test' },
      { code: 'ACT', name: 'ACT (American College Testing)', description: 'College admission test' },
      { code: 'AP', name: 'AP (Advanced Placement)', description: 'College-level courses' }
    ]
  }

  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
      // Reset target exams when country changes
      ...(name === 'country' && { targetExams: [] })
    })
  }

  const handleExamToggle = (examCode) => {
    setFormData(prev => ({
      ...prev,
      targetExams: prev.targetExams.includes(examCode)
        ? prev.targetExams.filter(code => code !== examCode)
        : [...prev.targetExams, examCode]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    if (!formData.country) {
      toast.error('Please select your country')
      return
    }

    if (!formData.academicLevel) {
      toast.error('Please select your academic level')
      return
    }

    // Role-specific validation
    if (formData.role === 'student' && formData.targetExams.length === 0) {
      toast.error('Please select at least one target exam')
      return
    }

    if (formData.role === 'tutor') {
      if (!formData.specialization) {
        toast.error('Please select your specialization')
        return
      }
      if (!formData.experience) {
        toast.error('Please select your experience level')
        return
      }
      if (!formData.qualifications.trim()) {
        toast.error('Please enter your qualifications')
        return
      }
    }

    setLoading(true)

    try {
      // Send registration data and request email verification
      const response = await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        country: formData.country,
        academicLevel: formData.academicLevel,
        targetExams: formData.role === 'student' ? formData.targetExams.map(examCode => ({
          examCode,
          subjects: [],
          targetYear: new Date().getFullYear() + 1,
          priority: 'medium'
        })) : [],
        specialization: formData.specialization,
        experience: formData.experience,
        qualifications: formData.qualifications
      })

      if (response.data.success) {
        toast.success('Registration successful! Please check your email for verification code.')

        // Navigate to email verification page
        navigate('/verify-email', {
          state: {
            email: formData.email,
            userData: {
              name: formData.name,
              role: formData.role,
              country: formData.country,
              academicLevel: formData.academicLevel,
              targetExams: formData.targetExams,
              specialization: formData.specialization,
              experience: formData.experience,
              qualifications: formData.qualifications
            }
          }
        })
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <GraduationCap className="h-12 w-12 text-primary-500" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Join Edunexs LearnSphere
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Start your exam preparation journey today
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <UserPlus className="h-4 w-4 inline mr-1" />
                I want to join as a
              </label>
              <CustomSelect
                value={formData.role}
                onChange={(value) => setFormData({ ...formData, role: value, targetExams: [] })}
                options={roleOptions}
                placeholder="Select your role"
              />
            </div>

            {/* Country Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Globe className="h-4 w-4 inline mr-1" />
                Select Your Country
              </label>
              <CustomSelect
                value={formData.country}
                onChange={(value) => setFormData({ ...formData, country: value, targetExams: [] })}
                options={countries}
                placeholder="Choose your country"
              />
            </div>

            {/* Academic Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <GraduationCap className="h-4 w-4 inline mr-1" />
                Academic Level
              </label>
              <CustomSelect
                value={formData.academicLevel}
                onChange={(value) => setFormData({ ...formData, academicLevel: value })}
                options={academicLevels}
                placeholder="Select your academic level"
              />
            </div>

            {/* Tutor-specific fields */}
            {formData.role === 'tutor' && (
              <>
                {/* Specialization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <BookOpen className="h-4 w-4 inline mr-1" />
                    Subject Specialization
                  </label>
                  <CustomSelect
                    value={formData.specialization}
                    onChange={(value) => setFormData({ ...formData, specialization: value })}
                    options={specializations}
                    placeholder="Select your specialization"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Users className="h-4 w-4 inline mr-1" />
                    Teaching Experience
                  </label>
                  <CustomSelect
                    value={formData.experience}
                    onChange={(value) => setFormData({ ...formData, experience: value })}
                    options={experienceLevels}
                    placeholder="Select your experience level"
                  />
                </div>

                {/* Qualifications */}
                <div>
                  <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Qualifications & Certifications
                  </label>
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    rows={3}
                    value={formData.qualifications}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="List your educational qualifications, certifications, and relevant experience..."
                  />
                </div>
              </>
            )}

            {/* Target Exams for Students */}
            {formData.role === 'student' && formData.country && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <BookOpen className="h-4 w-4 inline mr-1" />
                  Select Your Target Exams
                </label>
                <div className="space-y-3">
                  {examsByCountry[formData.country]?.map(exam => (
                    <label
                      key={exam.code}
                      className="flex items-start p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.targetExams.includes(exam.code)}
                        onChange={() => handleExamToggle(exam.code)}
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mt-1"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {exam.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {exam.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {formData.targetExams.length === 0 && (
                  <p className="text-sm text-red-500 mt-2">
                    Please select at least one exam you want to prepare for
                  </p>
                )}
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-primary-500 hover:text-primary-600 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary-500 hover:text-primary-600 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <UserPlus className="h-5 w-5 mr-2" />
              )}
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            {/* Benefits */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                What you get with your account:
              </h3>
              <ul className="text-xs text-blue-600 dark:text-blue-300 space-y-1">
                <li>✓ CBT practice tests for your target exams</li>
                <li>✓ Real-time performance analytics</li>
                <li>✓ Access to expert tutors</li>
                <li>✓ Personalized study recommendations</li>
                <li>✓ Mobile-friendly practice sessions</li>
              </ul>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-primary-500 hover:text-primary-600">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register