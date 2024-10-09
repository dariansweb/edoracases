// FancyFAB Component
import React, { useState } from "react";
import './styles/FabPopupLeft.css';

const FABPopupLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Fancy Floating FAB Button */}
      <button className="fancy-fab" onClick={togglePopup}>
        {isOpen ? "X" : "+"}
      </button>

      {/* Full-Screen Pop-Up */}
      {isOpen && (
        <div className="fancy-fullscreen-popup">
          <div className="fancy-popup-header">
            <h2>Provider Information</h2>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
          <div className="fancy-popup-body">
            {/* Add Buttons or Client Details here */}
            <div className="info-card">
              <h3 className="dark">Provider: ABC Services</h3>
              <h4 className="dark">Status: Active</h4>
              <button className="primary-action">View Details</button>
              <button className="secondary-action">Edit Provider</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupLeft;
