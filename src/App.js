import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏁": "chequered flag",
  "🚩": "triangular flag",
  "🎌": "crossed flags",
  "🏴": "black flag",
  "🏳️": "white flag",
  "🏳️‍🌈": "rainbow flag"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    const userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(i) {
    var meaning = emojiDictionary[i];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>flag emoji interpreter</h1>
      <input onChange={emojiHandler} type="text" />
      <h2>{meaning}</h2>
      <h3>flags we know</h3>
      <h1>flag emoji interpreter</h1>
      <input onChange={emojiHandler} type="text" />
      <h2>{meaning}</h2>
      <h3>flags we know</h3>
      {emojis.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "3px" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
