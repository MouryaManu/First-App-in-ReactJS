import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Smiling",
  "🤣": "LMAO",
  "😋": "Yummy",
  "🥱": "Boring",
  "😴": "Sleepy",
  "🤗": "Hug"
};
var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function changeinputHandler(event) {
    var emoji = event.target.value;
    var emojiMeaning = emojiDictionary[emoji];

    if (emojiMeaning === undefined) {
      emojiMeaning = "we don't have this in our database";
    }
    setmeaning(emojiMeaning);
  }
  function onclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside Outt </h1>
      <input onChange={changeinputHandler} />
      <h3> {meaning} </h3>
      <h3> Emojis we know </h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => onclickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "1.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
