import React, { useState } from "react";

// Hero component that will toggle between views
const Hero = () => {
  return (
    <>
      <section className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">EDORA</h1>
          <h2 className="light">
            <span className="underline">E</span>vent-
            <span className="underline">D</span>riven{" "}
            <span className="underline">O</span>perations{" "}
            <span className="underline">R</span>ecords{" "}
            <span className="underline">A</span>pplication.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
