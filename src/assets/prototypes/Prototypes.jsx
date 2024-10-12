import React from "react";
import "../../components/Pages/styles/Pages.css";
import "./styles/Prototype.css";
import { prototypes } from "../../data/menuData"; // Adjust path as necessary
import ScrollToDiv from "../../utils/ScrollToDiv";

const Prototypes = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".hero-container" />
      <div className="hero-container full-width-container">
        <div className="hero-content">
          <h1 className="light hero-title">UX UI</h1>
          <h3 className="light">Prototypes</h3>
        </div>
      </div>
      <div className="pages-container">
        {Object.entries(prototypes).map(([category, { id, items }]) => (
          <div key={id} className="prototype-section">
            <h2 className="dark">{category}</h2>
            <ul className="menu-list">
              {items.map(({ name, link }, index) => (
                <li key={`${id}-${index}`} className="prototype-item">
                  <a href={link} className="menu-link">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default Prototypes;
