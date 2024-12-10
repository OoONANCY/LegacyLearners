import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [language, setLanguage] = useState('English');
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HealthCare Portal</Link>
      </div>
      <nav className="nav-links">
        <Link to="/courses">Courses</Link>
        <Link to="/health-centers">Health Centers</Link>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}

export default Header;