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

      <div className="pages-container">
        <h1 className="dark">Floating Action Buttons</h1>
        <h2 className="dark">Mobile Design System</h2>
      </div>
    </>
  );
};

export default FloatingActionButtons;
