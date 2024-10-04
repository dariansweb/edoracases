import React, { useState } from "react";

// Hero component that will toggle between views
const Hero = () => {
  return (
    <>
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">EDORA</h1>
          <h2 className="light">Software</h2>
          <h3 className="light">Client Management Solutions</h3>
          <p>
            <span className="underline">E</span>vent-
            <span className="underline">D</span>riven{" "}
            <span className="underline">O</span>perations{" "}
            <span className="underline">R</span>ecords{" and "}
            <span className="underline">A</span>nalytics.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
