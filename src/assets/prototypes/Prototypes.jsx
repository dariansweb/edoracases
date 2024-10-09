import React from "react";
import "../../pages/styles/Pages.css";
import "./styles/Prototype.css";
import { prototypes } from "../../data/menuData"; // Adjust path as necessary
import ScrollToDiv from "../../utils/ScrollToDiv";
import FABPopupLeft from "./floatActionButtons/FABPopupLeft";
import FABPopupRight from "./floatActionButtons/FABPopupRight";
import FABPopupMiddle from "./floatActionButtons/FabPopupsMiddle";

const Prototypes = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".hero-container" />
      <FABPopupLeft /> <FABPopupMiddle /> <FABPopupRight />
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
