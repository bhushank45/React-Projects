import { Minus, Plus } from 'lucide-react';
import React from 'react'

const StepControl = (props) => {
    const decrementStep = ()=>{
        props.setStep(props.step-1)
    }
    const incrementStep = () => {
      props.setStep(props.step + 1);
    };
  return (
    <div>
      <div>
        <h2>Step Value</h2>
        <p>Change the step for +/- </p>
      </div>
      <div>
        <button onClick={decrementStep}>
          <Minus />
        </button>
        <h2>{props.step}</h2>
        <button onClick={incrementStep}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default StepControl