import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./styles/ClientHeader.css";
import ClientModal from "./ClientModal"; // Modal for client details

const ClientHeader = () => {
  const [showModal, setShowModal] = useState(false); // State to show modal on click
  const [showTooltip, setShowTooltip] = useState(false); // State for hover tooltip

  const handleMouseEnter = () => {
    setShowTooltip(true); // Show tooltip on hover
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Hide tooltip when not hovering
  };

  const handleClick = () => {
    setShowModal(true); // Open modal on click
  };

  const closeModal = () => {
    setShowModal(false); // Close modal when the user clicks the close button
  };

  return (
    <div className="client-header">
      <div className="client-info-bar">
        <div
          className="client-icon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <img
            src="https://via.placeholder.com/50" // Placeholder for client icon
            alt="Client Face Icon"
            className="client-icon-img"
          />
          {showTooltip && (
            <div className="tooltip">
              <p>SSN: 123-45-6789</p>
              <p>Martian Male, Age: 42</p>
              <p>Weight: 180 lbs, Height: 6'2"</p>
            </div>
          )}
        </div>
        <div className="client-basic-info">
          <h2>Zorak Quasor</h2>
          <p>Case Number: #XZ-42-87923</p>
        </div>
      </div>

      {/* Centered message for "Their Life's Story" */}
      <div className="life-story-message">
        <h2 className="dark">A Client's Story</h2>
      </div>

      {/* EDORA link positioned on the far right */}
      <div className="edora-link">
        <Link to="/" className="edora-link-text text-block">EDORA</Link>
      </div>

      {showModal && <ClientModal closeModal={closeModal} />}
    </div>
  );
};

export default ClientHeader;
