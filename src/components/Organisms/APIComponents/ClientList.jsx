import React, { useState } from "react";
import ClientsData from "../../../data/clients.json"; // Import JSON data
import iconsData from "../../../data/iconData"; // Import the icon data
import ClientManagementHeader from "./ClientManagementHeader";
import "./styles/ClientList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null); // Selected client
  const [selectedAction, setSelectedAction] = useState(null); // Action for the middle column
  const [searchTerm, setSearchTerm] = useState(""); // Search term state for clients
  const [middleSearchTerm, setMiddleSearchTerm] = useState(""); // Search term for middle column
  const [sorted, setSorted] = useState(false); // Sort toggle state for clients
  const [filteredClients, setFilteredClients] = useState([]); // Initially empty client list
  const [filteredIcons, setFilteredIcons] = useState([]); // Initially empty icon list

  // Handle client selection
  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setSelectedAction(null); // Reset action when selecting a new client
    setFilteredIcons(iconsData); // Load all icons once a client is selected
  };

  // Handle card selection in middle column
  const handleCardSelect = (action) => {
    setSelectedAction(action); // Select the card
  };

  // Handle client search input changes
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter clients based on search term
    if (term) {
      const filtered = ClientsData.clients.filter((client) =>
        client.name.toLowerCase().includes(term)
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients([]); // Clear clients if search term is empty
    }
  };

  // Handle middle column search input changes (for filtering icons)
  const handleMiddleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setMiddleSearchTerm(term);

    // Filter icons based on search term
    if (term) {
      const filteredIconsData = iconsData.filter((item) =>
        item.title.toLowerCase().includes(term)
      );
      setFilteredIcons(filteredIconsData);
    } else {
      setFilteredIcons(iconsData); // Show all icons if no search term is entered
    }
  };

  // Handle sorting alphabetically by client name
  const handleSort = () => {
    const sortedClients = [...filteredClients].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredClients(sortedClients);
    setSorted(!sorted);
  };

  // Handle sorting alphabetically by icon title in middle column
  const handleMiddleSort = () => {
    const sortedIcons = [...filteredIcons].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredIcons(sortedIcons);
    setSorted(!sorted);
  };

  return (
    <>
      <ClientManagementHeader />
      <div className="client-management-container">
        {/* Left Column: Clients */}
        <div className="client-management-left-column">
          <h3 className="dark">Clients</h3>

          {/* Search Input and Sort Button */}
          <div className="filter-container">
            <input
              type="text"
              placeholder="Search clients by name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="client-management-search-box"
            />
            <button className="client-management-sort-btn" onClick={handleSort}>
              {sorted ? "Unsort Clients" : "Sort Clients A-Z"}
            </button>
          </div>

          {/* Show clients only if there are filtered results */}
          <ul>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <li
                  key={client.id}
                  className={`client-management-client-item ${
                    selectedClient?.id === client.id ? "selected" : ""
                  }`}
                  onClick={() => handleClientSelect(client)}
                >
                  {client.name} - {client.race}
                </li>
              ))
            ) : (
              <p>No clients found. Please search.</p>
            )}
          </ul>
        </div>

        {/* Middle Column: Icon Cards */}
        <div className="client-management-middle-column">
          {selectedClient ? (
            <>
              <h3 className="dark">Manage {selectedClient.name}</h3>

              {/* Middle column search input and sort button */}
              <div className="filter-container">
                <input
                  type="text"
                  placeholder="Search actions by name..."
                  value={middleSearchTerm}
                  onChange={handleMiddleSearchChange}
                  className="client-management-search-box"
                />
                <button className="client-management-sort-btn" onClick={handleMiddleSort}>
                  {sorted ? "Unsort Actions" : "Sort Actions A-Z"}
                </button>
              </div>

              {/* Show icons only if there are filtered results */}
              <ul>
                {filteredIcons.length > 0 ? (
                  filteredIcons.map((item) => (
                    <li
                      key={item.id}
                      className={`client-management-icon-card ${
                        selectedAction === item ? "selected" : ""
                      }`}
                      onClick={() => handleCardSelect(item)}
                    >
                      <div className="client-management-icon-header">
                        <span className="client-management-icon">{item.icon}</span>
                        <span className="client-management-title">{item.title}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No actions found. Please search.</p>
                )}
              </ul>
            </>
          ) : (
            <p>Select a client to manage.</p>
          )}
        </div>

        {/* Right Column: Action Details */}
        <div className="client-management-right-column">
          {selectedAction && selectedClient ? (
            <ActionDetails
              action={selectedAction.title}
              client={selectedClient}
              meaning={selectedAction.meaning} // Pass the meaning from selectedAction
            />
          ) : (
            <p>Select an action to view details.</p>
          )}
        </div>
      </div>
    </>
  );
};

// ActionDetails component for the right column
const ActionDetails = ({ action, client, meaning }) => {
  return (
    <div className="client-management-action-details">
      <h4 className="dark">
        {action} for {client.name}
      </h4>
      <p>Details for {action} will be displayed here.</p>
      <p className="client-management-meaning">
        {meaning || "No meaning available."}
      </p>
      <button className="client-management-btn-add">Add</button>
      <button className="client-management-btn-history">View History</button>
    </div>
  );
};

export default ClientList;
