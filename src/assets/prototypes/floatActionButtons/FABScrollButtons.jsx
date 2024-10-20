import React, { useState, useEffect } from "react";
import "./styles/FABScrollButtons.css"; // Your CSS for styling the FAB buttons

const FABScrollButtons = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle FAB menu
  const [showScrollUp, setShowScrollUp] = useState(false); // Show up button when scrolling

  // Show scroll-up button only if scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200); // Show up button when scrolled 200px down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScrollUp = () => {
    window.scrollBy({
      top: -200, // Scrolls up by 200px
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: 200, // Scrolls down by 200px
      behavior: "smooth",
    });
  };

  return (
    <div className="fab-scroll-container">
      <button className="fab-toggle-btn" onClick={handleToggleMenu}>
        {menuOpen ? "✖" : "➕"}
      </button>

      {menuOpen && (
        <div className="fab-menu">
          {/* Show the "To Top" button only when scrolled down */}
          {showScrollUp && (
            <button className="fab-scroll-btn" onClick={handleScrollToTop}>
              ⬆️
            </button>
          )}
          <button className="fab-scroll-btn" onClick={handleScrollUp}>
            🔼
          </button>
          <button className="fab-scroll-btn" onClick={handleScrollDown}>
            🔽
          </button>
          <button className="fab-scroll-btn" onClick={handleScrollToBottom}>
            ⬇️
          </button>
        </div>
      )}
    </div>
  );
};

export default FABScrollButtons;
