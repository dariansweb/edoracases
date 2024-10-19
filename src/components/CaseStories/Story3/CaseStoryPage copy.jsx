import React, { useState } from "react";
import { motion } from "framer-motion";
import allServices from "../../../data/hhsServices";
import "./styles/CaseStoryPage.css";
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
  const handleAddService = () => {
    const newService = {
      division: selectedDivision,
      title: selectedTitle,
      option: selectedOption || "No extra option",
      nextInput: nextInput || "", // Include "What's Next" input
    };
    setSelectedServices((prevServices) => [...prevServices, newService]);
    setSelectedDivision("");
    setSelectedTitle("");
    setSelectedOption("");
    setNextInput(""); // Reset "What's Next" input after adding
  };

  return (
    <>
      <div className="case-story-page-container">
      <ClientHeader />
        {/* Sidebar for Divisions */}
        <div className="sidebar">
          <h3>Select Division</h3>
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
          <h3>Event Types</h3>
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
                  <h4>{service.title}</h4>
                </div>
              ))}
          </div>
        </div>

        {/* Right Column for Selected Services (Cards) */}
        <div className="selected-services-column">
          {/* Filter Section */}
          {selectedService && (
            <>
              <h3>Filter Options</h3>
              <input
                type="text"
                value={searchTermOption}
                onChange={(e) => setSearchTermOption(e.target.value)}
                placeholder="Search options..."
              />
              <div className="list-box">
                {selectedService.options.map((option, index) => (
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
            </>
          )}

          {/* Add Service Button */}
          {selectedTitle && (
            <button className="add-service-btn" onClick={handleAddService}>
              Add Service
            </button>
          )}

          <h3>Selected Services</h3>
          <div className="selected-services">
            {selectedServices.map((service, index) => (
              <div key={index} className="service-card">
                <h4>{service.title}</h4>
                <p>Division: {service.division}</p>
                {service.option && <p>Option: {service.option}</p>}
                {service.nextInput && <p>Next: {service.nextInput}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStoryPage;
