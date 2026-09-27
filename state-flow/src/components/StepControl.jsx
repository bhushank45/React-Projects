import { Minus, Plus } from "lucide-react";
import React from "react";

const StepControl = (props) => {
  const decrementStep = () => {
    props.setStep(props.step - 1);
  };
  const incrementStep = () => {
    props.setStep(props.step + 1);
  };
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Step Value</h2>
          <p className="text-sm text-slate-400 mt-1">
            Change the step for +/-{" "}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={decrementStep}
            className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors"
          >
            <Minus size={18} />
          </button>
          <span className="text-2xl font-bold min-w-8 text-center">
            {props.step}
          </span>
          <button onClick={incrementStep} className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors">
            <Plus size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepControl;
