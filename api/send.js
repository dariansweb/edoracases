// Load environment variables from the .env file (like your email and password)
// These are hidden from the public and only available to the server
require('dotenv').config();

// Import Nodemailer, a package used to send emails
const nodemailer = require('nodemailer');

// This is the main function that will run when someone submits the contact form
// Vercel triggers this function when a POST request is made to '/api/send'
export default async (req, res) => {

  // Destructure the form data (name, email, message) from the request body
  // This is the data coming from the frontend (the contact form)
  const { name, email, message } = req.body;

  // Check if any of the required fields (name, email, message) are missing
  // If any field is missing, return an error response
  if (!name || !email || !message) {
    // 400 means "Bad Request" - we're telling the client something's wrong
    return res.status(400).json({ error: 'Please fill all the fields' });
  }

  // Set up the transporter object using Nodemailer
  // This transporter is what connects to Zoho's SMTP server and sends the email
  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',    // This is Zoho's SMTP server (for sending emails)
    port: 465,                // Port 465 is for secure connections (SSL)
    secure: true,             // We are using SSL (secure) to protect our data
    auth: {
      user: process.env.EMAIL_USER, // Your Zoho email address (from the environment variables)
      pass: process.env.EMAIL_PASS, // Your Zoho email password (from the environment variables)
    },
  });

  // Set up the actual email details
  const mailOptions = {
    from: `"${name}" <${email}>`,    // This is who the email is from (the name and email of the person filling out the form)
    to: process.env.EMAIL_USER,      // This is where the email will be sent (your admin email)
    subject: `New Contact Form Submission from ${name}`, // This is the subject line of the email
    text: message,                   // This is the plain text version of the email (if HTML can't be displayed)
    html: `<p>You have a new contact form submission.</p>  // The main content of the email in HTML format
           <h3>Details</h3>
           <ul>
             <li>Name: ${name}</li>
             <li>Email: ${email}</li>
             <li>Message: ${message}</li>
           </ul>`,
  };

  try {
    // Try to send the email with the transporter object we set up earlier
    await transporter.sendMail(mailOptions);
    
    // If the email is sent successfully, send a 200 status (OK) and success message back to the client
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    // If there's an error sending the email, catch it and send a 500 status (Internal Server Error)
    // We're also sending the error message back to the client in case they need to know what went wrong
    res.status(500).json({ error: 'Failed to send email' });
  }
};
