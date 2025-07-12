import React, { useState, useEffect } from 'react';
import './LetsConnect.css';
import axios from 'axios';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fullText = "Ready to transform your ideas into powerful digital solutions? Let's start the conversation.";

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

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
    
    try{
        const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,    formData
        );

        setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        });
        console.log('Form submitted successfully:', response.data);
        setIsSubmitting(false);
        alert('Message sent successfully!');
        
    }catch (error) {
        console.error('Error submitting form:', error); 
         alert('Something went wrong. Please try again later.');
    }
    
    
    
    // Show success message (you can implement this)
    
  };

  return (
    <section id="contact" className="lets-connect">
      <div className="container">
        <div className="section-container">
          <div className="section-header">
            <h2>Let's Connect</h2>
            <div className="typewriter-container">
              <p className="typewriter-text">
                {typedText}
                <span className="cursor">|</span>
              </p>
            </div>
          </div>
          
          <div className="connect-content">
            <div className="connect-info">
              <div className="info-content">
                <h3 className="info-title">Get in Touch</h3>
                <p className="info-description">
                  Whether you're looking to build a new application, integrate AI automation,
                  or scale your existing platform, we're here to help turn your vision into reality.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <div className="contact-icon email-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h4>Email</h4>
                      <p>prismifycore@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon phone-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon location-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <h4>Location</h4>
                      <p>Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="connect-form">
              <div className="form-header">
                <h3>Send us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name (Optional)"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    className="form-textarea"
                    rows="5"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-text">
                      <span className="spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="btn-text">
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="lets-connect-background-effects">
        <div className="lets-connect-particle lets-connect-particle-1"></div>
        <div className="lets-connect-particle lets-connect-particle-2"></div>
        <div className="lets-connect-particle lets-connect-particle-3"></div>
        <div className="lets-connect-particle lets-connect-particle-4"></div>
        <div className="lets-connect-particle lets-connect-particle-5"></div>
        <div className="lets-connect-particle lets-connect-particle-6"></div>
        <div className="lets-connect-particle lets-connect-particle-7"></div>
        <div className="lets-connect-particle lets-connect-particle-8"></div>
        </div>
    </section>
  );
};

export default LetsConnect;