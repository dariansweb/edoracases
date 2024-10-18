// Import the necessary modules using ES module syntax
import nodemailer from 'nodemailer';  // Nodemailer for sending emails
import dotenv from 'dotenv';  // dotenv for loading environment variables

// Load environment variables from the .env file
dotenv.config();

// Main function to handle form submissions
export default async (req, res) => {
  const { name, email, message } = req.body;

  // Check if all required fields are filled
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields' });
  }

  // Configure the email transporter using Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',  // Zoho's SMTP server
    port: 465,  // Port 465 for SSL
    secure: true,  // Use SSL for secure connection
    auth: {
      user: process.env.EMAIL_USER,  // Your Zoho email from environment variables
      pass: process.env.EMAIL_PASS,  // Your Zoho app-specific password from environment variables
    },
  });

  // Set up the email details
  const mailOptions = {
    from: `"${name}" <${email}>`,  // Sender's name and email
    to: process.env.EMAIL_USER,  // Your admin email (where you receive the messages)
    subject: `New Contact Form Submission from ${name}`,  // Subject of the email
    text: message,  // Plain text version of the message
    html: `<p>You have a new contact form submission.</p>
           <ul>
             <li>Name: ${name}</li>
             <li>Email: ${email}</li>
             <li>Message: ${message}</li>
           </ul>`,  // HTML formatted email
  };

  try {
    // Send the email using the transporter
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });  // Success response
  } catch (error) {
    // Handle any errors during the email sending process
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};
