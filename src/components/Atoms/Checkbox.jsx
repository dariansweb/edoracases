import React from 'react';
import PropTypes from 'prop-types';
import './styles/Checkbox.css'; // Assuming you'll put the CSS here

// Functional component for a modern, stylish checkbox group
const Checkbox = ({
  label = '', // Default value
  options,
  selectedValues = [], // Default value
  onChange,
  isLarge = false, // Default value
  error = '', // Default value
}) => {
  return (
    <div className="checkbox-group-container">
      {label && <label className="checkbox-group-label">{label}</label>}
      <div className={`checkbox-group ${error ? 'checkbox-group--error' : ''}`}>
        {options.map((option, index) => (
          <label key={index} className={`checkbox-option ${isLarge ? 'checkbox-large' : ''}`}>
            <input
              type="checkbox"
              name={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => {
                const newValue = selectedValues.includes(option.value)
                  ? selectedValues.filter(v => v !== option.value)
                  : [...selectedValues, option.value];
                onChange(newValue);
              }}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="checkbox-error">{error}</span>}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Checkbox;
