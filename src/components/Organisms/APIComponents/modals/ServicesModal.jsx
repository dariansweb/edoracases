import React from "react";
import "./styles/Modal.css";

const ServicesModal = ({ onClose }) => {
  const services = [
    "Human Services",
    "Health Services",
    "Family Support",
    "Social Work",
    "Counseling",
    "Medical Assistance",
    "Emergency Support",
  ];

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Available Services</h2>
        {services.map((service, index) => (
          <div key={index} className="option-card">
            <p>{service}</p>
          </div>
        ))}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ServicesModal;
