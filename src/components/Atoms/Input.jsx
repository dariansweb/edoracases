import React from 'react'; 
import PropTypes from 'prop-types'; 

// Functional component for a modern, stylish input field
const Input = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="input-container"> {/* Container for input and label */}
      {label && <label className="input-label">{label}</label>}
      
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-field--error' : ''}`} // Conditional class based on error
        aria-invalid={!!error} // Accessibility: mark input as invalid if error exists
      />
      
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

// PropTypes validation to enforce the correct data types for props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

// Default props for the component in case they are not provided
Input.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  error: '',
};

export default Input;
