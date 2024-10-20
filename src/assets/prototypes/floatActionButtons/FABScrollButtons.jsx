import React from "react";
import "./styles/FABScrollButtons.css";

const FABScrollButtons = () => {
  const scrollByAmount = 50; // Number of pixels to scroll by

  const handleScrollUp = () => {
    window.scrollBy({ top: -scrollByAmount, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: scrollByAmount, behavior: "smooth" });
  };

  return (
    <div className="fab-scroll-container">
      <button className="fab-scroll-btn up" onClick={handleScrollUp}>
        ⬆️
      </button>
      <button className="fab-scroll-btn down" onClick={handleScrollDown}>
        ⬇️
      </button>
    </div>
  );
};

export default FABScrollButtons;
