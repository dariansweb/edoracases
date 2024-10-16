import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";
import LoginForm from "../Molecules/LoginForm";

const Contact = () => {

  return (
    <>
          <ScrollToDiv targetDiv=".top" />
      <h1 className="dark centered">Contact Us</h1>

      <div className="pages-container">
        <LoginForm />
      </div>
    </>
  );
};

export default Contact;
