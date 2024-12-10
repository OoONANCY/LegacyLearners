import { useRef, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseScroll from './components/CourseScroll';
import './Home.css';

function Home() {
  const featuresRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleLanguageClick = () => {
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
      languageSelect.click();
    }
  };

  return (
    <main className="home">
      <Hero />
      <Features 
        ref={featuresRef}
        onChatClick={handleChatClick}
        onLanguageClick={handleLanguageClick}
      />
      <CourseScroll />
    </main>
  );
}

export default Home;