import React, { useState, useEffect, useRef } from "react";
import "./styles/ClientPage.css";

import ClientsData from "../../../data/clients.json";
const initialClients = ClientsData?.clients || []; // Ensure it's always an array

function ClientPage() {
  const [clients, setClients] = useState(initialClients);
  const [editingClientId, setEditingClientId] = useState(null);
  const [filteredClients, setFilteredClients] = useState(initialClients);
  const [filterText, setFilterText] = useState("");
  const tableContainerRef = useRef(null);
  const fakeScrollRef = useRef(null); // Fix: Add fakeScrollRef initialization

  // This commmented code will show all columns on load
  // const [visibleColumns, setVisibleColumns] = useState(Object.keys(initialClients[0] || {}));
  const [visibleColumns, setVisibleColumns] = useState(
    ["name", "dob", "age", "race", "gender"].sort()
  );

  const [showColumnSelector, setShowColumnSelector] = useState(false);

  // Ensure both the table and fake scrollbar stay in sync
  const handleTableScroll = () =>
    handleSyncScroll(tableContainerRef, fakeScrollRef);
  const handleFakeScroll = () =>
    handleSyncScroll(fakeScrollRef, tableContainerRef);

  useEffect(() => {
    if (Array.isArray(clients)) {
      setFilteredClients(
        clients.filter((client) =>
          client.name.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
  }, [filterText, clients]);

  const handleScroll = (scrollOffset) => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };
  const handleSyncScroll = (source, target) => {
    if (target.current && source.current) {
      target.current.scrollLeft = source.current.scrollLeft;
    }
  };

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
              <label key={key} className="client-info-column-option">
                <input
                  type="checkbox"
                  value={key}
                  checked={visibleColumns.includes(key)}
                  onChange={handleColumnVisibilityChange}
                />
                {key}
              </label>
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
        <div className="client-info-table-container-wrapper">
          <div className="client-info-scroll-controls">
            <button
              className="client-info-scroll-left"
              onClick={() => handleScroll(-300)}
            >
              &#8592; Scroll Left
            </button>
            <button
              className="client-info-scroll-right"
              onClick={() => handleScroll(300)}
            >
              Scroll Right &#8594;
            </button>
          </div>
          {/* Custom Scroll Track */}
          <div className="client-info-scroll-track">
            <div className="client-info-scroll-thumb"></div>
          </div>
          {/* Top Fake Scroll Container */}
          <div
            ref={fakeScrollRef}
            className="client-info-fake-scroll-container"
            onScroll={() => handleSyncScroll(fakeScrollRef, tableContainerRef)}
          >
            <div className="client-info-scroll-content"></div>
          </div>

          <div
            className="client-info-table-container"
            ref={tableContainerRef}
            onScroll={handleTableScroll}
          >
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
                        <>
                          <button
                            className="client-info-save"
                            onClick={() => handleSaveClick(client.id)}
                          >
                            Save
                          </button>
                          <button
                            className="client-info-delete"
                            onClick={() => handleDeleteClick(client.id)}
                          >
                            Del
                          </button>
                        </>
                      ) : (
                        <button
                          className="client-info-edit"
                          onClick={() => handleEditClick(client.id)}
                        >
                          Edit
                        </button>
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
          </div>
        </div>
      ) : (
        <p>No clients found. Please adjust your filter.</p>
      )}
    </div>
  );
}

export default ClientPage;
