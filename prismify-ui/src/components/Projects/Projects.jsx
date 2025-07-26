import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const heroRef = useRef(null);
  
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

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Travel Booking Platform',
      challenge: 'Users struggled to search and book flights, hotels, and packages from a single, user-friendly interface.',
      solution: 'Built a full-stack platform with seamless search, filtering, bookings, and secure admin portal for management.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
      image: '/bookngo.png',
    },
    {
      id: 2,
      title: 'Person Recognition Using Gait Matching',
      challenge: 'Traditional biometric systems like face/fingerprint recognition can fail under occlusions or distance.',
      solution: 'Developed a lightweight gait recognition model using CNN and CASIA-B dataset with person-specific features.',
      technologies: ['Python', 'PyTorch', 'CASIA-B', 'NumPy', 'OpenCV'],
      image: '/gait-recognition-2.png',
    },
    {
      id: 3,
      title: 'AI Sales Workflow Automation',
      challenge: 'Sales teams spent excessive time on repetitive follow-ups and manual outreach sequences.',
      solution: 'Designed an n8n automation flow powered by OpenAI agents for intelligent, context-aware email follow-ups and lead handling.',
      technologies: ['n8n', 'OpenAI API', 'JavaScript'],
      image: '/pipedrive.jpg',
    },
    {
      id: 4,
      title: 'Skiing Analysis via Computer Vision',
      challenge: 'Analyzing skier posture and motion in real-time for performance feedback and training insights.',
      solution: 'Developed a CV-based system using pose estimation and motion detection to evaluate and visualize skier movement.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      image: '/skiing-cv-preview.png',
    },
    {
      id: 5,
      title: 'LangChain Tool Calling Agent',
      challenge: 'Integrating LLMs with external APIs and functions often lacks automation and dynamic decision-making capabilities.',
      solution: 'Built an intelligent agent using LangChain that interprets user intent, chooses the right tool (e.g., weather API), executes it, and responds with results. Supports multi-step reasoning and chaining.',
      technologies: ['LangChain', 'OpenAI', 'Python', 'AgentExecutor', 'PromptTemplate'],
      image: '/tool-calling-agent.png',
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="projects-main-wrapper">
          <div className="projects-hero-section" ref={heroRef}>
            <div className="projects-hero-content">
              <h1 className="projects-main-title">Featured Projects</h1>
              <div className="projects-typewriter-container">
                <p className="projects-typewriter-text">
                  Explore our portfolio of innovative solutions that solve real-world problems through cutting-edge technology
                  <span className="projects-cursor">|</span>
                </p>
              </div>
            </div>
          </div>

          <div className="projects-grid-section">
            <div className="projects-grid-container">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card-wrapper"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="project-card-glow"></div>
                  <div className="project-card-content">
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