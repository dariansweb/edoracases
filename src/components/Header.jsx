import React, { useState } from "react";
import "./styles/header.css"; // Ensure you import your CSS file

const Header = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = (icon) => {
    const targetIcon = document.querySelector(`.${icon}`);
    targetIcon.classList.add("explode-effect");
    setIsExploding(true);

    setTimeout(() => {
      targetIcon.classList.remove("explode-effect");
      setIsExploding(false);
    }, 1000); // Reset after explosion
  };

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
          ☰
        </span>
      </div>
    </header>
  );
};

export default Header;
  