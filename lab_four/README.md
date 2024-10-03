# Module 7 Lab 4

## Description

As required by the lab instructions, I have:

- Created an app with 3 different pages: Home, Login and Bitcoin Rates
- Used existing components to add content to each page
- Includeda navbar to navigate between pages

## Table of Contents

1. Installation
2. Technologies Used
3. Usage
4. Features
5. License

## Installation

1. Clone the repository:
   You have to clone the whole module and the navigate to the lab_four directory
2. Navigate to the project directory:
   from the root directory navigate to lab_four
3. Install dependencies:
   npm install

## Technologies Used

1. "@testing-library/jest-dom": "^5.17.0",
2. "@testing-library/react": "^13.4.0",
3. "@testing-library/user-event": "^13.5.0",
4. "react": "^18.3.1",
5. "react-dom": "^18.3.1",
6. "react-router-dom": "^6.26.2",
7. "react-scripts": "5.0.1",
8. "web-vitals": "^2.1.4"

## Usage

Upon cloning the repo and then navigating to lab_four directory, you'll have to run the frontend to view the website.
To run the frontend, in your terminl, navigate to **lab_four** and then run **npm start.**

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
