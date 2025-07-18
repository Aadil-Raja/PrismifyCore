// import React, { useEffect } from 'react';
// import './FeaturedProjects.css';

// const FeaturedProjects = () => {
//   useEffect(() => {
//     const section = document.querySelector('.featured-projects');
//     section.style.opacity = '0';
//     const timeout = setTimeout(() => {
//       section.style.transition = 'opacity 0.8s ease-in-out';
//       section.style.opacity = '1';
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Mobile App',
//       challenge: 'A fashion retailer needed a mobile app to sync with their major e-commerce platforms and provide seamless shopping experience across devices.',
//       solution: 'Built a React Native mobile app with real-time inventory, AI-powered recommendations, and integrated payment gateway using Node.js backend.',
//       impact: 'Increased mobile sales by 150% and improved customer retention by 40% within 3 months of launch.',
//       technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API']
//     },
//     {
//       id: 2,
//       title: 'Healthcare Management System',
//       challenge: 'A medical clinic struggled with paper-based patient records and appointment scheduling, leading to inefficiencies and errors.',
//       solution: 'Developed a comprehensive web application with patient portal, appointment booking, and automated reminders using React and secure APIs.',
//       impact: 'Reduced administrative overhead by 60% and improved patient satisfaction scores from 3.2 to 4.8 out of 5.',
//       technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth']
//     },
//     {
//       id: 3,
//       title: 'AI-Powered Chatbot for Customer Support',
//       challenge: 'A growing SaaS company needed to handle increasing customer inquiries without proportionally scaling their support team.',
//       solution: 'Created an intelligent chatbot with natural language processing, integrated with their existing CRM and knowledge base.',
//       impact: 'Resolved 70% of customer queries automatically, reducing response time from 2 hours to under 2 minutes.',
//       technologies: ['React', 'OpenAI API', 'Node.js', 'WebSockets']
//     },
//   ];

//   return (
//     <section className="featured-projects">
//       <div className="container">
//         <div className="section-container">
//           <div className="section-header">
//             <h2>Featured Projects</h2>
//             <div className="typewriter-container">
//               <p className="typewriter-text">
//                 Showcasing our expertise through successful client transformations
//                 <span className="cursor">|</span>
//               </p>
//             </div>
//           </div>
//           <div className="projects-grid">
//             {projects.map((project) => (
//               <div key={project.id} className="project-card">
//                 <div className="project-header">
//                   <h3 className="project-title">{project.title}</h3>
//                   <button className="view-details-btn">
//                     View Details
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M22 2L11 13"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M22 2L15 22L11 13L2 9L22 2Z"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="project-section">
//                   <div className="section-icon challenge-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <div className="section-content">
//                     <h4 className="section-title">Challenge</h4>
//                     <p className="section-text">{project.challenge}</p>
//                   </div>
//                 </div>

//                 <div className="project-section">
//                   <div className="section-icon solution-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <div className="section-content">
//                     <h4 className="section-title">Solution</h4>
//                     <p className="section-text">{project.solution}</p>
//                   </div>
//                 </div>

//                 <div className="project-section">
//                   <div className="section-icon impact-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <div className="section-content">
//                     <h4 className="section-title">Impact</h4>
//                     <p className="section-text">{project.impact}</p>
//                   </div>
//                 </div>

//                 <div className="project-technologies">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="featured-projects-background-effects">
//         <div className="featured-projects-particle featured-projects-particle-1"></div>
//         <div className="featured-projects-particle featured-projects-particle-2"></div>
//         <div className="featured-projects-particle featured-projects-particle-3"></div>
//         <div className="featured-projects-particle featured-projects-particle-4"></div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;

// import React, { useEffect } from 'react';
// import './FeaturedProjects.css';

// const FeaturedProjects = () => {
//   useEffect(() => {
//     const section = document.querySelector('.featured-projects');
//     section.style.opacity = '0';
//     const timeout = setTimeout(() => {
//       section.style.transition = 'opacity 0.8s ease-in-out';
//       section.style.opacity = '1';
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Mobile App',
//       challenge: 'A fashion retailer needed a mobile app to sync with their major e-commerce platforms and provide seamless shopping experience across devices.',
//       solution: 'Built a React Native mobile app with real-time inventory, AI-powered recommendations, and integrated payment gateway using Node.js backend.',
//       impact: 'Increased mobile sales by 150% and improved customer retention by 40% within 3 months of launch.',
//       technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API']
//     },
//     {
//       id: 2,
//       title: 'Healthcare Management System',
//       challenge: 'A medical clinic struggled with paper-based patient records and appointment scheduling, leading to inefficiencies and errors.',
//       solution: 'Developed a comprehensive web application with patient portal, appointment booking, and automated reminders using React and secure APIs.',
//       impact: 'Reduced administrative overhead by 60% and improved patient satisfaction scores from 3.2 to 4.8 out of 5.',
//       technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth']
//     },
//     {
//       id: 3,
//       title: 'AI-Powered Chatbot for Customer Support',
//       challenge: 'A growing SaaS company needed to handle increasing customer inquiries without proportionally scaling their support team.',
//       solution: 'Created an intelligent chatbot with natural language processing, integrated with their existing CRM and knowledge base.',
//       impact: 'Resolved 70% of customer queries automatically, reducing response time from 2 hours to under 2 minutes.',
//       technologies: ['React', 'OpenAI API', 'Node.js', 'WebSockets']
//     },
//   ];

