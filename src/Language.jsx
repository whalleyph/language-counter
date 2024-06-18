import React from "react";
import { englishWords, mandarinWords } from "./LanguageData";

export default function Language() {
  const [number, setNumber] = React.useState(0);
  const [englishWord, setEnglishWord] = React.useState(true);
  const [mandarinWord, setMandarinWord] = React.useState(true);

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

  const englishVisibility = () => {
    englishWord ? setEnglishWord(false) : setEnglishWord(true);
  };

  const mandarinVisibility = () => {
    mandarinWord ? setMandarinWord(false) : setMandarinWord(true);
  };

  const randomEnglish = () => {
    const randomNumber = Math.floor(Math.random()*11)
    setNumber(randomNumber)
    setMandarinWord(false)
    setEnglishWord(true)
  }

  const randomMandarin = () => {
    const randomNumber = Math.floor(Math.random()*11)
    setNumber(randomNumber)
    setMandarinWord(true)
    setEnglishWord(false)
  }

  return (
    <div className="language-content">
      <h1>Language practice-counting</h1>
      <div className="buttons">
        <button onClick={leftButton}>Left</button>
        <button onClick={RightButton}>Right</button>
        <button onClick={englishVisibility}>Show/hide English</button>
        <button onClick={mandarinVisibility}>Show/hide Mandarin</button>
        <button onClick={randomEnglish}>Random (English)</button>
        <button onClick={randomMandarin}>Random (Mandarin)</button>
      </div>
      <div className="numbers">
        <p>{englishWord ? englishWords[number] : "❓"}</p>
        <p>{mandarinWord ? mandarinWords[number] : "❓"}</p>
        {/* Debug Number ↓ */}
        {/* <p>{number}</p> */}
      </div>
    </div>
  );
}
