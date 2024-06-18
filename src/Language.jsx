import React from "react";
import { englishWords, mandarinWords } from "./LanguageData";

export default function Language() {
  const [number, setNumber] = React.useState(0);
  const englishWord = englishWords[number];
  const mandarinWord = mandarinWords[number];

  const leftButton = () =>
    setNumber((prevNumber) => {
      if (prevNumber <= 0) {
        return 0;
      } else {
        return prevNumber - 1;
      }
    });

  const RightButton = () =>
    setNumber((prevNumber) => {
      if (prevNumber >= 10) {
        return 10;
      } else {
        return prevNumber + 1;
      }
    });

  const englishVisibility = () =>
    setNumber((prevNumber) => {
      if (englishWords[prevNumber] === englishWord) {
        englishWord = "❓";
      } else {
        return prevNumber;
      }
    });

  return (
    <div className="language-content">
      <h1>Language practice-counting</h1>
      <div className="buttons">
        <button onClick={leftButton}>Left</button>
        <button onClick={RightButton}>Right</button>
        <button onClick={englishVisibility}>Show/hide English</button>
        <button>Show/hide Mandarin</button>
        <button>Random (English)</button>
        <button>Random (Mandarin)</button>
      </div>
      <div className="numbers">
        <p>{englishWord}</p>
        <p>{mandarinWord}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}
