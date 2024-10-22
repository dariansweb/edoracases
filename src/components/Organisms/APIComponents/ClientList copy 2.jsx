import React, { useState } from "react";
import ClientsData from "../../../data/clients.json"; // Import JSON data
import iconsData from "../../../data/iconData"; // Import the icon data
import "./styles/ClientList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null); // Selected client
  const [selectedAction, setSelectedAction] = useState(null); // Action for the middle column
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [sorted, setSorted] = useState(false); // Sort toggle state
  const [filteredClients, setFilteredClients] = useState(ClientsData.clients); // Filtered clients state

  const [showLeft, setShowLeft] = useState(true); // Control Left Column
  const [showMiddle, setShowMiddle] = useState(true); // Control Middle Column
  const [showRight, setShowRight] = useState(true); // Control Right Column

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setSelectedAction(null); // Reset action when selecting a new client
  };

  const handleCardSelect = (action) => {
    setSelectedAction(action); // Select the card
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ClientsData.clients.filter((client) =>
      client.name.toLowerCase().includes(term)
    );
    setFilteredClients(filtered);
  };

  // Handle sorting alphabetically by client name
  const handleSort = () => {
    const sortedClients = [...filteredClients].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredClients(sortedClients);
    setSorted(!sorted);
  };

  return (
    <div className="client-management-container">
      {/* Grid for Show/Hide buttons */}
      <div className="show-hide-container">
        <button
          className="show-hide-btn"
          onClick={() => setShowLeft((prev) => !prev)}
        >
          {showLeft ? "Hide Left Column" : "Show Left Column"}
        </button>
        <button
          className="show-hide-btn"
          onClick={() => setShowMiddle((prev) => !prev)}
        >
          {showMiddle ? "Hide Middle Column" : "Show Middle Column"}
        </button>
        <button
          className="show-hide-btn"
          onClick={() => setShowRight((prev) => !prev)}
        >
          {showRight ? "Hide Right Column" : "Show Right Column"}
        </button>
      </div>

      {/* Columns container */}
      <div className="client-columns">
        {showLeft && (
          <div className="client-management-left-column">
            <h3>Clients</h3>
            <div className="filter-container">
              <input
                type="text"
                placeholder="Search clients by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-box"
              />
              <button className="sort-btn" onClick={handleSort}>
                {sorted ? "Unsort" : "Sort A-Z"}
              </button>
            </div>

            <ul>
              {filteredClients.map((client) => (
                <li
                  key={client.id}
                  className={`client-management-client-item ${
                    selectedClient?.id === client.id ? "selected" : ""
                  }`}
                  onClick={() => handleClientSelect(client)}
                >
                  {client.name} - {client.race}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showMiddle && (
          <div className="client-management-middle-column">
            {selectedClient ? (
              <>
                <h3>Manage {selectedClient.name}</h3>
                <ul>
                  {iconsData.map((item) => (
                    <li
                      key={item.id}
                      className={`icon-card ${
                        selectedAction === item ? "selected" : ""
                      }`}
                      onClick={() => handleCardSelect(item)}
                    >
                      <div className="icon-header">
                        <span className="icon">{item.icon}</span>
                        <span className="client-management-title">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Select a client to manage.</p>
            )}
          </div>
        )}

        {showRight && (
          <div className="client-management-right-column">
            {selectedAction && selectedClient ? (
              <ActionDetails
                action={selectedAction.title}
                client={selectedClient}
              />
            ) : (
              <p>Select an action to view details.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ActionDetails = ({ action, client }) => (
  <div className="client-management-action-details">
    <h4>
      {action} for {client.name}
    </h4>
    <p>Details for {action} will be displayed here.</p>
    <button className="client-management-btn-add">Add</button>
    <button className="client-management-btn-history">View History</button>
  </div>
);

export default ClientList;
