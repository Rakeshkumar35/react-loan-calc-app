Loan Calculator Web Application Documentation

Overview
The Loan Calculator Web Application is a responsive, single-page application built using React and Material UI. It provides users with the ability to calculate Equated Monthly Installments (EMIs) for loans, view live foreign exchange rates, and toggle between light and dark themes. The application is designed to be mobile-friendly, offering a smooth navigation experience across all device types.

Key Features

    Loan EMI Calculator: The app allows users to calculate monthly loan repayments based on the principal, interest rate, and loan tenure.

    Live Exchange Rates: Users can view real-time foreign currency exchange rates powered by a public API.

    Theme Toggle: A feature to switch between light and dark modes, providing a customizable user experience.

    Responsive Navigation: The navigation bar adjusts based on screen size, displaying in-line links on larger screens and a hamburger-style drawer on smaller devices.

    Client-Side Routing: Smooth transitions between pages without reloading the entire application, thanks to React Router.

Project Directory Structure
The project directory is organized as follows:

    public/: Contains static assets and the HTML template for the app.

    src/: The main application source code, where the React components and page logic reside.

        components/: Includes reusable UI components such as the navigation bar.

        pages/: Contains route-based components for different pages in the app (Loan Calculator, Exchange Rates, About, etc.).

        App.js: The root component of the application that handles routing and main page layouts.

        theme.js: Custom theme configurations for styling the app.

        index.js: The entry point for the React app.

    package.json: The project metadata and dependencies.

    README.md: This documentation file.

Installation & Setup
To run the Loan Calculator Web Application locally, follow these steps:

    Clone the repository from the hosting platform (e.g., GitHub).

    Navigate to the project directory using the terminal.

    Install the necessary dependencies by running the installation command (typically npm install).

    Start the development server by running the appropriate command (typically npm start).

    Open the application in a web browser by visiting the local server (usually http://localhost:3000).

Routing Overview
The application uses React Router to manage the client-side routing. The following pages are available:

    /: The Loan Calculator Page, where users can calculate EMIs.

    /exchange-rates: Displays real-time foreign exchange rates.

    /about: Provides information about the application and its features.

    /error: A page that is displayed for invalid routes or when an error occurs.

Responsive Design
The app is designed to be responsive:

    Desktop and Larger Screens: The navigation bar displays links in a row, ensuring a clear and organized layout.

    Smaller Screens (Mobile and Tablet): On smaller devices, the navigation bar collapses into a hamburger menu that opens a side drawer with navigation options, including the theme toggle.

Technical Stack
The project utilizes the following technologies and libraries:

    React (version 18+): A JavaScript library for building user interfaces, specifically designed for single-page applications.

    Material UI (version 5+): A UI framework that provides pre-designed components for rapid development of modern, responsive interfaces.

    React Router DOM: A library that enables routing and navigation within the React app without full page reloads.

    JavaScript (ES6): The modern version of JavaScript, utilizing features like arrow functions, promises, and async/await.

    CSS (via Material UI’s styling system): For styling the application and customizing component layouts.

External API
The app fetches real-time exchange rates from the following public API:

    ExchangeRate-API: Provides live foreign exchange data for various currencies. The API is free and easy to integrate.

Dependencies
Ensure that the following dependencies are installed to run the application:

    react

    react-dom

    react-router-dom

    @mui/material

    @emotion/react

    @emotion/styled

    @mui/icons-material

These dependencies can be installed using npm, which is the default package manager for JavaScript projects.

License
This project is intended for educational or demonstration purposes. It is free to modify and reuse for similar learning or prototype projects.

Contributing
Contributions are welcome! If you would like to contribute to the project, follow these steps:

    Fork the repository to create your own copy of the project.

    Create a new branch to work on your changes.

    Make the necessary changes, ensuring they align with the project structure and standards.

    Commit your changes with a descriptive message.

    Push your changes to your fork and create a pull request to merge them into the original repository.

Support
If you encounter any issues or need assistance with the project, please open an issue on the repository or contact the project maintainer for further support.
