import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirects

import Home from "../pages/Home";
import About from "../pages/About"; 
import Services from "../pages/Services"; 
import Contact from "../pages/Contact"; 

// DIVISIONS
import ChildAndFamily from "../pages/ChildAndFamily";
import Aging from "../pages/Aging";
import Disability from "../pages/Disability";
import JuvenileJustice from "../pages/JuvenileJustice";
import Medical from "../pages/Medical";
import ProviderServices from "../pages/ProviderServices";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

// PROTOTYPES
import Prototypes from "../assets/prototypes/Prototypes";
import FloatingActionButtons from "../assets/prototypes/FloatingActionButtons";
import Dashboard1 from "../assets/prototypes/dashboards/Dashboard1";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/child-and-family" element={<ChildAndFamily />} />
      <Route path="/aging" element={<Aging />} />
      <Route path="/disability" element={<Disability />} />
      <Route path="/juvenile-justice" element={<JuvenileJustice />} />
      <Route path="/medical" element={<Medical />} />
      <Route path="/provider-services" element={<ProviderServices />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />      

      <Route path="/prototypes" element={<Prototypes />} />
      <Route path="/floatingactionbuttons" element={<FloatingActionButtons />} />      
      <Route path="/dashboard1" element={<Dashboard1 />} />

      {/* Default route: redirects to Home or could be a 404 page */}
      <Route path="*" element={<Navigate to="/" />} />
      {/* If you want a 404 page instead of redirecting to Home, you could create a 404 component */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
