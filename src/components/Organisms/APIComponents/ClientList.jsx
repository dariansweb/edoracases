import React, { useState } from "react";
import ClientHeader from "./ClientHeader";
import ClientsData from "../../../data/clients.json"; // Correct JSON data import
import clientManagement from "../../../data/clientmanagement"; // Import client management options
import "./styles/ClientList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null); // Selected client
  const [selectedAction, setSelectedAction] = useState(null); // Action for the middle column

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setSelectedAction(null); // Reset action when selecting a new client
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
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

        <div className="middle-column">
          {selectedClient ? (
            <>
              <h3>Manage {selectedClient.name}</h3>
              <ul>
                {clientManagement.map((action, index) => (
                  <li key={index} onClick={() => handleActionSelect(action)}>
                    {action}
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
      {/* Add specific forms or details for each action */}
      <button className="btn-add">Add</button>
      <button className="btn-history">View History</button>
    </div>
  );
};

export default ClientList;
