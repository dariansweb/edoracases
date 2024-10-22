import React from 'react';
import './styles/ScrollToTopButton.css'; // Import your styles here

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
