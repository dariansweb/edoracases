// src/components/IconsList.js

import React from "react";
import iconsData from "../../data/iconData";
import "./styles/IconList.css"; // Ensure your CSS is imported
import "../Pages/styles/Pages.css"
const IconsList = () => {
  return (
    <>
    <div className="pages-container">
        <section>
          <h1 className="dark">Case Icons</h1>
          <h2 className="dark">Meanings and Usage</h2>
          <dl>
            {/* Use definition list */}
            {iconsData.map((iconItem) => (
              <div key={iconItem.id} className="icon-container">
                <div className="icon-wrapper">
                  {" "}
                  {/* Separate container for the icon */}
                  <span className="icon" role="img" aria-label={iconItem.title}>
                    {iconItem.icon}
                  </span>
                </div>
                <dt className="icon-title">
                  <strong>{iconItem.title}</strong>
                </dt>
                <dd>
                  <p>{iconItem.meaning}</p>
                  <small>{iconItem.context}</small>
                </dd>
                {iconItem.useTooltip && (
                  <div className="tooltip">{iconItem.meaning}</div>
                )}
              </div>
            ))}
          </dl>
        </section></div>
    </>
  );
};

export default IconsList;
