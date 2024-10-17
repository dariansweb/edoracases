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
  const isCaseStory2 = location.pathname === "/casestory2";

  return (
    <>
      <span className="top"></span> {/* Anchor point for scrolling to top */}
      <Header />
      {/* Conditionally render Hero only on the home path */}
      {isHome && <Hero />}
      {/* ScrollToTop only if it's not Home */}
      {!isHome && <ScrollToTop />}
      <AppRoutes /> {/* Your main routing component */}
      {/* Conditionally show Footer, hide on all-related pages */}
      {!(isPrototype || isCaseStory2) && <Footer />}
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
