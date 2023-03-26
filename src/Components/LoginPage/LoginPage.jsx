import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
const LoginPage = () => {
  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default LoginPage