import React, { useState } from "react";
import Counter from "./components/Counter";
import CounterButtons from "./components/CounterButtons";
import StepControl from "./components/StepControl";
import Stats from "./components/Stats";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [totalClicks, setTotalClicks] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <Counter count={count} />
        <CounterButtons
          setCount={setCount}
          count={count}
          step={step}
          totalClicks={totalClicks}
          setTotalClicks={setTotalClicks}
        />
        <StepControl setStep={setStep} step={step} />
        <Stats totolClicks={totalClicks} count={count} />
      </div>
    </div>
  );
};
export default App;
