import React from 'react'; // Importing React to create the component
import PropTypes from 'prop-types'; // Importing PropTypes for type checking of props

// Functional component that represents an input field
const Input = ({ 
  type,              // Type of input (e.g., text, password)
  label,             // Optional label for the input
  placeholder,       // Placeholder text to show when the input is empty
  value,             // Controlled value of the input
  onChange,          // Event handler for input value changes
  error              // Error message to display if there are validation issues
}) => {
  return (
    <div className="input-wrapper"> {/* Wrapper for styling the input and label */}
      {label && <label className="input-label">{label}</label>} {/* Conditionally render the label if provided */}
      
      <input
        type={type}                       // Setting the input type
        placeholder={placeholder}         // Setting placeholder text
        value={value}                     // Controlled value of the input
        onChange={onChange}               // Function to call on value change
        className={`input ${error ? 'input--error' : ''}`} // Add error class if there's an error
      />
      
      {error && <span className="input-error-message">{error}</span>} {/* Display error message if there is one */}
    </div>
  );
};

// PropTypes validation to enforce the correct data types for props
Input.propTypes = {
  type: PropTypes.string.isRequired,  // 'type' is a required string
  label: PropTypes.string,              // 'label' is an optional string
  placeholder: PropTypes.string,        // 'placeholder' is an optional string
  value: PropTypes.string.isRequired,   // 'value' is a required string
  onChange: PropTypes.func.isRequired,  // 'onChange' is a required function
  error: PropTypes.string,              // 'error' is an optional string
};

// Default props for the component in case they are not provided
Input.defaultProps = {
  type: 'text',     // Default input type is 'text'
  label: '',        // Default label is an empty string
  placeholder: '',  // Default placeholder is an empty string
  error: '',        // Default error message is an empty string
};

// Exporting the Input component to be used in other parts of the application
export default Input;
