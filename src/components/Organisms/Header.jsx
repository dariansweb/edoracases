import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { mainMenuItems, starMenuItems } from "../../data/menuData"; // Importing both main and star menu items

import Ticker from "./Ticker";

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
  const [timeSinceStart, setTimeSinceStart] = useState({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateTimeSinceStart = () => {
    const startDate = new Date("2024-07-01T00:00:00");
    const now = new Date();

    const years = "00"; // Since it's less than a year, this will always be "00";

    const months =
      now.getMonth() -
      startDate.getMonth() +
      (now.getFullYear() - startDate.getFullYear()) * 12;
    const days = Math.floor(
      (now - new Date(now.getFullYear(), now.getMonth(), startDate.getDate())) /
        (1000 * 60 * 60 * 24)
    );
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return {
      years,
      months: String(months).padStart(2, "0"),
      days: String(days).padStart(2, "0"),
      hours,
      minutes,
      seconds,
    };
  };

  // Update the ticker every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceStart(calculateTimeSinceStart());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <>
          <Ticker timeSinceStart={timeSinceStart} />

      <header className="header-bar">
        <div className="header-left">
          {/* Star Icon */}
          <span
            className={`star-icon ${isExploding ? "explode-effect" : ""}`} // Apply explosion effect conditionally
            onClick={() => toggleMenu("star-icon")} // Toggle star menu on click
          >
            <span className="material-symbols-outlined star-menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2.2rem"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#e8eaed"
              >
                <path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 150.89v297.44ZM480-518l256.33-149L480-815.33 223-667l257 149ZM153.33-256q-15.83-9.28-24.58-24.48-8.75-15.19-8.75-33.19v-332.66q0-18 8.75-33.19 8.75-15.2 24.58-24.48l293.34-169q15.88-9 33.44-9 17.56 0 33.22 9l293.34 169q15.83 9.28 24.58 24.48 8.75 15.19 8.75 33.19v332.66q0 18-8.75 33.19-8.75 15.2-24.58 24.48L513.33-87q-15.88 9-33.44 9-17.56 0-33.22-9L153.33-256ZM480-480Z" />
              </svg>
            </span>
          </span>

          {/* Star Dropdown Menu */}
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
          <h1 className="header-title">
            <a className="light" href="/">
              <span className="material-symbols-outlined hamburger-icon">
                home
              </span>
            </a>
          </h1>
        </div>

        <div className="header-right">
          {/* Hamburger Icon */}
          <span
            className={`hamburger-icon ${isExploding ? "explode-effect" : ""}`} // Apply explosion effect conditionally
            onClick={() => toggleMenu("hamburger-icon")} // Toggle hamburger menu on click
          >
            <span className="material-symbols-outlined hamburger-icon">
              menu
            </span>
          </span>

          {/* Hamburger Menu */}
          {isMenuOpen && (
            <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
              {mainMenuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className="hamburger-menu-item" // CSS class for styling
                  onClick={closeMenu} // Close the menu on link click
                  onMouseDown={(e) => e.stopPropagation()} // Prevent click from closing the menu on mousedown
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Wide Screen Menu */}
        <div className="wide-menu">
          {starMenuItems.map((item) => (
            <NavLink key={item.id} to={item.link} className="wide-menu-item">
              {item.name}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
