import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {`${step}`}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>Count : {`${count}`}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>{`${
          count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `
        } ${date.toDateString()}`}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
