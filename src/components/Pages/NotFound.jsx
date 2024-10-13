import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css"; // Assuming you'll create a separate CSS file for styles

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1>🌿 Oops, This Place Doesn't Exist 🌿</h1>
        <p>
          You've wandered into an unfamiliar corner, but no worries. Like an
          oasis in the desert, you're still surrounded by serenity.
        </p>
        <p>
          Take a deep breath, relax, and let the gentle breeze of peace guide
          you back. 
        </p>
        <Link to="/" className="back-home-link">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
