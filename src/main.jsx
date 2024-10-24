import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Header, Hero, Footer } from "./components/Index.js";
import { AppRoutes } from "./components/Index.js"; // Ensure correct path
import ScrollToTop from "./utils/ScrollToDiv.jsx"; // Assuming you use this for scroll behavior
import "./styles.css";

const AppWrapper = () => {
  const location = useLocation();

  // Check if the current route is Home
  const isHome = location.pathname === "/";

  // Check if the current route starts with '/prototypes'
  const isPrototype = location.pathname.startsWith("/prototypes");

  // Check if the current route includes '/ClientStories'
  const isClientStory = location.pathname.startsWith("/casestory");

  // Check if the current route is '/clients'
  const isAPIPage = location.pathname.startsWith("/clients");
  // Check if the current route is also '/providers'
  const isAPIPage2 = location.pathname.startsWith("/providers");
  // Check if the current route is '/clientpage'
  const isAPIPage3 = location.pathname.startsWith("/clientpage");

  return (
    <>
      <span className="top"></span> {/* Anchor point for scrolling to top */}
      {/* Conditionally render Header and Footer */}
      {!isClientStory && !isPrototype && !isAPIPage && !isAPIPage2 && !isAPIPage3 && <Header />}
      {isHome && <Hero />}
      {!isHome && <ScrollToTop />}
      <AppRoutes /> {/* Your main routing component */}
      {!isClientStory && !isPrototype && !isAPIPage && !isAPIPage2 && !isAPIPage3 && <Footer />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppWrapper /> {/* Use the wrapper component */}
    </Router>
  </StrictMode>
);
