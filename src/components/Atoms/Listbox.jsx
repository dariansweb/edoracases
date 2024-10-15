import React from 'react';
import PropTypes from 'prop-types';
import "./styles/Listbox.css"; // Ensure you have this CSS file for styling

// ListBox component for single selection
const ListBox = ({
  label = '',
  options = [],
  selectedValue,
  onChange,
  error = ''
}) => {
  return (
    <div className="listbox-container">
      {label && <label className="listbox-label">{label}</label>}
      
      <div
        className={`listbox-field ${error ? 'listbox-field--error' : ''}`}
        role="listbox"
        aria-labelledby={label}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`listbox-option ${selectedValue === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
            role="option"
            aria-selected={selectedValue === option.value}
          >
            {option.label}
          </div>
        ))}
      </div>
      
      {error && <span className="listbox-error">{error}</span>}
    </div>
  );
};

ListBox.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default ListBox;
