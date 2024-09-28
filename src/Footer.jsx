import React from 'react';
import './footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <div className="footer-bar">
      <div className="footer-left">
        <span className="footer-icon">🌟</span> {/* Star icon for branding */}
        <span className="footer-brand">EDORA</span> {/* Brand name */}
      </div>
      <div className="footer-center">
        <p className="footer-text">Transforming service delivery through innovation.</p>
        <div className="social-icons">
          <span className="social-icon">🔗</span> {/* Placeholder for links */}
          <span className="social-icon">📧</span>
          <span className="social-icon">🌐</span>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <span> | </span>
          <a href="#terms" className="footer-link">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
