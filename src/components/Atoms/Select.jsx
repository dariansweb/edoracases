import React from 'react';
import PropTypes from 'prop-types';
import "./styles/Select.css";

// Functional component for a modern, stylish select field
const Select = ({
  label = '',
  options = [],
  value,
  onChange,
  error = ''
}) => {
  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      
      <select
        value={value}
        onChange={onChange}
        className={`select-field ${error ? 'select-field--error' : ''}`}
        aria-invalid={!!error}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Select;
