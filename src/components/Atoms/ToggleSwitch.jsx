import React from 'react';
import PropTypes from 'prop-types';
import './styles/ToggleSwitch.css'; 

const ToggleSwitch = ({ 
  label = '', // Default parameter
  checked = true, // Default parameter
  onChange, 
  variant = 'basic', // Default parameter
  iconLeft = null, // Default parameter
  iconRight = null // Default parameter
}) => {
  const handleChange = (event) => {
    onChange(event.target.checked); // Pass the actual checked value
  };

  const renderIcons = () => (
    <>
      {iconLeft && <span className="toggle-icon toggle-icon-left">{iconLeft}</span>}
      {iconRight && <span className="toggle-icon toggle-icon-right">{iconRight}</span>}
    </>
  );

  return (
    <div className={`toggle-switch-container ${variant}`}>
      {label && <label className="toggle-switch-label">{label}</label>}
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          className="toggle-input" 
          checked={checked} 
          onChange={handleChange} // Use the local handleChange function
          id={`toggle-${label}`} 
        />
        <span className="toggle-slider">
          {variant === 'with-icons' && renderIcons()}
        </span>
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['basic', 'with-icons']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

export default ToggleSwitch;
