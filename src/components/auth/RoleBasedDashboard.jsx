import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const RoleBasedDashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      // Redirect based on user role
      switch (user.role) {
        case 'tutor':
          navigate('/tutor-dashboard', { replace: true })
          break
        case 'admin':
          navigate('/admin-dashboard', { replace: true })
          break
        case 'student':
        default:
          navigate('/student-dashboard', { replace: true })
          break
      }
    }
  }, [user, navigate])

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
    </div>
  )
}

export default RoleBasedDashboard