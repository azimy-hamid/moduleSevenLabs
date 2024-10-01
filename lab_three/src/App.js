import BitcoinRates from "./components/bitcoinRates/BitcoinRates";
import EmojiComponent from "./components/emojiComponents/EmojiComponent";
import {
  EmojiContext,
  EmojiProvider,
} from "./components/emojiComponents/emojiContext.js";

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <BitcoinRates />
        <EmojiComponent />
      </EmojiProvider>
    </div>
  );
}

export default App;
