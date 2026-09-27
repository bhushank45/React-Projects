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
    props.setTotalClicks(props.totalClicks - 1);
  };
  return (
    <div>
      <div>
        <button onClick={decrementCounter}>
          <Minus />
        </button>
        <p>decrease</p>
      </div>

      <div>
        <button onClick={resetCounter}>
          <RotateCcw />
        </button>
        <p>Reset to 0</p>
      </div>
      <div>
        <button onClick={incrementCounter}>
          <Plus />
        </button>
        <p>Increase</p>
      </div>
    </div>
  );
};

export default CounterButtons;
