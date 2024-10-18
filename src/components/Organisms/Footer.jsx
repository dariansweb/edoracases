import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <nav className="footer-nav">
          <hr />
          <hr />
          <h3 className="light">Explore</h3>
          <hr />
          <hr />
          <ul>
            <li className="footer-links">
              <a href="/">Home</a>
            </li>
            <li className="footer-links">
              <a href="/about">About</a>
            </li>
            <li className="footer-links">
              <a href="/services">Services</a>
            </li>
            <li className="footer-links">
              <a href="/contact">Contact</a>
            </li>
            <li className="footer-links">
              <a href="/prototypes">Prototypes</a>
            </li>
            <li className="footer-links">
              <a href="https://www.github.com/dariansweb/edoracases">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-center">
        <nav className="footer-nav">
          <hr />
          <hr />
          <h3 className="light">Programs</h3>
          <hr />
          <hr />
          <ul>
            <li className="footer-links">
              <a href="/child-and-family">Child & Family</a>
            </li>
            <li className="footer-links">
              <a href="/aging">Aging</a>
            </li>
            <li className="footer-links">
              <a href="/disability">Disability</a>
            </li>
            <li className="footer-links">
              <a href="/juvenile-justice">Juvenile Justice</a>
            </li>
            <li className="footer-links">
              <a href="/medical">Medical</a>
            </li>
            <li className="footer-links">
              <a href="/provider-services">Provider Services</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/darianmross/"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a
            className="footer-link"
            href="mailto:info@edoracases.com"
            aria-label="Email"
          >
            <span>Email</span>
          </a>
          <a
            className="footer-link"
            href="https://www.edoracases.com/contact"
            aria-label="Website"
          >
            <span>EDORA</span>
          </a>
        </div>
        <div className="footer-back-to-top">
          <a href="#top" className="back-to-top-show">
            ↑ Back to Top
          </a>
        </div>
        <hr />
        <hr />
        <span className="footer-icon">🌟</span> {/* Star icon for branding */}
        <span className="footer-brand">EDORA</span> {/* Brand name */}
        &copy; {new Date().getFullYear()} EDORA, All rights reserved. .{" "}
        <div className="footer-legal">
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
        </div>
        <hr />
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
