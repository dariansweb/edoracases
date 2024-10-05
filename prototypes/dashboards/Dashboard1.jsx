import React, { useState } from "react";

import "../../src/pages/styles/Pages.css";
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

        <nav className={`dashboard-nav ${showMenu ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Billing</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>

            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
        <div className="overview">
          <div className="card">
            <h2 className="dark">You are currently tracking</h2>
            <p>
              <h3 className="dark">28 Active Clients</h3>
              <h3 className="dark">8 Inactive Clients</h3>
            </p>
          </div>
          <div className="tasks">
            <h2 className="dark">Your Tasks</h2>
            <p>
              <ul>
                <li>Conduct intake interview for Case #JC-C-2024-567890</li>
                <li>Review placement history for Client XYZ</li>
                <li>Prepare court report for Case #JC-C-2024-554321</li>
                <li>Coordinate aftercare with Provider DEF</li>
              </ul>
            </p>
          </div>
          <div className="card">
            <h2 className="dark">Pending Actions</h2>
            <p>
              <ul>
                <li>Update treatment plan for Case #JC-C-2024-543210</li>
                <li>Follow up with Provider ABC for service documentation</li>
                <li>Schedule review meeting for Client XYZ</li>
              </ul>
            </p>
          </div>
          <div className="card">
            <h2 className="dark">Total Upcoming Cases This Week: 3</h2>
            <p>
              <p>Case ID: 554321</p>
              <p>Case ID: 567890</p>
              <p>Case ID: 543210</p>
              <a href="#" className="cta-button">
                View All
              </a>
            </p>
          </div>
          <div className="card">
            <h2 className="dark">Upcoming Court Dates</h2>
            <p>
              <p>Case #JC-C-2024-554321 - 09/15/2025</p>
              <p>Case #JC-C-2024-567890 - 09/20/2025</p>
              <a href="#" className="cta-button">
                View All
              </a>
            </p>
          </div>
          <div className="card">
            <h2 className="dark">Recent Placements</h2>
            <p>
              <ul>
                <li>Client ABC placed at State Facility on 08/25/2024</li>
                <li>Client DEF transitioned to Provider XYZ on 08/28/2024</li>
                <li>Client GHI returned to aftercare with Provider LMN</li>
              </ul>
              <a href="#" className="cta-button">
                View All
              </a>
            </p>
          </div>
          <div className="card  ">
            <h2 className="dark">Services Rendered</h2>
            <p>
              <ul>
                <li>Therapy session completed for Client ABC on 09/01/2024</li>
                <li>Group counseling provided by Provider XYZ on 09/02/2024</li>
                <li>Aftercare planning initiated for Client DEF</li>
              </ul>
              <a href="#" className="cta-button">
                View All
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
