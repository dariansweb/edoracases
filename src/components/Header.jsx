import React, { useState, useRef, useEffect } from "react";
import "./styles/header.css"; // Ensure you import your CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const handleClick = (icon) => {
    if (icon === "hamburger-icon") {
      setIsMenuOpen((prev) => !prev);
      setIsExploding((prev) => !prev);
      // Optional: Reset explosion effect after a delay
      setTimeout(() => setIsExploding(false), 300); // Change the time as needed
    }
  };

  // Effect to close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside the menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header-bar full-width-container">
      <div className="header-left">
        <span
          className={`star-icon ${isExploding ? "explode-effect" : ""}`}
          onClick={() => handleClick("star-icon")}
        >
          ★
        </span>
      </div>
      <div className="header-center">
        <h1 className="header-title">EDORA</h1>
      </div>
      <div className="header-right">
        <span
          className={`hamburger-icon ${isExploding ? "explode-effect" : ""}`}
          onClick={() => handleClick("hamburger-icon")}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" fill="var(--theme5-light)"></rect>
            <rect
              y="30"
              width="100"
              height="20"
              fill="var(--theme5-light)"
            ></rect>
            <rect
              y="60"
              width="100"
              height="20"
              fill="var(--theme5-light)"
            ></rect>
          </svg>
        </span>
        <div
          ref={menuRef}
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        >
          <ul>
            <li>
              <a href="#">Child and Family</a>
            </li>
            <li>
              <a href="#">Aging</a>
            </li>
            <li>
              <a href="#">Disability</a>
            </li>
            <li>
              <a href="#">Juvenile Justice</a>
            </li>
            <li>
              <a href="#">Medical</a>
            </li>
            <li>
              <a href="#">Provider Services</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
