import React, { useState } from "react";
import ClientHeader from "./ClientHeader";
import ClientsData from "../../../data/clients.json"; // Import JSON data
import iconsData from "../../../data/iconData"; // Import the icon data
import "./styles/ClientList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null); // Selected client
  const [selectedAction, setSelectedAction] = useState(null); // Action for the middle column
  const [openContext, setOpenContext] = useState({}); // Control context visibility

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setSelectedAction(null); // Reset action when selecting a new client
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
  };

  // Toggle context visibility for a specific icon
  const toggleContext = (id) => {
    setOpenContext((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle between true and false for the selected id
    }));
  };

  return (
    <>
      <ClientHeader />
      <div className="client-management-container">
        <div className="left-column">
          <h3>Clients</h3>
          <ul>
            {ClientsData.clients.map((client) => (
              <li
                key={client.id}
                className={`client-item ${
                  selectedClient?.id === client.id ? "selected" : ""
                }`}
                onClick={() => handleClientSelect(client)}
              >
                {client.name} - {client.race}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Now with icons and context */}
        <div className="middle-column">
          {selectedClient ? (
            <>
              <p className="text-block-no-hover">Manage {selectedClient.name}</p>
              <ul>
                {iconsData.map((item) => (
                  <li key={item.id} className="icon-card">
                    <div className="icon-header">
                      <h3 className="icon">{item.icon}</h3>
                      <span className="text-block-no-hover">{item.title}</span>
                    </div>
                    <div className="icon-actions">
                      {/* Toggle button */}
                      <button
                        className="btn-toggle"
                        onClick={() => toggleContext(item.id)}
                      >
                        {openContext[item.id] ? "Hide Details" : "Show Details"}
                      </button>
                      {/* If context is open, show the context */}
                      {openContext[item.id] && (
                        <div className="context-slide">
                          <p>{item.meaning}</p>
                          <p>{item.context}</p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Select a client to manage.</p>
          )}
        </div>

        <div className="right-column">
          {selectedAction && selectedClient ? (
            <ActionDetails action={selectedAction} client={selectedClient} />
          ) : (
            <p>Select an action to view details.</p>
          )}
        </div>
      </div>
    </>
  );
};

// ActionDetails component for the right column
const ActionDetails = ({ action, client }) => {
  return (
    <div className="action-details">
      <h4>
        {action} for {client.name}
      </h4>
      <p>Details for {action} will be displayed here.</p>
      <button className="btn-add">Add</button>
      <button className="btn-history">View History</button>
    </div>
  );
};

export default ClientList;
