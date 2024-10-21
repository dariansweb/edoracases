import React, { useState } from "react";
import "./styles/ClientHeader.css";

const ClientHeader = () => {
  const [activeModal, setActiveModal] = useState(null); // Tracks which modal is active

  const openModal = (modalName) => {
    setActiveModal(modalName); // Set the active modal when a button is clicked
  };

  const closeModal = () => {
    setActiveModal(null); // Close the modal
  };

  return (
    <>
      <header className="clients-client-header">
        <nav id="menu">
          <ul>
            {/* Client Management */}
            <li>
              <a href="#" onClick={() => openModal("clientManagement")}>
                Client
              </a>
            </li>

            {/* Services */}
            <li>
              <a href="#" onClick={() => openModal("services")}>Services</a>
            </li>

            {/* Settings */}
            <li>
              <a href="#" onClick={() => openModal("settings")}>Settings</a>
            </li>

            {/* Reports */}
            <li>
              <a href="#" onClick={() => openModal("reports")}>Reports</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <h1>EDORA</h1>
        </div>
      </header>

      {/* Conditionally render modals */}
      {activeModal === "clientManagement" && (
        <Modal onClose={closeModal} title="Client Management Options" />
      )}

      {activeModal === "services" && (
        <Modal onClose={closeModal} title="Service Options" />
      )}

      {activeModal === "settings" && (
        <Modal onClose={closeModal} title="Settings Options" />
      )}

      {activeModal === "reports" && (
        <Modal onClose={closeModal} title="Reports Options" />
      )}
    </>
  );
};

// Modal component for full screen modals
const Modal = ({ onClose, title }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{title}</h2>
        {/* Add options here */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ClientHeader;
