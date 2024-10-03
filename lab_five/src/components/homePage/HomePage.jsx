import React from "react";
import { Box, Typography, Container } from "@mui/material";

function HomePage() {
  return (
    <Container sx={{ my: 4 }}>
      <Box>
        <Typography variant="h1" color="primary">
          This is the Home Page
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
