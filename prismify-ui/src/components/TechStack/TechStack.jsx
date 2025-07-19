import React, { useEffect, useRef } from 'react';
import './TechStack.css';

const TechStack = () => {
  const headerRef = useRef(null);
  const stackRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('techstack-animate-in');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (stackRef.current) observer.observe(stackRef.current);

    return () => observer.disconnect();
  }, []);

  const techStackData = [
    {
      id: 1,
      tech: "React",
      description: "Modern component-based architecture for building dynamic user interfaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="1"/>
          <ellipse cx="12" cy="12" rx="8" ry="3"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)"/>
        </svg>
      ),
      color: "#8b5cf6",
      category: "Frontend"
    },
    {
      id: 2,
      tech: "Node.js",
      description: "Scalable server-side JavaScript runtime for building robust backend systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="m2 17 10 5 10-5"/>
          <path d="m2 12 10 5 10-5"/>
        </svg>
      ),
      color: "#a855f7",
      category: "Backend"
    },
    {
      id: 3,
      tech: "Python",
      description: "Versatile language used for scripting, data analysis, and machine learning",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M8 12h8"/>
          <path d="M12 8v8"/>
        </svg>
      ),
      color: "#9333ea",
      category: "Backend"
    },
    {
      id: 4,
      tech: "Django",
      description: "High-level Python web framework for rapid development and clean design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 8h6v8H9z"/>
          <path d="M12 3v5"/>
          <path d="M12 16v5"/>
        </svg>
      ),
      color: "#7c3aed",
      category: "Framework"
    },
    {
      id: 5,
      tech: "FastAPI",
      description: "High-performance Python web framework for APIs with async support",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      color: "#8b5cf6",
      category: "Framework"
    },
    {
      id: 6,
      tech: "Docker",
      description: "Container platform that simplifies deployment and scalability",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="6" width="14" height="10" rx="1"/>
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
          <circle cx="12" cy="11" r="2"/>
        </svg>
      ),
      color: "#a855f7",
      category: "DevOps"
    },
    {
      id: 7,
      tech: "Kubernetes",
      description: "Open-source system for automating deployment, scaling, and management of apps",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z"/>
        </svg>
      ),
      color: "#9333ea",
      category: "DevOps"
    }
  ];

  const categories = [...new Set(techStackData.map(item => item.category))];

  return (
    <div className="app">
      {/* Main content using container from index.css */}
      <div className="container">
        <div className="techstack-main-wrapper">
          {/* Header section */}
          <div className="techstack-header-section" ref={headerRef}>
            <div className="techstack-header-content">
              <h1 className="techstack-main-title">Tech Stack</h1>
              <p className="techstack-main-subtitle">
                Cutting-edge technologies and frameworks powering modern applications and digital solutions.
              </p>
            </div>
          </div>

          {/* Tech Stack section */}
          <div className="techstack-content-section" ref={stackRef}>
            {categories.map((category, categoryIndex) => (
              <div key={category} className="techstack-category-section">
                <div className="techstack-category-header">
                  <h2 className="techstack-category-title">{category}</h2>
                  <div className="techstack-category-line"></div>
                </div>
                
                <div className="techstack-items-grid">
                  {techStackData
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <div 
                        key={item.id} 
                        className="techstack-item-card"
                        style={{
                          animationDelay: `${(categoryIndex * 0.2) + (index * 0.15)}s`,
                          '--accent-color': item.color
                        }}
                      >
                        <div className="techstack-item-glow"></div>
                        <div className="techstack-item-content">
                          <div className="techstack-item-header">
                            <div className="techstack-item-icon-wrapper">
                              <div className="techstack-item-icon">
                                {item.icon}
                              </div>
                            </div>
                            <div className="techstack-item-meta">
                              <h3 className="techstack-item-name">{item.tech}</h3>
                              <span className="techstack-item-category">{item.category}</span>
                            </div>
                          </div>
                          
                          <p className="techstack-item-description">{item.description}</p>
                        </div>
                        
                        <div className="techstack-item-border"></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="techstack-background-effects">
        <div className="techstack-particle techstack-particle-1"></div>
        <div className="techstack-particle techstack-particle-2"></div>
        <div className="techstack-particle techstack-particle-3"></div>
        <div className="techstack-particle techstack-particle-4"></div>
        <div className="techstack-particle techstack-particle-5"></div>
        <div className="techstack-particle techstack-particle-6"></div>
      </div>
    </div>
  );
};

export default TechStack;