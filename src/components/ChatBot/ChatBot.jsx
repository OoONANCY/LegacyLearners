import { useState } from 'react';
import './ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
        >
          Chat with us
        </button>
      )}
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Healthcare Assistant</h3>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {/* Messages will be rendered here */}
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              placeholder="Type your message..."
            />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;