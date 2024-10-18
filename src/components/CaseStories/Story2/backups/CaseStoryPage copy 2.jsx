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

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedTitle(""); 
    setDescription(""); 
    setSelectedOption(""); 
    setNextInput(""); 
    ScrollToDiv(".top"); 
  };

  const handleTitleChange = (title) => {
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

  const handleOptionChange = (value) => {
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
        
        {/* Division Selector */}
        <div className="selector division-selector">
          <label htmlFor="division" className="label">Select Division:</label>
          <ul className="list-box">
            <li 
              onClick={() => handleDivisionChange({target: {value: ""}})}
              className={selectedDivision === "" ? "selected" : ""}
            >
              --Choose Division--
            </li>
            {divisions.map((division, index) => (
              <li 
                key={index} 
                onClick={() => handleDivisionChange({target: {value: division}})} 
                className={selectedDivision === division ? "selected" : ""}
              >
                {division}
              </li>
            ))}
          </ul>
        </div>

        {/* Title Selector */}
        {selectedDivision && (
          <div className="selector title-selector">
            <label htmlFor="title" className="label">Select Title:</label>
            <ul className="list-box">
              <li 
                onClick={() => handleTitleChange("")}
                className={selectedTitle === "" ? "selected" : ""}
              >
                --Choose Title--
              </li>
              {filteredServices.map((service) => (
                <li 
                  key={service.id} 
                  onClick={() => handleTitleChange(service.title)} 
                  className={selectedTitle === service.title ? "selected" : ""}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Service Description */}
        {description && (
          <div className="service-description">
            <h2 className="subheader">Description:</h2>
            <p className="description-text">{description}</p>
          </div>
        )}

        {/* Options Selector */}
        {selectedService && selectedService.options.length > 0 && (
          <div className="selector options-selector">
            <label htmlFor="options" className="label">Select Additional Service Option:</label>
            <ul className="list-box">
              <li 
                onClick={() => handleOptionChange("")}
                className={selectedOption === "" ? "selected" : ""}
              >
                --Choose Option--
              </li>
              {selectedService.options.map((option, index) => (
                <li 
                  key={index} 
                  onClick={() => handleOptionChange(option.next)} 
                  className={selectedOption === option.next ? "selected" : ""}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Input Field */}
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

        {/* Display Selected Option */}
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
                  {service.option !== "No extra option" && `(${service.option})`}
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
