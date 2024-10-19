# Organisms

Organisms are relatively complex UI components in the Atomic Design methodology, made up of groups of Molecules and Atoms. Organisms form distinct sections of the user interface and often encapsulate entire functionalities or areas of the UI. They serve as the foundation for page layouts, organizing smaller components into cohesive structures that are still modular and reusable.

## Characteristics

- **Complex Components**: Organisms are more complex than Atoms and Molecules, often grouping multiple Molecules or Atoms into functional sections.
- **Contextual Behavior**: While Organisms are modular, they typically represent distinct sections of the UI and perform broader roles compared to Atoms or Molecules.
- **Reusability**: Just like Atoms and Molecules, Organisms are reusable across different pages or templates but are generally more specific in their purpose.

## Examples of Organisms

| **Component**  | **Description**                                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------------|
| **Header**     | A header component combining a logo, navigation bar, and search functionality. This component can be used site-wide.    |
| **Footer**     | A footer section that includes contact info, social links, and copyright details, composed of Molecules like buttons or links. |
| **Sidebar**    | A sidebar combining a menu, user profile links, and filters, used in different layouts to provide navigation and filtering options. |
| **Card Grid**  | A grid of cards, where each card is a Molecule, creating a section that displays a collection of content items.         |
| **Form Section**| A larger form section that includes multiple fields, labels, and buttons, providing a cohesive unit of user input elements. |

## Folder Structure

Each Organism lives in its own folder under the `Organisms` directory. The folder contains the React component file, styles, and tests for that specific Organism.

```bash
src/
 └── components/
     └── Organisms/
         ├── Header/
         │   ├── Header.jsx
         │   ├── Header.styles.js
         │   └── Header.test.js
         ├── Footer/
         │   ├── Footer.jsx
         │   ├── Footer.styles.css
         │   └── Footer.test.js
         └── Sidebar/
             ├── Sidebar.jsx
             ├── Sidebar.styles.js
             └── Sidebar.test.js
