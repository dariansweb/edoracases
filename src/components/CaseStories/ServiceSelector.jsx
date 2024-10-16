import React, { useState } from 'react';
import allServices from "../../data/hhsServices";
import "./styles/ServiceSelector.css"

const ServiceSelector = () => {
  // Set the initial state to an empty string to start with a blank selection
  const [selectedDivision, setSelectedDivision] = useState("");

  // Get unique divisions from the services
  const divisions = [...new Set(allServices.map(service => service.division))];

  // Filter services based on the selected division
  const filteredServices = selectedDivision
    ? allServices.filter(service => service.division === selectedDivision)
    : []; // Return an empty array if no division is selected

  return (
    <div className='service-selector'>
      <select 
        className='division-select' 
        onChange={(e) => setSelectedDivision(e.target.value)} 
        value={selectedDivision}
      >
        <option value="">-- Select a Division --</option> {/* Placeholder option */}
        {divisions.map((division) => (
          <option key={division} value={division}>{division}</option>
        ))}
      </select>

      <h2 className='dark services-header'>{selectedDivision ? `Services in ${selectedDivision}` : "Select a division to see its Events"}</h2>
      {filteredServices.length > 0 ? (
        filteredServices.map((service) => (
          <div key={service.id} className='service-card'>
            <h3 className='dark service-title'>{service.title}</h3>
            <div className='service-description'>{service.description}</div>
            {service.options.length > 0 && (
              <ul>
                {service.options.map((option) => (
                  <li key={option.next} className='option-item'>{option.label}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        selectedDivision && <p className='no-services'>No services available for this division.</p> // Display this only if a division is selected
      )}
    </div>
  );
};

export default ServiceSelector;
