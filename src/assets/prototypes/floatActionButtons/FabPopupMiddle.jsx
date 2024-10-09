// FabBottomRight.jsx
import React, { useState } from "react";
import "./styles/FabPopupMiddle.css";

const placementsData = [
  {
    id: 1,
    provider: "ABC Services",
    startDate: "2023-01-15",
    endDate: "2023-03-20",
  },
  {
    id: 2,
    provider: "XYZ Rehabilitation",
    startDate: "2023-04-05",
    endDate: "2023-06-10",
  },
  {
    id: 3,
    provider: "LMN Counseling",
    startDate: "2023-06-15",
    endDate: "2023-08-30",
  },
];

const FABPopupRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleGoToEvent = (id) => {
    // Implement your event navigation logic here
    console.log(`Going to event for placement ID: ${id}`);
  };

  const onClose = () => setIsOpen(false); // Define the onClose function

  return (
    <>
      {/* Fancy Floating FAB Button */}
      <button
        className="fab-bottom-right"
        onClick={togglePopup}
        aria-label="Toggle placement history popup"
      >
        {isOpen ? "X" : "📝"}
      </button>

      {/* Full-Screen Pop-Up */}
      {isOpen && (
        <div className="fancy-middle-popup">
          <div className="popup-body">
            <h2>Middle Popup Title</h2>
            <p>This popup contains items relevant to the middle section.</p>
            <ul className="placement-list">
              {placementsData.map((placement) => (
                <li
                  key={placement.id}
                  className="placement-card"
                  onClick={() => handleGoToEvent(placement.id)}
                >
                  <span>🔍</span>
                  <li>
                    {" "}
                    <a href="#">{placement.provider}</a>{" "}
                  </li>
                  {/* Displaying provider name */}
                  <li>
                    {" "}
                    <span>{`Start Date: ${placement.startDate}`}</span>
                  </li>
                  <li>
                    {" "}
                    <span>{`End Date: ${placement.endDate}`}</span>
                  </li>
                </li>
              ))}
            </ul>
            <button className="middle-close-button" onClick={onClose}>
              Close
            </button>
            Middle Popup Title
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupRight;
