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
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Counter Dashboard</h1>

        <p className="text-slate-400 mt-2">
          A React useState project to practice components and props
        </p>
      </header>
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
