import React from 'react';
import { Link } from 'react-router-dom';
import './user-details.css';

const Login = () => {
  return (
    <section className='container'>
    <div className="login-container">
      <h2>Login</h2>
      <form className='login-form'>
        <div>
          <label>Username or Email</label>
          <input type="text" placeholder="Enter your username or email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div>
          <input type="checkbox" /> Remember Me
        </div>
        <button type="submit">
          <Link to="/user-dashboard">Login</Link>
        </button>
      </form>

      <div className="link-container">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <div className="link-container">
        <Link to="/Signup">New User? Register Here.</Link>
      </div>

    </div>
    </section>
  );
};

export default Login;
