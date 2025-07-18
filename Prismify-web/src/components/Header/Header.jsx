// src/components/Header/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo_with_no_bg.png';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    // Map your "section" strings to actual routes
    let path = '/';
    switch (section) {
      case 'services':
        path = '/services';
        break;
      case 'tech-stack':
        path = '/projects';
        break;
      case 'contact':
        path = '/contact';
        break;
      default:
        path = '/';
    }

    navigate(path);

    // Close menu on mobile
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          {/* Uncomment if you want the image */}
          {/* <img src={logo} alt="PrismifyCore Logo" className="logo-image" /> */}
          <span className="logo-text">PrismifyCore</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => handleNavClick('home')}>Home</button>
          <button onClick={() => handleNavClick('services')}>Services</button>
          <button onClick={() => handleNavClick('tech-stack')}>Tech Stack</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
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
