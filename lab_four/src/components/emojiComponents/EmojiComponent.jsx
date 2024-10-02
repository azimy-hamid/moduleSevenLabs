import React, { useContext } from "react";
import { EmojiContext } from "./emojiContext.js";
import "./emojiComponents.css";

const EmojiComponent = () => {
  const { currentEmoji, mood, handleRandomEmoji } = useContext(EmojiContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="emoji-container container shadow">
        <h1 className="emoji-display">{currentEmoji}</h1>
        <button className="random-button" onClick={handleRandomEmoji}>
          Change Mood Randomly
        </button>
        <p className="mood-description">Current mood: {mood}</p>
      </div>
    </div>
  );
};

export default EmojiComponent;
