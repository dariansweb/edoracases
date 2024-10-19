# Molecules

Molecules are components in the Atomic Design methodology that consist of groups of Atoms working together. They represent slightly more complex components than Atoms, often combining multiple Atoms to form distinct UI functionalities. While still relatively simple, Molecules encapsulate a specific piece of functionality and are used as building blocks for more complex components, like Organisms.

## Characteristics

- **Combinations of Atoms**: Molecules are formed by combining two or more Atoms (e.g., a text input paired with a label).
- **Focused Functionality**: While they are more complex than Atoms, Molecules still serve a single, well-defined purpose in the UI.
- **Reusability**: Just like Atoms, Molecules are designed to be reused in different parts of the application, making development more efficient.

## Examples of Molecules

| **Component**   | **Description**                                                                                                         |
|-----------------|-------------------------------------------------------------------------------------------------------------------------|
| **Form Field**  | A combination of an input, label, and error message, grouped into a reusable form field component.                      |
| **Card**        | A card component containing an image, a title, and a button. It combines Atoms into a modular UI component.             |
| **Navbar**      | A navigation bar that combines logo, links, and dropdowns into a cohesive navigation component.                         |
| **Search Bar**  | A search bar consisting of an input field and a button, with clear and defined interaction between the elements.        |

## Folder Structure

Each Molecule is housed in its own folder under the `Molecules` directory. The folder contains the React component file, any relevant styles, and tests for the component.

```bash
src/
 └── components/
     └── Molecules/
         ├── FormField/
         │   ├── FormField.jsx
         │   ├── FormField.styles.js
         │   └── FormField.test.js
         ├── Card/
         │   ├── Card.jsx
         │   ├── Card.styles.css
         │   └── Card.test.js
         └── Navbar/
             ├── Navbar.jsx
             ├── Navbar.styles.js
             └── Navbar.test.js
