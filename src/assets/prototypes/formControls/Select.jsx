import React, { useState } from "react";
import Select from "../../../components/Atoms/Select";
import Breadcrumb from "../../../components/Atoms/Breadcrumb"; // Adjust the import path as needed

const SelectPrototype = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const handleFruitChange = (e) => setSelectedFruit(e.target.value);
  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleCountryChange = (e) => setSelectedCountry(e.target.value);
  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
  const handleVehicleChange = (e) => setSelectedVehicle(e.target.value);

  // Create an object with the current selections
  const selections = {
    Fruit: selectedFruit,
    Color: selectedColor,
    Size: selectedSize,
    Country: selectedCountry,
    Language: selectedLanguage,
    Vehicle: selectedVehicle,
  };

  return (
    <div className="pages-container">
      <section>
        <div className="text-block">Select Prototypes</div>

        <Breadcrumb selections={selections} />

        <div className="select-column">
          <Select
            label="Select Fruit"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Cherry", value: "cherry" },
              { label: "Date", value: "date" },
            ]}
            value={selectedFruit}
            onChange={handleFruitChange}
          />
          <Select
            label="Select Color"
            options={[
              { label: "Red", value: "red" },
              { label: "Green", value: "green" },
              { label: "Blue", value: "blue" },
              { label: "Yellow", value: "yellow" },
            ]}
            value={selectedColor}
            onChange={handleColorChange}
          />

          <Select
            label="Select Size"
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
              { label: "Extra Large", value: "extra-large" },
            ]}
            value={selectedSize}
            onChange={handleSizeChange}
          />

          <Select
            label="Select Country"
            options={[
              { label: "United States", value: "us" },
              { label: "Canada", value: "ca" },
              { label: "Mexico", value: "mx" },
              { label: "United Kingdom", value: "uk" },
            ]}
            value={selectedCountry}
            onChange={handleCountryChange}
          />

          <Select
            label="Select Language"
            options={[
              { label: "English", value: "en" },
              { label: "Spanish", value: "es" },
              { label: "French", value: "fr" },
              { label: "German", value: "de" },
            ]}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          />

          <Select
            label="Select Vehicle"
            options={[
              { label: "Car", value: "car" },
              { label: "Truck", value: "truck" },
              { label: "Motorcycle", value: "motorcycle" },
              { label: "Bicycle", value: "bicycle" },
            ]}
            value={selectedVehicle}
            onChange={handleVehicleChange}
          />
        </div>
      </section>
    </div>
  );
};

export default SelectPrototype;
