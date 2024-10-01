import React, { useState } from "react";

// Hero component that will toggle between views
const Hero = () => {
  const [view, setView] = useState("landing");

  // Handle the transition to new content
  const handleStart = () => {
    setView("freeInformation");
  };
  // Reset back to the landing content
  const handleReset = () => {
    setView("landing"); 
  };

  return (  
    <>
      {view === "landing" && (
        <section className="hero-container full-width-container">          
          <div className="hero-content">
            <h1 className="hero-title">Built for Government Agencies</h1>
            <p className="hero-description">
              Streamline your data management and improve efficiency with our
              <br />
              <span className="text-center">
                <u>E</u>vent-<u>D</u>riven <u>O</u>rganizational <u>R</u>ecords{" "}
                <u>A</u>pplication.
              </span>
            </p>
            <button onClick={handleStart} className="cta-button">Free to use!</button>
          </div>
        </section>
      )}
      {view === "freeInformation" && (
        <section className="hero-container full-width-container">
          <div className="hero-content">
            <h1 className="hero-title">Built for your specific needs!</h1>
            <p className="hero-description text-center">
              This project is Free and Open Source! <br /> 
              Find my work on GitHub with the to use MIT License!
            </p>
            <button onClick={handleReset} className="cta-button">Okay!</button>
          </div>
        </section>
      )}
        <div className="hero">
          <div className="circle small"></div>
          <div className="circle large"></div>
        </div>
    </>
  );
};

export default Hero;
