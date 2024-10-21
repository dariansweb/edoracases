import React from "react";
import "./styles/Modal.css";

const ReportsModal = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Reports</h2>
        <ul>
          <li>Client Reports</li>
          <li>Service Reports</li>
          <li>Financial Reports</li>
          <li>Custom Reports</li>
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReportsModal;
