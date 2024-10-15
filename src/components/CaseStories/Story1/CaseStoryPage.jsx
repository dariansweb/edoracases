import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListBox from '../../Atoms/Listbox'; 

const CaseStoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current steps in the case journey
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Get the current step in the journey or default to 'client-start'
  const currentStep = pathSegments[pathSegments.length - 1] || "client-start";

  // Define possible stages and available next steps
  const stages = {
    "client-start": ["Commitment", "Re-Commitment"],
    Commitment: ["Intake", "Residential Placement", "JDC Diverted"],
    intake: ["Assessment", "Treatment"],
    assessment: ["Complete", "Incomplete"],
    services: ["Counseling", "Residential"],
    counseling: ["graduation", "extended-support"],
    graduation: ["case-closure"],
    "case-closure": ["closed-success", "closed-failure"],
  };

  // Track the selected action for the current stage
  const [selectedAction, setSelectedAction] = useState('');

  // Handle moving to the next stage
  const handleNext = () => {
    if (selectedAction) {
      const newPath = `${location.pathname.replace(/\/$/, "")}/${selectedAction}`;
      navigate(newPath);
      setSelectedAction(''); // Reset selection after moving to the next stage
    }
  };

  // Handle resetting the journey back to 'client-start'
  const handleReset = () => {
    navigate("/client-start");
    setSelectedAction(''); // Reset selection
  };

  // Determine if the case is in its final stage ('case-closure')
  const isCaseClosed = currentStep.includes("case-closure");

  return (
    <>
      {/* Display the path segments as navigation */}
      <nav>
        {pathSegments.map((segment, index) => (
          <span key={index} className="text-block">
            {segment.replace("-", " ")}
            {index < pathSegments.length - 1 && " > "}
          </span>
        ))}
      </nav>

      {/* "New Client" button to restart the journey */}
      <button onClick={handleReset} className="btn-reset">
        New Client
      </button>

      <div className="pages-container">
        <h1 className="dark">Case Story: {currentStep.replace("-", " ")}</h1>
        
        {isCaseClosed ? (
          <h2 className="dark">Case Completed. View Report or Close Case.</h2>
        ) : stages[currentStep] && stages[currentStep].length > 0 ? (
          <div>
            <h2 className="dark">What happens next?</h2>

            {/* Use the ListBox component for the user to choose options */}
            <ListBox
              label="Select Next Action"
              selectedValue={selectedAction}
              onChange={setSelectedAction}
              options={stages[currentStep].map(action => ({
                label: action.replace("-", " "),
                value: action,
              }))}
            />

            <button onClick={handleNext} className="btn-next">
              Next
            </button>
          </div>
        ) : (
          <h2 className="dark">No further actions available for this stage.</h2>
        )}
      </div>
    </>
  );
};

export default CaseStoryPage;
