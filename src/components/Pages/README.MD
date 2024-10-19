# Pages

Pages are the highest level of the Atomic Design methodology. They combine **Templates** with actual content and data to create fully functional, user-facing views. While **Templates** define the structure, **Pages** fill them with dynamic content, making them the final rendered product that users interact with.

Pages are where the UI comes to life, displaying a complete layout with data passed down from the backend or other sources.

## Characteristics

- **Complete Views**: Pages represent fully-rendered views that are shown to the user. They combine Templates with data to create the final output.
- **Data-Driven**: Pages typically pull in data from APIs or other services and use it to populate the structure defined by Templates.
- **Use of State/Props**: Pages manage the application state or receive props, which they pass down to child components, including Templates, Organisms, Molecules, and Atoms.
  
## Examples of Pages

| **Page**          | **Description**                                                                                                      |
|-------------------|----------------------------------------------------------------------------------------------------------------------|
| **Home Page**     | The main landing page of the app, populated with content such as banners, featured items, and a dynamic navigation bar. |
| **Login Page**    | A page that allows users to log in, containing form components for username and password.                             |
| **Dashboard Page**| A data-driven page that displays personalized information to logged-in users, including statistics, tasks, and settings.|
| **Article Page**  | A content-rich page for displaying an article or blog post, typically pulling content from a CMS or database.         |
| **Profile Page**  | A page where users can view and update their personal information.                                                    |

## Folder Structure

Each Page is stored in its own folder under the `Pages` directory. This directory contains the actual page component, along with any relevant styles, and may include specific logic for fetching or handling data.

```bash
src/
 └── pages/
     ├── HomePage/
     │   ├── HomePage.jsx
     │   ├── HomePage.styles.js
     │   └── HomePage.test.js
     ├── LoginPage/
     │   ├── LoginPage.jsx
     │   ├── LoginPage.styles.js
     │   └── LoginPage.test.js
     └── DashboardPage/
         ├── DashboardPage.jsx
         ├── DashboardPage.styles.js
         └── DashboardPage.test.js
