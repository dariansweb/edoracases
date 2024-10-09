// FancyFAB Component
import React, { useState } from "react";
import './styles/FabPopups.css';

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
            <h2 className="light">Provider Information</h2>
            <button className="fancty-close-button" onClick={togglePopup}>Close</button>
          </div>
          <div className="fancy-popup-body">
            {/* Add Buttons or Client Details here */}
            <div className="fancy-info-card">
              <h3 className="dark">Provider: ABC Services</h3>
              <h4 className="dark">Status: Active</h4>
              <button className="fancy-primary-action">View Details</button>
              <button className="fancy-secondary-action">Edit Provider</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupLeft;
