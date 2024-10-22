import React, { useState } from "react";
import ScrollToDiv from "./ScrollToDiv"; // Import ScrollToDiv component
import "./styles/ScrollToTopButton.css"; // Import your styles here

const ScrollToTopButton = ({ targetDiv }) => {
  const [scrollToDiv, setScrollToDiv] = useState(false); // State to trigger ScrollToDiv

  const handleClick = () => {
    setScrollToDiv(true); // Trigger ScrollToDiv when the button is clicked

    // Reset the state after the scroll action to allow future clicks
    setTimeout(() => {
      setScrollToDiv(false);
    }, 500); // A small delay to allow the scroll to finish before resetting
  };

  return (
    <>
      <button className="scroll-to-top-button" onClick={handleClick}>
        ↑
      </button>

      {/* Conditionally render ScrollToDiv only when the button is clicked */}
      {scrollToDiv && <ScrollToDiv targetDiv={targetDiv || ".top"} />}
    </>
  );
};

export default ScrollToTopButton;
