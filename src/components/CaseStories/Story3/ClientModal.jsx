import React from "react";
import "./styles/ClientModal.css";

const ClientModal = ({ closeModal }) => {
  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Zorak Quasor</h2>
        <p><strong>SSN:</strong> 123-45-6789</p>
        <p><strong>Race:</strong> Martian</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Weight:</strong> 180 lbs</p>
        <p><strong>Height:</strong> 6'2"</p>
        <p><strong>Age:</strong> 42</p>
        <p><strong>DOB:</strong> 01/01/1982</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Starbase Ave, Mars City, MZ 00789</p>
        <p><strong>Case Number:</strong> #XZ-42-87923</p>
      </div>
    </div>
  );
};

export default ClientModal;
