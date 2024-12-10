import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import HealthCenters from './pages/HealthCenters/HealthCenters';
import TicketSystem from './pages/TicketSystem/TicketSystem';
import Forum from './pages/Forum/Forum';
import ChatBot from './components/ChatBot/ChatBot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/health-centers" element={<HealthCenters />} />
          <Route path="/raise-ticket" element={<TicketSystem />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
        <ChatBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;