import React from "react";
import "./styles/ClientHeader.css";

const ClientHeader = () => {
  return (
    <header className="clients-client-header">
      <nav id="menu">
        <ul>
          {/* Client Management Dropdown */}
          <li>
            <a href="#">Client Management</a>
            <ul>
              <li>
                <a href="#">Add Client</a>
              </li>
              <li>
                <a href="#">View Clients</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li>
            <a href="#">Services</a>
            <ul>
              <li>
                <a href="#">Human Services</a>
              </li>
              <li>
                <a href="#">Health Services</a>
              </li>
              <li>
                <a href="#">Family Support</a>
              </li>
              <li>
                <a href="#">More Services...</a>
              </li>
            </ul>
          </li>

          {/* Settings Dropdown */}
          <li>
            <a href="#">Settings</a>
            <ul>
              <li>
                <a href="#">System Preferences</a>
              </li>
              <li>
                <a href="#">User Management</a>
              </li>
              <li>
                <a href="#">Access Control</a>
              </li>
            </ul>
          </li>

          {/* Reports Dropdown */}
          <li>
            <a href="#">Reports</a>
            <ul>
              <li>
                <a href="#">Client Reports</a>
              </li>
              <li>
                <a href="#">Service Reports</a>
              </li>
              <li>
                <a href="#">Financial Reports</a>
              </li>
              <li>
                <a href="#">Custom Reports</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="logo">
        <h1>EDORA</h1>
      </div>
    </header>
  );
};

export default ClientHeader;
