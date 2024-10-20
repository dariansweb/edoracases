import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./styles/FABScrollButtons.css";

const FABScrollButtons = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles FAB menu
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const handleScrollUp = () => {
    scroll.scrollMore(-200); // Scrolls up by 200px
  };

  const handleScrollDown = () => {
    scroll.scrollMore(200); // Scrolls down by 200px
  };

  return (
    <div className="fab-scroll-container">
      <button className="fab-toggle-btn" onClick={handleToggleMenu}>
        {menuOpen ? '✖' : '➕'} {/* Toggles between + and X */}
      </button>
      <div className={`fab-menu ${menuOpen ? 'show' : ''}`}>
        <button className="fab-scroll-btn" onClick={handleScrollToTop}>
          ⬆️
        </button>
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
    </div>
  );
};

export default FABScrollButtons;
