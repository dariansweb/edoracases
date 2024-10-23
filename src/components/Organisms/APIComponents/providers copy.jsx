import React, { useState } from "react";
import Providers from "../../../data/providers"; // Importing the providers array
import "./styles/providers.css";
import "../../../utils/ScrollToTopButton";
import ScrollToTopButton from "../../../utils/ScrollToTopButton";

const ProviderCard = ({ provider }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAppointmentServices, setShowAppointmentServices] = useState(false);
  const [showResidentialServices, setShowResidentialServices] = useState(false);
  const [showFundingSources, setShowFundingSources] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description

  // Set the number of characters for truncating the description
  const maxDescriptionLength = 200;
  const truncatedDescription = provider.description.slice(
    0,
    maxDescriptionLength
  );

  return (
    <>
      <ScrollToTopButton />
      <div className="provider-info-card top">
        <h2 className="dark provider-info-name">{provider.name}</h2>

        <p className="text-block-no-hover provider-info-description">
          <strong>Description:</strong>{" "}
          {showFullDescription
            ? provider.description
            : `${truncatedDescription}...`}
          {/* Show the "Show more" link below the description */}
          {provider.description.length > maxDescriptionLength && (
            <div className="provider-info-show-more-container">
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="provider-info-show-more"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            </div>
          )}{" "}
        </p>

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
              <strong>Executive Director:</strong>{" "}
              {provider.contactInfo.contacts.executiveDirector.name} -{" "}
              {provider.contactInfo.contacts.executiveDirector.email}
            </p>
            <p>
              <strong>Finance Director:</strong>{" "}
              {provider.contactInfo.contacts.financeDirector.name} -{" "}
              {provider.contactInfo.contacts.financeDirector.email}
            </p>
            <p>
              <strong>Program Manager:</strong>{" "}
              {provider.contactInfo.contacts.programManager.name} -{" "}
              {provider.contactInfo.contacts.programManager.email}
            </p>
          </div>
        )}

        <h3 className="dark provider-info-header">
          Appointment Only Services
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

const ProvidersList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter providers based on the search term in the description
  const filteredProviders = Providers.filter((provider) =>
    provider.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="provider-info-list">
      <div className="provider-info-search">
        <p className="provider-info-search-description">
          Use the search box to filter providers based on their description.
          Common searches include:{" "}
          <strong>
            recovery, residential, therapy, counseling, detox, housing,
            employment, medical, education, aftercare, outpatient, crisis
            intervention
          </strong>
          , and more. Type keywords to find providers offering specific
          services.
        </p>
        <input
          type="text"
          placeholder="Search by description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="provider-info-search-input"
        />
        <button
          onClick={() => setSearchTerm("")}
          className="provider-info-search-button"
        >
          Clear
        </button>
      </div>
      <div className="provider-info-list">
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))
        ) : (
          <p>No providers found.</p>
        )}
      </div>
    </div>
  );
};

export default ProvidersList;
