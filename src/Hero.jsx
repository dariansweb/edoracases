import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title"> Built for Government Agencies</h1>
        <p className="hero-description">
          Streamline your data management and improve efficiency with our
          Event-Driven Organizational Records Application.
        </p>
        <button className="cta-button">Free to use</button>
        <div className="hero">
          <div className="circle large"></div>
          <div className="circle small"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
