import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";
import ContactForm from "../Molecules/ContactForm";

const Contact = () => {

  return (
    <>
          <ScrollToDiv targetDiv=".top" />
      <div className="pages-container">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
