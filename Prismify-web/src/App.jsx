import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ContactFormResponses from './pages/ContactResponses/ContactFormResponses.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/displaycontacts" element={<ContactFormResponses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;