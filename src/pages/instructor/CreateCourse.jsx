import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, Plus, X, Save } from 'lucide-react'
import toast from 'react-hot-toast'

const CreateCourse = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [courseData, setCourseData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    level: 'Beginner',
    price: 0,
    language: 'English',
    requirements: [''],
    whatYouWillLearn: [''],
    thumbnail: null
  })
  const [lessons, setLessons] = useState([
    { title: '', content: '', duration: 0, isPreview: false }
  ])

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Design',
    'Business',
    'Marketing',
    'Photography',
    'Music',
    'Language'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setCourseData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleArrayInputChange = (field, index, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const addArrayItem = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayItem = (field, index) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const handleLessonChange = (index, field, value) => {
    setLessons(prev => prev.map((lesson, i) => 
      i === index ? { ...lesson, [field]: value } : lesson
    ))
  }

  const addLesson = () => {
    setLessons(prev => [...prev, { title: '', content: '', duration: 0, isPreview: false }])
  }

  const removeLesson = (index) => {
    setLessons(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Submit course data to API
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      toast.success('Course created successfully!')
      navigate('/instructor')
    } catch (error) {
      toast.error('Failed to create course. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create New Course
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Share your knowledge with students around the world
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Course Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={courseData.title}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter course title"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Short Description *
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  required
                  value={courseData.shortDescription}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Brief description for course cards"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={6}
                  value={courseData.description}
                  onChange={handleInputChange}
                  className="input-field resize-none"
                  placeholder="Detailed course description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  required
                  value={courseData.category}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Level *
                </label>
                <select
                  name="level"
                  required
                  value={courseData.level}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  value={courseData.price}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="0 for free course"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  value={courseData.language}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="English"
                />
              </div>
            </div>
          </div>

          {/* Course Requirements */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Course Requirements
            </h2>
            
            {courseData.requirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => handleArrayInputChange('requirements', index, e.target.value)}
                  className="input-field flex-1"
                  placeholder="Enter a requirement"
                />
                {courseData.requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('requirements', index)}
                    className="p-2 text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('requirements')}
              className="btn-outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Requirement
            </button>
          </div>

          {/* Learning Outcomes */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              What Students Will Learn
            </h2>
            
            {courseData.whatYouWillLearn.map((outcome, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <input
                  type="text"
                  value={outcome}
                  onChange={(e) => handleArrayInputChange('whatYouWillLearn', index, e.target.value)}
                  className="input-field flex-1"
                  placeholder="Enter a learning outcome"
                />
                {courseData.whatYouWillLearn.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('whatYouWillLearn', index)}
                    className="p-2 text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('whatYouWillLearn')}
              className="btn-outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Learning Outcome
            </button>
          </div>

          {/* Course Curriculum */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Course Curriculum
            </h2>
            
            {lessons.map((lesson, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Lesson {index + 1}
                  </h3>
                  {lessons.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLesson(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      value={lesson.title}
                      onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                      className="input-field"
                      placeholder="Lesson title"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <textarea
                      value={lesson.content}
                      onChange={(e) => handleLessonChange(index, 'content', e.target.value)}
                      className="input-field resize-none"
                      rows={3}
                      placeholder="Lesson content"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="number"
                      value={lesson.duration}
                      onChange={(e) => handleLessonChange(index, 'duration', parseInt(e.target.value) || 0)}
                      className="input-field"
                      placeholder="Duration (minutes)"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={lesson.isPreview}
                      onChange={(e) => handleLessonChange(index, 'isPreview', e.target.checked)}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded mr-2"
                    />
                    <label className="text-sm text-gray-700 dark:text-gray-300">
                      Free preview
                    </label>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addLesson}
              className="btn-outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Lesson
            </button>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/instructor')}
              className="btn-outline"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="h-5 w-5 mr-2" />
              )}
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCourse