import React, { useEffect, useRef, useState } from 'react';
import './whyChooseUs.css';
import { Zap, Award, Clock, Package, DollarSign } from "lucide-react";
import { Users, ShieldCheck, Lightbulb } from "lucide-react";
const WhyChooseUs = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "We're not just another development agency. We're your technology partners.";

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('why-choose-animate-in');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);


const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Modern Technology Stack",
    description: "Cutting-edge development using the latest frameworks for optimal performance."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Agile Development Methodology",
    description: "Fast, flexible development process with continuous integration and regular client feedback."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support & Maintenance",
    description: "Round-the-clock technical support and proactive maintenance to keep your systems running smoothly."
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Scalable & Future-Proof Solutions",
    description: "Architecture designed to grow with your business and adapt to future technological changes."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Competitive Pricing & Flexible Plans",
    description: "Transparent pricing models with flexible payment options tailored to your budget and requirements."
  }
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Experienced developers"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "Cutting-edge solutions using the latest technologies"
  }
];
  return (
    <div className="app">
      {/* Main content using container from index.css */}
      <div className="container">
        <section id="why-choose-us" className="why-choose-main-wrapper">
          <div className="why-choose-header" ref={titleRef}>
            <h2 className="why-choose-title">
              Why Choose Prismify Core?
            </h2>
            <div className="why-choose-typewriter-container">
              <p className="why-choose-typewriter-text">
                {/* {typedText} */}
                We're not just another development agency. We're your technology partners
                <span className="why-choose-cursor">|</span>
              </p>
            </div>
          </div>
          
          <div className="why-choose-description" ref={descriptionRef}>
            <p className="why-choose-description-text">
              We're committed to transforming your vision into reality with precision, 
              innovation, and unwavering dedication to excellence.
            </p>
          </div>

          <div className="why-choose-features" ref={featuresRef}>
            <div className="why-choose-features-list">
              {features.map((feature, index) => (
                <div key={index} className="why-choose-feature-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="why-choose-feature-content">
                    <div className="why-choose-feature-icon">
                      {feature.icon}
                    </div>
                    <div className="why-choose-feature-text">
                      <h3 className="why-choose-feature-title">{feature.title}</h3>
                      <p className="why-choose-feature-description">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-choose-benefits" ref={benefitsRef}>
            <div className="why-choose-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="why-choose-benefit-card" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="why-choose-benefit-glow"></div>
                  <div className="why-choose-benefit-content">
                    <div className="why-choose-benefit-icon">
                      {benefit.icon}
                    </div>
                    <h3 className="why-choose-benefit-title">{benefit.title}</h3>
                    <p className="why-choose-benefit-description">{benefit.description}</p>
                  </div>
                  <div className="why-choose-benefit-border-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Background Effects */}
      <div className="why-choose-background-effects">
        <div className="why-choose-particle why-choose-particle-1"></div>
        <div className="why-choose-particle why-choose-particle-2"></div>
        <div className="why-choose-particle why-choose-particle-3"></div>
        <div className="why-choose-particle why-choose-particle-4"></div>
        <div className="why-choose-particle why-choose-particle-5"></div>
        <div className="why-choose-particle why-choose-particle-6"></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;