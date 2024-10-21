import React, { useState } from "react";
import ClientHeader from "./ClientHeader";
import ClientsData from "../../../data/clients.json"; // Import JSON data
import iconsData from "../../../data/iconData"; // Import the icon data
import "./styles/ClientList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null); // Selected client
  const [selectedAction, setSelectedAction] = useState(null); // Action for the middle column
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [sorted, setSorted] = useState(false); // Sort toggle state
  const [filteredClients, setFilteredClients] = useState(ClientsData.clients); // Filtered clients state

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setSelectedAction(null); // Reset action when selecting a new client
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
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

  // Other array functions (you can expand this list)
  const filterByGender = (gender) => {
    const filtered = ClientsData.clients.filter(
      (client) => client.gender.toLowerCase() === gender.toLowerCase()
    );
    setFilteredClients(filtered);
  };

  const filterByRace = (race) => {
    const filtered = ClientsData.clients.filter(
      (client) => client.race.toLowerCase() === race.toLowerCase()
    );
    setFilteredClients(filtered);
  };

  const filterByAgeRange = (minAge, maxAge) => {
    const filtered = ClientsData.clients.filter(
      (client) => client.age >= minAge && client.age <= maxAge
    );
    setFilteredClients(filtered);
  };

  return (
    <>
      <ClientHeader />
      <div className="client-management-container">
        <div className="left-column">
          <h3>Clients</h3>

          {/* Search Input and Sort Button */}
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

          {/* Additional Filter Links */}
          <div className="filter-links">
            <button onClick={() => filterByGender("Male")}>
              Filter by Male
            </button>
            <button onClick={() => filterByGender("Female")}>
              Filter by Female
            </button>
            <button onClick={() => filterByRace("Vulcan")}>
              Filter by Race (Vulcan)
            </button>
            <button onClick={() => filterByAgeRange(30, 50)}>
              Filter by Age 30-50
            </button>
            <button onClick={() => setFilteredClients(ClientsData.clients)}>
              Reset Filters
            </button>
          </div>

          <ul>
            {filteredClients.map((client) => (
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
              <h3>Manage {selectedClient.name}</h3>
              <ul>
                {iconsData.map((item) => (
                  <li key={item.id} className="icon-card">
                    <div className="icon-header">
                      <span className="icon">{item.icon}</span>
                      <span className="title">{item.title}</span>
                    </div>
                    <div className="icon-actions">
                      {/* Toggle button */}
                      <button
                        className="btn-toggle"
                        onClick={() => handleActionSelect(item)}
                      >
                        {selectedAction === item
                          ? "Hide Details"
                          : "Show Details"}
                      </button>
                      {/* If context is open, show the context */}
                      {selectedAction === item && (
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
            <ActionDetails
              action={selectedAction.title}
              client={selectedClient}
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
