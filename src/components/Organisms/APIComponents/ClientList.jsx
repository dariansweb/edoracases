import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientsList = () => {
  const [clients, setClients] = useState([]); // State for the clients data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("/api/clients/clients")  // Correct API endpoint
      .then((response) => {
        console.log("Response data:", response.data); // Log the full response data
        setClients(response.data.clients); // Set the clients array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the clients:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Clients List</h1>
      <ul>
        {Array.isArray(clients) && clients.length > 0 ? (
          clients.map((client) => (
            <li key={client.id}>
              {client.name} - {client.race} - {client.gender}
            </li>
          ))
        ) : (
          <p>No clients available</p>
        )}
      </ul>
    </div>
  );
};

export default ClientsList;
