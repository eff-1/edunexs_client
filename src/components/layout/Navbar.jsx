import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  User, 
  BookOpen, 
  Settings, 
  LogOut,
  GraduationCap
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
  }

  const getDashboardLink = () => {
    if (!user) return '/dashboard'
    
    switch (user.role) {
      case 'admin':
        return '/admin'
      case 'instructor':
        return '/instructor'
      default:
        return '/dashboard'
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Edunexs LearnSphere
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated && (
              <Link 
                to={getDashboardLink()} 
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                Dashboard
              </Link>
            )}
            {/* Hide Practice link for tutors */}
            {(!isAuthenticated || user?.role !== 'tutor') && (
              <Link 
                to="/practice" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                Practice
              </Link>
            )}
            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{user?.name}</span>
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="py-1">
                      <Link
                        to={getDashboardLink()}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                      {/* Hide Practice link for tutors */}
                      {user?.role !== 'tutor' && (
                        <Link
                          to="/practice"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          CBT Practice
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-2"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated && (
                <Link
                  to={getDashboardLink()}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {/* Hide Practice link for tutors */}
              {(!isAuthenticated || user?.role !== 'tutor') && (
                <Link
                  to="/practice"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Practice
                </Link>
              )}
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to={getDashboardLink()}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-primary-500 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar