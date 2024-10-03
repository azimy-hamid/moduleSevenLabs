import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/bitcoin">
            Bitcoin
          </Button>
          <Button color="inherit" href="/emoji">
            Emoji
          </Button>
          <Button color="inherit" href="/login">
            Login
          </Button>

          <Button color="inherit" href="/postList">
            Post List
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
