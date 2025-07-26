import React, { useEffect, useRef } from 'react';
import './TechStack.css';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaJava, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiFastapi, 
  SiKubernetes, 
  SiNextdotjs,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiKibana,
  SiElasticsearch,
  SiWordpress,
  SiShopify,
  SiN8N
} from 'react-icons/si';

const TechStack = () => {
  const headerRef = useRef(null);
  
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

    return () => observer.disconnect();
  }, []);

  const techStackData = [
  // ───────── Existing ─────────
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
  },

  // ───────── New Additions ─────────
  {
    id: 8,
    tech: "Next.js",
    description: "React framework for server-side rendering and static site generation",
    icon: <SiNextdotjs size={40} color="#000000" />,
    color: "#000000",
    category: "Frontend"
  },
  {
    id: 9,
    tech: "Flask",
    description: "Lightweight Python web framework ideal for microservices",
    icon: <SiFlask size={40} color="#000000" />,
    color: "#f97316",
    category: "Framework"
  },
  {
    id: 10,
    tech: "Java",
    description: "Robust, object-oriented language for building cross-platform applications",
    icon: <FaJava size={40} color="#5382a1" />,
    color: "#2563eb",
    category: "Backend"
  },
  {
    id: 11,
    tech: "SQL",
    description: "Standard language for querying and managing relational databases",
    icon: <FaDatabase size={40} color="#047857" />,
    color: "#10b981",
    category: "Database"
  },
  {
    id: 12,
    tech: "NoSQL",
    description: "Non-relational databases for flexible schema and horizontal scaling",
    icon: <SiMongodb size={40} color="#47a248" />,
    color: "#34d399",
    category: "Database"
  },
  {
    id: 13,
    tech: "PostgreSQL",
    description: "Advanced open-source relational database with JSON support",
    icon: <SiPostgresql size={40} color="#336791" />,
    color: "#2563eb",
    category: "Database"
  },
  {
    id: 14,
    tech: "Elasticsearch",
    description: "Distributed search and analytics engine built on Lucene",
    icon: <SiElasticsearch size={40} color="#005571" />,
    color: "#0ea5e9",
    category: "Search"
  },
  {
    id: 15,
    tech: "Kibana",
    description: "Visualization dashboard for exploring Elasticsearch data",
    icon: <SiKibana size={40} color="#005571" />,
    color: "#facc15",
    category: "DevOps"
  },
  {
    id: 16,
    tech: "WordPress",
    description: "Popular CMS for building blogs, sites, and e‑commerce stores",
    icon: <SiWordpress size={40} color="#21759b" />,
    color: "#3b82f6",
    category: "CMS"
  },
  {
    id: 17,
    tech: "Shopify",
    description: "Hosted e‑commerce platform for creating online stores",
    icon: <SiShopify size={40} color="#96bf48" />,
    color: "#22c55e",
    category: "E-commerce"
  },
  {
    id: 18,
    tech: "n8n",
    description: "Open‑source workflow automation & data integration platform",
    icon: <SiN8N size={40} color="#FF7722" />,
    color: "#F97316",
    category: "Automation & Integration"
  }
];

  const categories = [...new Set(techStackData.map(item => item.category))];

  return (
    <div className="app">
      <div className="container">
        <div className="techstack-main-wrapper">
          <div className="techstack-header-section" ref={headerRef}>
            <div className="techstack-header-content">
              <h1 className="techstack-main-title">Technologies</h1>
              <div className="techstack-typewriter-container">
                <p className="techstack-typewriter-text">
                  Cutting-edge technologies and frameworks powering modern applications and digital solutions
                  <span className="techstack-cursor">|</span>
                </p>
              </div>
            </div>
          </div>

          <div className="techstack-content-section">
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