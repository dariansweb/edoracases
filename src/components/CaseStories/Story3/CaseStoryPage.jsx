import React, { useState } from "react";
import { motion } from "framer-motion";
import allServices from "../../../data/hhsServices";
import "./styles/CaseStoryPage.css";
import FABScrollButtons from "../../../assets/prototypes/floatActionButtons/FABScrollButtons";
import ClientHeader from "./ClientHeader";

const CaseStoryPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchTermDivision, setSearchTermDivision] = useState("");
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermOption, setSearchTermOption] = useState("");
  const [nextInput, setNextInput] = useState(""); // State for "What's Next"

  // Fetch divisions for the sidebar
  const divisions = [
    ...new Set(allServices.map((service) => service.division)),
  ];
  const filteredServices = allServices.filter(
    (service) => service.division === selectedDivision
  );
  const selectedService = allServices.find(
    (service) => service.title === selectedTitle
  );

  // Handlers for changing divisions, titles, and options
  const handleDivisionChange = (division) => {
    setSelectedDivision(division);
    setSelectedTitle("");
    setSelectedOption("");
  };

  const handleTitleChange = (title) => {
    setSelectedTitle(title);
    setSelectedOption("");
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Adding the service to the list (cards)
  // Adding the service to the list (cards)
  const handleAddService = () => {
    const newService = {
      division: selectedDivision,
      title: selectedTitle,
      option: selectedOption || "No extra option", // Ensure selectedOption is passed
      nextInput: nextInput || "", // Include "What's Next" input
    };
    setSelectedServices((prevServices) => [...prevServices, newService]);

    // Reset the fields after adding
    setSelectedDivision("");
    setSelectedTitle("");
    setSelectedOption(""); // Reset selectedOption here as well
    setNextInput(""); // Reset "What's Next" input after adding
  };
  const handleDeleteService = (index) => {
    const updatedServices = [...selectedServices];
    updatedServices.splice(index, 1); // Remove the selected service by index
    setSelectedServices(updatedServices);
  };
  const handleEditService = (index, service) => {
    // Set the current service fields for editing
    setSelectedDivision(service.division);
    setSelectedTitle(service.title);
    setSelectedOption(service.option);
    setNextInput(service.nextInput);

    // Remove the service from the list temporarily so the user can edit and re-add it
    handleDeleteService(index);
  };

  return (
    <>
      {" "}
      <ClientHeader />
      <div className="fab-scroll-container">
        <FABScrollButtons />
      </div>

      <div className="case-story-page-container">
        {/* Sidebar for Divisions */}
        <div className="sidebar">
          <h3 className="dark">Select Division</h3>
          <input
            type="text"
            value={searchTermDivision}
            onChange={(e) => setSearchTermDivision(e.target.value)}
            placeholder="Search divisions..."
          />
          <div className="list-box">
            {divisions
              .filter((division) =>
                division
                  .toLowerCase()
                  .includes(searchTermDivision.toLowerCase())
              )
              .map((division, index) => (
                <motion.div
                  key={index}
                  className={`list-item ${
                    selectedDivision === division ? "selected" : ""
                  }`}
                  onClick={() => handleDivisionChange(division)}
                >
                  {division}
                </motion.div>
              ))}
          </div>
        </div>

        {/* Middle Column for Event Types */}
        <div className="event-types-column">
          <h3 className="dark">Event Types</h3>
          <input
            type="text"
            value={searchTermTitle}
            onChange={(e) => setSearchTermTitle(e.target.value)}
            placeholder="Search event types..."
          />
          <div className="event-types-container">
            {filteredServices
              .filter((service) =>
                service.title
                  .toLowerCase()
                  .includes(searchTermTitle.toLowerCase())
              )
              .map((service, index) => (
                <div
                  key={index}
                  className="event-card"
                  onClick={() => handleTitleChange(service.title)}
                >
                  <h6 className="dark">{service.title}</h6>
                </div>
              ))}
          </div>
        </div>

        {/* Right Column for Selected Services (Cards) */}
        <div className="selected-services-column">
          <h3 className="dark">Selected Services</h3>
          {(selectedDivision || selectedTitle || selectedOption) && (
            <div className="selected-overview">
              <h2 className="subheader">Your Selections:</h2>
              <ul className="selection-list">
                {selectedDivision && (
                  <li>
                    <strong>Division:</strong> {selectedDivision}
                  </li>
                )}
                {selectedTitle && (
                  <li>
                    <strong>Event:</strong> {selectedTitle}
                  </li>
                )}
                {selectedOption && (
                  <li>
                    <strong>Operation:</strong> {selectedOption}
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Filter Section */}
          {selectedService && (
            <>
              <h3 className="dark">Filter Options</h3>
              <input
                type="text"
                value={searchTermOption}
                onChange={(e) => setSearchTermOption(e.target.value)}
                placeholder="Search options..."
              />
              <div className="list-box">
                {selectedService.options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(searchTermOption.toLowerCase())
                  )
                  .map((option, index) => (
                    <motion.div
                      key={index}
                      className={`list-item ${
                        selectedOption === option.next ? "selected" : ""
                      }`}
                      onClick={() => handleOptionChange(option.next)}
                    >
                      {option.label}
                    </motion.div>
                  ))}
              </div>

              {/* Textarea for "What's Next" after selecting an option */}
              {selectedOption && (
                <div className="next-input">
                  <label htmlFor="nextInput" className="label">
                    What's next for the client?
                  </label>
                  <textarea
                    id="nextInput"
                    className="textbox"
                    placeholder="Notes ..."
                    value={nextInput}
                    onChange={(e) => setNextInput(e.target.value)}
                  />
                </div>
              )}

              {/* Add Service Button */}
              {selectedTitle && (
                <button className="add-service-btn" onClick={handleAddService}>
                  Add Service
                </button>
              )}
            </>
          )}

          <div className="selected-services">
            {/* Display added services as cards */}
            {selectedServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="card-header">
                  <h4 className="dark">{service.title}</h4>
                  <div className="card-actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEditService(index, service)}
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteService(index)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <p>
                  <strong>Division:</strong> {service.division}
                </p>
                <p>
                  <strong>Event:</strong> {service.title}
                </p>
                <p>
                  <strong>Operation:</strong>{" "}
                  {service.option || "No extra option"}
                </p>
                {service.nextInput && (
                  <p>
                    <strong>Next:</strong> {service.nextInput}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStoryPage;
