import React, { useEffect, useRef } from 'react';
import './TechStack.css';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiKubernetes } from 'react-icons/si';

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
      icon: <FaReact size={40} color="#61DAFB" />,
      color: "#8b5cf6",
      category: "Frontend"
    },
    {
      id: 2,
      tech: "Node.js",
      description: "Scalable server-side JavaScript runtime for building robust backend systems",
      icon: <FaNodeJs size={40} color="#68A063" />,
      color: "#a855f7",
      category: "Backend"
    },
    {
      id: 3,
      tech: "Python",
      description: "Versatile language used for scripting, data analysis, and machine learning",
      icon: <FaPython size={40} color="#3776AB" />,
      color: "#9333ea",
      category: "Backend"
    },
    {
      id: 4,
      tech: "Django",
      description: "High-level Python web framework for rapid development and clean design",
      icon: <SiDjango size={40} color="#092E20" />,
      color: "#7c3aed",
      category: "Framework"
    },
    {
      id: 5,
      tech: "FastAPI",
      description: "High-performance Python web framework for APIs with async support",
      icon: <SiFastapi size={40} color="#009688" />,
      color: "#8b5cf6",
      category: "Framework"
    },
    {
      id: 6,
      tech: "Docker",
      description: "Container platform that simplifies deployment and scalability",
      icon: <FaDocker size={40} color="#2496ED" />,
      color: "#a855f7",
      category: "DevOps"
    },
    {
      id: 7,
      tech: "Kubernetes",
      description: "Open-source system for automating deployment, scaling, and management of apps",
      icon: <SiKubernetes size={40} color="#326CE5" />,
      color: "#9333ea",
      category: "DevOps"
    }
  ];

  const categories = [...new Set(techStackData.map(item => item.category))];

  return (
    <div className="app">
      <div className="container">
        <div className="techstack-main-wrapper">
          <div className="techstack-header-section" ref={headerRef}>
            <div className="techstack-header-content">
              <h1 className="techstack-main-title">Tech Stack</h1>
              <div className="techstack-typewriter-container">
              <p className="techstack-typewriter-text">
                Cutting-edge technologies and frameworks powering modern applications and digital solutions.
                <span className="techstack-cursor">|</span>
              </p>
            </div>
              {/* <p className="techstack-main-subtitle">
                Cutting-edge technologies and frameworks powering modern applications and digital solutions.
              </p> */}
            </div>
          </div>

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