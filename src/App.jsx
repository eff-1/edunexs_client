import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { SocketProvider } from './context/SocketContext'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Public Pages
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Contact from './pages/Contact'

// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import EmailVerification from './pages/auth/EmailVerification'

// Protected Pages
import Dashboard from './pages/Dashboard'
import TutorDashboard from './pages/TutorDashboard'
import Practice from './pages/Practice'
import PracticeSession from './pages/PracticeSession'
import PracticeResults from './pages/PracticeResults'


// Instructor Pages
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import CreateCourse from './pages/instructor/CreateCourse'
import ManageCourses from './pages/instructor/ManageCourses'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'

// Route Protection
import ProtectedRoute from './components/auth/ProtectedRoute'
import RoleRoute from './components/auth/RoleRoute'
import RoleBasedDashboard from './components/auth/RoleBasedDashboard'

// UI Components
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SocketProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/verify-email" element={<EmailVerification />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  
                  {/* Protected Routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <RoleBasedDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/student-dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/tutor-dashboard" element={
                    <ProtectedRoute>
                      <TutorDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/practice" element={
                    <ProtectedRoute>
                      <Practice />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/practice-session/:sessionId" element={
                    <ProtectedRoute>
                      <PracticeSession />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/practice-results" element={
                    <ProtectedRoute>
                      <PracticeResults />
                    </ProtectedRoute>
                  } />
                  

                  
                  {/* Instructor Routes */}
                  <Route path="/instructor" element={
                    <RoleRoute allowedRoles={['instructor', 'admin']}>
                      <InstructorDashboard />
                    </RoleRoute>
                  } />
                  
                  <Route path="/instructor/create-course" element={
                    <RoleRoute allowedRoles={['instructor', 'admin']}>
                      <CreateCourse />
                    </RoleRoute>
                  } />
                  
                  <Route path="/instructor/courses" element={
                    <RoleRoute allowedRoles={['instructor', 'admin']}>
                      <ManageCourses />
                    </RoleRoute>
                  } />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={
                    <RoleRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </RoleRoute>
                  } />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </Router>
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App