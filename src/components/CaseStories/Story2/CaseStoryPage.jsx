import React, { useState, useEffect } from "react";
import allServices from "../../../data/hhsServices";
import "./styles/CaseStoryPage.css";
import ScrollToDiv from "../../../utils/ScrollToDiv";
import HelpDescription from "./helpDescription";

const CaseStoryPage = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [nextInput, setNextInput] = useState("");

  const handleDivisionChange = (division) => {
    setSelectedDivision(division);
    setSelectedTitle("");
    setDescription("");
    setSelectedOption("");
    setNextInput("");
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const selected = selectedService?.options.find(
      (opt) => opt.next === option
    );
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

  useEffect(() => {
    // Add event listeners to list items after component mounts
    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach((item) => {
      item.addEventListener("click", handleItemClick);
    });

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      listItems.forEach((item) => {
        item.removeEventListener("click", handleItemClick);
      });
    };
  }, []);

  const handleItemClick = (event) => {
    // Automatically scroll the selected list item into view
    event.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="pages-container">
      <ScrollToDiv targetDiv=".top" />
      <div className="case-story-page">
        <h1 className="dark header-title">Bring Your Client's Story to Life</h1>
        <h2 className="dark header-title">Meeting Clients Where They Are</h2>

        {/* Help Description Component */}
        <HelpDescription />

        {/* Listboxes Container */}
        <div className="listboxes-container">
          {/* Division Selector */}
          <div className="selector division-selector">
            <label htmlFor="division" className="label">
              Select Division:
            </label>
            <div className="list-box">
              <div
                className="list-item"
                onClick={() => handleDivisionChange("")}
              >
                --Choose Division--
              </div>
              {divisions.map((division, index) => (
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
              <div className="list-box">
                <div
                  className="list-item"
                  onClick={() => handleTitleChange("")}
                >
                  --Choose Title--
                </div>
                {filteredServices.map((service) => (
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
              <div className="list-box">
                <div
                  className="list-item"
                  onClick={() => handleOptionChange("")}
                >
                  --Choose Option--
                </div>
                {selectedService.options.map((option, index) => (
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
