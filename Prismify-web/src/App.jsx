import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Brain, Zap, Shield, Globe, Users, ArrowRight, CheckCircle, Star, Play, Menu, X } from 'lucide-react';
import './App.css'


const ModernSoftwareServicesWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 icon-glow" />,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and cutting-edge technologies",
      features: ["React & Next.js", "Node.js & Python", "Cloud Integration", "Performance Optimization"]
    },
    {
      icon: <Brain className="w-8 h-8 icon-glow" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning",
      features: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Zap className="w-8 h-8 icon-glow" />,
      title: "Automation & Integration",
      description: "Streamline your workflow with intelligent automation and seamless integrations",
      features: ["Process Automation", "API Development", "System Integration", "Workflow Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8 icon-glow" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Threat Detection"]
    },
    {
      icon: <Globe className="w-8 h-8 icon-glow" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses",
      features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Monitoring & Analytics"]
    },
    {
      icon: <Users className="w-8 h-8 icon-glow" />,
      title: "Digital Transformation",
      description: "Transform your business with digital innovation and strategic consulting",
      features: ["Strategy Consulting", "Digital Roadmaps", "Change Management", "Technology Adoption"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Exceptional service and cutting-edge solutions. They transformed our entire digital infrastructure.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Innovation Labs",
      text: "Their AI solutions helped us automate 80% of our manual processes. Incredible results!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "StartupX",
      text: "Professional, reliable, and delivered beyond expectations. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden gpu-accelerated">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'header-blur shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-primary animate-text-shimmer">
                PrismifyCore
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:text-glow">Services</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:text-glow">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:text-glow">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:text-glow">Contact</a>
              <button className="btn-primary">
                Get Started
              </button>
            </nav>

            <button 
              className="md:hidden text-purple-400 hover:text-purple-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden header-blur border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Services</a>
              <a href="#about" className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#testimonials" className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Prism Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f23]"></div>
          
          {/* Prism Light Effects */}
          <div 
            className="absolute inset-0 opacity-40 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 69, 199, 0.4) 0%, rgba(59, 130, 246, 0.3) 25%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)`
            }}
          />
          
          {/* Aurora Background */}
          <div className="absolute inset-0 animate-aurora opacity-30"></div>
          
          {/* Geometric Prism Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="prism-shape prism-1"></div>
            <div className="prism-shape prism-2"></div>
            <div className="prism-shape prism-3"></div>
            <div className="prism-shape prism-4"></div>
            <div className="prism-shape prism-5"></div>
            <div className="prism-shape prism-6"></div>
          </div>
          
          {/* Floating Light Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  animation: `float ${3 + Math.random() * 8}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  boxShadow: `0 0 ${Math.random() * 30 + 10}px currentColor`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              />
            ))}
          </div>
          
          {/* Sparkle Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Prism Light Refraction Lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="light-ray light-ray-1"></div>
            <div className="light-ray light-ray-2"></div>
            <div className="light-ray light-ray-3"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8">
                <span className="text-gradient-primary text-glow">
                  Transform Through
                </span>
                <br />
                <span className="text-gradient-secondary text-glow">
                  Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                <span className="text-gradient-primary font-semibold">
                  Advanced Software Solutions, AI Development & Digital Transformation
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary flex items-center space-x-3">
                <span>Start Your Journey</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <button className="btn-secondary flex items-center space-x-3">
                <Play className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                <span>Explore Solutions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3">
          <div className="text-sm text-purple-400 font-medium animate-pulse">Scroll to explore</div>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 gradient-bg-1 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient-primary text-glow">
                Our Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card animate-card-hover"
              >
                <div className="relative z-10">
                  <div className="text-purple-400 mb-8 transition-all duration-300 group-hover:text-pink-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                        <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 gradient-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient-primary text-glow">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="service-card hover-glow">
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg-1">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gradient-primary text-glow">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help you automate processes, innovate solutions, and elevate your digital presence.
          </p>
          <button className="btn-primary flex items-center space-x-3 mx-auto">
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F14] py-16 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">
                  PrismifyCore
                </span>
              </div>
              <p className="text-gray-400 text-lg">
                Transform Through Innovation
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Web Development</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">AI & Machine Learning</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Automation</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">About Us</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Careers</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Blog</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Connect</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">LinkedIn</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Twitter</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">GitHub</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Email</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PrismifyCore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernSoftwareServicesWebsite;