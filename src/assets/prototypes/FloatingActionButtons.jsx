import React from "react";
import "../../pages/styles/Pages.css";
import ScrollToDiv from "../../utils/ScrollToDiv";

import FABPopupLeft from "./floatActionButtons/FABPopupLeft";
import FABPopupRight from "./floatActionButtons/FABPopupRight";
import FABPopupMiddle from "./floatActionButtons/FabPopupsMiddle";

const FloatingActionButtons = () => {
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
        <h1 className="dark">Floating Action Buttons</h1>
        <h2 className="dar">Mobile Design Only</h2>

        <h3 className="dark">Left, Middle, Right</h3>
      </div>
    </>
  );
};

export default FloatingActionButtons;
