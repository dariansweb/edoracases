import React from 'react';
import PropTypes from 'prop-types';
import './styles/Radiobutton.css'; // Assuming you’ll put the CSS here

const RadioButton = ({ name, label, options, value, onChange, error }) => {
  return (
    <div className="radio-group-container">
      {label && <label className="radio-group-label">{label}</label>}
      <div className={`radio-group ${error ? 'radio-group--error' : ''}`}>
        {options.map((option, index) => (
          <label key={index} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="radio-input"
              aria-checked={value === option.value} 
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="radio-error">{error}</span>}
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

RadioButton.defaultProps = {
  label: '',
  error: '',
};

export default RadioButton;
