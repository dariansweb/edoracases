import React, { useState } from "react";
import RadioButton from "../../../components/Atoms/Radiobutton";

const RadiobuttonPrototypes = () => {
  const [selectedBasic, setSelectedBasic] = useState("");
  const [selectedInline, setSelectedInline] = useState("");
  const [selectedImageRadio, setSelectedImageRadio] = useState("");
  const [selectedSwitch, setSelectedSwitch] = useState("");

  const basicOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const inlineOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const imageOptions = [
    { label: "🍔 Burger", value: "burger" },
    { label: "🍕 Pizza", value: "pizza" },
    { label: "🍣 Sushi", value: "sushi" },
  ];

  const switchOptions = [
    { label: "Dark Mode", value: "dark" },
    { label: "Light Mode", value: "light" },
  ];

  return (
    <div className="pages-container">
      <section>
        <h1 className="dark">Radio Button Prototypes</h1>

        {/* Basic Radio Group */}
        <div className="radio-prototype-section">
          <h2 className="dark">Basic Radio Buttons</h2>
          <RadioButton
            label="Select an option"
            name="basic"
            options={basicOptions}
            value={selectedBasic}
            onChange={setSelectedBasic}
          />
        </div>

        {/* Inline Radio Group */}
        <div className="radio-prototype-section">
          <h2 className="dark">Inline Radio Buttons</h2>
          <div className="inline-radio">
            <RadioButton
              label=""
              name="inline"
              options={inlineOptions}
              value={selectedInline}
              onChange={setSelectedInline}
            />
          </div>
        </div>

        {/* Radio Buttons with Images */}
        <div className="radio-prototype-section">
          <h2 className="dark">Radio Buttons with Images</h2>
          <RadioButton
            label="Pick your favorite food"
            name="imageRadio"
            options={imageOptions}
            value={selectedImageRadio}
            onChange={setSelectedImageRadio}
          />
          <div className="image-preview">
            <p>Selected: {selectedImageRadio ? selectedImageRadio : "None"}</p>
          </div>
        </div>

        {/* Switch-style Radio Buttons */}
        <div className="radio-prototype-section">
          <h2 className="dark">Switch-style Radio Buttons</h2>
          <RadioButton
            label="Choose mode"
            name="switchRadio"
            options={switchOptions}
            value={selectedSwitch}
            onChange={setSelectedSwitch}
          />
        </div>
      </section>{" "}
    </div>
  );
};

export default RadiobuttonPrototypes;
