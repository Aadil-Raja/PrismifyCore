// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const { login } = useAuth()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     }
    
//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } 
//     // else if (formData.password.length < 6) {
//     //   newErrors.password = 'Password must be at least 6 characters';
//     // }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       setIsLoading(false);
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
//         username: formData.username,
//         password: formData.password
//       },{ withCredentials: true });
      
//       if (response.data.token) {
//         localStorage.setItem('authToken', response.data.token);
//         navigate('/contacts/display');
//       } else {
//         setErrors({ general: 'Login failed: No token received' });
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrors({ general: error.response?.data?.message || 'Login failed. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="prismify-admin-login-container">
//       <div className="prismify-admin-login-background">
//         <div className="prismify-admin-login-particles">
//           <div className="prismify-admin-particle prismify-admin-particle-1"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-2"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-3"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-4"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-5"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-6"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-7"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-8"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-9"></div>
//           <div className="prismify-admin-particle prismify-admin-particle-10"></div>
//         </div>
//       </div>

//       <div className="prismify-admin-login-wrapper">
//         <div className="prismify-admin-login-card">
//           <div className="prismify-admin-login-header">
//             <div className="prismify-admin-login-logo">
//               <div className="prismify-admin-logo-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M12 2L2 7v10c0 5.55 3.84 10 10 10s10-4.45 10-10V7L12 2z"/>
//                   <path d="M12 8v8"/>
//                   <path d="M8 12h8"/>
//                 </svg>
//               </div>
//               <h1 className="prismify-admin-login-title">Prismify Core</h1>
//             </div>
//             <p className="prismify-admin-login-subtitle">Admin Portal</p>
//           </div>

//           <form className="prismify-admin-login-form" onSubmit={handleSubmit}>
//             <div className="prismify-admin-form-group">
//               <div className="prismify-admin-input-wrapper">
//                 <div className="prismify-admin-input-icon">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
//                     <circle cx="12" cy="7" r="4"/>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className={`prismify-admin-input ${errors.username ? 'prismify-admin-input-error' : ''}`}
//                   placeholder="Username"
//                   autoComplete="username"
//                 />
//               </div>
//               {errors.username && (
//                 <span className="prismify-admin-error-message">{errors.username}</span>
//               )}
//             </div>

//             <div className="prismify-admin-form-group">
//               <div className="prismify-admin-input-wrapper">
//                 <div className="prismify-admin-input-icon">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                     <circle cx="12" cy="16" r="1"/>
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`prismify-admin-input ${errors.password ? 'prismify-admin-input-error' : ''}`}
//                   placeholder="Password"
//                   autoComplete="current-password"
//                 />
//                 <button
//                   type="button"
//                   className="prismify-admin-password-toggle"
//                   onClick={togglePasswordVisibility}
//                   aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showPassword ? (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//                       <line x1="1" y1="1" x2="23" y2="23"/>
//                     </svg>
//                   ) : (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                       <circle cx="12" cy="12" r="3"/>
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <span className="prismify-admin-error-message">{errors.password}</span>
//               )}
//             </div>

//             {errors.general && (
//               <span className="prismify-admin-error-message prismify-admin-general-error">{errors.general}</span>
//             )}

//             <button
//               type="submit"
//               className="prismify-admin-login-button"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <div className="prismify-admin-loading-spinner">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
//                   </svg>
//                 </div>
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </form>

//           <div className="prismify-admin-login-footer">
//             <p className="prismify-admin-footer-text">
//               Secure admin access to Prismify Core
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    setSuccessMessage('');
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        username: formData.username,
        password: formData.password
      }, { withCredentials: true });
      console.log('Login response:', response.data);
      
      if (response.data.token) {
        login(response.data.token);
        setSuccessMessage(response.data.message);
        navigate('/contacts/display');
      } else {
        setErrors({ general: 'Login failed: No token received' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: error.response?.data?.message || 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="prismify-admin-login-container">
      <div className="prismify-admin-login-background">
        <div className="prismify-admin-login-particles">
          <div className="prismify-admin-particle prismify-admin-particle-1"></div>
          <div className="prismify-admin-particle prismify-admin-particle-2"></div>
          <div className="prismify-admin-particle prismify-admin-particle-3"></div>
          <div className="prismify-admin-particle prismify-admin-particle-4"></div>
          <div className="prismify-admin-particle prismify-admin-particle-5"></div>
          <div className="prismify-admin-particle prismify-admin-particle-6"></div>
          <div className="prismify-admin-particle prismify-admin-particle-7"></div>
          <div className="prismify-admin-particle prismify-admin-particle-8"></div>
          <div className="prismify-admin-particle prismify-admin-particle-9"></div>
          <div className="prismify-admin-particle prismify-admin-particle-10"></div>
        </div>
      </div>

      <div className="prismify-admin-login-wrapper">
        <div className="prismify-admin-login-card">
          <div className="prismify-admin-login-header">
            <div className="prismify-admin-login-logo">
              <div className="prismify-admin-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 10 10s10-4.45 10-10V7L12 2z"/>
                  <path d="M12 8v8"/>
                  <path d="M8 12h8"/>
                </svg>
              </div>
              <h1 className="prismify-admin-login-title">Prismify Core</h1>
            </div>
            <p className="prismify-admin-login-subtitle">Admin Portal</p>
          </div>

          <form className="prismify-admin-login-form" onSubmit={handleSubmit}>
            <div className="prismify-admin-form-group">
              <div className="prismify-admin-input-wrapper">
                <div className="prismify-admin-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`prismify-admin-input ${errors.username ? 'prismify-admin-input-error' : ''}`}
                  placeholder="Username"
                  autoComplete="username"
                />
              </div>
              {errors.username && (
                <span className="prismify-admin-error-message">{errors.username}</span>
              )}
            </div>

            <div className="prismify-admin-form-group">
              <div className="prismify-admin-input-wrapper">
                <div className="prismify-admin-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`prismify-admin-input ${errors.password ? 'prismify-admin-input-error' : ''}`}
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="prismify-admin-password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="prismify-admin-error-message">{errors.password}</span>
              )}
            </div>

            {errors.general && (
              <span className="prismify-admin-error-message prismify-admin-general-error">{errors.general}</span>
            )}
            {successMessage && (
              <span className="prismify-admin-success-message">{successMessage}</span>
            )}

            <button
              type="submit"
              className="prismify-admin-login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="prismify-admin-loading-spinner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="prismify-admin-login-footer">
            <p className="prismify-admin-footer-text">
              Secure admin access to Prismify Core
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;