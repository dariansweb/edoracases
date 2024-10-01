import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainMenuItems, starMenuItems } from "../data/menuData"; // Importing both main and star menu items
  import "./styles/header.css"; 

// The Header component 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStarMenuOpen, setIsStarMenuOpen] = useState(false); // State to manage the star menu
  const [isExploding, setIsExploding] = useState(false);
  const menuRef = useRef(null);
  
  const handleClick = (icon) => {
    if (icon === "hamburger-icon") {
      setIsMenuOpen((prev) => !prev);
      setIsExploding((prev) => !prev);
      setTimeout(() => setIsExploding(false), 300);
    }
    if (icon === "star-icon") {
      setIsStarMenuOpen((prev) => !prev); // Toggle the star menu
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isStarMenuOpen
      ) {
        setIsStarMenuOpen(false); // Close the star menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isStarMenuOpen]);

  return (
    <header className="header-bar full-width-container">
      {/* Left section: The star icon and dropdown for star menu items */}
      <div className="header-left">
        <span
          className={`star-icon ${isExploding ? "explode-effect" : ""}`} // Star icon with explosion effect
          onClick={() => handleClick("star-icon")}
        >
          <span className="material-symbols-outlined">star</span> {/* Using the star icon */}
        </span>
        
        {/* Dropdown menu for star items */}
        {isStarMenuOpen && (
          <div className="star-dropdown">
            {starMenuItems.map((item) => (
              <Link key={item.id} to={item.link} className="star-menu-item">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Center section: The title/logo of the application */}
      <div className="header-center">
        <h1 className="header-title">EDORA</h1>
      </div>

      {/* Right section: The hamburger menu icon and menu items */}
      <div className="header-right">
        <span
          className={`hamburger-icon ${isExploding ? "explode-effect" : ""}`} 
          onClick={() => handleClick("hamburger-icon")}
        >
          <span className="material-symbols-outlined hamburger-icon">menu</span>
        </span>

        <div
          ref={menuRef}
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        >
          <ul>
            {mainMenuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>   
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
