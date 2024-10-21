import React from "react";
import "./styles/Modal.css";

const ClientManagementModal = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Client Management Options</h2>
        <ul>
          <li>Add New Client</li>
          <li>View All Clients</li>
          <li>Client Reports</li>
          {/* Add more options as needed */}
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ClientManagementModal;
