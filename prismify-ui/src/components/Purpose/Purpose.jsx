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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="purpose" className="purpose-main-section">
      <div className="container">
        <div className="section-container">
          <div 
            ref={sectionRef}
            className={`purpose-content ${isVisible ? 'visible' : ''}`}
          >
            <div className="purpose-header">
              <h2>Our Purpose</h2>
              <p className="purpose-subtitle">
                Driven by innovation and guided by excellence
              </p>
            </div>
            
            <div className="purpose-cards">
              <div className="purpose-card vision-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading technology partner that empowers businesses to thrive in the digital age. 
                  We envision a world where innovative technology solutions bridge the gap between ambitious 
                  ideas and remarkable digital experiences, making advanced technology accessible to all.
                </p>
              </div>

              <div className="purpose-card mission-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="M17 5h-1.5M8.5 5H7M17 19h-1.5M8.5 19H7"></path>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional technology solutions that drive business growth and digital 
                  transformation. We combine cutting-edge React and Node.js expertise with innovative 
                  AI automation to create scalable, efficient, and user-centric applications that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;