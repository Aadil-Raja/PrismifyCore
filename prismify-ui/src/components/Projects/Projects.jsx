import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
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
          entry.target.classList.add('projects-animate-in');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'MaslaFix – Service Marketplace Platform',
      challenge: 'People struggled to find reliable, verified professionals for everyday tasks like tutoring or home repairs.',
      solution: 'Built a full-stack platform that connects clients with service providers through real-time messaging, secure billing, and dynamic dashboards.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'WebSockets', 'JWT'],
      image: '/masla-fix.jpg',
     
    },
    {
      id: 2,
      title: 'AI Sales Workflow Automation',
      challenge: 'Sales teams spent excessive time on repetitive follow-ups and manual outreach sequences.',
      solution: 'Designed an n8n automation flow powered by OpenAI agents for intelligent, context-aware email follow-ups and lead handling.',
      technologies: ['n8n', 'OpenAI API', 'JavaScript'],
      image: '/pipedrive.jpg',
     
    },
    {
      id: 3,
      title: 'Skiing Analysis via Computer Vision',
      challenge: 'Analyzing skier posture and motion in real-time for performance feedback and training insights.',
      solution: 'Developed a CV-based system using pose estimation and motion detection to evaluate and visualize skier movement.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      image: './skiing-cv-preview.jpg',
     
    }
  ];

  return (
    <div className="app">
      {/* Main content using container from index.css */}
      <div className="container">
        <div className="projects-main-wrapper">
          {/* Hero section */}
          <div className="projects-hero-section" ref={heroRef}>
            <div className="projects-hero-content">
              <h1 className="projects-main-title">Featured Projects</h1>
              <p className="projects-main-subtitle">
                Explore our portfolio of innovative solutions that solve real-world problems through cutting-edge technology.
              </p>
            </div>
          </div>

          {/* Projects grid */}
          <div className="projects-grid-section" ref={gridRef}>
            <div className="projects-grid-container">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card-wrapper"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="project-card-glow"></div>
                  <div className="project-card-content">
                    {/* Image section */}
                    <div className="project-card-image-container">
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`}
                        className="project-card-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="project-card-image-overlay"></div>
                    </div>
                    
                    <div className="project-card-header">
                    
                      <div className="project-card-number">
                        {project.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="project-card-title">{project.title}</h3>
                    
                    <div className="project-challenge-section">
                      <h4 className="project-section-title">Challenge</h4>
                      <p className="project-challenge">{project.challenge}</p>
                    </div>
                    
                    <div className="project-solution-section">
                      <h4 className="project-section-title">Solution</h4>
                      <p className="project-solution">{project.solution}</p>
                    </div>
                    
                    <div className="project-tech-section">
                      <h4 className="project-section-title">Technologies</h4>
                      <div className="tech-stack">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-card-border-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="projects-background-effects">
        <div className="projects-particle projects-particle-1"></div>
        <div className="projects-particle projects-particle-2"></div>
        <div className="projects-particle projects-particle-3"></div>
        <div className="projects-particle projects-particle-4"></div>
        <div className="projects-particle projects-particle-5"></div>
        <div className="projects-particle projects-particle-6"></div>
      </div>
    </div>
  );
};

export default Projects;