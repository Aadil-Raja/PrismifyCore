import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ContactFormResponses from './pages/ContactResponses/ContactFormResponses.jsx';
import Login from './pages/Login/Login.jsx';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/AuthContext.jsx';
function App() {
  return (
    <AuthProvider>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contacts/display" element={<ProtectedRoute><ContactFormResponses /></ProtectedRoute>} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;