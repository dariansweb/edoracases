import React, { useState, useRef, useEffect } from "react";
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";

// Shuffling the array of features to keep it dynamic
const shuffledFeatures = shuffleArray(features);

const Hero = () => {
  // `currentFeatureIndex` keeps track of which feature is being displayed
  // `setCurrentFeatureIndex` is used to update this index
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // `maxWidth` holds the maximum width of the largest feature text
  // `setMaxWidth` updates the max width
  const [maxWidth, setMaxWidth] = useState(0);

  // useEffect for rotating the features
  useEffect(() => {
    // Create an interval that updates `currentFeatureIndex` every 3 seconds (3000 ms)
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) =>
        // If we've reached the last feature, go back to the first one (index 0)
        // Otherwise, increment to the next feature
        prevIndex === shuffledFeatures.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Interval set for 3 seconds (3000 ms)

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty array as a dependency means this effect runs once after the component mounts
  // useEffect for calculating the maximum width of all the feature items
  useEffect(() => {
    let maxElementWidth = 0; // Variable to store the maximum width

    // Loop through each feature to measure its width
    shuffledFeatures.forEach((feature) => {
      // Create a temporary div element to measure the width of the feature's text
      const tempDiv = document.createElement("div");

      // Style the temp div so it doesn't affect the layout or take up space
      tempDiv.style.position = "absolute"; // Position it absolutely so it won't affect the flow of the document
      tempDiv.style.visibility = "hidden"; // Make it invisible
      tempDiv.style.whiteSpace = "nowrap"; // Ensure that the text doesn't wrap to the next line

      // Set the text of the temp div to the current feature text
      tempDiv.innerText = feature;

      // Add the temp div to the DOM (document body) to measure its width
      document.body.appendChild(tempDiv);

      // Compare the width of the current feature's text with `maxElementWidth`
      // and store the maximum width found so far
      maxElementWidth = Math.max(maxElementWidth, tempDiv.offsetWidth);

      // Remove the temp div from the DOM after measuring
      document.body.removeChild(tempDiv);
    });

    // Update the `maxWidth` state with the largest width found
    setMaxWidth(maxElementWidth);
  }, [shuffledFeatures]); // Dependency array: this effect runs whenever `shuffledFeatures` changes

  return (
    <div className="hero-container full-width-container">
      <div className="hero-content">
        <h2 className="light hero-title">EDORA</h2>
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

        {/* <ul className="rotating-features">
            <li key={currentFeatureIndex} className="feature-item">
              {shuffledFeatures[currentFeatureIndex]}
            </li>
          </ul> */}
        <hr />
          <span className="strong">
          EDORA is Open Source, free to use for
            everyone! 💛
          </span>
      </div>
    </div>
  );
};

export default Hero;
