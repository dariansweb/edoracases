import React, { useState, useRef, useEffect } from "react";
// Importing the menu data from an external file
import { mainMenuItems } from "../data/menuData"; 
// Importing the CSS for styling the header component
import "./styles/header.css"; 

// The Header component 
const Header = () => {
  // State to track if the menu is open or closed. Default is closed (false).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage the explosion effect (used for animations when opening the menu).
  const [isExploding, setIsExploding] = useState(false);

  // Create a ref for the menu, which will allow us to interact with the DOM directly.
  const menuRef = useRef(null);
  
  // Function to handle click events. It takes an `icon` parameter to differentiate between
  // different buttons (e.g., "hamburger-icon" or "star-icon").
  const handleClick = (icon) => {
    // Only act if the clicked icon is the hamburger menu icon
    if (icon === "hamburger-icon") {
      // Toggle the state of the menu between open and closed
      setIsMenuOpen((prev) => !prev);

      // Trigger the explosion effect for a fun animation when the menu is opened
      setIsExploding((prev) => !prev);

      // Optionally, after 300 milliseconds, reset the explosion effect back to normal
      setTimeout(() => setIsExploding(false), 300);
    }
  };

  // This useEffect is responsible for closing the menu when the user clicks outside of it.
  useEffect(() => {
    // This function runs when the user clicks anywhere on the document
    const handleClickOutside = (event) => {
      // Check if the menu is open AND the click happened outside of the menu area.
      if (
        menuRef.current && // The current DOM element of the menu
        !menuRef.current.contains(event.target) && // Event target is outside the menu
        isMenuOpen // Menu is currently open
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add a mouse click event listener to the entire document (detect outside clicks)
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts or when
    // the isMenuOpen state changes (avoids memory leaks).
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // useEffect depends on isMenuOpen, meaning it will run every time this value changes

  // The JSX (UI) returned by the component
  return (
    <header className="header-bar full-width-container">
      {/* Left section: The star icon (currently not doing much) */}
      <div className="header-left">
        <span
          className={`star-icon ${isExploding ? "explode-effect" : ""}`} // Apply explosion effect when exploding
          onClick={() => handleClick("star-icon")} // No action for star icon yet, but event listener is set
        >
          <span className="material-symbols-outlined">home</span> {/* This displays a home icon */}
        </span>
      </div>

      {/* Center section: The title/logo of the application */}
      <div className="header-center">
        <h1 className="header-title">EDORA</h1>
      </div>

      {/* Right section: The hamburger menu icon and menu items */}
      <div className="header-right">
        {/* The clickable hamburger icon, which triggers the menu open/close and explosion effect */}
        <span
          className={`hamburger-icon ${isExploding ? "explode-effect" : ""}`} // Explosion effect on click
          onClick={() => handleClick("hamburger-icon")} // Toggles the menu when clicked
        >
          <span className="material-symbols-outlined hamburger-icon">menu</span> {/* Menu icon */}
        </span>

        {/* The actual menu. Ref is attached to detect clicks outside of the menu. */}
        <div
          ref={menuRef} // This is the reference to the DOM element for detecting outside clicks
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} // Add 'open' class when isMenuOpen is true
        >
          <ul>
            {/* Dynamically render each menu item from the `mainMenuItems` array */}
            {mainMenuItems.map((item) => (
              <li key={item.id}> {/* Use 'key' to give each item a unique identifier */}
                <a href={item.link}>{item.name}</a> {/* Display each menu item's name and link */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
