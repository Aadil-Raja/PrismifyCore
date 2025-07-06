import React, { useState, useEffect } from 'react';
import './Services.css';

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Apps",
      description: "Build scalable, responsive web applications with modern frameworks and best practices.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "AI Automation",
      description: "Harness the power of AI to automate workflows and boost productivity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Chatbots",
      description: "Integrate smart conversational agents to your website or platforms like WhatsApp.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Dashboards",
      description: "Custom admin panels for managing your services, users, and analytics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Integrations",
      description: "Connect APIs and tools like Stripe, Firebase, Twilio, and N8N into one workflow.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Mobile Apps",
      description: "Develop high-performance Android & iOS apps using Flutter or React Native.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = services.length;
    const offset = (index - currentSlide + total) % total;
    let transform = '', opacity = 0, zIndex = 0, scale = 0.8;

    if (offset === 0) {
      transform = 'translate(-50%, -50%) translateX(0) translateZ(0) rotateY(0deg)';
      opacity = 1;
      zIndex = 30;
      scale = 1;
    } else if (offset === 1 || offset === total - 1) {
      const isNext = offset === 1;
      transform = `translate(-50%, -50%) translateX(${isNext ? '280px' : '-280px'}) translateZ(-100px) rotateY(${isNext ? '-25deg' : '25deg'})`;
      opacity = 0.7;
      zIndex = 20;
      scale = 0.85;
    } else {
      transform = 'translate(-50%, -50%) translateX(0) translateZ(-200px) rotateY(0deg)';
      opacity = 0;
      zIndex = 10;
      scale = 0.7;
    }

    if (hoveredIndex === index) {
      scale = offset === 0 ? 1.05 : 0.95;
      zIndex += 5;
    }

    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex
    };
  };

  return (
    <section id="services">
      <div className="section-container">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="pulse-icon">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
            </div>
          </div>

          <p className="section-subtitle">
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>

          <div className="slider-3d-wrapper">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => goToSlide(index)}
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} className="slider-button left">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={nextSlide} className="slider-button right">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`slider-dot ${index === currentSlide ? 'active' : 'inactive'}`}
              ></button>
            ))}
          </div>

          {/* Current Info */}
          <div className="service-info">
            <div className="service-info-box">
              <span>{currentSlide + 1} / {services.length}</span>
              <span>{services[currentSlide].title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Elements */}
      <div className="services-blur-circle blur-top-left"></div>
      <div className="services-blur-circle blur-bottom-right"></div>
      <div className="services-blur-circle blur-center"></div>
    </section>
  );
};

export default ServicesSlider;
