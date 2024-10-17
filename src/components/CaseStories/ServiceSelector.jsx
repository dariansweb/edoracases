// ServiceSelector.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import allServices from "../../data/hhsServices";
import "./styles/ServiceSelector.css";

const ServiceSelector = () => {
  const [selectedDivision, setSelectedDivision] = useState("");

  const divisions = [
    ...new Set(allServices.map((service) => service.division)),
  ];

  const filteredServices = selectedDivision
    ? allServices.filter((service) => service.division === selectedDivision)
    : [];

  return (
    <>
      <div className="service-selector">
        <select
          className="division-select"
          onChange={(e) => setSelectedDivision(e.target.value)}
          value={selectedDivision}
        >
          <option value="">-- Select Events by Division --</option>
          {divisions.map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>

        <h2 className="services-header">
          {selectedDivision
            ? `Services in ${selectedDivision}`
            : "Events by Division"}
        </h2>
        
        {filteredServices.length > 0
          ? filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-description">{service.description}</div>
                {service.options.length > 0 && (
                  <ul>
                    {service.options.map((option) => (
                      <li key={option.next} className="option-item">
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          : selectedDivision && (
              <p className="no-services">
                No services available for this division.
              </p>
            )}

        {/* Add the Link to /casestory2 inside the ServiceSelector */}
        <div className="link-container">
          <Link to="/casestory2" className="unique-story-link">
            Or - click here to make a unique story for a client
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceSelector;
