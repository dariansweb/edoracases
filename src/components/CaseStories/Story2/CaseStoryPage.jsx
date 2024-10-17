import React, { useState } from "react";
import allServices from "../../../data/hhsServices";
import "./styles/CaseStoryPage.css";
import ScrollToDiv from "../../../utils/ScrollToDiv";

const CaseStoryPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const [selectedServices, setSelectedServices] = useState([]); // Array for selected services
  const [nextInput, setNextInput] = useState(""); // State for the next input

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedTitle(""); // Reset title when division changes
    setDescription(""); // Clear description when division changes
    setSelectedOption(""); // Clear options when division changes
    setNextInput(""); // Reset next input when division changes
    ScrollToDiv(".top"); // This will scroll to the top of the div with class "top"
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
      setSelectedOption(""); // Clear the previously selected option when title changes
      setNextInput(""); // Reset next input when title changes
    }
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    const selected = selectedService.options.find(option => option.next === value);
    // Reset the next input when an option is selected
    setNextInput(selected ? "" : nextInput);
  };

  const handleNextInputChange = (event) => {
    setNextInput(event.target.value); // Update the state for the next input
  };

  const handleAddService = () => {
    // Add selected service and option to the selectedServices array
    const newService = {
      division: selectedDivision,
      title: selectedTitle,
      option: selectedOption || "No extra option",
      nextInput: nextInput || "", // Include next input in the service
    };

    setSelectedServices((prevServices) => [...prevServices, newService]);
    // Clear selections after adding
    setSelectedDivision("");
    setSelectedTitle("");
    setDescription("");
    setSelectedOption("");
    setNextInput(""); // Reset the next input after adding the service
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
        <div className="selector division-selector">
          <label htmlFor="division" className="label">
            Select Division:
          </label>
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
            <label htmlFor="title" className="label">
              Select Title:
            </label>
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
            <label htmlFor="options" className="label">
              Select Additional Service Option:
            </label>
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

        {/* Textarea for the next input only when there is a 'next' option selected */}
        {selectedOption && selectedService.options.some(option => option.next === selectedOption) && (
          <div className="next-input">
            <label htmlFor="nextInput" className="label">
              What's next?
            </label>
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

        {/* Add Service Button */}
        {selectedTitle && (
          <div className="add-service-button">
            <button className="btn" onClick={handleAddService}>
              Add Service
            </button>
          </div>
        )}

        {/* Selected Services List */}
        {selectedServices.length > 0 && (
          <div className="selected-services-list">
            <h2 className="subheader">Client Journey with EDORA</h2>
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