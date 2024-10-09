// FAB Component
import React, { useState } from "react";
import "./styles/FabPopups.css";

const FABPopupRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating FAB Button */}
      <button className="simple-fab-button" onClick={togglePopup}>
        {isOpen ? "X" : "+"} {/* Changes to X when opened */}
      </button>

      {/* Full-Screen Pop-Up */}
      {isOpen && (
        <div className="simple-full-screen-popup">
          <div className="simple-popup-header">
            <h2>Client Information</h2>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
          <div className="simple-popup-body">
            {/* Dynamic Cards Here */}
            <div className="simple-info-card">
              <h3>Client Name</h3>
              <p>Provider: XYZ Corp</p>
              <button className="simple-primary-action">View Profile</button>
              <button className="simple-secondary-action">Edit Details</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupRight;
