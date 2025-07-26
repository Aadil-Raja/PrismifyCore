import React, { useEffect, useRef } from 'react';
import './Service.css';
import { FaGlobe, FaRobot, FaCommentDots, FaChartLine, FaPlug, FaMobileAlt } from 'react-icons/fa';

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
      icon: <FaGlobe size={40} color="#4B8BBE" />
    },
    {
      id: 2,
      title: "AI Automation",
      description: "Harness the power of AI to automate workflows and boost productivity.",
      icon: <FaRobot size={40} color="#FF6F61" />
    },
    {
      id: 3,
      title: "Chatbots",
      description: "Integrate smart conversational agents to your website or platforms like WhatsApp.",
      icon: <FaCommentDots size={40} color="#25D366" />
    },
    {
      id: 4,
      title: "Dashboards",
      description: "Custom admin panels for managing your services, users, and analytics.",
      icon: <FaChartLine size={40} color="#6B7280" />
    },
    {
      id: 5,
      title: "Integrations",
      description: "Connect APIs and tools like Stripe, Firebase, Twilio, and N8N into one workflow.",
      icon: <FaPlug size={40} color="#9333EA" />
    },
    {
      id: 6,
      title: "Mobile Apps",
      description: "Develop high-performance Android & iOS apps using Flutter or React Native.",
      icon: <FaMobileAlt size={40} color="#00DDEB" />
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="services-main-wrapper">
          <div className="services-hero-section" ref={heroRef}>
            <div className="services-hero-content">
              <h1 className="services-main-title">Our Services</h1>
              <div className="service-typewriter-container">
              <p className="service-typewriter-text">
                Comprehensive solutions to transform your digital presence and streamline your business operations
                <span className="service-cursor">|</span>
              </p>
            </div>
              {/* <p className="services-main-subtitle">
                Comprehensive solutions to transform your digital presence and streamline your business operations.
              </p> */}
            </div>
          </div>

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