  import React from "react";
  import ReactDOM from "react-dom/client";

  import { StrictMode } from "react";
  import { Header, Hero, App, Footer } from "./components/Index";

  import { BrowserRouter as Router } from "react-router-dom"; // Import Router
  import { AppRoutes } from "./components/Index.js"; // Ensure correct path
  // import { AppRoutes } from "./components/Routes";

  import "./index.css";
  import "./styles.css";

  ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Router>
        <Header />
        <Hero />
        <App />
        <Footer />
      </Router>
    </StrictMode>
  );
