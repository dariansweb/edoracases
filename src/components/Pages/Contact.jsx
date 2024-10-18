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
            Hey there! I'm Darian Ross, and I'm super excited you're reaching
            out about EDORA. Whether it’s feedback, questions, or ideas, I’d
            love to hear from you!
          </p>
          <p>
            Share as much detail as you’d like, and I’ll get back to you as soon
            as possible. Let’s make this project awesome together!
          </p>
          <ContactForm />
          <h5 className="dark">Can’t wait to hear from you!</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
