import React from 'react';

const Footer = () => {
  return (
    <div className="footer-bar full-width-container">
      <div className="footer-left">
        <span className="footer-icon">🌟</span> {/* Star icon for branding */}
        <span className="footer-brand">EDORA</span> {/* Brand name */}
      </div>
      <div className="footer-center">
        <div className="social-icons">
          <span className="social-icon">🔗</span>
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
