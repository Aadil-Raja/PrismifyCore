import React, { useEffect, useRef } from 'react';
import './Service.css';

const Services = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('services-animate-in');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Web Apps",
      description: "Build scalable, responsive web applications with modern frameworks and best practices.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "AI Automation",
      description: "Harness the power of AI to automate workflows and boost productivity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Chatbots",
      description: "Integrate smart conversational agents to your website or platforms like WhatsApp.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 9h8"/>
          <path d="M8 13h6"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Dashboards",
      description: "Custom admin panels for managing your services, users, and analytics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 9h6v6H9z"/>
          <path d="M9 3v6"/>
          <path d="M21 9H9"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Integrations",
      description: "Connect APIs and tools like Stripe, Firebase, Twilio, and N8N into one workflow.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Mobile Apps",
      description: "Develop high-performance Android & iOS apps using Flutter or React Native.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    }
  ];

  return (
    <div className="app">
      {/* Main content using container from index.css */}
      <div className="container">
        <div className="services-main-wrapper">
          {/* Hero section */}
          <div className="services-hero-section" ref={heroRef}>
            <div className="services-hero-content">
              <h1 className="services-main-title">Our Services</h1>
              <p className="services-main-subtitle">
                Comprehensive solutions to transform your digital presence and streamline your business operations.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="services-grid-section" ref={gridRef}>
            <div className="services-grid-container">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id} 
                  className="service-card-wrapper"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="service-card-glow"></div>
                  <div className="service-card-content">
                    <div className="service-card-header">
                      <div className="service-card-icon">
                        {service.icon}
                      </div>
                      <div className="service-card-number">
                        {service.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                  </div>
                  <div className="service-card-border-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="services-background-effects">
        <div className="services-particle services-particle-1"></div>
        <div className="services-particle services-particle-2"></div>
        <div className="services-particle services-particle-3"></div>
        <div className="services-particle services-particle-4"></div>
        <div className="services-particle services-particle-5"></div>
        <div className="services-particle services-particle-6"></div>
      </div>
    </div>
  );
};

export default Services;