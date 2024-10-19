# Atoms

Atoms are the smallest building blocks in the Atomic Design methodology. These components are singular, self-contained, and cannot be broken down further. They serve as the foundation for building more complex components like Molecules and Organisms.

Each Atom focuses on a specific function and is designed to be highly reusable across the application. Below you'll find details about how Atoms are structured and used in this project.

## Characteristics

- **Basic Elements**: Atoms are the most elementary parts of the UI. Examples include buttons, inputs, icons, etc.
- **Reusability**: Atoms are designed to be used throughout the application in a variety of contexts.
- **Consistency**: They define the core styles (typography, colors, etc.) that are reused in more complex components, ensuring visual consistency.

## Examples of Atoms

| **Component**  | **Description**                                                                                                      |
|----------------|----------------------------------------------------------------------------------------------------------------------|
| **Button**     | A simple button that can be styled and reused throughout the app.                                                     |
| **Input**      | A basic text input field for capturing user data.                                                                    |
| **Checkbox**   | A standard checkbox component for boolean values.                                                                    |
| **Label**      | Text associated with form elements, ensuring accessibility.                                                          |
| **Icon**       | Small vector graphics (SVGs or icon fonts) used across the UI.                                                       |
| **Heading**    | Headings for different content sections, such as `<h1>` to `<h6>`.                                                   |
| **Paragraph**  | Basic text for body content, like articles or descriptions.                                                          |

## Folder Structure

The Atoms are organized in individual folders under the `Atoms` directory, making each component self-contained. Each folder typically contains:

- The React component (e.g., `Button.jsx`)
- Styles specific to the Atom (e.g., `Button.styles.css` or `Button.styles.js`)
- Unit tests (e.g., `Button.test.js`)

```bash
src/
 └── components/
     └── Atoms/
         ├── Button/
         │   ├── Button.jsx
         │   ├── Button.styles.css
         │   └── Button.test.js
         ├── Input/
         │   ├── Input.jsx
         │   ├── Input.styles.js
         │   └── Input.test.js
         └── Icon/
             ├── Icon.jsx
             ├── Icon.styles.js
             └── Icon.test.js
