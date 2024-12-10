import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseScroll.css';

function CourseScroll() {
  const courses = [
    {
      id: 1,
      title: "Healthcare Rights 101",
      thumbnail: "course1.jpg",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "Understanding Medical Insurance",
      thumbnail: "course2.jpg",
      duration: "1.5 hours"
    },
    {
      id: 3,
      title: "Patient Advocacy",
      thumbnail: "course3.jpg",
      duration: "3 hours"
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.querySelector('.courses-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="course-scroll">
      <h2>Featured Courses</h2>
      <div className="courses-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>←</button>
        <div className="courses-container">
          {courses.map(course => (
            <Link to={`/courses/${course.id}`} key={course.id} className="course-card">
              <div className="course-thumbnail">
                <img src={course.thumbnail} alt={course.title} />
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>Duration: {course.duration}</p>
              </div>
            </Link>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>→</button>
      </div>
    </section>
  );
}

export default CourseScroll;