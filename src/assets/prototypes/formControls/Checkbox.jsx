import React, { useState } from "react";
import Checkbox from "../../../components/Atoms/Checkbox"; // Ensure the path is correct based on your folder structure

const CheckboxPrototype = () => {
  const [selectedGroup1, setSelectedGroup1] = useState([]);
  const [selectedGroup2, setSelectedGroup2] = useState([]);
  const [selectedGroup3, setSelectedGroup3] = useState([]);
  const [selectedGroup4, setSelectedGroup4] = useState([]); // Change this to an array for multi-select

  // Options for the different checkbox groups
  const optionsGroup1 = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const optionsGroup2 = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const optionsGroup3 = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Fish", value: "fish" },
  ];

  // Define option group for the large checkbox
  const optionGroup4 = [{ label: "Yes", value: "Yes" }];

  return (
    <div className="pages-container">
      <section>
        <div className="text-block">Checkbox Prototypes</div>

        {/* Example Group 1 */}
        <h3 className="dark">Example Group 1</h3>
        <Checkbox
          label="Choose your options:"
          options={optionsGroup1}
          selectedValues={selectedGroup1}
          onChange={setSelectedGroup1}
        />
        <h4 className="dark">
          Selected: {selectedGroup1.join(", ") || "None"}
        </h4>

        {/* Example Group 2 */}
        <h3 className="dark">Example Group 2</h3>
        <Checkbox
          label="Select your favorite colors:"
          options={optionsGroup2}
          selectedValues={selectedGroup2}
          onChange={setSelectedGroup2}
        />
        <h4 className="dark">
          Selected: {selectedGroup2.join(", ") || "None"}
        </h4>

        {/* Example Group 3 */}
        <h3 className="dark">Example Group 3</h3>
        <Checkbox
          label="Select your pets:"
          options={optionsGroup3}
          selectedValues={selectedGroup3}
          onChange={setSelectedGroup3}
        />
        <h4 className="dark">
          Selected: {selectedGroup3.join(", ") || "None"}
        </h4>

        {/* Large Checkbox Example */}
        <h3 className="dark">Large Checkbox Example</h3>
        <Checkbox
          label="Do you agree?"
          options={optionGroup4}
          selectedValues={selectedGroup4}
          onChange={setSelectedGroup4} // Update the handler for the large checkbox
          isLarge // Indicate this is a large checkbox
        />
        <div className="text-block">
          {/* Show the selected value for optionGroup4 */}
          Selected:{" "}
          {selectedGroup4.length > 0 ? selectedGroup4.join(", ") : "No"}
        </div>
      </section>{" "}
    </div>
  );
};

export default CheckboxPrototype;
