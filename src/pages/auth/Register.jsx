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
    contactMethods: {}, // For tutors - preferred contact methods
    whatsappNumber: '', // For tutors - WhatsApp contact
    telegramHandle: '', // For tutors - Telegram contact
    instagramHandle: '', // For tutors - Instagram contact
    twitterHandle: '', // For tutors - Twitter contact
    qualifications: [{ // Enhanced for multiple qualifications
      degree: '',
      institution: '',
      year: '',
      field: '',
      grade: ''
    }],
    subjects: [], // Multiple subjects for tutors
    hourlyRate: '',
    bio: ''
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

  const { isAuthenticated, register } = useAuth()
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

  // Handle multiple qualifications for tutors
  const addQualification = () => {
    setFormData(prev => ({
      ...prev,
      qualifications: [...prev.qualifications, {
        degree: '',
        institution: '',
        year: '',
        field: '',
        grade: ''
      }]
    }))
  }

  const removeQualification = (index) => {
    setFormData(prev => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index)
    }))
  }

  const updateQualification = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      qualifications: prev.qualifications.map((qual, i) => 
        i === index ? { ...qual, [field]: value } : qual
      )
    }))
  }

  // Handle multiple subjects for tutors
  const addSubject = () => {
    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, {
        name: '',
        level: 'intermediate'
      }]
    }))
  }

  const removeSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }))
  }

  const updateSubject = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.map((subject, i) => 
        i === index ? { ...subject, [field]: value } : subject
      )
    }))
  }

  // Function to send tutor registration info to admin WhatsApp
  const sendTutorInfoToAdmin = (tutorData) => {
    const contactInfo = []
    if (tutorData.contactMethods.whatsapp && tutorData.whatsappNumber) {
      contactInfo.push(`WhatsApp: ${tutorData.whatsappNumber}`)
    }
    if (tutorData.contactMethods.telegram && tutorData.telegramHandle) {
      contactInfo.push(`Telegram: ${tutorData.telegramHandle}`)
    }
    if (tutorData.contactMethods.instagram && tutorData.instagramHandle) {
      contactInfo.push(`Instagram: ${tutorData.instagramHandle}`)
    }
    if (tutorData.contactMethods.twitter && tutorData.twitterHandle) {
      contactInfo.push(`Twitter: ${tutorData.twitterHandle}`)
    }

    const subjects = tutorData.subjects.map(s => `${s.name} (${s.level})`).join(', ')
    const qualifications = tutorData.qualifications.map(q => `${q.degree} from ${q.institution} (${q.year})`).join(', ')

    const message = `🎓 NEW TUTOR REGISTRATION 🎓

👤 Name: ${tutorData.name}
📧 Email: ${tutorData.email}
🌍 Country: ${tutorData.country}
📚 Specialization: ${tutorData.specialization}
⏰ Experience: ${tutorData.experience}

📞 Contact Methods:
${contactInfo.join('\n')}

📖 Subjects: ${subjects}

🎓 Qualifications: ${qualifications}

📝 Bio: ${tutorData.bio || 'Not provided'}

Please contact this tutor for interview and onboarding.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/2348128653553?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
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
      
      // Check if at least one contact method is selected
      const hasContactMethod = formData.contactMethods && (
        formData.contactMethods.whatsapp || 
        formData.contactMethods.telegram || 
        formData.contactMethods.instagram || 
        formData.contactMethods.twitter
      )
      
      if (!hasContactMethod) {
        toast.error('Please select at least one contact method')
        return
      }
      
      // Validate contact details based on selected methods
      if (formData.contactMethods.whatsapp && !formData.whatsappNumber) {
        toast.error('Please provide your WhatsApp number')
        return
      }
      if (formData.contactMethods.telegram && !formData.telegramHandle) {
        toast.error('Please provide your Telegram handle')
        return
      }
      if (formData.contactMethods.instagram && !formData.instagramHandle) {
        toast.error('Please provide your Instagram handle')
        return
      }
      if (formData.contactMethods.twitter && !formData.twitterHandle) {
        toast.error('Please provide your Twitter handle')
        return
      }
      
      if (formData.qualifications.length === 0 || !formData.qualifications[0].degree) {
        toast.error('Please add at least one qualification')
        return
      }
      if (formData.subjects.length === 0) {
        toast.error('Please add at least one subject you can teach')
        return
      }
    }

    setLoading(true)

    try {
      // Use AuthContext register function
      const result = await register({
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
        contactMethods: formData.contactMethods,
        whatsappNumber: formData.whatsappNumber,
        telegramHandle: formData.telegramHandle,
        instagramHandle: formData.instagramHandle,
        twitterHandle: formData.twitterHandle,
        qualifications: formData.qualifications
      })

      if (result.success) {
        // If it's a tutor registration, send info to admin WhatsApp
        if (formData.role === 'tutor') {
          sendTutorInfoToAdmin(formData)
        }
        
        toast.success('Registration successful! Welcome to Edunexs LearnSphere!')
        // AuthContext will handle token storage and authentication state
        // Small delay to ensure auth state updates before navigation
        setTimeout(() => {
          navigate('/dashboard')
        }, 100)
      } else {
        toast.error(result.message || 'Registration failed. Please try again.')
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

                {/* Contact Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Preferred Contact Method
                  </label>
                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.contactMethods?.whatsapp || false}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactMethods: {
                              ...prev.contactMethods,
                              whatsapp: e.target.checked
                            }
                          }))}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mr-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">WhatsApp</span>
                      </label>
                      {formData.contactMethods?.whatsapp && (
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          className="input-field mt-2"
                          placeholder="e.g., +234 801 234 5678"
                          required
                        />
                      )}
                    </div>

                    {/* Telegram */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.contactMethods?.telegram || false}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactMethods: {
                              ...prev.contactMethods,
                              telegram: e.target.checked
                            }
                          }))}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mr-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Telegram</span>
                      </label>
                      {formData.contactMethods?.telegram && (
                        <input
                          type="text"
                          name="telegramHandle"
                          value={formData.telegramHandle || ''}
                          onChange={handleChange}
                          className="input-field mt-2"
                          placeholder="e.g., @yourusername"
                          required
                        />
                      )}
                    </div>

                    {/* Instagram */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.contactMethods?.instagram || false}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactMethods: {
                              ...prev.contactMethods,
                              instagram: e.target.checked
                            }
                          }))}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mr-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Instagram</span>
                      </label>
                      {formData.contactMethods?.instagram && (
                        <input
                          type="text"
                          name="instagramHandle"
                          value={formData.instagramHandle || ''}
                          onChange={handleChange}
                          className="input-field mt-2"
                          placeholder="e.g., @yourusername"
                          required
                        />
                      )}
                    </div>

                    {/* Twitter/X */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.contactMethods?.twitter || false}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactMethods: {
                              ...prev.contactMethods,
                              twitter: e.target.checked
                            }
                          }))}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mr-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Twitter/X</span>
                      </label>
                      {formData.contactMethods?.twitter && (
                        <input
                          type="text"
                          name="twitterHandle"
                          value={formData.twitterHandle || ''}
                          onChange={handleChange}
                          className="input-field mt-2"
                          placeholder="e.g., @yourusername"
                          required
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Select at least one contact method. We'll use this to reach you for interview and onboarding.
                  </p>
                </div>

                {/* Subjects You Can Teach */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <BookOpen className="h-4 w-4 inline mr-1" />
                      Subjects You Can Teach
                    </label>
                    <button
                      type="button"
                      onClick={addSubject}
                      className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                    >
                      + Add Subject
                    </button>
                  </div>
                  {formData.subjects.map((subject, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <select
                        value={subject.name}
                        onChange={(e) => updateSubject(index, 'name', e.target.value)}
                        className="input-field flex-1"
                      >
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="English Language">English Language</option>
                        <option value="Economics">Economics</option>
                        <option value="Geography">Geography</option>
                        <option value="History">History</option>
                      </select>
                      <select
                        value={subject.level}
                        onChange={(e) => updateSubject(index, 'level', e.target.value)}
                        className="input-field"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                      {formData.subjects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="text-red-500 hover:text-red-600 px-2"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  {formData.subjects.length === 0 && (
                    <button
                      type="button"
                      onClick={addSubject}
                      className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
                    >
                      + Add Your First Subject
                    </button>
                  )}
                </div>

                {/* Qualifications */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <GraduationCap className="h-4 w-4 inline mr-1" />
                      Educational Qualifications
                    </label>
                    <button
                      type="button"
                      onClick={addQualification}
                      className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                    >
                      + Add Qualification
                    </button>
                  </div>
                  {formData.qualifications.map((qualification, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 mb-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Degree/Certificate"
                          value={qualification.degree}
                          onChange={(e) => updateQualification(index, 'degree', e.target.value)}
                          className="input-field"
                        />
                        <input
                          type="text"
                          placeholder="Institution"
                          value={qualification.institution}
                          onChange={(e) => updateQualification(index, 'institution', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <input
                          type="number"
                          placeholder="Year"
                          value={qualification.year}
                          onChange={(e) => updateQualification(index, 'year', e.target.value)}
                          className="input-field"
                        />
                        <input
                          type="text"
                          placeholder="Field of Study"
                          value={qualification.field}
                          onChange={(e) => updateQualification(index, 'field', e.target.value)}
                          className="input-field"
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Grade/GPA"
                            value={qualification.grade}
                            onChange={(e) => updateQualification(index, 'grade', e.target.value)}
                            className="input-field flex-1"
                          />
                          {formData.qualifications.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeQualification(index)}
                              className="text-red-500 hover:text-red-600 px-2"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Teaching Bio (Optional)
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="Tell students about your teaching style and approach..."
                  />
                </div>

                {/* Hourly Rate */}
                <div>
                  <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Hourly Rate (₦) (Optional)
                  </label>
                  <input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., 5000"
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