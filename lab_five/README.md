# Module 7 Lab 5

## Description

As required by the lab instructions, I have:

- Updated my solution for Exercise 4 to use MUI components for styling
- Used the AppBar for navigation and MUI form components for any form inputs
- Extension: Included the PostList component and style using MUI cards and grids
- Extension: Created a custom theme using createTheme

## Table of Contents

1. Installation
2. Technologies Used
3. Usage
4. Features
5. License

## Installation

1. Clone the repository:
   You have to clone the whole module and the navigate to the lab_five directory
2. Navigate to the project directory:
   from the root directory navigate to lab_five
3. Install dependencies:
   npm install

## Technologies Used

1. **@emotion/react**: "^11.13.3" - A library for writing CSS styles with JavaScript in React components.
2. **@emotion/styled**: "^11.13.0" - A styled component library built on Emotion, allowing for writing styles in a styled-components-like syntax.
3. **@mui/icons-material**: "^6.1.2" - A package providing Material-UI icons as React components.
4. **@mui/material**: "^6.1.2" - The core Material-UI library for React, providing ready-to-use UI components.
5. **@testing-library/jest-dom**: "^5.17.0" - Provides custom Jest matchers for asserting on DOM nodes in tests.
6. **@testing-library/react**: "^13.4.0" - The React bindings for Testing Library, making it easier to test React components.
7. **@testing-library/user-event**: "^13.5.0" - Simulates user interactions for more realistic testing in React.
8. **react**: "^18.3.1" - The core library for building user interfaces in React.
9. **react-dom**: "^18.3.1" - The React package for interacting with the DOM in web applications.
10. **react-router-dom**: "^6.26.2" - A library for handling routing and navigation in React single-page applications.
11. **react-scripts**: "5.0.1" - The scripts and configuration used by Create React App.
12. **web-vitals**: "^2.1.4" - A library for measuring key web performance metrics.

## Usage

Upon cloning the repo and then navigating to lab_five directory, you'll have to run the frontend to view the website.
To run the frontend, in your terminl, navigate to **lab_five** and then run **npm start.**

- This will run the frontend react website server on port 3000

## Important Note

### CORS Issue

When using the frontend for an extended period, you may encounter a **CORS** (Cross-Origin Resource Sharing) error, specifically:

### Cause

- This issue arises because the frontend makes requests to a server that does not permit cross-origin requests.

### Proposed Solution

To resolve this issue, you can create a **backend proxy** that adds the `Access-Control-Allow-Origin: *` header to the responses.

### Limitations

- Implementing a backend proxy was outside the scope of this lab, and thus, only the required functionalities were completed.
