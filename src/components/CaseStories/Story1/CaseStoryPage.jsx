import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ClientStoryReview from "./ClientStoryReview";
import ScrollToDiv from "../../../utils/ScrollToDiv";
import ListBox from "../../Atoms/Listbox";
import allServices from "../../../data/hhsServices"; // Import your services data
import "./styles/CaseStoryPage.css";

const CaseStoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current steps in the case journey
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentStep = pathSegments[pathSegments.length - 1] || "client-start";

  const clientState = {
    completedAssessment: true,
    hasCounselingScheduled: false,
    isAtRisk: true,
    hasCompletedServices: false,
  };

  const availablePaths = {
    referral: clientState.completedAssessment ? "intake" : "assessment",
    intake: clientState.isAtRisk ? "emergency-intervention" : "counseling",
    counseling: clientState.hasCompletedServices
      ? "graduation"
      : "extended-support",
  };

  const stages = {
    "client-start": [
      "Youth-Services",
      "Family-and-Child",
      "Disability",
      "Aging",
      "Medical",
    ],
    "Youth-Services": ["Commitment", "CBP Referral"],
    "Family-and-Child": ["Visit", "Case"],
    Disability: ["Intake", "Outake"],
    Aging: ["Nursing-Home", "Housing"],
    Medical: ["Prescription", "Doctor-Visit"],
    Commitment: ["Interview", "Assessment", "Residential", "JDC"],
    CBPReferral: ["Court", "DYS", "Parent"],
    Interview: ["Complete", "Incomplete"],
    Assessment: ["Complete", "Incomplete"],
    Residential: ["Complete", "Incomplete"],
    JDC: ["Complete", "Incomplete"],
    Court: ["Complete", "Incomplete"],
    Parent: ["Complete", "Incomplete"],
    Intake: ["Assessment", "Treatment"],
    services: ["Counseling", "Residential"],
    counseling: ["graduation", "extended-support"],
    graduation: ["case-closure"],
    "case-closure": ["closed-success", "closed-failure"],
  };

  const [selectedAction, setSelectedAction] = useState("");
  const [selectedActions, setSelectedActions] = useState([]);

  // Return to Client Start if the URL is manually altered
  useEffect(() => {
    if (!stages[currentStep]) {
      navigate("/client-start");
    }
  }, [currentStep, navigate]);

  // Handle moving to the next stage
  const handleNext = () => {
    if (selectedAction) {
      setSelectedActions((prevActions) => [...prevActions, selectedAction]);
      const newPath = `${location.pathname.replace(/\/$/, "")}/${selectedAction}`;
      navigate(newPath);
      setSelectedAction(""); // Reset selection after moving to the next stage
    }
  };

  const handleBack = () => {
    // Logic for handling back navigation
  };

  const handleReset = () => {
    navigate("/client-start");
    setSelectedActions([]); // Reset only current selections, keep the client stories
  };

  const isCaseClosed = currentStep.includes("case-closure");
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  // Function to toggle description visibility
  const toggleDescription = () => {
    setDescriptionVisible((prev) => !prev);
  };

  // Filter services based on the current step or selected actions
  const filteredServices = allServices.filter(service =>
    stages[currentStep]?.includes(service.title) // Adjust based on your logic
  );

  return (
    <>
      <ScrollToDiv targetDiv=".top" />
      <div className="pages-container">
        <nav>{/* Navigation code... */}</nav>
        <h1 className="dark">Case Story: {currentStep.replace("-", " ")}</h1>
        <button onClick={toggleDescription} className="btn-toggle">
          {isDescriptionVisible ? "Hide Description" : "Show Description"}
        </button>
        {isDescriptionVisible && (
          <div className="text-block">
            {/* Description content */}
          </div>
        )}
        <div className="flex-container">
          <div className="story-selection">
            {isCaseClosed ? (
              <h2 className="dark">
                Case Completed. View Report or Close Case.
              </h2>
            ) : stages[currentStep] && stages[currentStep].length > 0 ? (
              <div>
                <h2 className="dark">What happens next?</h2>
                <ListBox
                  label="Select Next Action"
                  selectedValue={selectedAction}
                  onChange={setSelectedAction}
                  options={stages[currentStep].map((action) => ({
                    label: action.replace("-", " "),
                    value: action,
                  }))}
                />
                <div>
                  <button onClick={handleBack} className="btn-back">
                    Back
                  </button>
                  <button onClick={handleNext} className="btn-next">
                    Next
                  </button>
                  <button onClick={handleReset} className="btn-reset">
                    New Client
                  </button>
                </div>
              </div>
            ) : (
              <h2 className="dark">
                No further actions available for this stage.
              </h2>
            )}
          </div>

          <div className="client-story-container">
            <div className="client-story-content">
              <h2 className="dark">Client Story:</h2>
              <ul>
                {selectedActions.map((action, index) => (
                  <li key={index}>{action.replace("-", " ")}</li>
                ))}
              </ul>
              <ClientStoryReview selectedActions={selectedActions} />
            </div>
            <div className="services-list">
              <h2 className="dark">Relevant Services:</h2>
              {filteredServices.length > 0 ? (
                <ul>
                  {filteredServices.map((service) => (
                    <li key={service.id}>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No relevant services available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStoryPage;
