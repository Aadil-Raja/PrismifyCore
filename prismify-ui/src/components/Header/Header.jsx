// src/components/Header/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();


  // ✅ Define navigation handler
  const handleNavClick = (path) => {
    
    navigate(path);
    setIsMenuOpen(false); // optional: auto-close menu on mobile
  };
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="brand-logo" onClick={() => handleNavClick('/')}>
          <img 
            src="/android-chrome-192x192.png"
            alt="PrismifyCore Logo" 
            className="brand-logo-image" 
          />
          <span className="brand-logo-text">PrismifyCore</span>
        </div>
        <nav className={`primary-nav ${isMenuOpen ? 'primary-nav-open' : ''}`}>
          <button onClick={() => handleNavClick('/')}>Home</button>
          <button onClick={() => handleNavClick('services')}>Services</button>
          <button onClick={() => handleNavClick('technologies')}>Technologies</button>
          <button onClick={() => handleNavClick('projects')}>Projects</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
          
        </nav>
        <button
          className={`hamburger-menu ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;