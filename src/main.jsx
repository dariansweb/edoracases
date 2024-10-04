import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Header, Hero, Footer } from "./components/Index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoutes } from "./components/Index.js"; // Ensure correct path
import "./styles.css";

const AppWrapper = () => {
  const location = useLocation(); // Get the current location

  // Check if the current path is the home path
  const isHome = location.pathname === '/';

  return (
    <>
      <span id="top"></span> {/* Anchor point for scrolling to top */}
      <Header />
      {/* Conditionally render Hero only on the home path */}
      {isHome && <Hero />}
      <AppRoutes />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppWrapper />  {/* Use the wrapper component */}
    </Router>
  </StrictMode>
);
