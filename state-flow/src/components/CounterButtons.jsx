import React from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

const CounterButtons = (props) => {
  const incrementCounter = () => {
    props.setCount(props.count + props.step);
    props.setTotalClicks(props.totalClicks + 1);
  };
  const resetCounter = () => {
    props.setCount(0);
  };
  const decrementCounter = () => {
    props.setCount(props.count - props.step);
    props.setTotalClicks(props.totalClicks + 1);
  };
  return (
    <div className="flex gap-8 mb-6">
      <div className="flex-1 text-center ">
        <button
          onClick={decrementCounter}
          className="w-full h-20 bg-red-400 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          <Minus size={32} />
        </button>
        <p className="text-slate-400 mt-3">Decrease</p>
      </div>

      <div className="flex-1 text-center">
        <button
          onClick={resetCounter}
          className="w-full h-20 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
        >
          <RotateCcw size={28} />
        </button>
        <p className="text-slate-400 mt-3">Reset to 0</p>
      </div>
      <div className="flex-1 text-center ">
        <button
          onClick={incrementCounter}
          className="w-full h-20 bg-purple-500 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          <Plus width={32} />
        </button>
        <p className="text-slate-400 mt-3">Increase</p>
      </div>
    </div>
  );
};

export default CounterButtons;
