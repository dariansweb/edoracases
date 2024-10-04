import React from "react";
import linkedInIcon from "../assets/images/social/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-bar">
      <div className="footer-left">
        <span className="footer-icon">🌟</span> {/* Star icon for branding */}
        <span className="footer-brand">EDORA</span> {/* Brand name */}
        &copy; {new Date().getFullYear()} EDORA, All rights reserved. .{" "}
      </div>

      <div className="footer-center">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/darianmross/"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a href="mailto:info@edoracases.com" aria-label="Email">
            <span>Email</span>
          </a>
          <a href="https://www.edoracases.com" aria-label="Website">
            <span>EDORA</span>
          </a>
        </div>
        <div className="footer-search">
          <input type="text" placeholder="Search EDORA..." />
          <button>🔍</button>
        </div>
      </div>

      <div className="footer-right">
        <nav className="footer-nav">
          <h4>Explore</h4>
          <ul className="footerListItems">
            <li className="footerListItems">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <h4>Programs</h4>
          <ul>
            <li>
              <a href="/child-and-family">Child & Family</a>
            </li>
            <li>
              <a href="/aging">Aging</a>
            </li>
            <li>
              <a href="/disability">Disability</a>
            </li>
            <li>
              <a href="/juvenile-justice">Juvenile Justice</a>
            </li>
            <li>
              <a href="/medical">Medical</a>
            </li>
            <li>
              <a href="/provider-services">Provider Services</a>
            </li>
          </ul>
        </nav>

        <div className="footer-legal">
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
        </div>

        <div className="footer-back-to-top">
          <a href="#top" className="back-to-top-show">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </div>    
  );
};

export default Footer;
