import React from 'react';
import './Header.css';
import logo from '../../assets/logo_with_no_bg.png';

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  // Add event handler to prevent event bubbling
  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Add handler for nav button clicks that closes menu on mobile
  const handleNavClick = (section) => {
    scrollToSection(section);
    // Close menu after clicking on mobile
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
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
          className="menu-toggle"
          onClick={handleMenuToggle}
          type="button"
          aria-label="Toggle menu"
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
