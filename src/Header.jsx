// Header.jsx
import React from 'react';
import './header.css'; // Import the new CSS file here

const Header = () => {
  return (
    <header className="header-bar">
      <div className="header-left">
        <span className="star-icon">★</span>
      </div>
      <div className="header-center">
        <h1 className="header-title">EDORA</h1>
      </div>
      <div className="header-right">
        <span className="hamburger-icon">☰</span>
      </div>
    </header>
  );
};

export default Header;
