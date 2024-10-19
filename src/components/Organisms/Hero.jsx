import React from "react";
import features from "../../data/features";
import { shuffleArray } from "../../utils/shuffleArray";

// Shuffling the array of features to keep it dynamic
const shuffledFeatures = shuffleArray(features);

const Hero = () => {
  return (
    <div className="hero-container full-width-container">
      <div className="hero-content">
        {/* Main Title */}
        <h2 className="light hero-title">EDORA</h2>

        {/* Subtitle breaking down EDORA */}
        <h4 className="light">
          <span className="strong">
            <span className="underline">E</span>vent
          </span>
          <span className="strong">
            <span className="underline">D</span>riven{" "}
          </span>
          <span className="strong">
            <span className="underline">O</span>perations{" "}
          </span>
          <span className="strong">
            <span className="underline">R</span>ecords{" "}
          </span>
          <span className="strong">
            <span className="underline">A</span>nalytics
          </span>
        </h4>

        <div className="call-to-action">
          {/* Open source message */}
          <span className="strong">
            EDORA is Open Source, free to use for everyone! 💛
          </span>
          {/* Call to action to get involved */}
          <p>
            <strong className="strong">info@edoracases.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
