import { ChangeEvent, FormEvent, useReducer } from "react";
import { useCounter, useText } from "../context/CounterContext";

export default function AnotherCounter() {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextChange, handleFormSubmit } = useText();

  return (
    <div className="flex flex-col gap-3 border border-black p-8">
      <h1
        className={`text-2xl font-semibold text-center text-${
          count > 2 ? "blue" : "yellow"
        }-700`}
      >
        Count is {count}
      </h1>
      <button
        className="border border-green-300 bg-green-300 px-6"
        onClick={increment}
      >
        Add
      </button>
      <button
        className="border border-red-300 bg-red-300 px-6"
        onClick={decrement}
      >
        Subtract
      </button>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center items-center"
      >
        <label htmlFor="demo-input">DEMO INPUT</label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          title="Input"
          id="demo-input"
          className="px-2 focus:bg-green-300 border-2 rounded border-green-500 focus:border-blue-300 outline-none"
        />
        <p className="w-full">{text}</p>
      </form>
    </div>
  );
}
