import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Purple
      light: "#d1c4e9",
      dark: "#4527a0",
    },
    secondary: {
      main: "#ff9800", // Orange
      light: "#ffb74d",
      dark: "#f57c00",
    },
    background: {
      default: "#f4f6f8", // Light grey background
      paper: "#ffffff", // White cards, paper, etc.
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none", // Disables uppercase text on buttons
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners for buttons
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;
