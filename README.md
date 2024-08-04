# Invoice Form Application

## Overview

This project is an Invoice Form application built with React JS, TailwindCSS, TypeScript, `react-hook-form`, and `react-toastify`. The application allows users to create and manage invoices with real-time data updates and integrates with a GraphQL API for saving invoice data.

## Technology Stack

- **React JS**: Frontend framework
- **TailwindCSS**: Utility-first CSS framework for styling
- **TypeScript**: Superset of JavaScript adding static types
- **react-hook-form**: Library for handling form state and validation
- **react-toastify**: Library for displaying toast notifications

## Features

- **Invoice Form**: Create an invoice with sections for "Bill From," "Bill To," "Invoice Details," and "Items List."
- **Real-Time Data Display**: Updates the right-hand side of the page as the user fills out the form.
- **Reset Functionality**: Clears all form fields and real-time data display.
- **Save Functionality**: Sends a mutation to the GraphQL API to save the invoice data and displays a success message.
- **Responsive Design**: Ensures compatibility with different screen sizes, following the provided Figma design.

## Project Structure

- **`src/`**: Main source directory
  - **`assets/`**: Contains static assets like images and icons.
  - **`components/`**: Reusable components used throughout the application.
  - **`Data/`**: Default input values and select input values.
  - **`graphql/`**: GraphQL setup and mutation files.
  - **`invoice generator/`**: Contains `InvoiceGeneratorApp` and a `Section` folder with form, header, preview, etc.
  - **`types/`**: TypeScript types used in the project.
  - **`util/`**: Utility functions and helpers.

## API Endpoint

- **GraphQL API**: [https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql](https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql)

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   https://github.com/murtazakhan2595/invoice-generator.git
2. **Navigate to the Project Directory**:
    ```bash
    cd invoice-generator
3. **Install Dependencies**:
    ```bash
    npm install
4. **Start the Development Server:**:
    ```bash
    npm start
5. **Build for Production:**:
    ```bash
    npm run build


