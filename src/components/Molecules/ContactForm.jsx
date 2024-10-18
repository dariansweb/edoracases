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

  // State to track validation errors for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Helper function to validate email format
  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to handle form validation
  const validateForm = () => {
    let formErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors); // Update the error state
    return isValid;
  };

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

    // Validate the form before submitting
    if (!validateForm()) {
      return; // If the form is invalid, stop the submission
    }

    setIsSubmitting(true); // Set submitting state to true while sending

    try {
      // Send the form data to the backend (your serverless function on Vercel)
      const response = await axios.post("/api/send", formData);

      // Update the response message state to show success message
      setResponseMessage("Message sent successfully!");

      // Clear the form data
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" }); // Clear errors after successful submission
    } catch (error) {
      // If something goes wrong, set an error message
      setResponseMessage("Error sending message. Please try again.");
    }

    // Set submitting state to false after request completes
    setIsSubmitting(false);
  };

  return (
    <div className="pages-container">
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
            {/* Display error message if name is invalid */}
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="contact-form-field">
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
            {/* Display error message if email is invalid */}
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="contact-form-field">
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
            {/* Display error message if message is invalid */}
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button className="contact-form-button" type="submit">
            Send
          </button>

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
