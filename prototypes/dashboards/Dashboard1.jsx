import React from "react";
import "../../src/pages/styles/Pages.css";
import "./dashboard.css";

const Dashboard1 = () => {
  return (
    <>
      <div className="pages-container">
      <nav className="dashboard-nav">
        <p>
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
        </p>
      </nav>

          <div className="card">
            <h3>You are currently tracking </h3>
            <p>28 Active Clients</p>
            <p>8 In-Active Clients</p>
          </div>
          <div className="tasks">
            <h2>Your Tasks</h2>
            <ul>
              <li>Conduct intake interview for Case #JC-C-2024-567890</li>
              <li>Review placement history for Client XYZ</li>
              <li>Prepare court report for Case #JC-C-2024-554321</li>
              <li>Coordinate aftercare with Provider DEF</li>
            </ul>
          </div>

          <div className="card">
            <h3>Pending Actions</h3>
            <ul>
              <li>Update treatment plan for Case #JC-C-2024-543210</li>
              <li>Follow up with Provider ABC for service documentation</li>
              <li>Schedule review meeting for Client XYZ</li>
            </ul>
          </div>

          <div className="overview">
            <div className="card">
              <h3>Total Upcoming Cases This Week: 3</h3>
              <p>Case ID: 554321</p>
              <p>Case ID: 567890</p>
              <p>Case ID: 543210</p>
              <a href="#" className="cta-button">
                View All Cases
              </a>
            </div>
            <div className="card">
              <h3>Upcoming Court Dates</h3>
              <p>Case #JC-C-2024-554321 - 09/15/2025</p>
              <p>Case #JC-C-2024-567890 - 09/20/2025</p>
              <a href="#" className="cta-button">
                View All Court Dates
              </a>
            </div>
          </div>
          <div className="placements">
            <h2>Recent Placements</h2>
            <ul>
              <li>Client ABC placed at State Facility on 08/25/2024</li>
              <li>Client DEF transitioned to Provider XYZ on 08/28/2024</li>
              <li>Client GHI returned to aftercare with Provider LMN</li>
            </ul>
            <a href="#" className="cta-button">
              View Placement History
            </a>
          </div>
          <div className="services">
            <h2>Services Rendered</h2>
            <ul>
              <li>Therapy session completed for Client ABC on 09/01/2024</li>
              <li>Group counseling provided by Provider XYZ on 09/02/2024</li>
              <li>Aftercare planning initiated for Client DEF</li>
            </ul>
            <a href="#">View All Services</a>
          </div>
      </div>
    </>
  );
};

export default Dashboard1;
