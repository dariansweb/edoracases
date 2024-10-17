import React, { useState } from "react";
import allServices from "../../../data/hhsServices";
import "./styles/CaseStoryPage.css";
import ScrollToDiv from "../../../utils/ScrollToDiv";

const CaseStoryPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [nextInput, setNextInput] = useState("");
  
  // New state to toggle the description visibility
  const [showDescription, setShowDescription] = useState(false);

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedTitle("");
    setDescription("");
    setSelectedOption("");
    setNextInput("");
    ScrollToDiv(".top");
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    const service = allServices.find(
      (service) =>
        service.title === title && service.division === selectedDivision
    );

    if (service) {
      setSelectedTitle(title);
      setDescription(service.description);
      setSelectedOption("");
      setNextInput("");
    }
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    const selected = selectedService.options.find(option => option.next === value);
    setNextInput(selected ? "" : nextInput);
  };

  const handleNextInputChange = (event) => {
    setNextInput(event.target.value);
  };

  const handleAddService = () => {
    const newService = {
      division: selectedDivision,
      title: selectedTitle,
      option: selectedOption || "No extra option",
      nextInput: nextInput || "",
    };

    setSelectedServices((prevServices) => [...prevServices, newService]);
    setSelectedDivision("");
    setSelectedTitle("");
    setDescription("");
    setSelectedOption("");
    setNextInput("");
  };

  const divisions = [
    ...new Set(allServices.map((service) => service.division)),
  ];

  const filteredServices = allServices.filter(
    (service) => service.division === selectedDivision
  );

  const selectedService = allServices.find(
    (service) => service.title === selectedTitle
  );

  return (
    <div className="pages-container">
      <ScrollToDiv targetDiv=".top" />
      <div className="case-story-page">
        <h1 className="dark header-title">Bring Your Client's Story to Life</h1>
        <h2 className="dark header-title">Meeting Clients Where They Are</h2>

        {/* Button to toggle description */}
        <button className="toggle-btn" onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Hide Description" : "Show Description"}
        </button>

        {/* Conditionally rendering the description based on the state */}
        {showDescription && (
          <div className="description-content">
            <p>
              EDORA focuses on empowering clients by providing customized services, 
              facilitating case management, and helping users keep track of various 
              support options for their clients.
            </p>
          </div>
        )}

        <div className="selector division-selector">
          <label htmlFor="division" className="label">Select Division:</label>
          <select
            id="division"
            className="dropdown"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            <option value="">--Choose Division--</option>
            {divisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>

        {selectedDivision && (
          <div className="selector title-selector">
            <label htmlFor="title" className="label">Select Title:</label>
            <select
              id="title"
              className="dropdown"
              value={selectedTitle}
              onChange={handleTitleChange}
            >
              <option value="">--Choose Title--</option>
              {filteredServices.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {description && (
          <div className="service-description">
            <h2 className="subheader">Description:</h2>
            <p className="description-text">{description}</p>
          </div>
        )}

        {selectedService && selectedService.options.length > 0 && (
          <div className="selector options-selector">
            <label htmlFor="options" className="label">Select Additional Service Option:</label>
            <select
              id="options"
              className="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">--Choose Option--</option>
              {selectedService.options.map((option, index) => (
                <option key={index} value={option.next}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedOption && selectedService.options.some(option => option.next === selectedOption) && (
          <div className="next-input">
            <label htmlFor="nextInput" className="label">What's next?</label>
            <textarea
              id="nextInput"
              className="textbox"
              placeholder="Enter your next steps..."
              value={nextInput}
              onChange={handleNextInputChange}
            />
          </div>
        )}

        {selectedOption && (
          <div className="selected-option">
            <h2 className="subheader">Selected Option:</h2>
            <p className="description-text">You selected: {selectedOption}</p>
          </div>
        )}

        {selectedTitle && (
          <div className="add-service-button">
            <button className="btn" onClick={handleAddService}>
              Add Service
            </button>
          </div>
        )}

        {selectedServices.length > 0 && (
          <div className="selected-services-list">
            <h2 className="subheader">Client's Journey with EDORA</h2>
            <ul>
              {selectedServices.map((service, index) => (
                <li key={index}>
                  {service.division} - {service.title}{" "}
                  {service.option !== "No extra option" &&
                    `(${service.option})`}
                  {service.nextInput && service.nextInput !== "" && ` - Next: ${service.nextInput}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStoryPage;
