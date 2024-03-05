import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Style from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null) // Initialize userId state to null

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate user input (optional)
    if (!user.email || !user.password) {
      console.error('Please fill in all fields.')
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log('Success: You logged in.', responseData)

        // Update userId state only if the response contains a valid id
        if (responseData.id) {
          setUserId(responseData.id)
          console.log(userId)
          navigate('/') // Assuming '/dashboard' is the route after login
        } else {
          console.error('Missing user ID in response data.')
        }
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.error)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  // Check if userId is successfully fetched after login
  useEffect(() => {
    if (userId) {
      console.log('User ID:', userId) // Log for verification
    }
  }, [userId])
  return (
    <>
      <div>
        <Navbar />
        <div className={`container ${Style.contain}`}>
          <h1 className="m-3">Read reviews. Write reviews.</h1>
          <div className={`${Style.loginconainer}`}>
            <h3>Login </h3>
            <form className={`${Style.loginfix}`} onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              <button type="submit" className="btn btn-dark btn-block mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
