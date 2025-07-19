// src/components/Header/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
// import logo from '../../assets/logo_with_no_bg.png';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();



  return (
    <header className="main-header">
      <div className="header-container">
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          {/* Uncomment if you want the image */}
          {/* <img src={logo} alt="PrismifyCore Logo" className="brand-logo-image" /> */}
          <span className="brand-logo-text">PrismifyCore</span>
        </div>
        <nav className={`primary-nav ${isMenuOpen ? 'primary-nav-open' : ''}`}>
          <button onClick={() => handleNavClick('/')}>Home</button>
          <button onClick={() => handleNavClick('/')}>Services</button>
          <button onClick={() => handleNavClick('/')}>Tech Stack</button>
          <button onClick={() => handleNavClick('/')}>Contact</button>
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