//   return (
//     <section className="featured-projects">
//       <div className="container">
//         <div className="section-container">
//           <div className="section-header">
//             <h2>Featured Projects</h2>
//             <div className="typewriter-container">
//               <p className="typewriter-text">
//                 Showcasing our expertise through successful client transformations
//                 <span className="cursor">|</span>
//               </p>
//             </div>
//           </div>
//           <div className="projects-grid">
//             {projects.map((project) => (
//               <div key={project.id} className="project-card">
//                 <div className="project-header">
//                   <h3 className="project-title">{project.title}</h3>
//                   <button className="view-details-btn">
//                     View Details
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M22 2L11 13"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M22 2L15 22L11 13L2 9L22 2Z"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="project-sections-row">
//                   <div className="project-section">
//                     <div className="section-icon challenge-icon">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </div>
//                     <div className="section-content">
//                       <h4 className="section-title">Challenge</h4>
//                       <p className="section-text">{project.challenge}</p>
//                     </div>
//                   </div>

//                   <div className="project-section">
//                     <div className="section-icon solution-icon">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </div>
//                     <div className="section-content">
//                       <h4 className="section-title">Solution</h4>
//                       <p className="section-text">{project.solution}</p>
//                     </div>
//                   </div>

//                   <div className="project-section">
//                     <div className="section-icon impact-icon">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </div>
//                     <div className="section-content">
//                       <h4 className="section-title">Impact</h4>
//                       <p className="section-text">{project.impact}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="project-technologies">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="featured-projects-background-effects">
//         <div className="featured-projects-particle featured-projects-particle-1"></div>
//         <div className="featured-projects-particle featured-projects-particle-2"></div>
//         <div className="featured-projects-particle featured-projects-particle-3"></div>
//         <div className="featured-projects-particle featured-projects-particle-4"></div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;


import React, { useEffect } from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  useEffect(() => {
    const section = document.querySelector('.featured-projects');
    section.style.opacity = '0';
    const timeout = setTimeout(() => {
      section.style.transition = 'opacity 0.8s ease-in-out';
      section.style.opacity = '1';
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

 const projects = [
  {
    id: 1,
    title: 'MaslaFix – Service Marketplace Platform',
    challenge: 'People struggled to find reliable, verified professionals for everyday tasks like tutoring or home repairs.',
    solution: 'Built a full-stack platform that connects clients with service providers through real-time messaging, secure billing, and dynamic dashboards.',
   
    technologies: ['React.js', 'Node.js', 'MySQL', 'WebSockets', 'JWT']
  },
  {
    id: 2,
    title: 'AI Sales Workflow Automation',
    challenge: 'Sales teams spent excessive time on repetitive follow-ups and manual outreach sequences.',
    solution: 'Designed an n8n automation flow powered by OpenAI agents for intelligent, context-aware email follow-ups and lead handling.',
  
    technologies: ['n8n', 'OpenAI API', 'JavaScript']
  },
  {
    id: 3,
    title: 'Skiing Analysis via Computer Vision',
    challenge: 'Analyzing skier posture and motion in real-time for performance feedback and training insights.',
    solution: 'Developed a CV-based system using pose estimation and motion detection to evaluate and visualize skier movement.',
    
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
  }
];


  return (
    <section className="featured-projects">
      <div className="featured-projects-container">
        <div className="featured-projects-section-container">
          <div className="featured-projects-section-header">
            <h2>Featured Projects</h2>
            <div className="featured-projects-typewriter-container">
              <p className="featured-projects-typewriter-text">
                Showcasing our expertise through successful client transformations
                <span className="featured-projects-cursor">|</span>
              </p>
            </div>
          </div>
          <div className="featured-projects-projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="featured-projects-project-card">
                <div className="featured-projects-project-header">
                  <h3 className="featured-projects-project-title">{project.title}</h3>
                  {/* <button className="featured-projects-view-details-btn">
                    View Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2L11 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button> */}
                </div>
                
                <div className="featured-projects-project-sections-row">
                  <div className="featured-projects-project-section">
                    <div className="featured-projects-section-icon featured-projects-challenge-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="featured-projects-section-content">
                      <h4 className="featured-projects-section-title featured-projects-challenge-title">Challenge</h4>
                      <p className="featured-projects-section-text">{project.challenge}</p>
                    </div>
                  </div>

                  <div className="featured-projects-project-section">
                    <div className="featured-projects-section-icon featured-projects-solution-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="featured-projects-section-content">
                      <h4 className="featured-projects-section-title featured-projects-solution-title">Solution</h4>
                      <p className="featured-projects-section-text">{project.solution}</p>
                    </div>
                  </div>

                  
                </div>

                <div className="featured-projects-project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="featured-projects-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="featured-projects-background-effects">
        <div className="featured-projects-particle featured-projects-particle-1"></div>
        <div className="featured-projects-particle featured-projects-particle-2"></div>
        <div className="featured-projects-particle featured-projects-particle-3"></div>
        <div className="featured-projects-particle featured-projects-particle-4"></div>
        <div className="featured-projects-particle featured-projects-particle-5"></div>
        <div className="featured-projects-particle featured-projects-particle-6"></ div>
        <div className="featured-projects-particle featured-projects-particle-7"></div>
        <div className="featured-projects-particle featured-projects-particle-8"></div>
        <div className="featured-projects-particle featured-projects-particle-9"></div>
        <div className="featured-projects-particle featured-projects-particle-10"></div>
        <div className="featured-projects-particle featured-projects-particle-11"></div>
        <div className="featured-projects-particle featured-projects-particle-12"></div>

      </div>
      
    </section>
  );
};

export default FeaturedProjects;