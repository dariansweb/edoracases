import React, { useState } from "react";
import axios from "axios";
import "./styles/ContactForm.css";

const ContactForm = () => {
  // State to manage form input values (name, email, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle success/error messages
  const [responseMessage, setResponseMessage] = useState("");
  
  // State to track if the form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData, // Spread existing formData to update only the changed field
      [e.target.name]: e.target.value, // Dynamically update form data by input name (name, email, message)
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setIsSubmitting(true); // Set submitting state to true while sending

    try {
      // Send the form data to the backend (your serverless function on Vercel)
      const response = await axios.post("/api/send", formData);

      // Update the response message state to show success message
      setResponseMessage("Message sent successfully!");

      // Clear the form data
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      // If something goes wrong, set an error message
      setResponseMessage("Error sending message. Please try again.");
    }

    // Set submitting state to false after request completes
    setIsSubmitting(false);
  };

  return (
    <div className="pages-container">
      {/* If the form is submitting, show "Sending...", otherwise render the form or success message */}
      {isSubmitting ? (
        <p className="sending-message">Sending...</p>
      ) : responseMessage.includes("successfully") ? (
        <p className="contact-form-message contact-form-success">
          {responseMessage}
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="dark">Contact Us</h2>

          <div className="contact-form-field">
            {/* Name input field */}
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            {/* Email input field */}
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            {/* Message textarea field */}
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          {/* Submit button */}
          <button className="contact-form-button" type="submit">
            Send
          </button>

          {/* Display error message if there's an issue */}
          {responseMessage && !responseMessage.includes("successfully") && (
            <p className="contact-form-message contact-form-error">
              {responseMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;