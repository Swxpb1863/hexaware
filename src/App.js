import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import UserDashboard from './Dashboard';
import './App.css';

const App = () => {
  const [flipIndex, setFlipIndex] = useState(null); // Track currently flipped card

  const handleFlip = (index) => {
    // Flip the clicked card and unflip any previously flipped card
    setFlipIndex(index === flipIndex ? null : index);
  };

  return (
    <Router>
      <div>
        <header>
          <nav>
            <h1 className="logo">SkillSprouts.AI</h1>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><Link to="/">Home</Link></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/Login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={
            <main>
              <section id="home" className="hero-section">
                <div className="hero-content">
                  <h2>Grow Your Soft Skills with SkillSprouts</h2>
                  <p>Empowering individuals to enhance communication, leadership, and teamwork skills.</p>
                  <button type='submit' className='cta-btn'><Link to="/Signup">Sign up</Link></button>
                </div>
              </section>

              <section id="about" className="about-section">
                <h2>About SkillSprouts</h2>
                <p>At SkillSprouts, we leverage cutting-edge generative AI technology to offer a transformative learning experience.</p>
                <div className="about-content">
                  {/* Card 1: Personalized Learning */}
                  <div className="about-item flip-container" key={0}>
                    <div className={`flipper ${flipIndex === 0 ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
                      <div className="front">
                        <img src="images/Personalized Learning.jpeg" alt="Personalized Learning" className="personalized" />
                        <h3>Personalized Learning Modules</h3>
                      </div>
                      <div className="back">
                        <h3>Personalized Learning Modules</h3>
                        <p>Choose from various categories such as communication, leadership, teamwork, and more. Our interactive lessons are tailored to your level and needs, ensuring a customized learning journey.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Interactive Quizzes */}
                  <div className="about-item flip-container" key={1}>
                    <div className={`flipper ${flipIndex === 1 ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
                      <div className="front">
                        <img src="/images/Interactive Quizzes.png" alt="Interactive Quizzes" className="personalized" />
                        <h3>Interactive Quizzes</h3>
                      </div>
                      <div className="back">
                        <h3>Interactive Quizzes</h3>
                        <p>After completing each module, test your understanding with quizzes. We use Generative AI to dynamically generates quiz questions, providing a fresh and relevant learning experience every time.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: AI Powered Feedback */}
                  <div className="about-item flip-container" key={2}>
                    <div className={`flipper ${flipIndex === 2 ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
                      <div className="front">
                        <img src="/images/AI Powered Feedback and coaching.png" alt="AI-powered Feedback" className="personalized" />
                        <h3>AI Powered Feedback and Coaching</h3>
                      </div>
                      <div className="back">
                        <h3>AI Powered Feedback and Coaching</h3>
                        <p>Receive personalized feedback based on your quiz results and performance. GenAI analyzes your strengths and areas for improvement to provide actionable insights.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Progress Tracking */}
                  <div className="about-item flip-container" key={3}>
                    <div className={`flipper ${flipIndex === 3 ? 'flipped' : ''}`} onClick={() => handleFlip(3)}>
                      <div className="front">
                        <img src="/images/Progress tracking.png" alt="Progress Tracking" className="personalized" />
                        <h3>Progress Tracking & Reports</h3>
                      </div>
                      <div className="back">
                        <h3>Progress Tracking & Reports</h3>
                        <p>Track your progress across various modules. Visual reports help you see your development over time and stay motivated throughout your learning journey.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Gamified Rewards */}
                  <div className="about-item flip-container" key={4}>
                    <div className={`flipper ${flipIndex === 4 ? 'flipped' : ''}`} onClick={() => handleFlip(4)}>
                      <div className="front">
                        <img src="/images/Gamification.png" alt="Gamification & Rewards" className="personalized" />
                        <h3>Gamified Rewards</h3>
                      </div>
                      <div className="back">
                        <h3>Gamified Rewards</h3>
                        <p>Enhance your engagement with gamified elements such as badges, achievements, and leaderboards. These features motivate you to complete more modules and celebrate your progress.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="features" className="features-section">
                <h2>Our Features</h2>
                <div className="features-grid">
                  <div className="feature">
                    <h3>Personalized Learning</h3>
                    <p>Learn soft skills at your own pace through customized programs. We offer pre-assessment tests to judge your current skill level to create tailor-made objectives just for you!</p>
                  </div>
                  <div className="feature">
                    <h3>Customizable Learning</h3>
                    <p>Enjoy a flexible learning environment that adapts to your needs. With options to adjust settings, choose topics, and select preferred learning styles, our platform ensures an engaging experience for every user.</p>
                  </div>
                  <div className="feature">
                    <h3>Real-time Live Analytics</h3>
                    <p>We use AI powered video processing to capture your performance live on camera to customize courses for you! Also get guidance from professionals who will help you grow.</p>
                  </div>
                </div>
              </section>

              <footer id="contact" className="footer-section">
                <h2>Contact Us</h2>
                <p>Have questions? We're here to help!</p>
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit" className="contact-btn">Send Message</button>
                </form>
                <div className="copyright">
    <p>&copy; {new Date().getFullYear()} SkillSprouts.AI. All rights reserved.</p>
  </div>
              </footer>
            </main>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
