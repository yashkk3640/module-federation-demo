import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-2xl">
      Counter Component from Remote Application
      <div className="bg-blue-900 text-white p-5">count : {counter}</div>
      <Button onClick={() => setCounter((c) => c + 1)}>+ Increment</Button>
      <Button onClick={() => setCounter((c) => c - 1)}>- Decrement</Button>
    </div>
  );
};

export default Counter;
