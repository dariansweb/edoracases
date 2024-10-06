import React, { useState, useEffect } from "react";
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";

const shuffledFeatures = shuffleArray(features); // Shuffle features

const Hero = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) =>
        prevIndex === shuffledFeatures.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container full-width-container">
      <div className="hero-content">
        <h1 className="light hero-title">EDORA</h1>
        <h4 className="light">
          <span className="underline">E</span>vent-
          <span className="underline">D</span>riven{" "}
          <span className="underline">O</span>perations{" "}
          <span className="underline">R</span>ecords{" and "}
          <span className="underline">A</span>nalytics.
        </h4>

        <ul className="rotating-features">
          <li key={currentFeatureIndex} className="feature-item">
            {shuffledFeatures[currentFeatureIndex]}
          </li>
        </ul>
        <hr />
        <h4 className="light">🤘Open Source Technology🤘</h4>
      </div>
    </div>
  );
};

export default Hero;
