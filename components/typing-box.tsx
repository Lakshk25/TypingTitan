"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const sentence = "work is the best medicine"

const TypingBox = () => {
  const [words, setWords] = useState(["work", "is", "the", "best", "medicine"]);
  const [inputValue, setInputValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
  }

  // this logic is used to remove space if input is empty and user click space
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      if (inputValue.trim() === words[currentIndex]) {
        // Remove the current word from the words array
        setWords((prevWords) => prevWords.slice(1));
        setInputValue(""); // Clear the input field
        setCurrentIndex((prevIndex) => prevIndex); // Move to the next word
      }
    }
  };

  const onClick = () => {
    window.location.reload();
  }
  return (
    <div>
      <div>
        {words.map((word, index) => (
          <span key={index} style={{ color: index === currentIndex ? "green" : "black" }}>
            {word}{" "}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TypingBox