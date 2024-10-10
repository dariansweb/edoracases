import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Header, Hero, Footer } from "./components/Index";
import { AppRoutes } from "./components/Index.js"; // Ensure correct path
import ScrollToTop from "./utils/ScrollToDiv.jsx"; // Assuming you use this for scroll behavior
import "./styles.css";

const AppWrapper = () => {
  const location = useLocation();

  // Get the current pathname to apply conditional logic
  const isHome = location.pathname === '/';
  const isFABPrototype = location.pathname === '/floatingactionbuttons'; // Replace with actual path for FAB

  return (
    <>
      <span id="top"></span> {/* Anchor point for scrolling to top */}
      <Header />
      
      {/* Conditionally render Hero only on the home path */}
      {isHome && <Hero />}

      {/* ScrollToTop only if it's not Home */}
      {!isHome && <ScrollToTop />}

      <AppRoutes /> {/* Your main routing component */}
      
      {/* Conditionally show Footer, but hide on FAB prototype pages */}
      {!isFABPrototype && <Footer />}
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
