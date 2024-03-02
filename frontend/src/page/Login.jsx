import React from 'react'
import Navbar from '../Component/Navbar'
import Style from './Login.module.css'
export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Make a POST request to the signup endpoint
      const response = await fetch('http://localhost:9090/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can add other headers if needed
        },
        body: JSON.stringify(user),
      })

      if (response.ok) {
        console.log('changed')
        // If the response status is OK (2xx), handle the success case
        const responseData = await response.json()
        console.log(responseData.message)
      } else {
        // If the response status is not OK, handle the error case
        const errorData = await response.json()
        console.error('Error during signup:', errorData.error)
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during signup:', error.message)
    }
  }

  return (
    <>
      <div>
        <Navbar />
        <div className={`container ${Style.contain}`}>
          <h1 className="m-3">Read reviews. Write reviews.</h1>
          <div className={`${Style.loginconainer}`}>
            <h3>Login </h3>
            <form className={`${Style.loginfix}`}>
              <div class="form-outline mb-4">
                <input type="text" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">
                  Name
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example1"
                  class="form-control"
                />
                <label class="form-label" for="form2Example1">
                  Password
                </label>
              </div>

              <button
                type="button"
                class="btn btn-dark btn-block mb-4"
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
