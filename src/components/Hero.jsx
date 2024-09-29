import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title"> Built for Government Agencies</h1>
        <p className="hero-description">
          Streamline your data management and improve efficiency with our
          <br /> 
          <span className="text-center">
          <u>E</u>vent-<u>D</u>riven <u>O</u>rganizational <u>R</u>ecords <u>A</u>pplication.
          </span>
        </p>
        <button className="cta-button">Free to use</button>

        <div className="hero">
          <div className="circle small"></div>
          <div className="circle large"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
