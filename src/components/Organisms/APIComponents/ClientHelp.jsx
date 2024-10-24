import React from "react";
import "./styles/ClientHelp.css";

const ClientHelp = ({ isOpen, handleClose }) => {
  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="client-help-modal">
      <div className="client-help-modal-content">
        {/* Close button */}
        <button className="client-help-close-btn" onClick={handleClose}>
          [ &times; ] {/* A visible "X" for closing */}
        </button>
        <h2>Client Management Help Guide</h2>
        <p>
          <strong>Left Column:</strong> Use the search bar to find a client by name.
          Click on a client to select them. You can also sort the list alphabetically.
        </p>
        <p>
          <strong>Middle Column:</strong> After selecting a client, use this
          column to choose a management action, like scheduling or reviewing details.
          Use the search bar and sort feature to narrow down actions.
        </p>
        <p>
          <strong>Right Column:</strong> Once a client and action are selected,
          details about that action for the client will be displayed here. Use
          this column to add actions or review history.
        </p>
      </div>
    </div>
  );
};

export default ClientHelp;
