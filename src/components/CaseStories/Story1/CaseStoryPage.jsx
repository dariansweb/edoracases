import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CaseStoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the current steps in the case journey
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Get the current step in the journey or default to 'client-start'
  const currentStep = pathSegments[pathSegments.length - 1] || 'client-start';

  // Define possible stages and available next steps
  const stages = {
    'client-start': ['referral', 'emergency-intervention'],
    referral: ['intake', 'case-closure'],
    intake: ['assessment', 'court-review'],
    assessment: ['services', 'home-visit'],
    services: ['counseling', 'residential'],
    counseling: ['graduation', 'extended-support'],
    'case-closure': ['closed-success', 'closed-failure'],
    // ... more stages as needed
  };

  // Available actions based on the current step
  const availableActions = stages[currentStep] || [];

  // Handle navigation to the next part of the client's story
  const handleChoice = (action) => {
    navigate(`${location.pathname}/${action}`); // Append the chosen stage to the current URL
  };

  return (
    <div>
    <nav>
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {segment.replace('-', ' ')}
          {index < pathSegments.length - 1 && ' > '}
        </span>
      ))}
    </nav>      
      <h1>Case Story: {currentStep.replace('-', ' ')}</h1>
      {availableActions.length > 0 ? (
        <div>
          <h2>What happens next?</h2>
          <ul>
            {availableActions.map((action, index) => (
              <li key={index}>
                <button onClick={() => handleChoice(action)}>
                  {action.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Case Completed. View Report or Close Case.</h2>
      )}
    </div>
  );
};

export default CaseStoryPage;