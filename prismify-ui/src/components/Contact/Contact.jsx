import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const fullText = "Ready to transform your ideas into powerful digital solutions? Let's start the conversation.";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('contact-animate-in');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      setFormData({ name: '', email: '', company: '', message: '' });
      console.log('Form submitted successfully:', response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Email",
      info: "contact@prismifycore.com"
    }
    //,
    // {
    //   icon: (
    //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     </svg>
    //   ),
    //   title: "Phone",
    //   info: "+1 (555) 123-4567"
    // },
    // {
    //   icon: (
    //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    //       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //       <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     </svg>
    //   ),
    //   title: "Location",
    //   info: "Karachi, Pakistan"
    // }
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="contact-main-wrapper">
          {/* Hero Section */}
          <div className="contact-hero-section" ref={heroRef}>
            <div className="contact-hero-content">
              <h1 className="contact-main-title">Let's Connect</h1>
              <p className="contact-main-subtitle">
                {/* {typedText} */}
                Ready to transform your ideas into powerful digital solutions? Let's start the conversation.
                <span className="contact-cursor">|</span>
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="contact-content-section" ref={contentRef}>
            <div className="contact-content-grid">
              {/* Contact Information */}
              <div className="contact-info-section">
                <div className="contact-info-wrapper">
                  <h3 className="contact-section-title">Get in Touch</h3>
                  <p className="contact-section-description">
                    Whether you're looking to build a new application, integrate AI automation,
                    or scale your existing platform, we're here to help turn your vision into reality.
                  </p>

                  <div className="contact-info-list">
                    {contactInfo.map((item, index) => (
                      <div 
                        key={index} 
                        className="contact-info-item"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <div className="contact-info-icon">
                          {item.icon}
                        </div>
                        <div className="contact-info-details">
                          <h4 className="contact-info-title">{item.title}</h4>
                          <p className="contact-info-text">{item.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="contact-form-wrapper">
                  <h3 className="contact-section-title">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-input-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="contact-input"
                        />
                      </div>
                      <div className="contact-input-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div className="contact-input-group">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name (Optional)"
                        className="contact-input"
                      />
                    </div>

                    <div className="contact-input-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        rows="6"
                        required
                        className="contact-textarea"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <span className="contact-btn-content">
                          <span className="contact-spinner"></span> 
                          Sending...
                        </span>
                      ) : (
                        <span className="contact-btn-content">
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="contact-background-effects">
        <div className="contact-particle contact-particle-1"></div>
        <div className="contact-particle contact-particle-2"></div>
        <div className="contact-particle contact-particle-3"></div>
        <div className="contact-particle contact-particle-4"></div>
        <div className="contact-particle contact-particle-5"></div>
        <div className="contact-particle contact-particle-6"></div>
        <div className="contact-particle contact-particle-7"></div>
        <div className="contact-particle contact-particle-8"></div>
      </div>
    </div>
  );
};

export default Contact;