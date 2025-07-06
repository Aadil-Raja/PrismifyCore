import React from 'react';
import './Header.css';
import logo from '../../assets/logo_with_no_bg.png';

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  return (
    <header className="header">
      <div className="container">
       <div className="logo">
          {/* <img src={logo} alt="PrismifyCore Logo" className="logo-image" /> */}
          <span className="logo-text">PrismifyCore</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('tech-stack')}>Tech Stack</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;