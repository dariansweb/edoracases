import React from "react";
import "./styles/DemoModal.css";

const DemoModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="dark">Welcome to EDORA Case Story Demo</h2>
        <p className="text-block">
          Please note, this is a front-end demo. None of your data will be
          stored on a server. All data entered in these forms is stored locally
          on your device only and is not shared or saved elsewhere.
        </p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DemoModal;
