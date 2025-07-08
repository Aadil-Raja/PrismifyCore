import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './Services.css';

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const services = useMemo(() => [
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
  ], []);

  // Mobile detection with debounced resize handler
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % services.length);
    
    // Shorter animation duration for mobile
    const duration = isMobile ? 200 : 300;
    setTimeout(() => setIsAnimating(false), duration);
  }, [services.length, isAnimating, isMobile]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    
    const duration = isMobile ? 200 : 300;
    setTimeout(() => setIsAnimating(false), duration);
  }, [services.length, isAnimating, isMobile]);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    
    const duration = isMobile ? 200 : 300;
    setTimeout(() => setIsAnimating(false), duration);
  }, [currentSlide, isAnimating, isMobile]);

  // Optimized card styles with mobile-specific calculations
  const cardStyles = useMemo(() => {
    return services.map((_, index) => {
      const total = services.length;
      const offset = (index - currentSlide + total) % total;
      
      let className = 'service-card';
      let style = {};

      if (offset === 0) {
        className += ' active';
        style = { '--card-index': 0 };
      } else if (offset === 1) {
        className += ' next';
        style = { '--card-index': 1 };
      } else if (offset === total - 1) {
        className += ' prev';
        style = { '--card-index': -1 };
      } else {
        className += ' hidden';
        style = { '--card-index': offset > total / 2 ? -(total - offset) : offset };
      }

      // Disable hover effects on mobile for better performance
      if (hoveredIndex === index && !isMobile) {
        className += ' hovered';
      }

      return { className, style };
    });
  }, [currentSlide, hoveredIndex, services.length, isMobile]);

  // Auto-slide with longer interval on mobile to reduce CPU usage
  useEffect(() => {
    const interval = isMobile ? 6000 : 5000;
    
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, interval);
    
    return () => clearInterval(intervalRef.current);
  }, [nextSlide, isAnimating, isMobile]);

  // Optimized event handlers with passive listeners
  const handleMouseEnter = useCallback((index) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredIndex(null);
    }
  }, [isMobile]);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    if (!isMobile) return;
    touchStartRef.current = e.touches[0].clientX;
    // Pause auto-slide during touch
    clearInterval(intervalRef.current);
  }, [isMobile]);

  const handleTouchMove = useCallback((e) => {
    if (!isMobile || !touchStartRef.current) return;
    touchEndRef.current = e.touches[0].clientX;
  }, [isMobile]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobile || !touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    touchStartRef.current = null;
    touchEndRef.current = null;
    
    // Resume auto-slide after touch
    const interval = isMobile ? 6000 : 5000;
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, interval);
  }, [isMobile, nextSlide, prevSlide, isAnimating]);

  return (
    <section id="services">
      <div className="container">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Services</h2>
          </div>

          <p className="section-subtitle">
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>

          <div 
            className={`slider-3d-wrapper ${isMobile ? 'mobile' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => {
              const { className, style } = cardStyles[index];
              
              return (
                <div
                  key={service.id}
                  className={className}
                  style={style}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => goToSlide(index)}
                >
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button 
                onClick={prevSlide} 
                className="slider-button left"
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={nextSlide} 
                className="slider-button right"
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Navigation */}
          <div className="slider-dots">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`slider-dot ${index === currentSlide ? 'active' : 'inactive'}`}
                disabled={isAnimating}
                aria-label={`Go to slide ${index + 1}`}
              />
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

      {/* Background Blur Elements - Simplified on mobile */}
      <div className="services-blur-circle blur-top-left"></div>
      <div className="services-blur-circle blur-bottom-right"></div>
      {!isMobile && <div className="services-blur-circle blur-center"></div>}
    </section>
  );
};

export default ServicesSlider;