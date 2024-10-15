import React, { useState } from "react";
import ToggleSwitch from "../../../components/Atoms/ToggleSwitch";
import ErrorBoundary from "../.././../utils/ErrorBoundary"; // The ErrorBoundary we just created

const ToggleSwitchPrototypes = () => {
  // Separate states for each toggle
  const [isBasicToggled, setIsBasicToggled] = useState(false);

  const handleBasicToggle = (newCheckedState) => {
    setIsBasicToggled(newCheckedState); // Set state to the passed value
  };

  return (
    <div className="pages-container">
      <h1 className="dark">Toggle Switch Examples</h1>
      <ErrorBoundary>
        {/* Basic Toggle */}
        <ToggleSwitch
          label="Basic Toggle"
          checked={isBasicToggled} // Controlled component
          onChange={handleBasicToggle} // Update state correctly
        />

        {/* Conditionally rendered div based on toggle state */}
        {isBasicToggled ? (
          <div className="toggle-content">
            <p>The toggle is ON! 🎉</p>
          </div>
        ) : (
          <div className="toggle-content">
            <p>The toggle is OFF! 😢</p>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default ToggleSwitchPrototypes;
