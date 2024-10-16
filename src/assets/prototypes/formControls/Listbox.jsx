import React, { useState, useEffect } from "react";
import ListBox from "../../../components/Atoms/Listbox";

// Breadcrumb component defined within ListboxPrototype
const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map(({ label, value }, index) => (
        <span key={index} className="breadcrumb-item">
          {label}
          {index < items.length - 1 && (
            <span className="breadcrumb-separator"> / </span>
          )}
        </span>
      ))}
    </div>
  );
};

// ListboxPrototype component
const ListboxPrototype = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [fruitError, setFruitError] = useState("");

  const [selectedColor, setSelectedColor] = useState("");
  const [colorError, setColorError] = useState("");

  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  // State for breadcrumb items
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  // Effect to update breadcrumb based on selections
  useEffect(() => {
    const items = [];
    if (selectedFruit)
      items.push({ label: `Fruit: ${selectedFruit}`, value: selectedFruit });
    if (selectedColor)
      items.push({ label: `Color: ${selectedColor}`, value: selectedColor });
    if (selectedSize)
      items.push({ label: `Size: ${selectedSize}`, value: selectedSize });

    setBreadcrumbItems(items);
  }, [selectedFruit, selectedColor, selectedSize]);

  const handleFruitChange = (value) => {
    setSelectedFruit(value);
    setFruitError(value ? "" : "Please select a fruit");
  };

  const handleColorChange = (value) => {
    setSelectedColor(value);
    setColorError(value ? "" : "Please select a color");
  };

  const handleSizeChange = (value) => {
    setSelectedSize(value);
    setSizeError(value ? "" : "Please select a size");
  };

  return (
    <div className="pages-container">
      <section>
        <div className="text-block">Listbox Prototypes</div>

        {/* Breadcrumb Component */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="listbox-row">
          <ListBox
            label="Select Fruit"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Cherry", value: "cherry" },
              { label: "Date", value: "date" },
            ]}
            selectedValue={selectedFruit}
            onChange={handleFruitChange}
            error={fruitError}
          />

          <ListBox
            label="Select Color"
            options={[
              { label: "Red", value: "red" },
              { label: "Green", value: "green" },
              { label: "Blue", value: "blue" },
              { label: "Yellow", value: "yellow" },
            ]}
            selectedValue={selectedColor}
            onChange={handleColorChange}
            error={colorError}
          />

          <ListBox
            label="Select Size"
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
              { label: "Extra Large", value: "extra-large" },
            ]}
            selectedValue={selectedSize}
            onChange={handleSizeChange}
            error={sizeError}
          />
        </div>
      </section>{" "}
    </div>
  );
};

export default ListboxPrototype;
