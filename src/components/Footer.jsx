import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-left"></div>
      <nav className="footer-nav">
      <hr /><hr />        
        <h3 className="light">Explore</h3>
        <hr /><hr />
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
          <li>
            <a href="/prototypes">Prototypes</a>
          </li>
          <li>
            <a href="https://www.github.com/dariansweb/edoracases">Prototypes</a>
          </li>          
        </ul>
        <hr /><hr />
        <h3 className="light">Programs</h3>
        <hr /><hr />          
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
      <div className="footer-center">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/darianmross/"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a href="divmailto:info@edoracases.com" aria-label="Email">
            <span>Email</span>
          </a>
          <a href="https://www.edoracases.com" aria-label="Website">
            <span>EDORA</span>
          </a>
        </div>
        {/* <div className="footer-search">
          <input type="text" placeholder="Search EDORA..." />
          <button>🔍</button>
        </div> */}
      </div>

      <div className="footer-right">
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
        <div className="footer-back-to-top">
          <a href="#top" className="back-to-top-show">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
