// Performance Tracking System for Dashboard Analytics

const STORAGE_KEY = 'edunexs_user_performance'

// Initialize performance data structure
const initializePerformance = () => ({
  practiceSessionsCompleted: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalTimeSpent: 0, // in seconds
  studyStreak: 0,
  lastStudyDate: null,
  sessionHistory: [],
  subjectPerformance: {},
  topicPerformance: {},
  averageScore: 0,
  bestScore: 0,
  weakTopics: [],
  strongTopics: []
})

// Get current performance data
export const getPerformanceData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading performance data:', error)
  }
  return initializePerformance()
}

// Save performance data
export const savePerformanceData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving performance data:', error)
  }
}

// Update performance after a practice session
export const updatePerformanceAfterSession = (sessionResults) => {
  const currentData = getPerformanceData()
  const today = new Date().toDateString()
  
  // Update basic stats
  currentData.practiceSessionsCompleted += 1
  currentData.totalQuestionsAnswered += sessionResults.totalQuestions
  currentData.totalCorrectAnswers += sessionResults.correctAnswers
  currentData.totalTimeSpent += sessionResults.timeSpent
  
  // Calculate new average score
  currentData.averageScore = Math.round(
    (currentData.totalCorrectAnswers / currentData.totalQuestionsAnswered) * 100
  )
  
  // Update best score
  if (sessionResults.score > currentData.bestScore) {
    currentData.bestScore = sessionResults.score
  }
  
  // Update study streak
  const lastStudyDate = currentData.lastStudyDate
  if (lastStudyDate === today) {
    // Same day, don't increment streak
  } else if (lastStudyDate === new Date(Date.now() - 86400000).toDateString()) {
    // Yesterday, increment streak
    currentData.studyStreak += 1
  } else if (lastStudyDate === null) {
    // First session
    currentData.studyStreak = 1
  } else {
    // Streak broken, reset to 1
    currentData.studyStreak = 1
  }
  currentData.lastStudyDate = today
  
  // Add session to history
  const sessionRecord = {
    id: Date.now(),
    date: new Date().toISOString(),
    examCode: sessionResults.examCode,
    department: sessionResults.department,
    subjects: sessionResults.subjects,
    score: sessionResults.score,
    correctAnswers: sessionResults.correctAnswers,
    wrongAnswers: sessionResults.wrongAnswers,
    skippedQuestions: sessionResults.skippedQuestions,
    totalQuestions: sessionResults.totalQuestions,
    timeSpent: sessionResults.timeSpent,
    topicResults: sessionResults.topicResults || []
  }
  
  currentData.sessionHistory.unshift(sessionRecord)
  
  // Keep only last 50 sessions
  if (currentData.sessionHistory.length > 50) {
    currentData.sessionHistory = currentData.sessionHistory.slice(0, 50)
  }
  
  // Update subject performance
  sessionResults.subjects.forEach(subject => {
    if (!currentData.subjectPerformance[subject]) {
      currentData.subjectPerformance[subject] = {
        totalSessions: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        averageScore: 0,
        bestScore: 0
      }
    }
    
    const subjectData = currentData.subjectPerformance[subject]
    const subjectQuestions = Math.ceil(sessionResults.totalQuestions / sessionResults.subjects.length)
    const subjectCorrect = Math.ceil(sessionResults.correctAnswers / sessionResults.subjects.length)
    const subjectScore = Math.round((subjectCorrect / subjectQuestions) * 100)
    
    subjectData.totalSessions += 1
    subjectData.totalQuestions += subjectQuestions
    subjectData.totalCorrect += subjectCorrect
    subjectData.averageScore = Math.round((subjectData.totalCorrect / subjectData.totalQuestions) * 100)
    
    if (subjectScore > subjectData.bestScore) {
      subjectData.bestScore = subjectScore
    }
  })
  
  // Update topic performance
  if (sessionResults.topicResults) {
    sessionResults.topicResults.forEach(topicResult => {
      if (!currentData.topicPerformance[topicResult.topic]) {
        currentData.topicPerformance[topicResult.topic] = {
          totalQuestions: 0,
          totalCorrect: 0,
          averageScore: 0
        }
      }
      
      const topicData = currentData.topicPerformance[topicResult.topic]
      topicData.totalQuestions += 1
      topicData.totalCorrect += topicResult.isCorrect ? 1 : 0
      topicData.averageScore = Math.round((topicData.totalCorrect / topicData.totalQuestions) * 100)
    })
  }
  
  // Update weak and strong topics
  const topicScores = Object.entries(currentData.topicPerformance)
    .map(([topic, data]) => ({ topic, score: data.averageScore }))
    .filter(item => item.score > 0)
  
  currentData.weakTopics = topicScores
    .filter(item => item.score < 70)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5)
    .map(item => item.topic)
  
  currentData.strongTopics = topicScores
    .filter(item => item.score >= 80)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.topic)
  
  // Save updated data
  savePerformanceData(currentData)
  
  return currentData
}

// Get recent sessions for dashboard
export const getRecentSessions = (limit = 5) => {
  const data = getPerformanceData()
  return data.sessionHistory.slice(0, limit).map(session => ({
    _id: session.id,
    examCode: session.examCode,
    subject: session.subjects.join(', '),
    score: session.score,
    totalQuestions: session.totalQuestions,
    timeSpent: session.timeSpent,
    completedAt: new Date(session.date),
    difficulty: session.score >= 80 ? 'Easy' : session.score >= 60 ? 'Medium' : 'Hard'
  }))
}

// Get performance stats for dashboard
export const getPerformanceStats = () => {
  const data = getPerformanceData()
  return {
    practiceSessionsCompleted: data.practiceSessionsCompleted,
    totalQuestionsAnswered: data.totalQuestionsAnswered,
    averageScore: data.averageScore,
    studyStreak: data.studyStreak,
    weakTopics: data.weakTopics,
    strongTopics: data.strongTopics,
    bestScore: data.bestScore,
    totalTimeSpent: data.totalTimeSpent
  }
}

// Reset performance data (for testing or user request)
export const resetPerformanceData = () => {
  const freshData = initializePerformance()
  savePerformanceData(freshData)
  return freshData
}

export default {
  getPerformanceData,
  savePerformanceData,
  updatePerformanceAfterSession,
  getRecentSessions,
  getPerformanceStats,
  resetPerformanceData
}