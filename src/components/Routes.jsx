import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Navigate for redirects

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

import FormInput from "../assets/prototypes/formControls/Input";
import FormListbox from "../assets/prototypes/formControls/Listbox";
import FormSelect from "../assets/prototypes/formControls/Select";
import FormTextarea from "../assets/prototypes/formControls/Textarea";
import FormRadiobutton from "../assets/prototypes/formControls/Radiobutton";
import FormCheckbox from "../assets/prototypes/formControls/Checkbox";
import ButtonPrototypes from "../assets/prototypes/buttons/ButtonPrototypes";

// PROTOTYPES CLIENT JOURNEY
import CaseStory1 from "./CaseStories/Story1/CaseStoryPage";
import CaseStory2 from "./CaseStories/Story2/CaseStoryPage";
import CaseStory3 from "./CaseStories/Story3/CaseStoryPage";
import ServiceSelector from "./CaseStories/ServiceSelector";

//ICONS
import IconsList from "../components/Icons/IconList";

// API Listings
import ClientsList from "../components/Organisms/APIComponents/ClientList";
import Providers from "../components/Organisms/APIComponents/providers"

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
      {/* Guides and Terms */}
      <Route path="/icons" element={<IconsList />} />
      {/* Prototype Routes with Nested Child Components */}
      <Route path="/prototypes" element={<Prototypes />}>
        <Route
          path="floatingactionbuttons"
          element={<FloatingActionButtons />}
        />
        <Route path="dashboard1" element={<Dashboard1 />} />
        <Route path="forminput" element={<FormInput />} />
        <Route path="formlistbox" element={<FormListbox />} />
        <Route path="formselect" element={<FormSelect />} />
        <Route path="formtextarea" element={<FormTextarea />} />
        <Route path="formradiobutton" element={<FormRadiobutton />} />
        <Route path="formcheckbox" element={<FormCheckbox />} />
        <Route path="buttonprototypes" element={<ButtonPrototypes />} />
      </Route>
      {/* Client Journeys */}
      <Route path="/client-start/*" element={<CaseStory1 />} />
      <Route path="/casestory2" element={<CaseStory2 />} />
      <Route path="/casestory3" element={<CaseStory3 />} />
      <Route path="/serviceselector/*" element={<ServiceSelector />} />
      {/* API Links */}
      <Route path="/providers" element={<Providers />} />
      {/* New route for ClientsList */}
      <Route path="/clients" element={<ClientsList />} /> {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
