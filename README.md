# KlinikTraining - Frontend Application

## Description

This is the frontend application for KlinikTraining, a web application designed for managing clinic operations. It includes features for user authentication (login) and employee data management. The application is built with React and utilizes React Router for navigation and Bootstrap for styling.

## Features

-   **User Auth (Dummy):**
    -   Login page for users (Click Sign In if wanna go to /Employees ).
-   **Employee Management (`/employees`):**
    -   Display a list of employees.
    -   Filter employees by name and status.
    -   Add new employee data through a form.
    -   Edit existing employee data.
    -   Form validation using Yup.
-   **Responsive Layout:**
    -   Includes a sticky Navbar at the top.
    -   A collapsible Sidebar for navigation.

## Tech Stack

-   **React:** JavaScript library for building user interfaces.
-   **React Router DOM:** For declarative routing in the React application.
-   **Bootstrap 5:** CSS framework for styling and responsive design.
-   **Bootstrap Icons:** For iconography.
-   **Yup:** JavaScript schema builder for value parsing and validation (used in forms).
-   **JavaScript (ES6+):** Core programming language.

## Setup and Installation

1.  **Prerequisites:**

    -   Node.js
    -   npm

2.  **Clone the repository (if applicable):**

    ```bash
    git clone https://github.com/Bimoaryobkr/frontendKlinik
    cd <your-repository-directory>
    ```

3.  **Install Dependencies:**
    Navigate to the project directory and run:

    ```bash
    npm install
    ```

4.  **Environment Variables (if any):**
    If your application requires environment variables (e.g., for API base URLs), create a `.env` file in the root of the project and add them:

    ```env
    VITE_PUBLIC_API_URL=http://localhost:port
    ```

    _(Adjust variable names and values as needed for your setup.)_

    ## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in development mode with Vite's fast development server.
Open the URL provided in the terminal (usually [http://localhost:5173](http://localhost:5173) or similar) to view it in the browser.
The page will benefit from Hot Module Replacement (HMR) for fast updates.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder (by default with Vite).
It correctly bundles React in production mode and optimizes the build for the best performance.
