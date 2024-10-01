import React, { useState } from "react";
import "./emojiComponents.css";

const emojiList = [
  { emoji: "😄", mood: "happy" },
  { emoji: "😡", mood: "angry" },
  { emoji: "😢", mood: "sad" },
  { emoji: "😎", mood: "cool" },
  { emoji: "😍", mood: "in love" },
  { emoji: "🤔", mood: "thoughtful" },
];

const EmojiComponent = () => {
  const [currentEmoji, setCurrentEmoji] = useState(emojiList[0].emoji);
  const [mood, setMood] = useState(emojiList[0].mood);

  const handleRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    const randomEmoji = emojiList[randomIndex];
    setCurrentEmoji(randomEmoji.emoji);
    setMood(randomEmoji.mood);
  };

  return (
    <div className="emoji-container container shadow">
      <h1 className="emoji-display">{currentEmoji}</h1>
      <button className="random-button" onClick={handleRandomEmoji}>
        Change Mood Randomly
      </button>
      <p className="mood-description">Current mood: {mood}</p>
    </div>
  );
};

export default EmojiComponent;
