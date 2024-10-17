import React from 'react';
import PropTypes from 'prop-types';
import "./styles/Select.css";

const Select = ({
  label = '',
  options = [],
  value,
  onChange,
  error = ''
}) => {
  const errorId = error ? `error-${label.replace(/\s+/g, '-').toLowerCase()}` : null;

  return (
    <div className="select-container">
      {label && <label className="select-label" htmlFor={label}>{label}</label>}
      
      <select
        id={label}
        value={value}
        onChange={onChange}
        className={`select-field ${error ? 'select-field--error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : null}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && <span className="select-error" id={errorId}>{error}</span>}
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
