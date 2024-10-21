import React from "react";
import "./styles/Modal.css";

const SettingsModal = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>System Settings</h2>
        <ul>
          <li>System Preferences</li>
          <li>User Management</li>
          <li>Access Control</li>
          <li>Audit Logs</li>
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
