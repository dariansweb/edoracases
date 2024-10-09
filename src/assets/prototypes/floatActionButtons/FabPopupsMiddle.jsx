// FabPopupMiddle Component
import React, { useState } from "react";
import "./styles/FabPopups.css"; // External CSS for theme styles

const FabPopupMiddle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Center Floating FAB Button */}
      <button
        className="middle-fancy-fab middle-center-fab"
        onClick={togglePopup}
      >
        {isOpen ? (
          // Close icon (X) when the popup is open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
        ) : (
          // Star icon when the popup is closed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
        )}
      </button>

      {/* Full-Screen Pop-Up */}
      {isOpen && (
        <div className="middle-fancy-fullscreen-popup">
          <div className="middle-fancy-popup-body middle-center-menu">
            <h2 className="dark">Client Management Hub</h2>
            <p>
              Navigate through client information, provider details, and service
              records.
            </p>
            <div className="middle-menu-item">
              <span>📂</span> <a href="#">Client Profile</a>
            </div>
            <div className="middle-menu-item">
              <span>🔗</span> <a href="#">Provider Relations</a>
            </div>
            <div className="middle-menu-item">
              <span>📅</span> <a href="#">Service History</a>
            </div>
            <div className="middle-menu-item">
              <span>🧾</span> <a href="#">Financial Overview</a>
            </div>
            <div className="middle-menu-item">
              <span>🔍</span> <a href="#">Case Review</a>
            </div>
            <button className="middle-close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FabPopupMiddle;
