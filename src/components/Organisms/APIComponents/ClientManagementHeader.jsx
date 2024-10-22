import React, { useState } from "react";
import "./styles/ClientManagementHeader.css";

const ClientManagementHeader = ({ client }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    "Reports",
    "Billing",
    "Intake",
    "Documents",
    "Services"
  ];

  return (
    <header className="client-management-header-bar">
      <div className="client-management-header-left">
        {/* Dropdown Menu for Client Management */}
        <div className="client-management-header-dropdown">
          <button className="client-management-header-dropdown-btn" onClick={toggleDropdown}>
            Client Management
          </button>
          {isDropdownOpen && (
            <ul className="client-management-header-dropdown-menu">
              {menuItems.map((item, index) => (
                <li key={index} className="client-management-header-dropdown-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="client-management-header-middle">
        {/* Sentimental Touch: "Their Life's Story" */}
        <h2 className="light">Their Life’s Story</h2>
      </div>

      <div className="client-management-header-right">
        {/* EDORA Link */}
        <a href="/" className="client-management-header-edora-link">
          EDORA
        </a>
      </div>
    </header>
  );
};

export default ClientManagementHeader;
