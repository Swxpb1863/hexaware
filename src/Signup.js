// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './user-details.css'; // Add this line to import the CSS file

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      return;
    }
    // Send request to backend for registration
    console.log({ fullName, email, password });
    setMessage('Registration successful. Please log in.');
  };

  return (
    <section className='container'>
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          <Link to="/Login">Sign Up</Link>
        </button>
      </form>
      <div className="link-container">
        <Link to="/Login">Login</Link>
      </div>
    </div>
    </section>
  );
};

<footer>
<div className="copyright">
    <p>&copy; {new Date().getFullYear()} SkillSprouts.AI. All rights reserved.</p>
  </div>
          
</footer>

export default Signup;