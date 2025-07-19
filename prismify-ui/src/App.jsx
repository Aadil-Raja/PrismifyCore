import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/MainLayout.jsx';
// import About from './components/About/About.jsx'
// import Services from './components/servicesslider/Services.jsx'
// import Projects from './components/Projects/FeaturedProjects.jsx'
import Home from './components/Hero/HeroSection.jsx'
// import Contact from './components/LetsConnect/LetsConnect.jsx'
// import ContactFormResponses from './pages/ContactResponses/ContactFormResponses.jsx';
// import Login from './pages/Login/Login.jsx';
// import ProtectedRoute from './ProtectedRoute';
// import { AuthProvider } from './context/AuthContext.jsx';
import Services from './components/Services/Service.jsx'
import TechStack from './components/TechStack/TechStack.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    // <AuthProvider>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path="service" element={<Services />} />
              <Route path="techstack" element = {<TechStack/>} />
              <Route path="contact" element = {<Contact/>} />
            {/* <Route path="about" element={<About />} />
           
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
          {/* <Route path="/contacts/display" element={<ProtectedRoute><ContactFormResponses /></ProtectedRoute>} />
          <Route path="/admin/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;