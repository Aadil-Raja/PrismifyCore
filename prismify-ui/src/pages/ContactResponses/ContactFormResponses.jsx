import React, { useState, useEffect, useRef } from 'react';
import './ContactFormResponses.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactFormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchResponses = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem('authToken'); // get from localStorage

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/contact/get-all-contacts`,
          {
            withCredentials: true, // allow cookies to be sent
            headers: {
              Authorization: `Bearer ${token}` // pass token from localStorage
            }
          }
        );

        setResponses(response.data);
        console.log('Fetched responses:', response.data);
      } catch (error) {
        console.error('Error fetching responses:', error);
        if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        // Unauthorized or Forbidden – redirect to login
        localStorage.removeItem('authToken'); // clear localStorage
        navigate('/admin/login');
      }
      } finally {
        setLoading(false);
      }
    };


    fetchResponses();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('display-contact-animate-in');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  const handleViewMessage = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem('authToken');

    await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/delete-contact/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setResponses(responses.filter(response => response.id !== id));
    if (expandedRow === id) setExpandedRow(null);
  } catch (error) {
    console.error('Error deleting response:', error);
    if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        // Unauthorized or Forbidden – redirect to login
        localStorage.removeItem('authToken'); // clear localStorage
        navigate('/admin/login');
      }
  }
};



  const formatDate = (dateString) => {
    return dateString || 'N/A';
  };

  return (
    <div className="display-contact-page">
      <div className="display-contact-container">
        <div className="display-contact-header" ref={titleRef}>
          <h1 className="display-contact-title">ContactForm Responses</h1>
          <p className="display-contact-subtitle">View and manage all contact form submissions.</p>
        </div>

        {loading ? (
          <div className="display-contact-loading">
            <div className="display-contact-spinner"></div>
            <p>Loading responses...</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="display-contact-table-container display-contact-desktop-view">
              <div className="display-contact-table-wrapper">
                <table className="display-contact-table">
                  <thead className="display-contact-table-header">
                    <tr>
                      <th className="display-contact-th">Name</th>
                      <th className="display-contact-th">Email</th>
                      <th className="display-contact-th">Company Name</th>
                      <th className="display-contact-th">Updated At</th>
                      <th className="display-contact-th">Action</th>
                    </tr>
                  </thead>
                  <tbody className="display-contact-table-body">
                    {responses.map((response) => (
                      <React.Fragment key={response.id}>
                        <tr className="display-contact-table-row">
                          <td className="display-contact-td display-contact-name">
                            {response.name}
                          </td>
                          <td className="display-contact-td display-contact-email">
                            {response.email}
                          </td>
                          <td className="display-contact-td display-contact-date">
                            {response.company || 'N/A'}
                          </td>
                          <td className="display-contact-td display-contact-date">
                            {formatDate(response.updatedAt)}
                          </td>
                          <td className="display-contact-td display-contact-action">
                            <button
                              className="display-contact-view-btn"
                              onClick={() => handleViewMessage(response.id)}
                            >
                              View Message
                            </button>
                            <button
                              className="display-contact-delete-btn"
                              onClick={() => handleDelete(response.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        {expandedRow === response.id && (
                          <tr className="display-contact-expanded-row">
                            <td colSpan="5" className="display-contact-message-cell">
                              <div className="display-contact-message-container">
                                <div className="display-contact-message-header">
                                  <h3>Message from {response.name}</h3>
                                  <button
                                    className="display-contact-close-btn"
                                    onClick={() => setExpandedRow(null)}
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="display-contact-message-content">
                                  <p>{response.message}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="display-contact-mobile-view">
              <div className="display-contact-cards-container">
                {responses.map((response) => (
                  <div key={response.id} className="display-contact-card">
                    <div className="display-contact-card-header">
                      <div className="display-contact-card-info">
                        <h3 className="display-contact-card-name">{response.name}</h3>
                        <p className="display-contact-card-email">{response.email}</p>
                        <p className="display-contact-card-company">Company: {response.company || 'N/A'}</p>
                      </div>
                      <div className="display-contact-card-actions">
                        <button
                          className={`display-contact-card-btn ${expandedRow === response.id ? 'display-contact-active' : ''}`}
                          onClick={() => handleViewMessage(response.id)}
                        >
                          {expandedRow === response.id ? 'Hide' : 'View'}
                        </button>
                        <button
                          className="display-contact-card-delete-btn"
                          onClick={() => handleDelete(response.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    
                    <div className="display-contact-card-dates">
                      <div className="display-contact-card-date">
                        <span className="display-contact-date-label">Updated:</span>
                        <span className="display-contact-date-value">{formatDate(response.updatedAt)}</span>
                      </div>
                    </div>

                    {expandedRow === response.id && (
                      <div className="display-contact-card-message">
                        <div className="display-contact-card-message-header">
                          <h4>Message</h4>
                        </div>
                        <div className="display-contact-card-message-content">
                          <p>{response.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Particle Animation Background */}
      <div className="display-contact-background-effects">
        <div className="display-contact-particle display-contact-particle-1"></div>
        <div className="display-contact-particle display-contact-particle-2"></div>
        <div className="display-contact-particle display-contact-particle-3"></div>
        <div className="display-contact-particle display-contact-particle-4"></div>
        <div className="display-contact-particle display-contact-particle-5"></div>
        <div className="display-contact-particle display-contact-particle-6"></div>
        <div className="display-contact-particle display-contact-particle-7"></div>
        <div className="display-contact-particle display-contact-particle-8"></div>
      </div>
    </div>
  );
};

export default ContactFormResponses;