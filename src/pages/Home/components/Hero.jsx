import healthcareGif from '../../../assets/healthcare.gif';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Healthcare Journey Starts Here</h1>
        <p>Access quality healthcare information, education, and support all in one place. Learn about your rights, find nearby healthcare centers, and get the assistance you need.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={healthcareGif} alt="Healthcare illustration" />
      </div>
    </section>
  );
}

export default Hero;