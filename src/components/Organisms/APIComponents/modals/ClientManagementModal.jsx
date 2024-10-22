import React from "react";
import "./styles/CM-Modal.css";

const ClientManagementModal = ({ onClose }) => {
  return (
    <div className="client-management-modal-container">
      <div className="client-management-modal-content">
        <h2>Client Management Options</h2>
        <ul>
          <li>Add New Client</li>
          <li>View All Clients</li>
          <li>Client Reports</li>
          {/* Add more options as needed */}
        </ul>
        <button className="client-management-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ClientManagementModal;
