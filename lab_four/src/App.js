import BitcoinRates from "./components/bitcoinRates/BitcoinRates";
import EmojiComponent from "./components/emojiComponents/EmojiComponent";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/nabBar/NavBar";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";

function App() {
  return (
    <div className="app">
      <main className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bitcoin" element={<BitcoinRates />} />
          <Route path="/emoji" element={<EmojiComponent />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
