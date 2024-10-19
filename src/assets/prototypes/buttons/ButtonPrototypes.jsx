import React from 'react';
import Button from '../../../components/Atoms/Button'; // Adjust the import path as needed

const ButtonPrototypes = () => {
  const handleClick = (label) => {
    alert(`${label} button clicked!`);
  };

  return (
    <div className='pages-container'>
      <h2 className='dark'>Button Prototypes</h2>
      
      {/* Primary Button */}
        <h3 className='dark'>Primary Button A</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Primary')} 
          variant="primary" // Pass variant as 'primary'
        />
      {/* Primary Button B */}
      <h3 className='dark'>Primary Button B</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Primary')} 
          variant="primary-b" // Pass variant as 'primary'
        />

      {/* Secondary Button */}
        <h3 className='dark'>Secondary Button A</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Secondary')} 
          variant="secondary" // Pass variant as 'secondary'
        />
      {/* Secondary Button */}
      <h3 className='dark'>Secondary Button B</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Secondary')} 
          variant="secondary-b" // Pass variant as 'secondary'
        />

      {/* Tertiary Button */}
        <h3 className='dark'>Tertiary Button A</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Tertiary')} 
          variant="tertiary" // Pass variant as 'tertiary'
        />
      {/* Tertiary Button */}
      <h3 className='dark'>Tertiary Button B</h3>
        <Button 
          label="Select Button" 
          type="button" 
          onClick={() => handleClick('Tertiary')} 
          variant="tertiary-b" // Pass variant as 'tertiary'
        />

      {/* Disabled Primary Button */}
        <h3 className='dark'>Disabled Primary Button</h3>
        <Button 
          label="Disabled" 
          type="button" 
          onClick={() => handleClick('Disabled Primary')} 
          disabled
          variant="primary" // Explicitly specify primary variant
        />

      {/* Disabled Secondary Button */}
        <h3 className='dark'>Disabled Secondary Button</h3>
        <Button 
          label="Disabled" 
          type="button" 
          onClick={() => handleClick('Disabled Secondary')} 
          disabled
          variant="secondary" // Explicitly specify secondary variant
        />

      {/* Disabled Tertiary Button */}
        <h3 className='dark'>Disabled Tertiary Button</h3>
        <Button 
          label="Disabled" 
          type="button" 
          onClick={() => handleClick('Disabled Tertiary')} 
          disabled
          variant="tertiary" // Explicitly specify tertiary variant
        />
    </div>
  );
};

export default ButtonPrototypes;
