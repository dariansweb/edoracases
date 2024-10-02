import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles//Heading.css';

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
      <span className="material-symbols-outlined">home</span>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
