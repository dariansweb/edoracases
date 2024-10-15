import React, { useState } from 'react';
import Input from '../../../components/Atoms/Input';

const InputPrototype = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Simple password validation (e.g., at least 6 characters)
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className='pages-container'>
      <h1 className="dark">Form Input Types</h1>
      <div className="input-row">
        <Input type="text" label="Text Input" placeholder="Enter text" />
        <Input 
          type="email" 
          label="Email Input" 
          placeholder="Enter email" 
          value={email} 
          onChange={handleEmailChange} 
          error={emailError} 
        />
        <Input 
          type="password" 
          label="Password Input" 
          placeholder="Enter password" 
          value={password} 
          onChange={handlePasswordChange} 
          error={passwordError} 
        />
        <Input type="number" label="Number Input" placeholder="Enter number" />
        <Input type="search" label="Search Input" placeholder="Search..." />
        <Input type="tel" label="Telephone Input" placeholder="Enter phone number" />
        <Input type="url" label="URL Input" placeholder="Enter URL" />
        <Input type="date" label="Date Input" placeholder="Select date" />
        <Input type="time" label="Time Input" />
        <Input type="range" label="Range Input" />
        <Input type="color" label="Color Input" />
      </div>
    </div>
  );
}

export default InputPrototype;
