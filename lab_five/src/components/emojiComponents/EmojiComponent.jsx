import React, { useContext } from "react";
import { EmojiContext } from "./emojiContext.js";
import { Box, Button, Typography, Card } from "@mui/material";

const EmojiComponent = () => {
  const { currentEmoji, mood, handleRandomEmoji } = useContext(EmojiContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card
        elevation={3}
        sx={{
          padding: 4,
          width: 380,
          height: 380,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          {currentEmoji}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRandomEmoji}
          sx={{ marginBottom: 2 }}
        >
          Change Mood Randomly
        </Button>
        <Typography variant="h6" color="textSecondary">
          Current mood: {mood}
        </Typography>
      </Card>
    </Box>
  );
};

export default EmojiComponent;
