import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';

const Features = forwardRef(({ onChatClick, onLanguageClick }, ref) => {
  const navigate = useNavigate();

  const features = [
    {
      title: "24/7 Chat Support",
      description: "Get instant help with our AI-powered chatbot",
      icon: "💬",
      action: onChatClick
    },
    {
      title: "Educational Courses",
      description: "Learn about healthcare rights and services",
      icon: "📚",
      action: () => navigate('/courses')
    },
    {
      title: "Multi-language Support",
      description: "Access information in your preferred language",
      icon: "🌍",
      action: onLanguageClick
    },
    {
      title: "Raise a Ticket",
      description: "Report issues or request assistance",
      icon: "🎫",
      action: () => navigate('/raise-ticket')
    },
    {
      title: "Forum Support",
      description: "Share and discuss health-related concerns",
      icon: "👥",
      action: () => navigate('/forum')
    }
  ];

  return (
    <section className="features" ref={ref}>
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card"
            onClick={feature.action}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;