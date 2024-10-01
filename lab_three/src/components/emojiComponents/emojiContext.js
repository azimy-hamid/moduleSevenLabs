import React, { useState, createContext } from "react";

export const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const emojiList = [
    { emoji: "😄", mood: "happy" },
    { emoji: "😡", mood: "angry" },
    { emoji: "😢", mood: "sad" },
    { emoji: "😎", mood: "cool" },
    { emoji: "😍", mood: "in love" },
    { emoji: "🤔", mood: "thoughtful" },
  ];

  const [currentEmoji, setCurrentEmoji] = useState(emojiList[0].emoji);
  const [mood, setMood] = useState(emojiList[0].mood);

  const handleRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    const randomEmoji = emojiList[randomIndex];
    setCurrentEmoji(randomEmoji.emoji);
    setMood(randomEmoji.mood);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, mood, handleRandomEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
