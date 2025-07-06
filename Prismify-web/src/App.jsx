import React, { useState, useEffect } from 'react';
import './App.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from './assets/logo_with_no_bg.png';
import ServicesSlider from './components/servicesslider/Services';
import HeroSection from './components/Hero/HeroSection';

const PrismifyCore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };




  return (

    // {/* Shapes Description And Particle Effect*/}

    <div className="app">
       // {/* Shapes Description And Particle Effect*/}
      <div className="geometric-bg">
        <div className="floating-shapes">
          <div className="shape-container shape-1">
            <div className="geometric-shape neural-node">
              <div className="node-core"></div>
              <div className="node-ring ring-1"></div>
              <div className="node-ring ring-2"></div>
              <div className="node-ring ring-3"></div>
              <div className="connection connection-1"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
              <div className="connection connection-4"></div>
            </div>
          </div>

          {/* <div className="shape-container shape-2">
            <div className="geometric-shape hexagonal-prism">
              <div className="face face-1"></div>
              <div className="face face-2"></div>
              <div className="face face-3"></div>
              <div className="face face-4"></div>
              <div className="face face-5"></div>
              <div className="face face-6"></div>
              <div className="face face-top"></div>
              <div className="face face-bottom"></div>
            </div>
          </div> */}

          <div className="shape-container shape-3">
            <div className="geometric-shape data-crystal">
              <div className="crystal-core"></div>
              <div className="crystal-layer layer-1"></div>
              <div className="crystal-layer layer-2"></div>
              <div className="crystal-layer layer-3"></div>
              <div className="data-flow flow-1"></div>
              <div className="data-flow flow-2"></div>
              <div className="data-flow flow-3"></div>
            </div>
          </div>

          <div className="shape-container shape-4">
            <div className="geometric-shape neural-network">
              <div className="network-node node-1"></div>
              <div className="network-node node-2"></div>
              <div className="network-node node-3"></div>
              <div className="network-node node-4"></div>
              <div className="network-node node-5"></div>
              <div className="network-connection conn-1"></div>
              <div className="network-connection conn-2"></div>
              <div className="network-connection conn-3"></div>
              <div className="network-connection conn-4"></div>
              <div className="network-connection conn-5"></div>
              <div className="network-connection conn-6"></div>
            </div>
          </div>

          {/* <div className="shape-container shape-5">
            <div className="geometric-shape quantum-prism">
              <div className="face face-1"></div>
              <div className="face face-2"></div>
              <div className="face face-3"></div>
              <div className="face face-4"></div>
              <div className="face face-5"></div>
              <div className="face face-6"></div>
              <div className="quantum-field field-1"></div>
              <div className="quantum-field field-2"></div>
              <div className="quantum-field field-3"></div>
            </div>
          </div> */}

          {/* <div className="shape-container shape-6">
            <div className="geometric-shape holographic-cube">
              <div className="holo-face face-1"></div>
              <div className="holo-face face-2"></div>
              <div className="holo-face face-3"></div>
              <div className="holo-face face-4"></div>
              <div className="holo-face face-5"></div>
              <div className="holo-face face-6"></div>
              <div className="holo-glow"></div>
            </div>
          </div> */}
        </div>

        <div className="particle-field">
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
          <div className="particle particle-small"></div>
          <div className="particle particle-medium"></div>
          <div className="particle particle-large"></div>
        </div>

        <div className="neural-connections">
          <div className="connection-line line-1"></div>
          <div className="connection-line line-2"></div>
          <div className="connection-line line-3"></div>
          <div className="connection-line line-4"></div>
          <div className="connection-line line-5"></div>
          <div className="connection-line line-6"></div>
          <div className="connection-line line-7"></div>
          <div className="connection-line line-8"></div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="logo">
           <img src={logo} alt="PrismifyCore Logo" className="logo-image" />
            {/* <span className="logo-text">PrismifyCore</span> */}
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('tech-stack')}>Tech Stack</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
        {/* <div className="section-container">
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Illuminate Innovation with <span className="gradient-text">PrismifyCore</span>
                </h1>
                <p className="hero-subtitle">
                  Transform your digital vision into reality with cutting-edge web solutions
                  and AI-powered automation that drives results.
                </p>
                <button className="cta-button" onClick={() => scrollToSection('contact')}>
                  Get Started
                </button>
              </div>
              <div className="hero-visual">
                <div className="lottie-container enlarged">
                  <DotLottieReact
                     //src="https://lottie.host/34acda39-5016-4143-86e8-322ce66dc9ab/VALkPyktOv.lottie"
                       src="https://lottie.host/841549d0-4c72-4abb-878b-83d430904ba6/AjyEbk1bx2.lottie"
                     loop
                    autoplay
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </div> */}
      <HeroSection scrollToSection={scrollToSection} />
      

      {/* About Section */}

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
      

      {/* Services Section */}

        <ServicesSlider />
      

      

      {/* Tech Stack Section */}

        <section id="tech-stack" className="tech-stack">

                  <div className="container">
            <div className="section-header">
              <h2>Tech Stack</h2>
            </div>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon react-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85S10.13 13.04 10.13 12s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95" />
                  </svg>
                </div>
                <h3>React</h3>
                <p>Modern component-based architecture for building dynamic user interfaces</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.4V9.47c0-.16-.14-.3-.31-.3H7.18c-.18 0-.31.14-.31.31v8.17c0 .64-.69 1.28-1.8.73l-1.85-1.12c-.10-.06-.17-.17-.17-.28V8.41c0-.12.07-.23.17-.28l7.44-4.3c.10-.06.24-.06.33 0l7.44 4.3c.10.05.17.16.17.28v8.58c0 .11-.07.22-.17.28l-7.44 4.3c-.09.06-.24.06-.33 0l-1.9-1.05c-.08-.04-.16-.04-.21 0-.26.15-.31.22-.76.46-.14.08-.35.2-.35.47 0 .18.14.35.33.47l2.49 1.45c.27.16.58.16.85 0l7.44-4.3c.48-.28.78-.8.78-1.36V8.41c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm-5.28 7.65c2.03 0 3.31.89 3.31 2.47 0 1.68-1.18 2.03-3.08 2.32-1.49.23-1.8.35-1.8.76 0 .34.31.76 1.46.76.87 0 1.83-.19 2.35-.48.08-.05.18-.03.21.05l.6 1.04c.05.08.03.18-.05.26-.82.66-1.94.85-3.09.85-2.06 0-3.35-.85-3.35-2.51 0-1.67 1.18-2.24 3.23-2.32 1.52-.07 1.65-.35 1.65-.73 0-.31-.15-.73-1.46-.73-.87 0-1.83.19-2.35.48-.08.05-.18.03-.21-.05l-.6-1.04c-.05-.08-.03-.18.05-.26.82-.66 1.94-.85 3.09-.85z" />
                  </svg>
                </div>
                <h3>Node.js</h3>
                <p>Scalable server-side JavaScript runtime for building robust backend systems</p>
              </div>
            </div>
          </div>
        </section>


      {/* Footer/Contact Section */}

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
      </div>

  );
};

export default PrismifyCore;