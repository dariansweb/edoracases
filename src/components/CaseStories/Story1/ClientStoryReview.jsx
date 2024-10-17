import React, { useState } from "react";

const ClientStoryReview = ({ selectedActions }) => {
  const [storedClientStories, setStoredClientStories] = useState([]);
  const [showSelections, setShowSelections] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleStoreSelections = () => {
    if (selectedActions.length > 0) {
      setStoredClientStories((prevStories) => [
        ...prevStories,
        selectedActions,
      ]);
      setShowSelections(true);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(storedClientStories[index].join(", "));
  };

  const handleUpdate = () => {
    if (editIndex !== null && editValue) {
      const updatedStories = [...storedClientStories];
      updatedStories[editIndex] = editValue.split(", ").map(item => item.trim());
      setStoredClientStories(updatedStories);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedStories = storedClientStories.filter((_, i) => i !== index);
    setStoredClientStories(updatedStories);
  };

  return (
    <div>
      <button onClick={handleStoreSelections}>Store Selections</button>

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
