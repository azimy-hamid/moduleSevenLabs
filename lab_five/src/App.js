import BitcoinRates from "./components/bitcoinRates/BitcoinRates";
import EmojiComponent from "./components/emojiComponents/EmojiComponent";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/nabBar/NavBar";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import {
  EmojiContext,
  EmojiProvider,
} from "./components/emojiComponents/emojiContext.js";
import PostList from "./components/postList/PostList.jsx";

function App() {
  return (
    <div className="app">
      <EmojiProvider>
        <main className="content">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bitcoin" element={<BitcoinRates />} />
            <Route path="/emoji" element={<EmojiComponent />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/postList" element={<PostList />} />
          </Routes>
        </main>
      </EmojiProvider>
    </div>
  );
}

export default App;
