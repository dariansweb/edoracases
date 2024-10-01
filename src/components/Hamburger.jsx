import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <nav className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <ul>
          {/* Use Link for internal navigation */}
          <li><Link to="../pages/">Home</Link></li>
          <li><Link to="../pages/About">About</Link></li>
          <li><Link to="../pages/Services">Services</Link></li>
          <li><Link to="../pages/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
