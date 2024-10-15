import React, { useState } from 'react';

const MenuButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  z-index: 1000; // Increase z-index to ensure menu covers the viewport

  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // Make the menu slightly lower z-index than the button
`;

const MenuItem = a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
`;

function GradientFabButton({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MenuButton theme={theme} onClick={handleButtonClick}>
        {/* Add your icon or text here */}
      </MenuButton>
      {isMenuOpen && (
        <Menu>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </Menu>
      )}
    </div>
  );
}

export default GradientFabButton;