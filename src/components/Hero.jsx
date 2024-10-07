import React, { useState, useEffect, useRef } from "react";
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";

// Shuffling the array of features to keep it dynamic
const shuffledFeatures = shuffleArray(features);

const Hero = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [maxFeatureLength, setMaxFeatureLength] = useState(0);
  const rotatingContainerRef = useRef(null); // Reference to the rotating container

  // useEffect for rotating the features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) =>
        prevIndex === shuffledFeatures.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the length of the longest feature
  useEffect(() => {
    let maxLength = 0;

    // Loop through each feature and find the longest one based on character length
    shuffledFeatures.forEach((feature) => {
      maxLength = Math.max(maxLength, feature.length);
    });

    // Update the maxFeatureLength state with the length of the longest feature
    setMaxFeatureLength(maxLength);
  }, []);

  // Set the width of the rotating features container based on the longest feature
  useEffect(() => {
    if (rotatingContainerRef.current) {
      // Set the width of the container based on the longest feature's character length
      rotatingContainerRef.current.style.width = `${maxFeatureLength}ch`;
    }
  }, [maxFeatureLength]);

  return (
    <div className="hero-container full-width-container">
      <div className="hero-content">
        <h1 className="light hero-title">EDORA</h1>
        <h4 className="light">
          <span className="underline">E</span>vent-
          <span className="underline">D</span>riven{" "}
          <span className="underline">O</span>perations{" "}
          <span className="underline">R</span>ecords{" and "}
          <span className="underline">A</span>nalytics
        </h4>

        {/* Rotating features list */}
        <ul
          className="rotating-features"
          aria-live="polite"
          ref={rotatingContainerRef} // Attach the ref to the container
        >
          <li className="feature-item">
            {shuffledFeatures[currentFeatureIndex]}
          </li>
        </ul>
        <hr />
        <h4 className="light">
          EDORA is powered by Open Source Technology, making it free for
          everyone to use! 💛
        </h4>
      </div>
    </div>
  );
};

export default Hero;
