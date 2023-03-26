import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <form className="loginForm">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>

      <div className="registerLink">
        <p>Don't have an account?</p>
        <Link to='/register'>Register now</Link>
        <br></br>
        <Link to='/'>Go back to Home</Link>
      </div>
    </div>
  )
}

export default LoginPage;