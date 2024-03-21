"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const TypingTest = () => {
  const initialWords = ["work", "is", "the", "best", "medicine", "that", "can,", "reduce", "anxiety", "of", "workload", "sometimes"];
  const [words, setWords] = useState(initialWords);
  const [inputValue, setInputValue] = useState("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [incorrectWords, setIncorrectWords] = useState<string[]>([]);

  // for input 
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === " ") {
      // TODO: don't jump to next word if no word is typed and space is clicked 
      if(inputValue.length === 0){
        console.log("empty");
        return;
      }
      event.preventDefault(); // prevent space default behaviour (adding space)
      const trimmedInputValue = inputValue.trim();  // Remove leading and trailing whitespace from the input value
      if (trimmedInputValue === words[0]) {
        setCompletedWords((prevCompletedWords) => [...prevCompletedWords, words[0]]);
        setInputValue(""); // Clear the input field
      }
      else {
        setIncorrectWords((prevWords) => [...prevWords, words[0]]);
        setInputValue("");
      }
      setWords((prevWords) => prevWords.slice(1)); // Remove the completed word
    }
  };

  return (
    <div>
      <div className="text-3xl font-normal">
        {initialWords.map((word, index) => (
          <span
            key={index}
            className={cn(completedWords.includes(word) ? "text-green-500" : "text-black", incorrectWords.includes(word) && "text-red-500", words[0] === word && "bg-gray-400")}
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
