import React, { useState, useEffect } from 'react';
import './App.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from './assets/logo_with_no_bg.png';
import ServicesSlider from './components/servicesslider/Services';
import HeroSection from './components/Hero/HeroSection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';

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
     <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />

  ZZ
      <HeroSection scrollToSection={scrollToSection} />
      

      {/* About Section */}
             <About />
       
      

      {/* Services Section */}

        <ServicesSlider />
      

      

      {/* Tech Stack Section */}
 <TechStack />


      {/* Footer/Contact Section */}
          <Footer />
    
      </div>

  );
};

export default PrismifyCore;