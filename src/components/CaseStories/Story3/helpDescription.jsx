import React, { useState } from "react";
import "./styles/helpDescription.css";

const HelpDescription = () => {
  const [isVisible, setIsVisible] = useState(false); // Track the visibility of the description

  // Toggle description visibility
  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="help-description-container">
      <button className="toggle-btn" onClick={toggleDescription}>
        {isVisible ? "Hide Help" : "Show Help"}
      </button>

      {isVisible && (
        <div className="description-content text-block">
          <h2>Case Story Page Overview</h2>
          <p>
            <strong>
              Welcome to the Case Story Page, where you build impactful stories
              for your clients using Human and Health Services.
            </strong>
          </p>

          <p>
            This tool allows you to select services from different departments,
            adding them one by one to craft a comprehensive journey for each
            client. As you make your selections—division by division, service by
            service—you’re creating a personalized roadmap that addresses their
            unique needs.
          </p>

          <p>
            You can keep adding services across various areas, building a
            detailed and evolving story for each client. Every selection becomes
            part of their journey, ensuring they get the support they need from
            multiple services within Human and Health Services.
          </p>

          <p>
            This platform simplifies case management, enabling you to focus on
            what matters most: empowering your clients. Let each addition bring
            them closer to success, with a story that grows and evolves as their
            needs do.
          </p>

          <p>
            Thank you for using this tool to build stories that change lives,
            one service at a time.
          </p>
        </div>
      )}
    </div>
  );
};

export default HelpDescription;
