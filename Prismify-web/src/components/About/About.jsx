import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="container">
          <div className="section-header">
            <h2>About PrismifyCore</h2>
            <div className="pulse-icon">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
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