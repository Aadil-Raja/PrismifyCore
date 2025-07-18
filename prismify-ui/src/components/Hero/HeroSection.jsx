// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './HeroSection.css';
import Purpose from '../Purpose/Purpose'
// import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const HeroSection = ({ scrollToSection }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const rotatingTexts = [
    'Illuminate Innovation',
    'Transform Ideas',
    'Elevate Business',
    'Automate Workflows'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-section-container">
      <section id="home" className="hero-banner">
        <div className="container">
          <div className={`hero-main-content ${isVisible ? 'content-visible' : ''}`}>
            <div className="hero-text-section">
              {/* <div className="hero-status-badge">
                <div className="status-dot"></div>
                <span>Welcome to the Future</span>
              </div> */}
              <h1 className="hero-main-heading">
                <span>{rotatingTexts[textIndex].split(' ')[0]}</span>
                <span className="gradient-highlight-text">{rotatingTexts[textIndex].split(' ')[1]}</span>
                <span className="brand-tag">with PrismifyCore</span>
              </h1>
              <p className="hero-description">
                Transform your digital vision into reality with cutting-edge web solutions
                and AI-powered automation that drives exceptional results.
              </p>
              <div className="hero-action-buttons">
                <button className="primary-cta-btn" onClick={() => scrollToSection('contact')}>Get Started</button>
                <button className="secondary-cta-btn" onClick={() => scrollToSection('services')}>Explore Services</button>
              </div>
            </div>
            <div className="hero-visual-section">
              <div className="animated-ring ring-outer"></div>
              <div className="animated-ring ring-middle"></div>
              <div className="animated-ring ring-inner"></div>
              <div className="lottie-animation-wrapper">
                <DotLottieReact
                  // src="https://lottie.host/841549d0-4c72-4abb-878b-83d430904ba6/AjyEbk1bx2.lottie"
                   loop
                  src="/hero-animation.lottie"
                  autoplay
                />
              </div>
              <div className="floating-square-element"></div>
              <div className="floating-circle-element"></div>
            </div>
          </div>
        </div>
        <div className="scroll-down-indicator">
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      <section id="purpose">
       <Purpose />
    </section>
   
     </div>
   
   
  );
};

export default HeroSection;