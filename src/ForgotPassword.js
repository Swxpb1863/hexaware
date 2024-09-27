import React, { useState } from 'react';
import { BrowserRouter as Route, Routes, Router, Link } from 'react-router-dom';
import Login from './Login';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the password recovery logic
    alert(`Password recovery email sent to: ${email}`);
  };

  return (

    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Link to navigate back to the Login page */}
      <div>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
