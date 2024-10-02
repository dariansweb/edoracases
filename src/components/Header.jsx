import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainMenuItems, starMenuItems } from "../data/menuData"; // Importing both main and star menu items
import "./styles/header.css";

// The Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state
  const [isStarMenuOpen, setIsStarMenuOpen] = useState(false); // Star menu state
  const [isExploding, setIsExploding] = useState(false); // State for explosion effect on icons
  const menuRef = useRef(null); // Ref to access the hamburger menu for click detection

  // Function to toggle the visibility of menus based on the clicked icon
  const toggleMenu = (icon) => {
    if (icon === "hamburger-icon") {
      setIsMenuOpen((prev) => !prev); // Toggle the hamburger menu state
      setIsExploding((prev) => !prev); // Toggle explosion effect
      setTimeout(() => setIsExploding(false), 300); // Reset explosion effect after 300ms
    }
    if (icon === "star-icon") {
      setIsStarMenuOpen((prev) => !prev); // Toggle the star menu state
    }
  };

  // Function to close both menus
  const closeMenu = () => {
    setIsMenuOpen(false); // Close hamburger menu
    setIsStarMenuOpen(false); // Close star menu (optional behavior)
  };

  // Function to handle link clicks within the star menu
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to document level
    closeMenu(); // Close the dropdown menu when a link is clicked
  };

  // Effect to handle clicks outside of the menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close hamburger menu if clicked outside
        setIsStarMenuOpen(false); // Close star menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <header className="header-bar full-width-container">
      <div className="header-left">
        <span
          className={`star-icon ${isExploding ? "explode-effect" : ""}`} // Apply explosion effect conditionally
          onClick={() => toggleMenu("star-icon")} // Toggle star menu on click
        >
          <span className="material-symbols-outlined star-menu-icon">add</span>
        </span>
        {isStarMenuOpen && (
          <div className="star-dropdown">
            {starMenuItems.map((item) => (
              <Link
                key={item.id} // Unique key for each item
                to={item.link} // Link to the respective page
                className="star-menu-item" // CSS class for styling
                onClick={handleLinkClick} // Handle link click to prevent closing the menu too early
                onMouseDown={(e) => e.stopPropagation()} // Prevent click from closing the menu on mousedown
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="header-center">
        <h1 className="header-title">EDORA</h1>
      </div>

      <div className="header-right">
        <span
          className={`hamburger-icon ${isExploding ? "explode-effect" : ""}`} // Apply explosion effect conditionally
          onClick={() => toggleMenu("hamburger-icon")} // Toggle hamburger menu on click
        >
          <span className="material-symbols-outlined hamburger-icon">menu</span>
        </span>

        <div ref={menuRef} className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && ( // Ensure the menu is only rendered when open
            <div>
              {mainMenuItems.map((item) => (
                <div
                  key={item.id} // Unique key for each item
                  className="hamburger-menu-item" // CSS class for styling
                  onClick={closeMenu} // Close the menu on link click
                  onMouseDown={(e) => e.stopPropagation()} // Prevent click from closing the menu on mousedown
                >
                  <Link to={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
