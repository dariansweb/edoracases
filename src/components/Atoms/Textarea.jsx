import React from 'react';
import PropTypes from 'prop-types';
import "./styles/Textarea.css";

const Textarea = ({
  label = '',
  placeholder = '',
  value,
  onChange,
  error = '',
  rows = 4,
  cols = 50,
  isDisabled = false,
  isReadOnly = false,
  resize = false,
  maxLength = null,
}) => {
  return (
    <div className="textarea-container">
      {label && <label className="textarea-label">{label}</label>}
      
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={isDisabled ? undefined : onChange}
        className={`textarea-field ${error ? 'textarea-field--error' : ''} ${resize ? 'resize' : ''}`}
        aria-invalid={!!error}
        rows={rows}
        cols={cols}
        disabled={isDisabled}
        readOnly={isReadOnly}
        maxLength={maxLength}
      />
      
      {error && <span className="textarea-error">{error}</span>}
    </div>
  );
};

// We can still keep propTypes for type checking
Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  resize: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default Textarea;
