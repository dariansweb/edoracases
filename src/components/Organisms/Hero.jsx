import React, { useState, useEffect } from "react";
import features from "../../data/features";
import { shuffleArray } from "../../utils/shuffleArray";

// Shuffling the array of features to keep it dynamic
const shuffledFeatures = shuffleArray(features);

const Hero = () => {
  // State to track time since the start of EDORA
  const [timeSinceStart, setTimeSinceStart] = useState({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Function to calculate the difference between start date and current date
  const calculateTimeSinceStart = () => {
    const startDate = new Date("2024-07-01T00:00:00"); // Start date (July 1st, 2024)
    const now = new Date(); // Current date and time

    const years = "00"; // Since it's less than a year, this will always be "00"

    // Calculate the difference in months, days, hours, minutes, and seconds
    const months =
      now.getMonth() -
      startDate.getMonth() +
      (now.getFullYear() - startDate.getFullYear()) * 12;
    const days = Math.floor(
      (now - new Date(now.getFullYear(), now.getMonth(), startDate.getDate())) /
        (1000 * 60 * 60 * 24)
    );
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Return an object with the updated time values
    return {
      years,
      months: String(months).padStart(2, "0"), // Ensure two-digit months
      days: String(days).padStart(2, "0"), // Ensure two-digit days
      hours,
      minutes,
      seconds,
    };
  };

  // useEffect to update the ticker every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceStart(calculateTimeSinceStart());
    }, 1000); // Update the ticker every second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

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

        {/* Ticker for time since project started */}
        <div className="ticker">
          {" "}
          <hr />
          <h6 className="light">
            EDORA has been growing strong for <br /> {timeSinceStart.years}{" "}
            Years, {timeSinceStart.months} Months, {timeSinceStart.days} Days,{" "}
            {timeSinceStart.hours}:{timeSinceStart.minutes}:
            {timeSinceStart.seconds} and counting!
          </h6>{" "}
          <hr />
        </div>
        <div className="call-to-action">
          {/* Open source message */}
          <span className="strong">
            EDORA is Open Source, free to use for everyone! 💛
          </span>
          {/* Call to action to get involved */}
          <p><strong className="strong">info@edoracases.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
