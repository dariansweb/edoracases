// export const mainMenuItems = [
//   { id: 1, name: "Child and Family", link: "/child-and-family" },
//   { id: 2, name: "Aging", link: "/aging" },
//   { id: 3, name: "Disability", link: "/disability" },
//   { id: 4, name: "Juvenile Justice", link: "/juvenile-justice" },
//   { id: 5, name: "Medical", link: "/medical" },
//   { id: 6, name: "Provider Services", link: "/provider-services" },
// ];

export const mainMenuItems = [
  { id: 4, name: "JJIS", link: "/juvenile-justice" },
];

export const starMenuItems = [
  // { id: 7, name: "Home", link: "/" },
  { id: 7, name: "Home", link: "/" },
  { id: 8, name: "About", link: "/about" },
  { id: 9, name: "Services", link: "/services" },  
  { id: 10, name: "Contact", link: "/contact" },
  { id: 107, name: "Guides", link: "/icons" },
  // { id: 110, name: "GitHub", link: "https://www.github.com/dariansweb/edoracases" },  
];

export const adminMenuItems = [
  { id: 11, name: "Dashboard", link: "#" },
  { id: 12, name: "User Management", link: "#" },
  { id: 13, name: "Reports", link: "#" },
];

export const DashboardMenusItems = [
  { id: 14, name: "Cases", link: "/cases" },
  { id: 15, name: "Events", link: "/events" },
  { id: 16, name: "Client", link: "/client" },
  { id: 17, name: "Treatment", link: "/treatment" },
  { id: 18, name: "Placements", link: "/placement" },
  { id: 19, name: "Billing", link: "/billing" },
];

// src/data/menuItems.js
export const prototypes = {
  "Floating Action Buttons": {
    id: 28,
    items: [
      { name: "Design System 1", link: "/floatingactionbuttons" },
      { name: "Design System 2", link: "/settings/configurations" },
      { name: "Design System 3", link: "/settings/data-import-export" },
    ],
  },
  "Client Stories": {
    id: 28,
    items: [
      { name: "Client Story 1", link: "/client-start" },
      { name: "Client Story 2", link: "/settings/configurations" },
      { name: "Client Story 3", link: "/settings/data-import-export" },
    ],
  },  
  Dashboards: {
    id: 20,
    items: [
      { name: "Main Dashboard", link: "/dashboard1" },
      { name: "Client Overview Dashboard", link: "/dashboard/client-overview" },
      { name: "Case Management Dashboard", link: "/dashboard/case-management" },
    ],
  },
  "Client Details": {
    id: 21,
    items: [
      { name: "Client Profile", link: "/client/profile" },
      { name: "Client History", link: "/client/history" },
      { name: "Family Information", link: "/client/family-info" },
    ],
  },
  Billing: {
    id: 22,
    items: [
      { name: "Billing Summary", link: "/billing/summary" },
      { name: "Invoice Generation", link: "/billing/invoice" },
      { name: "Payment Records", link: "/billing/payments" },
    ],
  },
  Forms: {
    id: 23,
    items: [
      { name: "Intake Form", link: "/forms/intake" },
      { name: "Progress Notes", link: "/forms/progress-notes" },
      { name: "Service Plan", link: "/forms/service-plan" },
    ],
  },
  Reports: {
    id: 24,
    items: [
      { name: "Case Report", link: "/reports/case" },
      { name: "Billing Report", link: "/reports/billing" },
      {
        name: "Service Utilization Report",
        link: "/reports/service-utilization",
      },
    ],
  },
  Scheduling: {
    id: 25,
    items: [
      { name: "Appointment Calendar", link: "/scheduling/calendar" },
      { name: "Session Tracker", link: "/scheduling/session-tracker" },
      { name: "Court Dates", link: "/scheduling/court-dates" },
    ],
  },
  Notifications: {
    id: 26,
    items: [
      { name: "Client Alerts", link: "/notifications/alerts" },
      { name: "Case Updates", link: "/notifications/updates" },
      { name: "System Notifications", link: "/notifications/system" },
    ],
  },
  Settings: {
    id: 27,
    items: [
      { name: "User Preferences", link: "/settings/preferences" },
      { name: "System Configurations", link: "/settings/configurations" },
      { name: "Data Import/Export", link: "/settings/data-import-export" },
    ],
  },
};
