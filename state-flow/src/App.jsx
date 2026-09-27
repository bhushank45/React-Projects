import React, { useState } from "react";
import Counter from "./components/Counter";
import CounterButtons from "./components/CounterButtons";
import StepControl from "./components/StepControl";
import Stats from "./components/Stats";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [totolClicks, setTotolClicks] = useState(0);

  return (
    <div>
      <Counter count={count} />
      <CounterButtons setCount={setCount} count={count} step={step} />
      <StepControl setStep={setStep} step={step} />
      <Stats totolClicks={totolClicks} count={count} />
    </div>
  );
};
export default App;
