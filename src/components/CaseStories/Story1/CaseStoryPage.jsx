import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Added Link import
import ListBox from "../../Atoms/Listbox";

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
    counseling: clientState.hasCompletedServices ? "graduation" : "extended-support",
  };

  // Define possible stages and available next steps
  const stages = {
    "client-start": ["Commitment", "CBPReferral"],
    Commitment: ["Interview", "Assessment", "Residential", "JDC"],
    CBPReferral: ["Court", "DYS", "Parent"],

    Interview: ["Complete", "Incomplete"],
    Assessment: ["Complete", "Incomplete"],
    Residential: ["Complete", "Incomplete"],
    JDC: ["Complete", "Incomplete"],

    Court: ["Complete", "Incomplete"],
    DYS: ["Complete", "Incomplete"],
    Parent: ["Complete", "Incomplete"],

    Intake: ["Assessment", "Treatment"],

    services: ["Counseling", "Residential"],
    counseling: ["graduation", "extended-support"],
    graduation: ["case-closure"],
    "case-closure": ["closed-success", "closed-failure"],
  };

  // Track the selected action for the current stage
  const [selectedAction, setSelectedAction] = useState("");

  // Return to Client Start if the URL is manually altered
  useEffect(() => {
    if (!stages[currentStep]) {
      navigate("/client-start");
    }
  }, [currentStep, navigate]);

  // Handle moving to the next stage
  const handleNext = () => {
    if (selectedAction) {
      const newPath = `${location.pathname.replace(/\/$/, "")}/${selectedAction}`;
      navigate(newPath);
      setSelectedAction(""); // Reset selection after moving to the next stage
    }
  };

  // Handle moving back to the previous stage
  const handleBack = () => {
    if (pathSegments.length > 1) {
      const newPath = `/${pathSegments.slice(0, -1).join("/")}`;
      navigate(newPath);
    } else {
      navigate("/client-start");
    }
  };

  // Handle resetting the journey back to 'client-start'
  const handleReset = () => {
    navigate("/client-start");
    setSelectedAction(""); // Reset selection
  };

  // Determine if the case is in its final stage ('case-closure')
  const isCaseClosed = currentStep.includes("case-closure");

  return (
    <>
      <div className="pages-container">
        <nav>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <span key={index}>
                <Link to={path}>{segment.replace("-", " ")}</Link>
                {index < pathSegments.length - 1 && " > "}
              </span>
            );
          })}
        </nav>
        <section>
          <button onClick={handleReset} className="btn-reset">
            New Client
          </button>
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
                options={stages[currentStep].map((action) => ({
                  label: action.replace("-", " "),
                  value: action,
                }))}
              />
              <div>
                <button onClick={handleBack} className="btn-next">
                  Back
                </button>
                <button onClick={handleNext} className="btn-next">
                  Next
                </button>
              </div>
            </div>
          ) : (
            <h2 className="dark">No further actions available for this stage.</h2>
          )}
        </section>{" "}
      </div>
    </>
  );
};

export default CaseStoryPage;
