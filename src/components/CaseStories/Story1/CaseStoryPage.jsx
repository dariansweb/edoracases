import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ClientStoryReview from "./ClientStoryReview"; // Ensure the import matches your filename
import ScrollToDiv from "../../../utils/ScrollToDiv";
import ListBox from "../../Atoms/Listbox";
import "./styles/CaseStoryPage.css";

const CaseStoryPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current steps in the case journey
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Get the current step in the journey or default to 'client-start'
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

  // Define possible stages and available next steps
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
      const newPath = `${location.pathname.replace(
        /\/$/,
        ""
      )}/${selectedAction}`;
      navigate(newPath);
      setSelectedAction(""); // Reset selection after moving to the next stage
    }
  };

  const handleBack = () => {
    // Check if there is a previous step to go back to
    if (currentStep !== "start") {
      setCurrentStep((prevStep) => {
        // Logic to determine the previous step
        // You should already have an array or logic for this
        const currentIndex = steps.indexOf(prevStep);
        const newIndex = Math.max(0, currentIndex - 1);
        return steps[newIndex];
      });
    }
  };

  // Handle resetting the journey back to 'client-start' but keep the stories
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

  return (
    <>
    <ScrollToDiv targetDiv=".top" />
      <div className="pages-container">
        <nav>{/* Navigation code... */}</nav>
        <h1 className="dark">Case Story: {currentStep.replace("-", " ")}</h1>
        {/* Show/Hide Description Button */}
        <button onClick={toggleDescription} className="btn-toggle">
          {isDescriptionVisible ? "Hide Description" : "Show Description"}
        </button>
        {isDescriptionVisible && (
          <div className="text-block">
            <p>
              Welcome to the Case Story Builder! This tool is designed to help
              you effortlessly create and manage detailed stories for your
              clients. Each story you set up serves as a unique narrative that
              captures the journey, challenges, and milestones of your clients,
              enabling you to provide personalized support.
            </p>
            <p>
              <strong>How to Use:</strong>
            </p>
            <ol>
              <li>
                <strong>Select a Service:</strong> Choose the appropriate
                service category that best fits your client's needs from the
                dropdown menu.
              </li>
              <li>
                <strong>Add Client Details:</strong> Enter relevant details in
                the input fields provided. You can add multiple entries as
                needed to ensure a comprehensive overview.
              </li>
              <li>
                <strong>Store Your Selections:</strong> Click the "Store
                Selections" button to save your entries. You can easily view and
                manage your saved stories at any time.
              </li>
              <li>
                <strong>Edit or Delete:</strong> If you need to make changes,
                you can edit or remove any stored stories to keep your records
                accurate and up to date.
              </li>
              <li>
                <strong>Share Your Stories:</strong> Once you're ready, you can
                send these stories via email to share insights and updates with
                your team or clients.
              </li>
            </ol>
            <p>
              Start creating impactful stories today to empower your clients and
              enhance your service delivery!
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStoryPage;
