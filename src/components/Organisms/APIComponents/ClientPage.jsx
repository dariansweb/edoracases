import React, { useState, useEffect } from "react";
import "./styles/ClientPage.css";

import ClientsData from "../../../data/clients.json";
const initialClients = ClientsData?.clients || []; // Ensure it's always an array

function ClientPage() {
  const [clients, setClients] = useState(initialClients);
  const [editingClientId, setEditingClientId] = useState(null);
  const [filteredClients, setFilteredClients] = useState(initialClients);
  const [filterText, setFilterText] = useState("");
  // This commmented code will show all columns on load
  // const [visibleColumns, setVisibleColumns] = useState(Object.keys(initialClients[0] || {}));
  const [visibleColumns, setVisibleColumns] = useState(
    ["name", "dob", "age", "race", "gender"].sort()
  );

  const [showColumnSelector, setShowColumnSelector] = useState(false);

  useEffect(() => {
    if (Array.isArray(clients)) {
      setFilteredClients(
        clients.filter((client) =>
          client.name.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
  }, [filterText, clients]);

  const handleEditClick = (id) => {
    setEditingClientId(id);
  };

  const handleSaveClick = (id) => {
    setEditingClientId(null);
  };

  const handleInputChange = (id, key, value) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, [key]: value } : client
      )
    );
  };

  const handleDeleteClick = (id) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleColumnVisibilityChange = (e) => {
    const { value, checked } = e.target;
    setVisibleColumns((prevColumns) => {
      const updatedColumns = checked
        ? [...prevColumns, value]
        : prevColumns.filter((col) => col !== value);
      return updatedColumns.sort(); // Sort columns in ascending order
    });
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const toggleColumnSelector = () => {
    setShowColumnSelector(!showColumnSelector);
  };

  return (
    <div className="client-info-page">
      <div className="client-info-column-selector-wrapper">
        <button
          className="client-info-dropdown-btn"
          onClick={toggleColumnSelector}
        >
          Columns
        </button>
        {showColumnSelector && (
          <div className="client-info-column-selector">
            {Object.keys(initialClients[0] || {}).map((key) => (
              <div key={key} className="client-info-column-option">
                <input
                  type="checkbox"
                  value={key}
                  checked={visibleColumns.includes(key)}
                  onChange={handleColumnVisibilityChange}
                />
                <label>{key}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="client-info-filter">
        <input
          type="text"
          placeholder="Filter clients by name..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>

      {Array.isArray(filteredClients) && filteredClients.length > 0 ? (
        <table className="client-info-table">
          <thead>
            <tr>
              <th>Actions</th>
              {visibleColumns.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id} style={{ height: "1.1rem" }}>
                <td className="client-info-actions">
                  {editingClientId === client.id ? (
                    <button
                      className="client-info-save"
                      onClick={() => handleSaveClick(client.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="client-info-edit"
                        onClick={() => handleEditClick(client.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="client-info-delete"
                        onClick={() => handleDeleteClick(client.id)}
                      >
                        Del
                      </button>
                    </>
                  )}
                </td>
                {visibleColumns.map((key) => (
                  <td key={key}>
                    {editingClientId === client.id && key !== "id" ? (
                      <input
                        type="text"
                        value={client[key]}
                        onChange={(e) =>
                          handleInputChange(client.id, key, e.target.value)
                        }
                      />
                    ) : key === "description" ? (
                      truncateText(client[key], 100)
                    ) : client[key] instanceof Object ? (
                      JSON.stringify(client[key])
                    ) : (
                      client[key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No clients found. Please adjust your filter.</p>
      )}
    </div>
  );
}

export default ClientPage;
