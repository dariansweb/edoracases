import React from "react";
import ScrollToDiv from "../utils/ScrollToDiv";
const Contact = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".pages-container" />
      <h1 className="dark">Contact Us</h1>
      <div className="pages-container">
        <p>contact@edoracases.com</p>
      </div>
    </>
  );
};

export default Contact;
