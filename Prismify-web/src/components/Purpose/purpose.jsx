import React, { useEffect, useRef, useState } from 'react';
import './purpose.css';

const Purpose = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const titleRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Driven by innovation and guided by excellence";

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('purpose-animate-in');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  return (
    <section id="purpose" className="purpose">
      <div className="container">
        <div className="section-container">
          <div className="section-header" ref={titleRef}>
            <h2>Our Purpose</h2>
            <div className="typewriter-container">
              <p className="typewriter-text">
                {typedText}
                <span className="cursor">|</span>
              </p>
            </div>
          </div>
          
          <div className="purpose-content">
            <div className="purpose-card purpose-vision" ref={visionRef}>
              <div className="purpose-card-glow"></div>
              <div className="purpose-card-content">
                <div className="purpose-icon purpose-vision-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="purpose-card-title">Our Vision</h3>
                <p className="purpose-card-text">
                  To be the leading technology partner that empowers businesses to thrive in the digital age. 
                  We envision a world where innovative technology solutions bridge the gap between ambitious 
                  ideas and remarkable digital experiences, making advanced technology accessible to all.
                </p>
              </div>
            </div>

            <div className="purpose-card purpose-mission" ref={missionRef}>
              <div className="purpose-card-glow"></div>
              <div className="purpose-card-content">
                <div className="purpose-icon purpose-mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="M17 5h-1.5M8.5 5H7M17 19h-1.5M8.5 19H7"></path>
                  </svg>
                </div>
                <h3 className="purpose-card-title">Our Mission</h3>
                <p className="purpose-card-text">
                  To deliver exceptional technology solutions that drive business growth and digital 
                  transformation. We combine cutting-edge React and Node.js expertise with innovative 
                  AI automation to create scalable, efficient, and user-centric applications that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="purpose-background-effects">
        <div className="purpose-particle purpose-particle-1"></div>
        <div className="purpose-particle purpose-particle-2"></div>
        <div className="purpose-particle purpose-particle-3"></div>
        <div className="purpose-particle purpose-particle-4"></div>
        <div className="purpose-particle purpose-particle-5"></div>
        <div className="purpose-particle purpose-particle-6"></div>
      </div>
    </section>
  );
};

export default Purpose;