import React, { useEffect, useRef, useState } from 'react';
import './Purpose.css';

const Purpose = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="purpose" 
      className={`purpose-section-wrapper ${isVisible ? 'purpose-section-active' : ''}`}
      ref={sectionRef}
    >
      <div className="purpose-gradient-backdrop"></div>
      <div className="purpose-ambient-glow"></div>
      
      <div className="container">
        <div className={`purpose-main-content ${isVisible ? 'purpose-visible' : ''}`}>
          <div className="purpose-header-zone">
            <h2 className="purpose-main-title">Our Purpose</h2>
            <div className="purpose-typewriter-container">
              <p className="purpose-typewriter-text">
                Driven by innovation and guided by excellence
                <span className="purpose-cursor">|</span>
              </p>
            </div>
            {/* <p className="purpose-subtitle-text">
              Driven by innovation and guided by excellence
            </p> */}
          </div>
          
          <div className="purpose-cards-grid">
            <div className="purpose-single-card purpose-vision-card">
              <div className="purpose-card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="purpose-card-title">Our Vision</h3>
              <p className="purpose-card-description">
                To be the leading technology partner that empowers businesses to thrive in the digital age. 
                We envision a world where innovative technology solutions bridge the gap between ambitious 
                ideas and remarkable digital experiences.
              </p>
            </div>

            <div className="purpose-single-card purpose-mission-card">
              <div className="purpose-card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="M17 5h-1.5M8.5 5H7M17 19h-1.5M8.5 19H7"></path>
                </svg>
              </div>
              <h3 className="purpose-card-title">Our Mission</h3>
              <p className="purpose-card-description">
                To deliver exceptional technology solutions that drive business growth and digital 
                transformation. We combine cutting-edge expertise with innovative automation to create 
                scalable, efficient, and user-centric applications.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;