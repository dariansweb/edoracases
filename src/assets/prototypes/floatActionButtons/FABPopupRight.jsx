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
            <h2 className="light">Client Information</h2>
          </div>
          <div className="simple-popup-body">
            {/* Dynamic Cards Here */}
            <div className="simple-info-card">
              <h3 className="dark">Client Details</h3>
              <div className="text-block">Duck, DonaldMale </div>
              <div className="text-block">Male</div>
              <div className="text-block">15.2 years old</div>
              <div className="text-block">SXO, EJJ, Blended</div>
              <div className="text-block">AJATC-ROP Intake</div>
              <button className="simple-primary-action">View Profile</button>
              <button className="simple-secondary-action">Edit Details</button>
            </div>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupRight;
