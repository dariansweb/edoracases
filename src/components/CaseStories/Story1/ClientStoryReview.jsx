import React, { useState } from "react";

const ClientStoryReview = ({ selectedActions }) => {
  const [storedClientStories, setStoredClientStories] = useState([]); // Array to store multiple client stories
  const [showSelections, setShowSelections] = useState(false); // Track visibility of stored selections
  const [editIndex, setEditIndex] = useState(null); // Track which story is being edited
  const [editValue, setEditValue] = useState(""); // Store value for editing

  const handleStoreSelections = () => {
    if (selectedActions.length > 0) {
      setStoredClientStories((prevStories) => [
        ...prevStories,
        selectedActions, // Store the current selection as a new client story
      ]);
      setShowSelections(true); // Show selections when stored
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index); // Set the index of the story to be edited
    setEditValue(storedClientStories[index].join(", ")); // Set the value to be edited
  };

  const handleUpdate = () => {
    if (editIndex !== null && editValue) {
      const updatedStories = [...storedClientStories];
      updatedStories[editIndex] = editValue.split(", ").map(item => item.trim());
      setStoredClientStories(updatedStories);
      setEditIndex(null); // Reset the edit index
      setEditValue(""); // Clear the edit value
    }
  };

  const handleDelete = (index) => {
    const updatedStories = storedClientStories.filter((_, i) => i !== index);
    setStoredClientStories(updatedStories); // Update the stories after deletion
  };

  return (
    <div>
      <button onClick={handleStoreSelections}>Store Selections</button>

      {/* Show stored selections only when the button is clicked */}
      {showSelections && storedClientStories.length > 0 && (
        <div>
          <h3>Stored Selections:</h3>
          <ul>
            {storedClientStories.map((story, storyIndex) => (
              <li key={storyIndex}>
                Client Story {storyIndex + 1}: {story.join(", ").replace(/-/g, " ")}
                <button onClick={() => handleEdit(storyIndex)}>Edit</button>
                <button onClick={() => handleDelete(storyIndex)}>Delete</button>
              </li>
            ))}
          </ul>
          {editIndex !== null && (
            <div>
              <input 
                type="text" 
                value={editValue} 
                onChange={(e) => setEditValue(e.target.value)} 
              />
              <button onClick={handleUpdate}>Update</button>
              <button onClick={() => setEditIndex(null)}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientStoryReview;
