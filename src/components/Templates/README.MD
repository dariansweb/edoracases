# Templates

Templates in the Atomic Design methodology provide the structure and layout for pages but do not include actual content. They define how Organisms, Molecules, and Atoms fit together in a grid or sectioned layout, serving as blueprints for the final pages. Templates are flexible and reusable across multiple pages, ensuring that the layout remains consistent while allowing different data to populate the content areas.

## Characteristics

- **Structure-Driven**: Templates focus on defining the layout and positioning of UI components but don’t contain the actual data or content.
- **Reusable Layouts**: Templates are used to establish consistent layouts across different pages. They can be reused with different content for similar page structures.
- **Content Placeholder**: While Templates define the structure, they do not fill in the content. Instead, content is passed down through Props or filled in at the Page level.

## Examples of Templates

| **Template**       | **Description**                                                                                                     |
|--------------------|---------------------------------------------------------------------------------------------------------------------|
| **Home Template**  | A template defining the layout for the homepage, organizing sections like a header, hero banner, and featured content. |
| **Dashboard Template** | A template for dashboard pages, typically including a sidebar, header, and main content area.                       |
| **Form Template**  | A template for forms, structuring how multiple form sections, labels, and input fields are organized.                |
| **Content Layout** | A layout template used for blog posts or article pages, defining how headers, text blocks, and images are arranged.  |

## Folder Structure

Each Template is stored in its own folder under the `Templates` directory. The folder contains the React component file, any associated styles, and tests for that particular Template.

```bash
src/
 └── components/
     └── Templates/
         ├── HomeTemplate/
         │   ├── HomeTemplate.jsx
         │   ├── HomeTemplate.styles.js
         │   └── HomeTemplate.test.js
         ├── DashboardTemplate/
         │   ├── DashboardTemplate.jsx
         │   ├── DashboardTemplate.styles.js
         │   └── DashboardTemplate.test.js
         └── FormTemplate/
             ├── FormTemplate.jsx
             ├── FormTemplate.styles.js
             └── FormTemplate.test.js
