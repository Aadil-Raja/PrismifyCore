import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3>Ready to Transform Your Ideas?</h3>
            <p>Let's discuss how PrismifyCore can illuminate your next project.</p>
            <div className="contact-info">
              <a href="mailto:contact@prismifycore.com" className="contact-link">
                contact@prismifycore.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PrismifyCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;