import React from 'react';
import './Footer.css';
import UpworkIcon from '../../assets/upwork.png';
import InstaIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin.png';


const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className='section-container'>
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand-section">
                <h3>Ready to Transform Your Ideas?</h3>
                <p>Let's discuss how PrismifyCore can illuminate your next project.</p>
              </div>

              <div className="footer-grid-wrapper">
                <div className="footer-grid">
                  <div className="footer-column">
                    <div className="footer-column-header">
                      <h4>Connect</h4>
                    </div>
                    <div className="footer-contact-primary">
                      <a href="mailto:prismifycore@gmail.com" className="contact-link footer-primary-cta">
                        prismifycore@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="footer-column">
                    <div className="footer-column-header">
                      <h4>Follow</h4>
                    </div>
                    <div className="footer-social-grid">
                      <div className="footer-social-item">
                        <a href="https://www.instagram.com/prismifycore?igsh=MWYwamp0bXBqeHNzcQ==">
                        <img src={InstaIcon} alt="Instagram" className="footer-social-icon" />
                        </a>
                      </div>
                      <div className="footer-social-item">
                        <a href="https://www.linkedin.com/company/prismifycore/">
                        <img src={LinkedInIcon} alt="LinkedIn" className="footer-social-icon" />
                        </a>
                      </div>
                    </div>


                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="footer-bottom">

            <div className="footer-bottom-content">

              <div className="footer-bottom-left">
                <p>&copy; 2024 PrismifyCore. All rights reserved.</p>
              </div>
              <div className="footer-bottom-right">
                <div className="footer-bottom-links">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;