// CASE MANAGEMENT DASHBOARD

import React, { useState } from "react";
import { DashboardMenusItems } from "../../../data/menuData"; // Import the array

import "../../../pages/styles/Pages.css";
import "./dashboard.css";

const Dashboard1 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="pages-container">
        <button className="fab" onClick={toggleMenu}>
          &#9776; {/* This is the hamburger icon */}
        </button>

        {/* Adjusted styling for the nav */}
        <nav className={`dashboard-nav ${showMenu ? "show" : ""}`}>
          <ul className="menu-list">
            {DashboardMenusItems.map((item) => (
              <li key={item.id} className="menu-item">
                <a href={item.link} className="menu-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="overview">
          <div className="text-block">
            Welcome, John Dowersayk!
            </div>
          <div className="tasks">
          <div className="card">
            <h2 className="dark">You are currently tracking</h2>
            <h3 className="dark">28 Residential Clients</h3>
            <h3 className="dark">8 Re-Entry Clients</h3>
          </div>

            <h2 className="dark">Your Tasks</h2>
            <ul className="styled-list">
              <li>Conduct intake interview for Case #JC-C-2024-567890</li>
              <li>Review placement history for Client XYZ</li>
              <li>Prepare court report for Case #JC-C-2024-554321</li>
              <li>Coordinate aftercare with Provider DEF</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="dark">Pending Actions</h2>
            <ul className="styled-list">
              <li>Update treatment plan for Case #JC-C-2024-543210</li>
              <li>Follow up with Provider ABC for service documentation</li>
              <li>Schedule review meeting for Client XYZ</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="dark">Total Upcoming Cases This Week: 3</h2>
            <ul className="styled-list">
              <li>Case ID: 554321</li>
              <li>Case ID: 567890</li>
              <li>Case ID: 543210</li>
            </ul>
            <a href="#" className="cta-button">
              View All
            </a>
          </div>
          <div className="card">
            <h2 className="dark">Upcoming Court Dates</h2>
            <ul className="styled-list">
              <li>Case #JC-C-2024-554321 - 09/15/2025</li>
              <li>Case #JC-C-2024-567890 - 09/20/2025</li>
            </ul>
            <a href="#" className="cta-button">
              View All
            </a>
          </div>
          <div className="card">
            <h2 className="dark">Recent Placements</h2>
            <ul className="styled-list">
              <li>Client ABC placed at State Facility on 08/25/2024</li>
              <li>Client DEF transitioned to Provider XYZ on 08/28/2024</li>
              <li>Client GHI returned to aftercare with Provider LMN</li>
            </ul>
            <a href="#" className="cta-button">
              View All
            </a>
          </div>
          <div className="card  ">
            <h2 className="dark">Services Rendered</h2>
            <ul className="styled-list">
              <li>Therapy session completed for Client ABC on 09/01/2024</li>
              <li>Group counseling provided by Provider XYZ on 09/02/2024</li>
              <li>Aftercare planning initiated for Client DEF</li>
            </ul>
            <a href="#" className="cta-button">
              View All
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
