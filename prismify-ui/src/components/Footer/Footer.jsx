import React from 'react';
import './Footer.css';
// import UpworkIcon from '../../assets/upwork.png';
// import InstaIcon from '../../assets/instagram.png';
// import LinkedInIcon from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer-main-wrapper">
      <div className='section-container'>
        <div className="container">
          <div className="footer-content-area">
            <div className="footer-primary-section">
              <div className="footer-brand-intro">
                <h3>Ready to Transform Your Ideas?</h3>
                <p>Let's discuss how PrismifyCore can illuminate your next project.</p>
              </div>
              <div className="footer-columns-container">
                <div className="footer-info-grid">
                  <div className="footer-info-column">
                    <div className="footer-column-title">
                      <h4>Connect</h4>
                    </div>
                    <div className="footer-contact-section">
                      <a href="mailto:prismifycore@gmail.com" className="footer-contact-button footer-email-cta">
                        prismifycore@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="footer-info-column">
                    <div className="footer-column-title">
                      <h4>Follow</h4>
                    </div>
                    {/* <div className="footer-social-links">
                      <div className="footer-social-link">
                        <a href="https://www.instagram.com/prismifycore?igsh=MWYwamp0bXBqeHNzcQ==">
                        <img src={InstaIcon} alt="Instagram" className="footer-social-image" />
                        </a>
                      </div>
                      <div className="footer-social-link">
                        <a href="https://www.linkedin.com/company/prismifycore/">
                        <img src={LinkedInIcon} alt="LinkedIn" className="footer-social-image" />
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-section">
            <div className="footer-bottom-wrapper">
              <div className="footer-copyright-area">
                <p>&copy; 2024 PrismifyCore. All rights reserved.</p>
              </div>
              <div className="footer-bottom-extras">
                <div className="footer-decorative-links">
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