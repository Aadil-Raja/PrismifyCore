import React, { useEffect, useRef, useState } from 'react';
import './whyChooseUs.css';

const WhyChooseUs = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "We're not just another development agency. We're your technology partners.";

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('why-choose-animate-in');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Modern React & Node.js Technology Stack",
      description: "Cutting-edge development using the latest React and Node.js frameworks for optimal performance."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Agile Development Methodology",
      description: "Fast, flexible development process with continuous integration and regular client feedback."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock technical support and proactive maintenance to keep your systems running smoothly."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Scalable & Future-Proof Solutions",
      description: "Architecture designed to grow with your business and adapt to future technological changes."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "Competitive Pricing & Flexible Plans",
      description: "Transparent pricing models with flexible payment options tailored to your budget and requirements."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Expert Team",
      description: "Experienced developers specializing in React and Node.js"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M13 12h3l4-4"/>
          <path d="M8 12H5l-4-4"/>
        </svg>
      ),
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 11H1v12h8"/>
          <path d="M20 12h-8l4-4h4"/>
          <path d="M12 3H4v8h8"/>
          <path d="M20 3h-8v8h8"/>
        </svg>
      ),
      title: "Innovation First",
      description: "Cutting-edge solutions using the latest technologies"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-container">
        <div className="why-choose-section-container">
          <div className="why-choose-header" ref={titleRef}>
            <h2 className="why-choose-title">
              Why Choose Prismify Core?
            </h2>
            <div className="why-choose-typewriter-container">
              <p className="why-choose-typewriter-text">
                {typedText}
                <span className="why-choose-cursor">|</span>
              </p>
            </div>
          </div>
          
          <div className="why-choose-description" ref={descriptionRef}>
            <p className="why-choose-description-text">
              We're committed to transforming your vision into reality with precision, 
              innovation, and unwavering dedication to excellence.
            </p>
          </div>

          <div className="why-choose-features" ref={featuresRef}>
            <div className="why-choose-features-list">
              {features.map((feature, index) => (
                <div key={index} className="why-choose-feature-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="why-choose-feature-line"></div>
                  <div className="why-choose-feature-content">
                    <div className="why-choose-feature-icon">
                      {feature.icon}
                    </div>
                    <div className="why-choose-feature-text">
                      <h3 className="why-choose-feature-title">{feature.title}</h3>
                      <p className="why-choose-feature-description">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-choose-benefits" ref={benefitsRef}>
            <div className="why-choose-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="why-choose-benefit-card" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="why-choose-benefit-glow"></div>
                  <div className="why-choose-benefit-content">
                    <div className="why-choose-benefit-icon">
                      {benefit.icon}
                    </div>
                    <h3 className="why-choose-benefit-title">{benefit.title}</h3>
                    <p className="why-choose-benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="why-choose-background-effects">
        <div className="why-choose-particle why-choose-particle-1"></div>
        <div className="why-choose-particle why-choose-particle-2"></div>
        <div className="why-choose-particle why-choose-particle-3"></div>
        <div className="why-choose-particle why-choose-particle-4"></div>
        <div className="why-choose-particle why-choose-particle-5"></div>
        <div className="why-choose-particle why-choose-particle-6"></div>
        <div className="why-choose-particle why-choose-particle-7"></div>
        <div className="why-choose-particle why-choose-particle-8"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;