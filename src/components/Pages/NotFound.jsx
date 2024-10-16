import React from "react";
import { Link } from "react-router-dom";
import "../CaseStories/ServiceSelector"

import "./styles/NotFound.css"; // Assuming you'll create a separate CSS file for styles
import ServiceSelector from "../CaseStories/ServiceSelector";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-h1">🌿 Oops, This Place Doesn't Exist 🌿</h1>
        <p className="notfound-p">
          You've wandered into an unfamiliar corner, but no worries. Like an
          oasis in the desert, you're still surrounded by serenity.
        </p>
        <p className="notfound-p">
          Take a deep breath, relax, and let the gentle breeze of peace guide
          you back. 
        </p>
        <Link to="/" className="notfound-back-home-link">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
