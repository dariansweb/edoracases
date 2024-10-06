import React from "react";
import "../../pages/styles/Pages.css";
import "./styles/Prototype.css"
import { prototypes } from "../../data/menuData"; // Adjust path as necessary
import ScrollToDiv from "../../utils/ScrollToDiv";

const Prototypes = () => {
    return (
      <>
      <ScrollToDiv targetDiv=".pages-container" />          
        <h1 className="dark">EDORA Prototypes</h1>
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
