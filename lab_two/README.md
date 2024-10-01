# Module 7 Lab 2

## Description

As required by the lab instructions, I have changed the BitcoinRates components of my lab one to use a cutom hook for fetching the data and also a useReducer instead of a useState in the frontend for changing the bitcoin rate based on which currency the user has chosen.

## Table of Contents

1. Installation
2. Technologies Used
3. Usage
4. Features
5. License

## Installation

1. Clone the repository:
   You have to clone the whole module and the navigate to the lab_two directory
2. Navigate to the project directory:
   from the root directory navigate to lab_two
3. Install dependencies:
   npm install

## Technologies Used

1. "@testing-library/jest-dom": "^5.17.0",
2. "@testing-library/react": "^13.4.0",
3. "@testing-library/user-event": "^13.5.0",
4. "react": "^18.3.1",
5. "react-dom": "^18.3.1",
6. "react-scripts": "5.0.1",
7. "web-vitals": "^2.1.4"

## Usage

Upon cloning the repo and then navigating to lab_two directory, you'll have to run the frontend to view the website.
To run the frontend, in your terminl, navigate to **lab_two** and then run **npm start.**

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
