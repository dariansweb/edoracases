import React from 'react';
import PropTypes from 'prop-types';
import "./styles/Input.css"; // Make sure you have the necessary styles

const Input = ({
  type = 'text',
  label = '',
  placeholder = '',
  value = '',
  onChange,
  error = ''
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-field--error' : ''}`}
        aria-invalid={!!error}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
