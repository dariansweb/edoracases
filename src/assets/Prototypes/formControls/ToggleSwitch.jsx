import React, { useState } from "react";
import ToggleSwitch from "../../../components/Atoms/ToggleSwitch";

const ToggleSwitchPrototypes = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="pages-container">
      <h1 className="dark">Toggle Switch Examples</h1>
      
      {/* Basic Toggle */}
      <ToggleSwitch
        label="Basic Toggle"
        checked={isToggled} // Use isToggled here
        onChange={handleToggle} // Use handleToggle function
      />
      
      {/* Toggle with Icons */}
      <ToggleSwitch
        label="Toggle with Icons"
        checked={isToggled} // Use isToggled here
        onChange={handleToggle} // Use handleToggle function
        variant="with-icons"
        iconLeft="🌙" // Icon when off
        iconRight="☀️" // Icon when on
      />
    </div>
  );
};

export default ToggleSwitchPrototypes;
