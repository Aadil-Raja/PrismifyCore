import React, { useState, useEffect } from 'react';
import './About.css'

const About = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const fullText = "Transforming visions into digital reality";
  
  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);


  return (
    <section id="about" className='about'>
      <div className="container">
        <div className="section-container">
          <div className="section-header">
            <h2>About Us</h2>
            <div className="typewriter-container">
              <p className="typewriter-text">
                {typedText}
                <span className="cursor">|</span>
              </p>
            </div>
          </div>
          <div className="about-content">
            <p>
              At PrismifyCore, we believe in the power of technology to transform businesses.
              Our mission is to deliver innovative web solutions and intelligent automation
              that illuminate new possibilities for growth and efficiency.
            </p>
            <p>
              We combine cutting-edge technology with creative design to build digital
              experiences that not only look stunning but perform exceptionally.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;