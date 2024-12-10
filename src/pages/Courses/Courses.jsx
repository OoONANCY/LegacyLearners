import { useState } from 'react';
import './Courses.css';

function Courses() {
  const [filter, setFilter] = useState('all');
  
  const courses = [
    {
      id: 1,
      title: "Healthcare Rights 101",
      description: "Learn about your basic healthcare rights and entitlements.",
      price: 49.99,
      category: "rights",
      duration: "2 hours",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Understanding Medical Insurance",
      description: "Comprehensive guide to medical insurance policies and claims.",
      price: 59.99,
      category: "insurance",
      duration: "3 hours",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Patient Advocacy",
      description: "Learn how to advocate for yourself and others in healthcare settings.",
      price: 39.99,
      category: "advocacy",
      duration: "1.5 hours",
      level: "Advanced"
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <div className="courses-page">
      <header className="courses-header">
        <h1>Healthcare Education Courses</h1>
        <div className="filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Courses
          </button>
          <button 
            className={filter === 'rights' ? 'active' : ''} 
            onClick={() => setFilter('rights')}
          >
            Rights
          </button>
          <button 
            className={filter === 'insurance' ? 'active' : ''} 
            onClick={() => setFilter('insurance')}
          >
            Insurance
          </button>
          <button 
            className={filter === 'advocacy' ? 'active' : ''} 
            onClick={() => setFilter('advocacy')}
          >
            Advocacy
          </button>
        </div>
      </header>

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-info">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-details">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
              <div className="course-price">
                <span>${course.price}</span>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;