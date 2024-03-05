import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate user input (optional)
    if (!user.name || !user.email || !user.password) {
      console.error('Please fill in all fields.')
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      if (response.ok) {
        const responseData = await response.json()
        localStorage.setItem('userId', responseData.id)
        console.log('Success: User Created.')
        navigate('/Home')
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.error)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <>
      <div>
        <div className={`container ${Style.contain}`}>
          <h1 className="m-3">Read reviews. Write reviews.</h1>
          <div className={`${Style.loginconainer}`}>
            <h3>Login </h3>
            <form className={`${Style.loginfix}`} onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  value={user.name}
                  required
                />
                <label className="form-label" htmlFor="name">
                  Name
                </label>
              </div>

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
                Signup
              </button>
              <p>
                AllRady have acount ? <Link to={'/'}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
