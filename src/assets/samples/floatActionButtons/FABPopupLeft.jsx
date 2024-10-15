// FancyFAB Component
import React, { useState } from "react";
import "./styles/FabPopups.css";

const FABPopupLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Fancy Floating FAB Button */}
      <button className="fancy-fab-button" onClick={togglePopup}>
        {isOpen ? "X" : "+"}
      </button>

      {/* Full-Screen Pop-Up */}
      {isOpen && (
        <div className="fancy-fullscreen-popup">
          <div className="fancy-popup-header">
            <h2 className="light">Placement Information</h2>
          </div>
          <div className="fancy-popup-body">
            {/* Add Buttons or Client Details here */}
            <div className="fancy-info-card">
              <button className="fancy-primary-action">View More</button>
              <button className="fancy-secondary-action">Edit Placement</button>
              <div className="text-block">
                Provider: JDC Status: 05-22-2025 thru 05-29-25
              </div>
              <div className="text-block">
                Provider: MJTC Status: 05-22-2025 thru 05-29-25
              </div>
              <div className="text-block">
                Provider: CC Re-Entry Status: Active
              </div>
            </div>
            <button className="fancty-close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupLeft;
