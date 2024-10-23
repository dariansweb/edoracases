import React, { useState, useEffect } from "react";
import Providers from "../../../data/providers"; // Importing the providers array
import "./styles/providers.css";
import ClientManagementHeader from "./ClientManagementHeader";
import ScrollToTopButton from "../../../utils/ScrollToTopButton"; // Import the ScrollToTopButton component
import { aside, div } from "framer-motion/client";

// Predefined search terms for the tag buttons
const searchTerms = [
  "counseling",
  "mental health",
  "therapy",
  "residential",
  "recover",
  "family",
  "legal",
  "housing",
  "substance abuse",
  "medicine",
  "health",
  "rehabilitation",
  "addiction",
  "anger management",
  "crisis",
  "cognitive",
  "trauma",
  "meditation",
  "outpatient",
  "ptsd",
  "impatient",
  "mourning",
  "healing",
  "intervention",
  "home visits",
  "screenings",
  "emotional",
  "abuse",
  "detox",
  "crime",
  "confinement",
  "detainment",
  "parole",
  "offense",
  "misconduct",
].sort(); // Sort the search terms alphabetically

// ProvidersList Component that displays the list of providers and search terms
const ProvidersList = () => {
  const [filteredProviders, setFilteredProviders] = useState(Providers); // Show all providers initially
  const [showSearchTerms, setShowSearchTerms] = useState(false); // Hide search terms by default
  const [selectedTerm, setSelectedTerm] = useState(""); // Track selected search term
  const [residentialFilter, setResidentialFilter] = useState("all"); // Track residential filter (all, residential, appointment)
  const [filterLabel, setFilterLabel] = useState(""); // Label to describe the applied filters

  // Filter providers based on current filters (both search term and residential service)
  const applyFilters = (
    term = selectedTerm,
    residential = residentialFilter
  ) => {
    let result = Providers;

    // Apply search term filter if a term is selected
    if (term) {
      result = result.filter((provider) =>
        provider.serviceTypes.some((serviceType) =>
          serviceType.toLowerCase().includes(term.toLowerCase())
        )
      );
    }

    // Apply residential service filter based on the selected option
    if (residential === "residential") {
      result = result.filter(
        (provider) => provider.hasResidentialServices === true
      );
    } else if (residential === "appointment") {
      result = result.filter(
        (provider) => provider.hasResidentialServices === false
      );
    }

    setFilteredProviders(result);
  };

  // Update filter label based on selected filters and results
  const updateFilterLabel = () => {
    if (!selectedTerm && residentialFilter === "all") {
      setFilterLabel("Showing all providers");
      return;
    }

    let label = selectedTerm
      ? selectedTerm.charAt(0).toUpperCase() + selectedTerm.slice(1)
      : "";

    if (residentialFilter === "all") {
      if (selectedTerm) {
        const hasResidential = filteredProviders.some(
          (provider) => provider.hasResidentialServices
        );
        const hasAppointmentOnly = filteredProviders.some(
          (provider) => !provider.hasResidentialServices
        );

        if (hasResidential && hasAppointmentOnly) {
          label += " for Residential and Appointment Only Providers";
        } else if (hasResidential) {
          label += " for Residential Providers";
        } else if (hasAppointmentOnly) {
          label += " for Appointment Only Providers";
        }
      }
    } else if (residentialFilter === "residential") {
      label += selectedTerm
        ? " for Residential Providers"
        : "Showing Residential Providers";
    } else if (residentialFilter === "appointment") {
      label += selectedTerm
        ? " for Appointment Only Providers"
        : "Showing Appointment Only Providers";
    }

    setFilterLabel(label);
  };

  // Effect to update label whenever filters or filteredProviders change
  useEffect(() => {
    updateFilterLabel();
  }, [selectedTerm, residentialFilter, filteredProviders]);

  // Handle search term button click
  const handleSearchClick = (term) => {
    setSelectedTerm(term);
    applyFilters(term, residentialFilter);
    setShowSearchTerms(false); // Hide search terms after a search is made
  };

  // Handle radio button change for residential filter
  const handleResidentialFilterChange = (event) => {
    const newResidentialFilter = event.target.value;
    setResidentialFilter(newResidentialFilter);
    applyFilters(selectedTerm, newResidentialFilter);
  };

  // Handle "Clear All Filters" button click
  const handleClearFilters = () => {
    setSelectedTerm(""); // Clear selected term
    setResidentialFilter("all"); // Clear residential filter
    setFilteredProviders(Providers); // Reset to full provider list
  };

  return (
    <>
      <ClientManagementHeader />
      <div className="provider-info-list">
        {/* Filters, label, and buttons grouped together */}
        <div className="provider-info-filters-group">
          <div className="provider-info-filter-label">
            <span className="text-block strong">{filterLabel}</span>
          </div>

          {/* Residential Filter Radio Buttons */}
          <div className="provider-info-radio-group section">
            <label>
              <input
                type="radio"
                name="residentialFilter"
                value="all"
                checked={residentialFilter === "all"}
                onChange={handleResidentialFilterChange}
              />
              All Providers
            </label>
            <label>
              <input
                type="radio"
                name="residentialFilter"
                value="residential"
                checked={residentialFilter === "residential"}
                onChange={handleResidentialFilterChange}
              />
              Residential Only
            </label>
            <label>
              <input
                type="radio"
                name="residentialFilter"
                value="appointment"
                checked={residentialFilter === "appointment"}
                onChange={handleResidentialFilterChange}
              />
              Appointment Only
            </label>
          </div>

          {/* Show/Hide Search Terms Button */}
          <div className="provider-info-buttons">
            <button
              onClick={() => setShowSearchTerms(!showSearchTerms)}
              className="provider-info-filter-button"
            >
              {showSearchTerms ? "Hide Tags" : "Show Tags"}
            </button>

            {/* Clear All Filters Button */}
            <button
              onClick={handleClearFilters}
              className="provider-info-filter-button"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Search terms as buttons, visible when toggled */}
        {showSearchTerms && (
          <div className="provider-info-search-terms">
            <h3 className="provider-info-header">
              Select a service type to search:
            </h3>
            <div className="provider-info-term-buttons">
              {searchTerms.map((term, index) => (
                <button
                  key={index}
                  onClick={() => handleSearchClick(term)}
                  className="provider-info-term-button"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Provider list based on filtered results */}
        <div className="provider-info-list">
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))
          ) : (
            <h3 className="no-providers-message">No providers found!</h3>
          )}
        </div>
      </div>
    </>
  );
};

