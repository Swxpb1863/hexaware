import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Routes, Router, Link } from 'react-router-dom';

const UserDashboard = () => {
    // Example user data (can be fetched from API)
    const [user, setUser] = useState({
        name: 'John Doe',  // This could come from user context or API
        recentLessons: [
            { id: 1, title: 'Vocabulary Lesson 1' },
            { id: 2, title: 'Pronunciation Lesson 3' },
            { id: 3, title: 'Practice Test 2' }
        ]
    });

    useEffect(() => {
        // Fetch user details and recent lessons from API here
        // Example: setUser(fetchUserData());
    }, []);

    const handleNavigation = (section) => {
        console.log(`Navigating to: ${section}`);
        // Implement navigation logic (e.g., using React Router)
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user.name}!</h2>

            {/* Navigation Menu */}
            <nav className="navigation-menu">
                <ul>
                    <li onClick={() => handleNavigation('vocabulary-lessons')}>Vocabulary Lessons</li>
                    <li onClick={() => handleNavigation('speech-lessons')}>Speech Lessons</li>
                    <li onClick={() => handleNavigation('pronunciation-lessons')}>Pronunciation Lessons</li>
                    <li onClick={() => handleNavigation('practice-tests')}>Practice Tests</li>
                    <li onClick={() => handleNavigation('test-reports')}>Test Reports</li>
                </ul>
            </nav>

            {/* Quick Access to Recent Lessons */}
            <div className="quick-access-section">
                <h3>Recently Accessed Lessons & Tests</h3>
                <div className="quick-access-buttons">
                    {user.recentLessons.map(lesson => (
                        <button key={lesson.id} onClick={() => handleNavigation(`lesson/${lesson.id}`)}>
                            {lesson.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
