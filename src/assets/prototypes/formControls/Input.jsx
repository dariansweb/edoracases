import React, { useState } from "react";
import Input from "../../../components/Atoms/Input";

const InputPrototype = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // For the rest of the inputs, you can create state variables as needed
  const [number, setNumber] = useState(""); // For the number input
  const [search, setSearch] = useState(""); // For the search input
  const [tel, setTel] = useState(""); // For telephone input
  const [url, setUrl] = useState(""); // For URL input
  const [date, setDate] = useState(""); // For date input
  const [time, setTime] = useState(""); // For time input
  const [range, setRange] = useState(0); // For range input

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Simple password validation (e.g., at least 6 characters)
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="pages-container">
      <section>
        <div className="text-block">Input Prototypes</div>
        <div className="input-row">
          <Input
            type="text"
            label="Text Input"
            placeholder="Enter text"
            value={text}
            onChange={handleTextChange}
          />
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
          <Input
            type="number"
            label="Number Input"
            placeholder="Enter number"
            value={number}
            onChange={handleNumberChange}
          />
          <Input
            type="search"
            label="Search Input"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
          <Input
            type="tel"
            label="Telephone Input"
            placeholder="Enter phone number"
            value={tel}
            onChange={handleTelChange}
          />
          <Input
            type="url"
            label="URL Input"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
          />
          <Input
            type="date"
            label="Date Input"
            placeholder="Select date"
            value={date}
            onChange={handleDateChange}
          />
          <Input
            type="time"
            label="Time Input"
            value={time}
            onChange={handleTimeChange}
          />
          <Input
            type="range"
            label="Range Input"
            value={range}
            onChange={handleRangeChange}
          />
          <Input type="color" label="Color Input" />
        </div>
      </section>
    </div>
  );
};

export default InputPrototype;
