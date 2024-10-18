import React, { useState, useEffect } from "react";
import allServices from "../../../data/hhsServices";

import ScrollToDiv from "../../../utils/ScrollToDiv";
import HelpDescription from "./helpDescription";
import ProgressBar from "./ProgresBar";

import "./styles/CaseStoryPage.css";

const CaseStoryPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [nextInput, setNextInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Separate search terms for each listbox
  const [searchTermDivision, setSearchTermDivision] = useState("");
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermOption, setSearchTermOption] = useState("");

  // Update the step as users make selections
  useEffect(() => {
    let step = 0;
    if (selectedDivision) step += 1;
    if (selectedTitle) step += 1;
    if (selectedOption || !selectedService?.options?.length) step += 1;
    setCurrentStep(step);
  }, [selectedDivision, selectedTitle, selectedOption]);

  const handleDivisionChange = (division) => {
    setSelectedDivision(division);
    setSelectedTitle("");
    setDescription("");
    setSelectedOption("");
    setNextInput("");
    setSearchTermDivision(""); // Reset search term when selecting a division
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
      setSearchTermTitle(""); // Reset search term when selecting a title
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const selected = selectedService?.options.find(
      (opt) => opt.next === option
    );
    setNextInput(selected ? "" : nextInput);
    setSearchTermOption(""); // Reset search term when selecting an option
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
        <h3 className="dark header-title">Bring Your Client's Story to Life</h3>

        {/* Help Description Component */}
        <HelpDescription />
        <ProgressBar currentStep={currentStep} totalSteps={3} />

        {/* Listboxes Container */}
        <div className="listboxes-container">
          {/* Division Selector */}
          <div className="selector division-selector">
            <label htmlFor="division" className="label">
              Select Division:
            </label>
            <input
              type="text"
              value={searchTermDivision}
              onChange={(e) => setSearchTermDivision(e.target.value)}
              placeholder="Search divisions..."
              className="search-box"
            />
            <div className="list-box">
              <div
                className="list-item"
                onClick={() => handleDivisionChange("")}
              >
                --Choose Division--
              </div>
              {divisions
                .filter((division) =>
                  division
                    .toLowerCase()
                    .includes(searchTermDivision.toLowerCase())
                )
                .map((division, index) => (
                  <div
                    key={index}
                    className={`list-item ${
                      selectedDivision === division ? "selected" : ""
                    }`}
                    onClick={() => handleDivisionChange(division)}
                  >
                    {division}
                  </div>
                ))}
            </div>
          </div>

          {/* Title Selector */}
          {selectedDivision && (
            <div className="selector title-selector">
              <label htmlFor="title" className="label">
                Select Event:
              </label>
              <input
                type="text"
                value={searchTermTitle}
                onChange={(e) => setSearchTermTitle(e.target.value)}
                placeholder="Search events..."
                className="search-box"
              />
              <div className="list-box">
                <div
                  className="list-item"
                  onClick={() => handleTitleChange("")}
                >
                  --Choose Title--
                </div>
                {filteredServices
                  .filter((service) =>
                    service.title
                      .toLowerCase()
                      .includes(searchTermTitle.toLowerCase())
                  )
                  .map((service) => (
                    <div
                      key={service.id}
                      className={`list-item ${
                        selectedTitle === service.title ? "selected" : ""
                      }`}
                      onClick={() => handleTitleChange(service.title)}
                    >
                      {service.title}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Options Selector */}
          {selectedService && selectedService.options.length > 0 && (
            <div className="selector options-selector">
              <label htmlFor="options" className="label">
                Select Additional Event Option:
              </label>
              <input
                type="text"
                value={searchTermOption}
                onChange={(e) => setSearchTermOption(e.target.value)}
                placeholder="Search options..."
                className="search-box"
              />
              <div className="list-box">
                <div
                  className="list-item"
                  onClick={() => handleOptionChange("")}
                >
                  --Choose Option--
                </div>
                {selectedService.options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(searchTermOption.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className={`list-item ${
                        selectedOption === option.next ? "selected" : ""
                      }`}
                      onClick={() => handleOptionChange(option.next)}
                    >
                      {option.label}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        {/* Description, Next Steps Input, Add Service Button */}
        {description && (
          <div className="service-description">
            <h2 className="subheader">Description:</h2>
            <p className="description-text">{description}</p>
          </div>
        )}
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
                  <strong>Title:</strong> {selectedTitle}
                </li>
              )}
              {selectedOption && (
                <li>
                  <strong>Option:</strong> {selectedOption}
                </li>
              )}
            </ul>
          </div>
        )}

        {selectedOption &&
          selectedService.options.some(
            (option) => option.next === selectedOption
          ) && (
            <div className="next-input">
              <label htmlFor="nextInput" className="label">
                What's next for the client?
              </label>
              <textarea
                id="nextInput"
                className="textbox"
                placeholder="Notes ..."
                value={nextInput}
                onChange={handleNextInputChange}
              />
            </div>
          )}

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
                  {service.nextInput &&
                    service.nextInput !== "" &&
                    ` - Next: ${service.nextInput}`}
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