// ProviderCard Component (for displaying each provider's details)
const ProviderCard = ({ provider }) => {
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAppointmentServices, setShowAppointmentServices] = useState(false);
  const [showResidentialServices, setShowResidentialServices] = useState(false);
  const [showFundingSources, setShowFundingSources] = useState(false);

  const maxDescriptionLength = 200;
  const truncatedDescription = provider.description.slice(
    0,
    maxDescriptionLength
  );

  return (
    <>
      <ScrollToTopButton />
      <div className="provider-info-card top">
        <h2 className="provider-info-name">{provider.name}</h2>

        <p className="provider-info-description">
          <strong>Description:</strong>{" "}
          {showFullDescription
            ? provider.description
            : `${truncatedDescription}...`}
        </p>
        {provider.description.length > maxDescriptionLength && (
          <div className="provider-info-show-more-container">
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="provider-info-show-more"
            >
              {showFullDescription ? "Show less" : "Show more"}
            </button>
          </div>
        )}

        <p>
          <strong>Tax Number:</strong> {provider.taxNumber}
        </p>
        <p>
          <strong>Max Capacity:</strong> {provider.maxCapacity}
        </p>
        <p>
          <strong>Coverage:</strong> {provider.coverage.district},{" "}
          {provider.coverage.region}
        </p>

        {/* Contact Information */}
        <h3 className="dark provider-info-header">
          Contact Information
          <button
            className="provider-info-toggle-button"
            onClick={() => setShowContactInfo(!showContactInfo)}
          >
            {showContactInfo ? "Hide" : "Show"}
          </button>
        </h3>
        {showContactInfo && (
          <div className="contact-info">
            <p>
              <strong>Website:</strong>{" "}
              <a href={`https://${provider.contactInfo.webAddress}`}>
                {provider.contactInfo.webAddress}
              </a>
            </p>
            <p>
              <strong>Phone:</strong> {provider.contactInfo.phoneNumber}
            </p>
            <p>
              <strong>Executive Director:</strong>
              {provider.contactInfo.contacts.executiveDirector.name} -
              {provider.contactInfo.contacts.executiveDirector.email}
            </p>
            <p>
              <strong>Finance Director:</strong>
              {provider.contactInfo.contacts.financeDirector.name} -
              {provider.contactInfo.contacts.financeDirector.email}
            </p>
            <p>
              <strong>Program Manager:</strong>
              {provider.contactInfo.contacts.programManager.name} -
              {provider.contactInfo.contacts.programManager.email}
            </p>
          </div>
        )}

        {/* Appointment Only Services */}
        <h3 className="dark provider-info-header">
          Appointment Only
          <button
            className="provider-info-toggle-button"
            onClick={() => setShowAppointmentServices(!showAppointmentServices)}
          >
            {showAppointmentServices ? "Hide" : "Show"}
          </button>
        </h3>
        {showAppointmentServices && (
          <ul className="provider-info-services">
            {provider.appointmentOnlyServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        )}

        {/* Residential Services */}
        {provider.hasResidentialServices && (
          <>
            <h3 className="dark provider-info-header">
              Residential Services
              <button
                className="provider-info-toggle-button"
                onClick={() =>
                  setShowResidentialServices(!showResidentialServices)
                }
              >
                {showResidentialServices ? "Hide" : "Show"}
              </button>
            </h3>
            {showResidentialServices && (
              <ul className="provider-info-services">
                {provider.residentialOnlyServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Funding Sources */}
        <h3 className="dark provider-info-header">
          Funding Sources
          <button
            className="provider-info-toggle-button"
            onClick={() => setShowFundingSources(!showFundingSources)}
          >
            {showFundingSources ? "Hide" : "Show"}
          </button>
        </h3>
        {showFundingSources && (
          <ul className="provider-info-funding">
            {provider.fundingSources.map((source, index) => (
              <li key={index}>
                <strong>{source.grantName}:</strong> $
                {source.yearlyAmount.toLocaleString()} (Services:{" "}
                {source.servicesCovered.join(", ")})
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div className="provider-info-action-buttons">
          <button className="provider-info-action-button">Assign</button>
          <button className="provider-info-action-button">Contracts</button>
          <button className="provider-info-action-button">Analytics</button>
          <button className="provider-info-action-button">Clients</button>
          <button className="provider-info-action-button">Schedule</button>
          <button className="provider-info-action-button">Requests</button>
        </div>
      </div>
    </>
  );
};

export default ProvidersList;
