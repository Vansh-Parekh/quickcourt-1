'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      router.push('/')
      return
    }
    
    fetchUserProfile()
  }, [])

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
        // Update localStorage with fresh data
        localStorage.setItem('user', JSON.stringify(data.user))
      } else {
        console.error('API failed, using localStorage')
        const userData = localStorage.getItem('user')
        if (userData) {
          setUser(JSON.parse(userData))
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
      // Fallback to localStorage
      const userData = localStorage.getItem('user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading) return <div>Loading...</div>
  if (!user) return <div>No user data</div>



  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">QUICKCOURT</div>
          <div className="flex items-center space-x-6">
            <a href="/home" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/venues" className="text-gray-600 hover:text-purple-600">Venues</a>
            <a href="/booking" className="text-gray-600 hover:text-purple-600">My Bookings</a>
            <a href="/profile" className="text-purple-600 font-medium">Profile</a>
            <button 
              onClick={handleLogout}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Profile Section */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">{user.fullName}</h2>
              <p className="text-gray-600 text-sm mb-1">{user.role}</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            
            <button
              onClick={() => setActiveSection('edit')}
              className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700 transition duration-200 mb-6"
            >
              Edit Profile
            </button>

            <div className="space-y-2">
              <a 
                href="/venues" 
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-xl font-medium"
              >
                Book a Venue
              </a>
              <a 
                href="/booking" 
                className="block w-full bg-gray-500 hover:bg-gray-600 text-white text-center py-2 rounded-xl font-medium"
              >
                View Bookings
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.fullName}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  defaultValue={user.role}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  disabled
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}