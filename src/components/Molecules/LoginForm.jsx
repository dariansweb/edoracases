import React, { useState } from "react"; // Importing React and useState hook for managing state
import Input from "../Atoms/Input"; // Importing the Input component for use in the form
import "./styles/LoginForm.css"; // Import the CSS file for styling

// Functional component representing the Login Form
const LoginForm = () => {
  // State variables for username, password, and error messages
  const [username, setUsername] = useState(""); // State for the username input
  const [password, setPassword] = useState(""); // State for the password input
  const [error, setError] = useState(null); // State for storing error messages

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if username and password are provided
    if (!username || !password) {
      setError("Username and password are required"); // Set error if fields are empty
    } else {
      // Handle login logic here (e.g., API call for authentication)
      setError(null); // Clear error if inputs are valid
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {" "}
      {/* Form element with onSubmit handler */}
      <h2 className="dark">Login</h2> {/* Title of the form */}
      {/* Input for username with error handling */}
      <Input
        type="text" // Type of input is text for username
        placeholder="Username" // Placeholder for the username input
        value={username} // Controlled value for username
        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
        className={error ? 'error' : 'login-form-error-message'} // Add error class if there's an error
      />
      {/* Input for password with error handling */}
      <Input
        type="password" // Type of input is password for secure entry
        placeholder="Password" // Placeholder for the password input
        value={password} // Controlled value for password
        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
        className={error ? 'error' : 'login-form-error-message'} // Add error class if there's an error
      />
      {/* Display error message */}
      {error && <div className="login-form-error-message">{error}</div>}
      {/* Submit button for logging in */}
      <button className="login-form-button" type="submit">
        Login
      </button>{" "}
      {/* Button to submit the form */}
    </form>
  );
};

// Exporting the LoginForm component for use in other parts of the application
export default LoginForm;
