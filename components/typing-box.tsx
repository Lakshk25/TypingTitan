"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

const sentence = "word is the best medicine"

const TypingBox = () => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("");
  const [color, setColor] = useState(true);
  const router = useRouter();
  const onChange = (event: any) => {
    const { value } = event.target;
    const written = sentence.slice(0, index + 1);
    if (value === written) {
      setIndex(prev => prev + 1);
      setColor(false);
    }
    else {
      setColor(true);
    }
    setWord(value);
  }

  const onClick = () => {
    window.location.reload();
  }
  return (
    <div>
      <div>{sentence}</div>
      <div className={cn("text-green-500", color && "text-red-500")}>{word}</div>
      <Input onChange={onChange} />
      <Button onClick={onClick}>Refresh</Button>
    </div>
  )
}

export default TypingBox