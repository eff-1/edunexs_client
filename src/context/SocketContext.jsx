import { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useAuth } from './AuthContext'

const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { user, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated && user) {
      // TODO: Replace with your actual backend URL
      const newSocket = io(import.meta.env.VITE_API_URL || 'http://localhost:5000', {
        auth: {
          userId: user._id,
          username: user.name
        }
      })

      newSocket.on('connect', () => {
        console.log('Connected to server')
        setSocket(newSocket)
      })

      newSocket.on('onlineUsers', (users) => {
        setOnlineUsers(users)
      })

      newSocket.on('disconnect', () => {
        console.log('Disconnected from server')
      })

      return () => {
        newSocket.close()
        setSocket(null)
      }
    }
  }, [isAuthenticated, user])

  const joinCourseRoom = (courseId) => {
    if (socket) {
      socket.emit('joinCourse', courseId)
    }
  }

  const leaveCourseRoom = (courseId) => {
    if (socket) {
      socket.emit('leaveCourse', courseId)
    }
  }

  const sendMessage = (courseId, message) => {
    if (socket) {
      socket.emit('sendMessage', { courseId, message })
    }
  }

  const value = {
    socket,
    onlineUsers,
    joinCourseRoom,
    leaveCourseRoom,
    sendMessage
  }

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
  const context = useContext(SocketContext)
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider')
  }
  return context
}