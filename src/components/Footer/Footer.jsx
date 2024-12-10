import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/health-centers">Health Centers</Link></li>
            <li><Link to="/raise-ticket">Support</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/rights">Healthcare Rights</Link></li>
            <li><Link to="/policies">Policies</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@healthcare.com</li>
            <li>Phone: 1-800-HEALTH</li>
            <li>Address: 123 Healthcare Ave</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Healthcare Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;