import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <HandleNext />
    </div>
  );
}

function HandleNext() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((s) => s - step)}>-</button>
        <span>Count: {counter}</span>
        <button onClick={() => setCounter((s) => s + step)}>+</button>
      </div>
      <span>
        {counter === 0
          ? "Today is "
          : counter < 0
          ? `${counter} days ago was `
          : `${Math.abs(counter)} days from today is `}
      </span>
      <span>{date.toDateString()} </span>
    </div>
  );
}

export default App;
