import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="prismify-footer-wrapper">
      <div className='prismify-footer-container'>
        <div className="prismify-footer-content">
          <div className="prismify-footer-main">
            <div className="prismify-footer-heading">
              <h3 className="prismify-footer-title">Ready to Transform Your Ideas?</h3>
              <p className="prismify-footer-subtitle">Let's discuss how PrismifyCore can illuminate your next project.</p>
            </div>
            <div className="prismify-footer-sections">
              <div className="prismify-footer-grid">
                <div className="prismify-footer-column">
                  <div className="prismify-footer-column-header">
                    <h4 className="prismify-footer-column-title">Connect</h4>
                  </div>
                  <div className="prismify-footer-contact">
                    <a href="mailto:prismifycore@gmail.com" className="prismify-footer-email-btn">
                      prismifycore@gmail.com
                    </a>
                  </div>
                </div>
                <div className="prismify-footer-column">
                  <div className="prismify-footer-column-header">
                    <h4 className="prismify-footer-column-title">Follow</h4>
                  </div>
                  <div className="prismify-footer-social">
                    <a href="https://www.instagram.com/prismifycore?igsh=MWYwamp0bXBqeHNzcQ==" target="_blank" rel="noopener noreferrer" className="prismify-footer-social-link">
                      <FaInstagram size={40} color="#E4405F" />
                    </a>
                    <a href="https://www.linkedin.com/company/prismifycore/" target="_blank" rel="noopener noreferrer" className="prismify-footer-social-link">
                      <FaLinkedin size={40} color="#0A66C2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prismify-footer-bottom">
          <div className="prismify-footer-bottom-content">
            <div className="prismify-footer-copyright">
              <p>© 2024 PrismifyCore. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;