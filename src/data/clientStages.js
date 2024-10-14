// APPROACH 02
// This aligns with data-driven routing patterns, where the app reacts to changes 
// in the state of the system rather than predefined URL paths. 
// It also fits well with React's declarative nature.
const clientState = {
  completedAssessment: true,
  hasCounselingScheduled: false,
  isAtRisk: true,
  hasCompletedServices: false,
};

// Available routes dynamically generated based on the state:
const availablePaths = {
  referral: clientState.completedAssessment ? "intake" : "assessment",
  intake: clientState.isAtRisk ? "emergency-intervention" : "counseling",
  counseling: clientState.hasCompletedServices
    ? "graduation"
    : "extended-support",
};
//   In this case, you can change the paths on the fly based on the client's status:
//   If they complete the assessment, they go to intake.
//   If they’re flagged as at-risk, they go to an emergency intervention.
//   If they haven’t completed services, the counseling route takes them to extended support instead of graduation.

// APPROACH 01
const stages = {
  "client-start": ["referral", "emergency-intervention"],
  referral: ["intake", "case-closure"],
  intake: ["assessment", "court-review"],
  assessment: ["services", "home-visit"],
  services: ["counseling", "residential"],
  counseling: ["graduation", "extended-support"],
  "case-closure": ["closed-success", "closed-failure"],
  // ... more stages as needed
};

// Here’s how this structure works in action:
// Initial Case Creation: The user starts a new case for a client.

// URL: /client-start
// Options: referral or emergency-intervention
// Referral Process: The client is referred to the system.

// URL: /client-start/referral
// Options: intake, case-closure
// Client Intake: A caseworker conducts an intake for the client.

// URL: /client-start/referral/intake
// Options: assessment, court-review
// Assessment: The client undergoes an assessment.

// URL: /client-start/referral/intake/assessment
// Options: services, home-visit
// Services Delivered: The client starts receiving services.

// URL: /client-start/referral/intake/assessment/services
// Options: counseling, residential
// Counseling: The client receives counseling.

// URL: /client-start/referral/intake/assessment/services/counseling
// Options: graduation, extended-support
// Graduation: The client successfully completes their program.

// URL: /client-start/referral/intake/assessment/services/counseling/graduation
// Options: extended-support, case-closure
