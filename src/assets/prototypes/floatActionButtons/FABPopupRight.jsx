// FAB Component
import React, { useState } from "react";
import "./styles/FabPopups.css";
import face1 from "../../images/people/faces/face1.jpg";

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
              <div className="image-container">
                <img src={face1} alt="Client Donald Duck" />
              </div>

              <div className="text-block">Daisy Duckers</div>
              <div className="text-block">
                Male: 15.2 years old: American Native
              </div>
              <div className="text-block">AJATC-ROP Intake</div>
              <div className="text-block">SXO, EJJ, Blended</div>
              <button className="simple-primary-action">View Profile</button>
              <button className="simple-secondary-action">Edit Details</button>
            </div>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FABPopupRight;
