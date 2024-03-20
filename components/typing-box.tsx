"use client";
import React, { useState } from "react";

const TypingTest = () => {
  const initialWords = ["work", "is", "the", "best", "medicine", "that", "can,", "reduce", "anxiety", "of", "workload", "sometimes"];
  const [words, setWords] = useState(initialWords);
  const [inputValue, setInputValue] = useState("");
  const [completedWords, setCompletedWords] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      const trimmedInputValue = inputValue.trim();
      if (trimmedInputValue === words[0]) {
        setCompletedWords((prevCompletedWords) => [...prevCompletedWords, words[0]]);
        setInputValue(""); // Clear the input field
        setWords((prevWords) => prevWords.slice(1)); // Remove the completed word
      }
    }
  };

  return (
    <div>
      <div className="text-3xl font-normal">
        {initialWords.map((word, index) => (
          <span
            key={index}
            style={{
              color: completedWords.includes(word) ? "green" : "black",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TypingTest;
