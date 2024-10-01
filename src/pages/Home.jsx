// Home.jsx
import React from 'react';
import features from "../data/features";
import { shuffleArray } from "../utils/shuffleArray";

const shuffledFeatures = shuffleArray(features); // Shuffle features

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Human and Health Services</h1>
        <h2>Client Management</h2>

        <div className="features-list edora-text">
          <h3>
            An essential tool for providing high-quality care and support.
          </h3>
          <ul className="rotating-features">
            {shuffledFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <h3>View EDORA in Action </h3>
        <span className="align-center">
          <button className="cta-button">Try It Now</button>
        </span>
      </div>
    </>
  )
};

export default Home; // Make sure this line is present
