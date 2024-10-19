// Ticker.js
import React, { useState, useEffect } from "react";
import "./styles/Ticker.css"

const Ticker = ({ timeSinceStart }) => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        <h6 className="light">
          EDORA began: {timeSinceStart.years} Years,{" "} 
          {timeSinceStart.months} Months, {timeSinceStart.days} Days,{" "}
          {timeSinceStart.hours}:{timeSinceStart.minutes}:{timeSinceStart.seconds}{" "}ago.
        </h6>
      </div>
    </div>
  );
};

export default Ticker;