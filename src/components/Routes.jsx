import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirects

// HOME PAGE
import Home from "../components/Pages/Home";
import About from "../components/Pages/About"; 
import Services from "../components/Pages/Services"; 
import Contact from "../components/Pages/Contact"; 
import Privacy from "../components/Pages/Privacy";
import Terms from "../components/Pages/Terms";
import NotFound from "./Pages/NotFound";

// SERVICES
import ChildAndFamily from "./Pages/Services/ChildAndFamily";
import Aging from "./Pages/Services/Aging";
import Disability from "./Pages/Services/Disability";
import JuvenileJustice from "./Pages/Services/JuvenileJustice";
import Medical from "./Pages/Services/Medical";
import ProviderServices from "./Pages/Services/ProviderServices";

// PROTOTYPES
import Prototypes from "../assets/prototypes/Prototypes";
import FloatingActionButtons from "../assets/prototypes/FloatingActionButtons";
import Dashboard1 from "../assets/prototypes/dashboards/Dashboard1";

//ICONS 
import IconsList from "../components/Icons/IconList";

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

      <Route path="/icons" element={<IconsList />} />

      {/* 404 page a 404 component */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
