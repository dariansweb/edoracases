import React from "react";
import ScrollToDiv from "../../utils/ScrollToDiv";
import ContactForm from "../Molecules/ContactForm";
import "./styles/Contact.css"; // Link to the enhanced CSS

const Contact = () => {
  return (
    <>
      <ScrollToDiv targetDiv=".top" />
      <div className="pages-container contact-form-wrapper">
        <h3 className="dark">Thank you for your interest in EDORA!</h3>
        <div className="text-block">
          <p>
            I am genuinely grateful that you're reaching out to connect with me
            regarding EDORA, the case management system I'm building with
            passion and dedication. Whether you're here to give feedback, ask a
            question, or share your thoughts, your input is invaluable.
          </p>
          <p>
            Please include as much detail as possible in your message, such as
            the specific feature you're interested in, any challenges you might
            be facing, or your ideas on how I can improve EDORA. I'll make sure
            to review your message thoroughly and respond to you promptly.
          </p>
          <ContactForm />
          <h5>I'm here to helh5, and I look forward to hearing from you!</h5>
        </div>
      </div>

    </>
  );
};

export default Contact;
