import React, { useState } from 'react';
import Input from '../Atoms/Input';
import Textarea from '../Atoms/Textarea';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await axios.post('/api/send', formData);
      setResponseMessage('Message sent successfully!');
    } catch (error) {
      setResponseMessage('Error sending message. Please try again.');
    }

    setIsSubmitting(false); // Reset submitting state after response
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div>
        <Input
          type="text"
          label="Your Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          disabled={isSubmitting} // Disable input during submission
        />
      </div>
      <div>
        <Input
          type="email"
          label="Your Email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          disabled={isSubmitting} // Disable input during submission
        />
      </div>
      <div>
        <Textarea
          label="Your Message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          name="message"
          rows={6}
          disabled={isSubmitting} // Disable textarea during submission
        />
      </div>
      <button type="submit" disabled={isSubmitting}> {/* Disable button if submitting */}
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
      <p>{responseMessage}</p>
    </form>
  );
};

export default ContactForm;